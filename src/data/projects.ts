import type {
    Project,
    ProjectCategory,
    ProjectFilter,
    ProjectInput,
} from '../types/project';
import { youtubeIdFromUrl } from '../utils/youtube';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
    'Computer Vision',
    'LLM / Agents',
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
const projectInputs: ProjectInput[] = [
    // ------------------------------------------------------------------
    // Computer Vision
    // ------------------------------------------------------------------
    {
        title: 'Restaurant Analysis',
        tagline: 'Seated guest counting and table occupancy tracking',
        description:
            'Analyzes restaurant video to estimate seated guests and table occupancy. YOLO26 Pose detects people frame by frame, standing people are filtered out, counts are stabilized per table, and occupancy sessions are stored in SQLite. Processed video is streamed as MJPEG with an on-video dashboard.',
        categories: ['Computer Vision'],
        technologies: [
            'YOLO26 Pose',
            'OpenCV',
            'Supervision',
            'FastAPI',
            'SQLite',
            'Python',
        ],
        links: [
            {
                type: 'github',
                url: 'https://github.com/Raafat-Nagy/Restaurant-Analysis',
            },
            { type: 'demo', url: 'https://youtu.be/iWFZjKku5C4' },
        ],
        thumbMaxres: true,
    },
    {
        title: 'Vision Chat',
        tagline: 'Local vision-language AI with conversation memory',
        description:
            'Vision chat assistant that keeps conversation context — upload an image once, ask follow-up questions, all with fully local inference.',
        categories: ['Computer Vision'],
        technologies: ['llama.cpp', 'LangChain', 'Chainlit', 'Python'],
        links: [
            { type: 'github', url: 'https://github.com/Raafat-Nagy/Vision-Chat' },
            { type: 'demo', url: 'https://youtu.be/rjfEHkhLEhU' },
        ],
        image: 'media/vision-chat.jpg',
        thumbMaxres: true,
        featured: true,
    },
    {
        title: 'VisionSeek AI',
        tagline: 'Semantic image retrieval for custom datasets',
        description:
            'Semantic image retrieval with text, image and hybrid search — SigLIP embeddings indexed in FAISS, served via FastAPI with a React UI.',
        categories: ['Computer Vision', 'LLM / Agents'],
        technologies: ['SigLIP', 'FAISS', 'FastAPI', 'React', 'Python'],
        links: [
            { type: 'github', url: 'https://github.com/Raafat-Nagy/VisionSeek-AI' },
            { type: 'demo', url: 'https://youtu.be/ZqEm67eRX3g' },
        ],
        thumbMaxres: true,
        featured: true,
    },
    {
        title: 'Background Removal Studio',
        tagline: 'AI-powered background removal studio',
        description:
            'High-quality background removal powered by BiRefNet — transparent PNGs, background replacement, GPU acceleration and Docker support.',
        categories: ['Computer Vision'],
        technologies: ['BiRefNet', 'PyTorch', 'FastAPI', 'Docker', 'Python'],
        links: [
            {
                type: 'github',
                url: 'https://github.com/Raafat-Nagy/Background-Removal-Studio',
            },
            { type: 'demo', url: 'https://youtu.be/O9JE4Gl0QDs' },
        ],
        thumbMaxres: true,
        featured: true,
    },
    {
        title: 'Vehicle Detection, Tracking, Counting & Speed Estimation',
        tagline: 'Real-time traffic monitoring system',
        description:
            'Real-time traffic monitoring with YOLO + ByteTrack — detects, tracks and counts vehicles and estimates speed via perspective transformation.',
        categories: ['Computer Vision'],
        technologies: ['YOLO', 'ByteTrack', 'OpenCV', 'Python'],
        links: [
            {
                type: 'github',
                url: 'https://github.com/Raafat-Nagy/Vehicle-Speed-Estimation-and-Counting-YOLO-Supervision',
            },
            { type: 'demo', url: 'https://youtu.be/1HSTwBKCELk' },
        ],
        thumbMaxres: true,
        featured: true,
    },
    {
        title: 'YOLO Object Detection App',
        tagline: 'Real-time object detection web app',
        description:
            'Real-time object detection web app — drag & drop uploads, multiple model options, smart video streaming and async processing.',
        categories: ['Computer Vision'],
        technologies: ['YOLO', 'FastAPI', 'JavaScript', 'OpenCV'],
        links: [
            {
                type: 'github',
                url: 'https://github.com/Raafat-Nagy/YOLO-Object-Detection-App',
            },
            { type: 'demo', url: 'https://youtu.be/ONM9z99RVaU' },
        ],
        thumbMaxres: true,
    },
    {
        title: 'Smart Face Attendance System',
        tagline: 'Automated face-recognition attendance',
        description:
            'Real-time face-recognition attendance via webcam, with automatic CSV logging and optional API sync.',
        categories: ['Computer Vision'],
        technologies: ['OpenCV', 'face_recognition', 'Python'],
        links: [
            {
                type: 'github',
                url: 'https://github.com/Raafat-Nagy/SmartFace_Attendance_System',
            },
        ],
    },
    {
        title: 'Student Entry & Exit Tracking',
        tagline: 'Zone-based people flow tracking',
        description:
            'Counts students entering and exiting halls with zone-based direction detection, CSV logging and API reporting.',
        categories: ['Computer Vision'],
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
        categories: ['Computer Vision'],
        technologies: ['OpenCV', 'dlib', 'Python'],
        links: [
            {
                type: 'github',
                url: 'https://github.com/Raafat-Nagy/Facial-Landmark-and-Drowsiness-Detection',
            },
            { type: 'demo', url: 'https://youtu.be/aCKkCBUu3DM' },
        ],
        thumbMaxres: true,
    },
    {
        title: 'Object Detection Telegram Bot',
        tagline: 'Object detection as a chat bot',
        description:
            'Telegram bot that runs object detection on your photos and replies with annotated images and detection summaries.',
        categories: ['Computer Vision'],
        technologies: ['OpenCV', 'python-telegram-bot', 'Python'],
        links: [
            {
                type: 'github',
                url: 'https://github.com/Raafat-Nagy/Object-Detection-Telegram-Bot',
            },
            { type: 'demo', url: 'https://youtu.be/0K8c3HZsd2U' },
        ],
        thumbMaxres: true,
    },
    {
        title: 'Parking Management System',
        tagline: 'Real-time parking space occupancy monitoring',
        description:
            'Computer-vision parking occupancy monitor. YOLO26 detects vehicles via ONNX Runtime, checks detections against configurable parking-space polygons, stabilizes occupancy states to reduce flicker, and streams an annotated view with free, occupied, and total slot counts over Flask MJPEG.',
        categories: ['Computer Vision'],
        technologies: [
            'YOLO26',
            'ONNX Runtime',
            'OpenCV',
            'Supervision',
            'Flask',
            'NumPy',
            'Python',
        ],
        links: [{ type: 'demo', url: 'https://www.youtube.com/watch?v=NSVfZkTG77o' }],
        thumbMaxres: true,
    },

    // ------------------------------------------------------------------
    // LLM / Agents
    // ------------------------------------------------------------------
    {
        title: 'llama.cpp Workbench',
        tagline: 'Reusable local LLM environment with MCP tool calling',
        description:
            'Reusable local LLM environment built on llama.cpp - GGUF inference with MCP tool calling through custom FastMCP tools, Tavily web search and a sandboxed filesystem, with model and server configs swappable independently.',
        categories: ['LLM / Agents'],
        technologies: ['llama.cpp', 'MCP', 'FastMCP', 'Tavily', 'Python'],
        links: [
            {
                type: 'github',
                url: 'https://github.com/Raafat-Nagy/llama.cpp-workbench',
            },
            { type: 'demo', url: 'https://youtu.be/_lvCz2y2v5A' },
        ],
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
        categories: ['NLP / RAG'],
        technologies: ['LangChain', 'FAISS', 'HuggingFace', 'Groq', 'FastAPI'],
        links: [
            {
                type: 'github',
                url: 'https://github.com/Raafat-Nagy/End-to-End-RAG-Assistant',
            },
            { type: 'demo', url: 'https://youtu.be/BU5qdgPPQN0' },
        ],
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
        categories: ['Deep Learning'],
        technologies: ['TensorFlow', 'ResNet50V2', 'Transfer Learning'],
        links: [{ type: 'github', url: DEEP_LEARNING_REPO }],
    },
    {
        title: 'Oral Diseases Classification',
        tagline: 'Multi-class oral disease diagnosis',
        description:
            'Classifies six oral diseases with a fine-tuned ResNet50V2, preprocessing and augmentation.',
        categories: ['Deep Learning'],
        technologies: ['TensorFlow', 'ResNet50V2', 'Fine-tuning'],
        links: [{ type: 'github', url: DEEP_LEARNING_REPO }],
    },
    {
        title: 'Plant Disease Detection',
        tagline: 'CNN classifier for 38 plant disease categories',
        description:
            'Custom CNN classifying 38 plant disease categories with high validation accuracy.',
        categories: ['Deep Learning'],
        technologies: ['TensorFlow', 'Keras', 'CNN'],
        links: [{ type: 'github', url: DEEP_LEARNING_REPO }],
    },
    {
        title: 'MNIST Handwritten Digit Classification',
        tagline: 'Classic digit recognition, done right',
        description:
            'CNN for handwritten digit classification with augmentation, early stopping and learning-rate scheduling.',
        categories: ['Deep Learning'],
        technologies: ['TensorFlow', 'CNN', 'Data Augmentation'],
        links: [{ type: 'github', url: DEEP_LEARNING_REPO }],
    },
    {
        title: 'Autoencoder Projects on MNIST',
        tagline: 'Image compression and denoising',
        description:
            'Simple, convolutional and denoising autoencoders for image compression and noise removal.',
        categories: ['Deep Learning'],
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
        categories: ['Machine Learning'],
        technologies: ['Python', 'Supervised Learning', 'Unsupervised Learning'],
        links: [
            {
                type: 'github',
                url: 'https://github.com/Raafat-Nagy/Machine-Learning-From-Scratch',
            },
        ],
    },
    {
        title: 'Diabetes Prediction Project',
        tagline: 'Health-risk prediction with a deployed app',
        description:
            'Diabetes risk prediction on patient health data with scikit-learn, deployed as an interactive Streamlit app.',
        categories: ['Machine Learning'],
        technologies: ['scikit-learn', 'Streamlit', 'Python'],
        links: [
            {
                type: 'github',
                url: 'https://github.com/Raafat-Nagy/Diabetes_Prediction_Project',
            },
            {
                type: 'live',
                url: 'https://diabetes-prediction--project.streamlit.app/',
            },
        ],
    },
    {
        title: 'Iris Flower Species Prediction',
        tagline: 'SVM classifier with an interactive app',
        description:
            'SVM classifier for Iris species from petal and sepal measurements, delivered as an interactive Streamlit app.',
        categories: ['Machine Learning'],
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
        categories: ['Time Series'],
        technologies: ['Prophet', 'ARIMA', 'Streamlit', 'Python'],
        links: [
            {
                type: 'github',
                url: 'https://github.com/Raafat-Nagy/Bitcoin-Forecasting-App',
            },
            { type: 'live', url: 'https://bitcoin-forecasting-app.streamlit.app' },
        ],
    },
];

/** Adds `videoId` from the first YouTube demo link, so it is written only once. */
function withVideoId(input: ProjectInput): Project {
    const demo = input.links.find((link) => link.type === 'demo');
    const videoId = demo ? youtubeIdFromUrl(demo.url) : undefined;
    return videoId ? { ...input, videoId } : { ...input };
}

export const projects: Project[] = projectInputs.map(withVideoId);

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectsByFilter(filter: ProjectFilter): Project[] {
    return filter === 'All'
        ? projects
        : projects.filter((project) => project.categories.includes(filter));
}

export function getProjectCounts(): Record<ProjectFilter, number> {
    const counts = Object.fromEntries(
        PROJECT_FILTERS.map((filter) => [filter, 0])
    ) as Record<ProjectFilter, number>;
    counts.All = projects.length;
    for (const project of projects) {
        for (const category of new Set(project.categories)) counts[category] += 1;
    }
    return counts;
}
