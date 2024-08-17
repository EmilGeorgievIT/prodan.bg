import request from './request';
import * as BASE_URL from '../constants/constants'

const create = (postId, text) => request.post(`${BASE_URL.SERVER_URL}/data/comments`, { postId, ...text });

const getAll = (postId) => {
    const params = new URLSearchParams({
        where: `postId="${postId}"`,
        load: `author=_ownerId:users`,
    });
    return request.get(`${BASE_URL.SERVER_URL}/data/comments?${params.toString()}`);
};

const update = (postId, text) => request.put(`${BASE_URL.SERVER_URL}/data/comments}`, { postId, ...text });

const commentsAPI = {
    create,
    getAll,
    update,
};

export default commentsAPI;
