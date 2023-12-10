import axios from 'axios'
import {logger} from './logger'

export const apiClient = axios.create({
	baseURL: 'https://example-api.com',
});

const onRejected = error => {
	logger.log(error);
};

apiClient.interceptors.response.use(null, onRejected);