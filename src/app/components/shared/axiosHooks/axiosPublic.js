'use client'
import axios from 'axios';
const instant = axios.create({
    baseURL: 'http://localhost:3000'
})
const axiosPublic = () => {
    return instant
};

export default axiosPublic;