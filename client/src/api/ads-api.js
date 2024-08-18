import request from './request';
import * as BASE_URL from '../constants/constants'

export const getAll = async () => {
    const result = await request.get(`${BASE_URL.SERVER_URL}/data/posts`);
    const posts = Object.values(result);
    return posts;
};

export const getAllByUserId = async (userId) => {
    const params = new URLSearchParams({
        where: `_ownerId="${userId}"`
    });
    const response = await request.get(`${BASE_URL.SERVER_URL}/data/posts?${params.toString()}`);
    return Object.values(response);
};

export const getOne = (postId) => request.get(`${BASE_URL.SERVER_URL}/data/posts/${postId}`);

export const create = (postData) => request.post(`${BASE_URL.SERVER_URL}/data/posts`, postData);

export const update = (postData, postId) => request.put(`${BASE_URL.SERVER_URL}/data/posts/${postId}`, postData);

export const deleteOne = (postId) => request.del(`${BASE_URL.SERVER_URL}/data/posts/${postId}`);