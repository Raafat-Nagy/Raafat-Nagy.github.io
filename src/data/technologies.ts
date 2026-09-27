import type { TechnologyGroup } from '../types/technology';

/**
 * Only technologies explicitly mentioned in the AI Projects Hub README.
 */
export const technologyGroups: TechnologyGroup[] = [
  {
    title: 'AI / Machine Learning',
    items: ['Python', 'PyTorch', 'TensorFlow', 'Keras', 'scikit-learn', 'llama.cpp'],
  },
  {
    title: 'Computer Vision',
    items: ['OpenCV', 'YOLO', 'ByteTrack', 'SigLIP', 'FAISS', 'BiRefNet', 'dlib', 'face_recognition', 'Shapely'],
  },
  {
    title: 'NLP / RAG',
    items: ['LangChain', 'HuggingFace', 'Groq', 'Chainlit'],
  },
  {
    title: 'Time Series & Forecasting',
    items: ['Prophet', 'ARIMA', 'Auto-ARIMA'],
  },
  {
    title: 'Deployment & Applications',
    items: ['FastAPI', 'Streamlit', 'Docker', 'React', 'JavaScript', 'python-telegram-bot'],
  },
];
