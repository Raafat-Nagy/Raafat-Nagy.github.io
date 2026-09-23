/**
 * Navigation smoke test (no browser binary available in CI sandbox).
 *
 * Re-implements nothing: it loads the real built bundles into jsdom, renders
 * each page, and drives the actual rendered DOM — clicking every nav entry
 * from every page and asserting href, scroll target and menu state.
 *
 * Run:  node scripts/nav-check.mjs
 */
import { readFileSync } from 'node:fs';
import { JSDOM, VirtualConsole } from 'jsdom';
import path from 'node:path';

let failures = 0;
let checks = 0;

function check(name, actual, expected) {
  checks += 1;
  const ok = actual === expected;
  if (!ok) failures += 1;
  console.log(`${ok ? '  PASS' : '  FAIL'}  ${name}${ok ? '' : `\n          expected: ${expected}\n          actual:   ${actual}`}`);
}

const HARNESS = path.resolve('scripts/.harness');

async function loadPage(urlPath, harnessFile) {
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', () => {});

  const dom = new JSDOM('<!doctype html><html class="dark"><body><div id="root"></div></body></html>', {
    url: `https://raafat-nagy.github.io${urlPath}`,
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    virtualConsole,
  });

  const { window } = dom;
  window.scrollTo = (opts) => { window.__scrolledTo = opts; };
  window.HTMLElement.prototype.scrollIntoView = function () { window.__scrolledInto = this.id; };
  window.matchMedia = window.matchMedia || (() => ({ matches: false, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} }));
  if (!window.requestAnimationFrame) window.requestAnimationFrame = (cb) => window.setTimeout(() => cb(performance.now()), 16);
  window.IntersectionObserver = window.IntersectionObserver || class { observe(){} unobserve(){} disconnect(){} };
  window.ResizeObserver = window.ResizeObserver || class { observe(){} unobserve(){} disconnect(){} };

  const script = window.document.createElement('script');
  script.textContent = readFileSync(path.join(HARNESS, harnessFile), 'utf8');
  window.document.body.appendChild(script);

  await new Promise((r) => setTimeout(r, 400));
  return window;
}

function navEntries(window, selector) {
  return [...window.document.querySelectorAll(selector)];
}

function clickAndInspect(window, anchor) {
  window.__scrolledTo = undefined;
  window.__scrolledInto = undefined;
  const event = new window.MouseEvent('click', { bubbles: true, cancelable: true });
  anchor.dispatchEvent(event);
  return {
    prevented: event.defaultPrevented,
    scrolledInto: window.__scrolledInto,
    scrolledTo: window.__scrolledTo,
  };
}

async function run() {
  // ---------------- Homepage ----------------
  console.log('\n/ (homepage) — desktop navbar');
  let window = await loadPage('/', 'main.js');
  let links = navEntries(window, 'nav[aria-label="Primary"] a');
  check('nav entry count (Home, About, Projects, Technologies, Contact)', links.length, 5);
  check('labels', links.map((a) => a.textContent.trim()).join(','), 'Home,About,Projects,Technologies,Contact');
  check('Home href', links[0].getAttribute('href'), '#top');
  check('About href', links[1].getAttribute('href'), '#about');
  check('Projects href', links[2].getAttribute('href'), '/projects/');
  check('Technologies href', links[3].getAttribute('href'), '#technologies');
  check('Contact href', links[4].getAttribute('href'), '#contact');

  for (const [i, id] of [[1, 'about'], [3, 'technologies'], [4, 'contact']]) {
    const r = clickAndInspect(window, links[i]);
    check(`click ${links[i].textContent.trim()} scrolls to #${id} (one click)`, r.scrolledInto, id);
  }
  const homeClick = clickAndInspect(window, links[0]);
  check('click Home scrolls to top', homeClick.scrolledInto ?? (homeClick.scrolledTo ? 'top:0' : undefined), 'top');
  const projClick = clickAndInspect(window, links[2]);
  check('click Projects does NOT preventDefault (real navigation)', projClick.prevented, false);
  clickAndInspect(window, links[1]);
  check('homepage URL keeps / path after #about click', window.location.pathname, '/');
  check('homepage URL hash after #about click', window.location.hash, '#about');
  clickAndInspect(window, links[0]);
  check('Home click clears the hash', window.location.hash, '');

  // sections exist to scroll to
  for (const id of ['top', 'about', 'technologies', 'contact', 'featured', 'education']) {
    check(`section #${id} exists on homepage`, Boolean(window.document.getElementById(id)), true);
  }

  // ---------------- Homepage mobile menu ----------------
  console.log('\n/ (homepage) — mobile menu');
  const burger = window.document.querySelector('button[aria-controls="mobile-nav"]');
  check('hamburger exists', Boolean(burger), true);
  burger.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
  await new Promise((r) => setTimeout(r, 350));
  check('menu open (aria-expanded)', burger.getAttribute('aria-expanded'), 'true');
  let mobileLinks = navEntries(window, 'nav[aria-label="Mobile"] a[href]').filter((a) => !a.href.startsWith('mailto') && !a.href.includes('github.com') && !a.href.includes('linkedin'));
  check('mobile nav entry count', mobileLinks.length, 5);
  check('mobile labels', mobileLinks.map((a) => a.textContent.trim()).join(','), 'Home,About,Projects,Technologies,Contact');

  const aboutMobile = mobileLinks[1];
  const rm = clickAndInspect(window, aboutMobile);
  check('mobile About preventDefault (handled in JS)', rm.prevented, true);
  await new Promise((r) => setTimeout(r, 400));
  check('mobile menu closed after click', burger.getAttribute('aria-expanded'), 'false');
  check('mobile About scrolled to #about after menu collapse', window.__scrolledInto, 'about');

  // ---------------- Projects page ----------------
  console.log('\n/projects/ — desktop navbar');
  window = await loadPage('/projects/', 'projects.js');
  links = navEntries(window, 'nav[aria-label="Primary"] a');
  check('nav entry count', links.length, 5);
  check('Home href -> homepage root', links[0].getAttribute('href'), '/');
  check('About href -> /#about', links[1].getAttribute('href'), '/#about');
  check('Projects href stays in-page anchor on /projects/ (no reload)', links[2].getAttribute('href'), '#projects');
  check('Technologies href -> /#technologies', links[3].getAttribute('href'), '/#technologies');
  check('Contact href -> /#contact', links[4].getAttribute('href'), '/#contact');
  const crossPage = clickAndInspect(window, links[1]);
  check('cross-page About click is a REAL navigation (not prevented)', crossPage.prevented, false);
  check('projects section exists', Boolean(window.document.getElementById('projects')), true);
  const selfProjects = clickAndInspect(window, links[2]);
  check('Projects on /projects/ is handled in JS (no page reload)', selfProjects.prevented, true);
  check('Projects on /projects/ scrolls to #projects', selfProjects.scrolledInto, 'projects');
  check('URL keeps /projects/ path after in-page click', window.location.pathname, '/projects/');
  check('URL hash after in-page Projects click', window.location.hash, '#projects');
  const homeFromProjects = clickAndInspect(window, links[0]);
  check('Home on /projects/ is a real navigation to /', homeFromProjects.prevented, false);

  console.log('\n/projects/ — mobile menu');
  const burger2 = window.document.querySelector('button[aria-controls="mobile-nav"]');
  burger2.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
  await new Promise((r) => setTimeout(r, 350));
  mobileLinks = navEntries(window, 'nav[aria-label="Mobile"] a[href]').filter((a) => !a.href.startsWith('mailto') && !a.href.includes('github.com') && !a.href.includes('linkedin'));
  check('mobile labels on /projects/', mobileLinks.map((a) => a.textContent.trim()).join(','), 'Home,About,Projects,Technologies,Contact');
  check('mobile Home -> /', mobileLinks[0].getAttribute('href'), '/');
  check('mobile Contact -> /#contact', mobileLinks[4].getAttribute('href'), '/#contact');
  check('mobile Projects stays in-page anchor on /projects/', mobileLinks[2].getAttribute('href'), '#projects');
  const mobileCross = clickAndInspect(window, mobileLinks[4]);
  check('mobile cross-page Contact navigates (not prevented)', mobileCross.prevented, false);
  await new Promise((r) => setTimeout(r, 400));
  check('mobile menu closed after cross-page click', burger2.getAttribute('aria-expanded'), 'false');

  // ---------------- Deep link: arriving at /#about ----------------
  console.log('\n/#about (arriving from another page — the "two clicks" bug)');
  window = await loadPage('/#about', 'main.js');
  await new Promise((r) => setTimeout(r, 600));
  check('auto-scrolled to #about on load (single click from /projects/)', window.__scrolledInto, 'about');

  console.log('\n/#technologies');
  window = await loadPage('/#technologies', 'main.js');
  await new Promise((r) => setTimeout(r, 600));
  check('auto-scrolled to #technologies on load', window.__scrolledInto, 'technologies');

  console.log('\n/#contact');
  window = await loadPage('/#contact', 'main.js');
  await new Promise((r) => setTimeout(r, 600));
  check('auto-scrolled to #contact on load', window.__scrolledInto, 'contact');

  // ---------------- CV page ----------------
  console.log('\n/cv/ — standalone viewer');
  window = await loadPage('/cv/', 'cv.js');
  check('no navbar on /cv/ (by design)', window.document.querySelector('nav[aria-label="Primary"]'), null);
  check('CV iframe present', Boolean(window.document.querySelector('iframe')), true);
  check('CV close button present', Boolean(window.document.querySelector('button[aria-label="Close CV viewer"]')), true);

  // ---------------- Reduced motion ----------------
  console.log('\nprefers-reduced-motion');
  window = await loadPage('/', 'main.js');
  window.matchMedia = (q) => ({ matches: /reduce/.test(q), media: q, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} });
  let captured;
  window.HTMLElement.prototype.scrollIntoView = function (opts) { captured = opts; window.__scrolledInto = this.id; };
  links = navEntries(window, 'nav[aria-label="Primary"] a');
  clickAndInspect(window, links[1]);
  check('scripted scroll uses behavior:auto under reduced motion', captured && captured.behavior, 'auto');

  console.log(`\n${failures === 0 ? 'ALL CHECKS PASSED' : `${failures} FAILED`} — ${checks - failures}/${checks}`);
  process.exit(failures === 0 ? 0 : 1);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
