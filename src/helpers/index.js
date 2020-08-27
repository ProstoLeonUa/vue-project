import axios from 'axios';
export const $http = async function(url, payload) {
	const response =  axios.post(url, payload);
	return await response;
}
export const $http_get = async function(url, payload) {
	const response =  axios.get(url, payload);
	return await response;
}
