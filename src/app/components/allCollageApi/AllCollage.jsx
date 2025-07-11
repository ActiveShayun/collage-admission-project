'use client'
import { useQuery } from '@tanstack/react-query';
import axiosPublic from '../shared/axiosHooks/axiosPublic';


const AllCollage = () => {
    const useAxios = axiosPublic()
    const { data: allCollage = [], isLoading } = useQuery({
        queryKey: ['collages'],
        queryFn: async () => {
            const res = await useAxios.get('/api/allCollage')
            console.log(res);
            return res.data
        }
    })
    return { allCollage, isLoading };
};

export default AllCollage;