import axios from 'axios';

// Replace with your actual API endpoint if using a backend
const API_URL = 'http://localhost:5000/api';

// For local storage as fallback
const STORAGE_KEY = 'sdiet_quiz_results';

export const saveQuizResult = async (quizResultData) => {
  const response = await fetch('http://localhost:5000/api/quizResults', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(quizResultData),
  });

  if (!response.ok) {
    throw new Error('Failed to save quiz result');
  }

  return await response.json();
};

export const getQuizResults = async () => {
  try {
    // Try to fetch from backend
    const response = await axios.get(`${API_URL}/quiz-results`);
    return response.data;
  } catch (error) {
    console.log('Fetching from local storage instead:', error);
    
    // Fallback to localStorage
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  }
};