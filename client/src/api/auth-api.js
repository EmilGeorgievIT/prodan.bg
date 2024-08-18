import request from './request';
import * as BASE_URL from '../constants/constants'


/**
 *
 * @param {string} email
 * @param {string} password
 */
export const login = (email, password) => request.post(`${BASE_URL.SERVER_URL}/users/login`, { email, password });

export const register = (name, email, password) => request.post(`${BASE_URL.SERVER_URL}/users/register`, { name, email, password });

export const logout = () => request.get(`${BASE_URL.SERVER_URL}/users/logout`);
