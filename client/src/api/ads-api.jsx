import * as request from '../api/request';

const BASE_URL = 'http://localhost:3030/jsonstore/ads';

export const getAll = async () => {
    const result = await request.get(BASE_URL);
    const posts = Object.values(result);
    return posts;
};