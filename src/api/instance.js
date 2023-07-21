import axios from 'axios';

export const API_KEY = '82d2dd6213244083bfb354edb6e81961';

export const baseURL = `https://api.rawg.io/api`;

export const $api = axios.create({
	baseURL,
	params: {
		key: API_KEY,
		page: 1,
	},
});
