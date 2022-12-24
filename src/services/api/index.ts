import axios from 'axios';
const BASE_URL = 'http://nextjs-chatgpt-be.vercel.app/api/';

export const getAnswer = async (question: string) => {
  try {
    const res = await axios.post(
      `${BASE_URL}ask-a-question`,
      {question},
    );
    return res?.data?.result;
  } catch (e) {
    console.error(e);
    return 'Something went wrong!! ☹️';
  }
};

export const getTranslatedText = async (query: string, language: string) => {
  try {
    const res = await axios.post(`${BASE_URL}translate`, {query, language});
    return res?.data?.result;
  } catch (e) {
    console.error(e);
    return 'Something went wrong!! ☹️';
  }
};
