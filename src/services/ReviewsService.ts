import axios from 'axios';
import { Colors } from 'styles/theme';

const baseURL = 'https://627fbba6be1ccb0a4664296c.mockapi.io/reviews'

export interface Review {
  id: number;
  review: string;
  name: string;
  bgColor: Colors;
}

const getReviews = async (): Promise<Review[]> => {
    const { data } = await axios.get<Review[]>(`${baseURL}/Reviews`);
    return data;
}

const API = {
  getReviews,
};

export default API;
