import request from './request';
import * as BASE_URL from '../constants/constants'

export const getAll = async () => {
    const result = await request.get(`${BASE_URL.SERVER_URL}/jsonstore/ads`);
    const posts = Object.values(result);
    return posts;
};

export const getOne = (postId) => request.get(`${BASE_URL.SERVER_URL}/jsonstore/ads/${postId}`);

export const create = (postData) => request.post(`${BASE_URL.SERVER_URL}/jsonstore/ads`, postData);

export const update = (postData, postId) => request.put(`${BASE_URL.SERVER_URL}/${postId}`, postData);

export const deleteOne = (postId) => request.del(`${BASE_URL.SERVER_URL}/${postId}`);