//pages\api\userApi.js
import http from 'k6/http';
import { check } from 'k6';
import { config } from '../../config/config.js';

export function createUser(payload) {
    let response = http.post(`${config.baseUrl}/users`, JSON.stringify(payload), {
        headers: config.headers,
    });

    check(response, {
        'Status is 201': (r) => r.status === 201,
        'Response contains ID': (r) => JSON.parse(r.body).id !== undefined
    });

    return response;
}

export function getUser(userId) {
    let response = http.get(`${config.baseUrl}/users/${userId}`, {
        headers: config.headers,
    });

    check(response, {
        'Status is 200': (r) => r.status === 200,
        'Response contains user data': (r) => r.body.includes('data'),
    });

    return response;
}

export function updateUser(userId, payload) {
    let response = http.put(`${config.baseUrl}/users/${userId}`, JSON.stringify(payload), {
        headers: config.headers,
    });

    check(response, {
        'Status is 200': (r) => r.status === 200,
        'Response contains updated job': (r) => JSON.parse(r.body).job === payload.job,
    });

    return response;
}

export function deleteUser(userId) {
    let response = http.del(`${config.baseUrl}/users/${userId}`, null, {
        headers: config.headers,
    });

    check(response, {
        'Status is 204': (r) => r.status === 204,
    });

    return response;
}
export function loginUser(credentials) {
    let response = http.post(`${config.baseUrl}/login`, JSON.stringify(credentials), {
        headers: config.headers,
    });

    check(response, {
        'Status is 200': (r) => r.status === 200,
        'Response contains token': (r) => JSON.parse(r.body).token !== undefined,
    });

    return response;
}
export function registerUser(credentials) {
    let response = http.post(`${config.baseUrl}/register`, JSON.stringify(credentials), {
        headers: config.headers,
    });

    check(response, {
        'Status is 200': (r) => r.status === 200,
        'Response contains ID': (r) => JSON.parse(r.body).id !== undefined,
        'Response contains token': (r) => JSON.parse(r.body).token !== undefined,
    });

    return response;
}
