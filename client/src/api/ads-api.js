import * as request from './request';
import * as BASE_URL from '../constants/constants'

export const getAll = async () => {
    const result = await request.get(`${BASE_URL.SERVER_URL}/jsonstore/ads`);
    const posts = Object.values(result);
    return posts;
};