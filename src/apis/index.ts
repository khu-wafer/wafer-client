import { env } from '$env/dynamic/public';
import axios from 'axios';

const axiosClient = axios.create({
	baseURL: env.PUBLIC_API_URL
});

export const postLogin = async (email: string, password: string) => {
	return await axiosClient.post('/user/login', { email, password });
};
