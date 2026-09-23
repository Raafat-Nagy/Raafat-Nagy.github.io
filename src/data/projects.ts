import type { Project, ProjectCategory, ProjectFilter } from '../types/project';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Computer Vision',
  'NLP / RAG',
  'Deep Learning',
  'Machine Learning',
  'Time Series',
];

export const PROJECT_FILTERS: ProjectFilter[] = ['All', ...PROJECT_CATEGORIES];

/** All deep-learning projects live in one shared repository. */
const DEEP_LEARNING_REPO = 'https://github.com/Raafat-Nagy/Deep-Learning-Projects';

/**
 * Every project below is extracted from the AI Projects Hub README:
 * https://github.com/Raafat-Nagy/AI-Projects-Hub
 */
export const projects: Project[] = [
  // ------------------------------------------------------------------
  // Computer Vision
  // ------------------------------------------------------------------
  {
    title: 'Vision Chat',
    tagline: 'Local vision-language AI with conversation memory',
    description:
      'Vision chat assistant that keeps conversation context — upload an image once, ask follow-up questions, all with fully local inference.',
    category: 'Computer Vision',
    technologies: ['llama.cpp', 'LangChain', 'Chainlit', 'Python'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/Vision-Chat' },
      { type: 'demo', url: 'https://youtu.be/rjfEHkhLEhU' },
    ],
    image: 'media/vision-chat.jpg',
    videoId: 'rjfEHkhLEhU',
    thumbMaxres: true,
    featured: true,
  },
  {
    title: 'VisionSeek AI',
    tagline: 'Semantic image retrieval for custom datasets',
    description:
      'Semantic image retrieval with text, image and hybrid search — SigLIP embeddings indexed in FAISS, served via FastAPI with a React UI.',
    category: 'Computer Vision',
    technologies: ['SigLIP', 'FAISS', 'FastAPI', 'React', 'Python'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/VisionSeek-AI' },
      { type: 'demo', url: 'https://youtu.be/ZqEm67eRX3g' },
    ],
    videoId: 'ZqEm67eRX3g',
    thumbMaxres: true,
    featured: true,
  },
  {
    title: 'Background Removal Studio',
    tagline: 'AI-powered background removal studio',
    description:
      'High-quality background removal powered by BiRefNet — transparent PNGs, background replacement, GPU acceleration and Docker support.',
    category: 'Computer Vision',
    technologies: ['BiRefNet', 'PyTorch', 'FastAPI', 'Docker', 'Python'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/Background-Removal-Studio' },
      { type: 'demo', url: 'https://youtu.be/O9JE4Gl0QDs' },
    ],
    videoId: 'O9JE4Gl0QDs',
    thumbMaxres: true,
    featured: true,
  },
  {
    title: 'Vehicle Detection, Tracking, Counting & Speed Estimation',
    tagline: 'Real-time traffic monitoring system',
    description:
      'Real-time traffic monitoring with YOLO + ByteTrack — detects, tracks and counts vehicles and estimates speed via perspective transformation.',
    category: 'Computer Vision',
    technologies: ['YOLO', 'ByteTrack', 'OpenCV', 'Python'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/Raafat-Nagy/Vehicle-Speed-Estimation-and-Counting-YOLO-Supervision',
      },
      { type: 'demo', url: 'https://youtu.be/1HSTwBKCELk' },
    ],
    videoId: '1HSTwBKCELk',
    thumbMaxres: true,
    featured: true,
  },
  {
    title: 'YOLO Object Detection App',
    tagline: 'Real-time object detection web app',
    description:
      'Real-time object detection web app — drag & drop uploads, multiple model options, smart video streaming and async processing.',
    category: 'Computer Vision',
    technologies: ['YOLO', 'FastAPI', 'JavaScript', 'OpenCV'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/YOLO-Object-Detection-App' },
      { type: 'demo', url: 'https://youtu.be/ONM9z99RVaU' },
    ],
    videoId: 'ONM9z99RVaU',
    thumbMaxres: true,
  },
  {
    title: 'Smart Face Attendance System',
    tagline: 'Automated face-recognition attendance',
    description:
      'Real-time face-recognition attendance via webcam, with automatic CSV logging and optional API sync.',
    category: 'Computer Vision',
    technologies: ['OpenCV', 'face_recognition', 'Python'],
    links: [{ type: 'github', url: 'https://github.com/Raafat-Nagy/SmartFace_Attendance_System' }],
  },
  {
    title: 'Student Entry & Exit Tracking',
    tagline: 'Zone-based people flow tracking',
    description:
      'Counts students entering and exiting halls with zone-based direction detection, CSV logging and API reporting.',
    category: 'Computer Vision',
    technologies: ['YOLO', 'OpenCV', 'Shapely', 'Python'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/Raafat-Nagy/Real_Time_Student_Entry_and_Exit_Tracking_via_Computer_Vision',
      },
    ],
  },
  {
    title: 'Facial Landmark & Drowsiness Detection',
    tagline: 'Real-time fatigue monitoring',
    description:
      'Real-time drowsiness monitoring using facial landmarks and the EAR method — accurate fatigue alerts for driver and workplace safety.',
    category: 'Computer Vision',
    technologies: ['OpenCV', 'dlib', 'Python'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/Facial-Landmark-and-Drowsiness-Detection' },
      { type: 'demo', url: 'https://youtu.be/aCKkCBUu3DM' },
    ],
    videoId: 'aCKkCBUu3DM',
    thumbMaxres: true,
  },
  {
    title: 'Object Detection Telegram Bot',
    tagline: 'Object detection as a chat bot',
    description:
      'Telegram bot that runs object detection on your photos and replies with annotated images and detection summaries.',
    category: 'Computer Vision',
    technologies: ['OpenCV', 'python-telegram-bot', 'Python'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/Object-Detection-Telegram-Bot' },
      { type: 'demo', url: 'https://youtu.be/0K8c3HZsd2U' },
    ],
    videoId: '0K8c3HZsd2U',
    thumbMaxres: true,
  },

  // ------------------------------------------------------------------
  // NLP / RAG
  // ------------------------------------------------------------------
  {
    title: 'End-to-End RAG Assistant',
    tagline: 'Chat with any PDF using retrieval-augmented generation',
    description:
      'Chat with PDF documents in natural language — LangChain + FAISS retrieval with a Groq LLM, behind a FastAPI web app.',
    category: 'NLP / RAG',
    technologies: ['LangChain', 'FAISS', 'HuggingFace', 'Groq', 'FastAPI'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/End-to-End-RAG-Assistant' },
      { type: 'demo', url: 'https://youtu.be/BU5qdgPPQN0' },
    ],
    videoId: 'BU5qdgPPQN0',
    thumbMaxres: true,
    featured: true,
  },

  // ------------------------------------------------------------------
  // Deep Learning (all in the shared Deep Learning Projects repository)
  // ------------------------------------------------------------------
  {
    title: 'Brain Tumor MRI Classification',
    tagline: 'Medical image classification with transfer learning',
    description:
      'Detects brain tumors in MRI scans with ResNet50V2 transfer learning and data augmentation.',
    category: 'Deep Learning',
    technologies: ['TensorFlow', 'ResNet50V2', 'Transfer Learning'],
    links: [{ type: 'github', url: DEEP_LEARNING_REPO }],
  },
  {
    title: 'Oral Diseases Classification',
    tagline: 'Multi-class oral disease diagnosis',
    description:
      'Classifies six oral diseases with a fine-tuned ResNet50V2, preprocessing and augmentation.',
    category: 'Deep Learning',
    technologies: ['TensorFlow', 'ResNet50V2', 'Fine-tuning'],
    links: [{ type: 'github', url: DEEP_LEARNING_REPO }],
  },
  {
    title: 'Plant Disease Detection',
    tagline: 'CNN classifier for 38 plant disease categories',
    description:
      'Custom CNN classifying 38 plant disease categories with high validation accuracy.',
    category: 'Deep Learning',
    technologies: ['TensorFlow', 'Keras', 'CNN'],
    links: [{ type: 'github', url: DEEP_LEARNING_REPO }],
  },
  {
    title: 'MNIST Handwritten Digit Classification',
    tagline: 'Classic digit recognition, done right',
    description:
      'CNN for handwritten digit classification with augmentation, early stopping and learning-rate scheduling.',
    category: 'Deep Learning',
    technologies: ['TensorFlow', 'CNN', 'Data Augmentation'],
    links: [{ type: 'github', url: DEEP_LEARNING_REPO }],
  },
  {
    title: 'Autoencoder Projects on MNIST',
    tagline: 'Image compression and denoising',
    description:
      'Simple, convolutional and denoising autoencoders for image compression and noise removal.',
    category: 'Deep Learning',
    technologies: ['TensorFlow', 'Autoencoders', 'Keras'],
    links: [{ type: 'github', url: DEEP_LEARNING_REPO }],
  },

  // ------------------------------------------------------------------
  // Machine Learning
  // ------------------------------------------------------------------
  {
    title: 'Machine Learning From Scratch',
    tagline: 'Fundamental algorithms implemented from first principles',
    description:
      'Core algorithms — regression, SVM, decision trees, KNN, clustering and PCA — implemented from scratch in Python.',
    category: 'Machine Learning',
    technologies: ['Python', 'Supervised Learning', 'Unsupervised Learning'],
    links: [{ type: 'github', url: 'https://github.com/Raafat-Nagy/Machine-Learning-From-Scratch' }],
  },
  {
    title: 'Diabetes Prediction Project',
    tagline: 'Health-risk prediction with a deployed app',
    description:
      'Diabetes risk prediction on patient health data with scikit-learn, deployed as an interactive Streamlit app.',
    category: 'Machine Learning',
    technologies: ['scikit-learn', 'Streamlit', 'Python'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/Diabetes_Prediction_Project' },
      { type: 'live', url: 'https://diabetes-prediction--project.streamlit.app/' },
    ],
  },
  {
    title: 'Iris Flower Species Prediction',
    tagline: 'SVM classifier with an interactive app',
    description:
      'SVM classifier for Iris species from petal and sepal measurements, delivered as an interactive Streamlit app.',
    category: 'Machine Learning',
    technologies: ['SVM', 'Streamlit', 'Python'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/IRIS-Project' },
      { type: 'live', url: 'https://iris-flowers-prediction.streamlit.app/' },
    ],
  },

  // ------------------------------------------------------------------
  // Time Series
  // ------------------------------------------------------------------
  {
    title: 'Bitcoin Price Forecasting System',
    tagline: 'End-to-end crypto price forecasting dashboard',
    description:
      'Bitcoin price forecasting comparing Prophet, ARIMA and Auto-ARIMA, with backtesting and uncertainty analysis in an interactive Streamlit dashboard.',
    category: 'Time Series',
    technologies: ['Prophet', 'ARIMA', 'Streamlit', 'Python'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/Bitcoin-Forecasting-App' },
      { type: 'live', url: 'https://bitcoin-forecasting-app.streamlit.app' },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectsByFilter(filter: ProjectFilter): Project[] {
  return filter === 'All' ? projects : projects.filter((project) => project.category === filter);
}

export function getProjectCounts(): Record<ProjectFilter, number> {
  const counts = Object.fromEntries(PROJECT_FILTERS.map((filter) => [filter, 0])) as Record<
    ProjectFilter,
    number
  >;
  counts.All = projects.length;
  for (const project of projects) counts[project.category] += 1;
  return counts;
}
