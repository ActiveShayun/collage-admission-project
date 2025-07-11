'use client'
import axios from 'axios';
const instant = axios.create({
    baseURL: ''
})
const axiosPublic = () => {
    return axios
};

export default axiosPublic;