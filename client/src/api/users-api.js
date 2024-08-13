import request from './request';
import * as BASE_URL from '../constants/constants'

export const getAll = async () => {
    const result = await request.get(`${BASE_URL.SERVER_URL}/jsonstore/users`);
    const posts = Object.values(result);
    return posts;
};

export const getOne = (userId) => request.get(`${BASE_URL.SERVER_URL}/jsonstore/users/${userId}`);