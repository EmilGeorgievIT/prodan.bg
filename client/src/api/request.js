import { getAccessToken } from '../utils/authUtils';

async function request(method, url, data) {
    const options = {};

    const accessToken = getAccessToken();

    if (accessToken) {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken,
        };
    }

    if (method !== 'GET') {
        options.method = method;
    }
    if (data) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        };
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);
        if (response.status === 204) {
            return;
        };

        const result = await response.json();

        if (!response.ok) {
            throw result;
        }

        return result;
    } catch (error) {
        console.error('Request failed:', error); // Debugging line
        throw error;
    }
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');

export default {
    get,
    post,
    put,
    del,
};
