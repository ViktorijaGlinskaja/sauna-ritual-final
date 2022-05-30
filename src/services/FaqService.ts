import axios from 'axios';

const baseURL = 'https://627fbba6be1ccb0a4664296c.mockapi.io/reviews'

export interface Faq {
  id: number;
  question: string;
  answer: string;
}

const getFaq = async (): Promise<Faq[]> => {
    const { data } = await axios.get<Faq[]>(`${baseURL}/Faq`);
    return data;
}

const API = {
    getFaq,
};

export default API;