import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  params: {
    client_id: process.env.NEXT_PUBLIC_ACCESS_KEY,
  },
});

export default axiosInstance;