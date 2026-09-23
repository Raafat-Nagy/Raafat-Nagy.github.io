export type ProjectCategory =
  | 'Computer Vision'
  | 'NLP / RAG'
  | 'Deep Learning'
  | 'Machine Learning'
  | 'Time Series';

export type ProjectLinkType = 'github' | 'demo' | 'live';

export interface ProjectLink {
  type: ProjectLinkType;
  url: string;
}

export interface Project {
  /** Project name as listed in the AI Projects Hub README. */
  title: string;
  /** One-line summary used on cards. */
  tagline: string;
  /** Short paragraph used for featured projects and cards. */
  description: string;
  category: ProjectCategory;
  technologies: string[];
  links: ProjectLink[];
  /** YouTube video id — used to build the demo thumbnail. */
  videoId?: string;
  /**
   * Set true only for videos VERIFIED to have a high-res (branded)
   * maxresdefault thumbnail. Those load maxresdefault -> hqdefault ->
   * mqdefault; other videos stay on hqdefault -> mqdefault so videos
   * without an HD variant never get YouTube's gray fallback image.
   */
  thumbMaxres?: boolean;
  /**
   * Optional local project image (real screenshot) stored in `public/`,
   * e.g. 'media/visionseek-ai.jpg'. Takes priority over the YouTube
   * thumbnail when present.
   */
  image?: string;
  /** Shown in the Featured section. */
  featured?: boolean;
}

export type ProjectFilter = 'All' | ProjectCategory;
