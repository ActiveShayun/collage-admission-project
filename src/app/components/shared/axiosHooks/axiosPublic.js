'use client'
import axios from 'axios';
const instant = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'
})
const axiosPublic = () => {
    return instant
};

export default axiosPublic;