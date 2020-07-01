import * as axios from 'axios';

const instance =  axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9073f02f-aa4c-41e2-917d-7f343fdfaf42'
    },

});

 export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)},
    getUsers2 (currentPage, pageSize) {
        return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    }
    // getUsers2 (currentPage = 1, pageSize = 1,) {
    //     return instance.get(`follow?page=${currentPage}&count=${pageSize}`  )
    //     .then(response => response.data)},
    }
