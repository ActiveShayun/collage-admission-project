'use client'
import axios from 'axios';
const instant = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://192.168.0.100:3000'
})
const axiosPublic = () => {
    return instant
};

export default axiosPublic;