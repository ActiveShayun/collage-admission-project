'use client'
import { useQuery } from '@tanstack/react-query';
import axiosPublic from '../shared/axiosHooks/axiosPublic';
import { useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';


const AllCollage = () => {
    const useAxios = axiosPublic()
    const [search, setSearch] = useState('')
    const [debouncedSearch] = useDebounce(search, 1000)
    const { data: allCollage = [], isLoading } = useQuery({
        queryKey: ['collages', debouncedSearch],
        queryFn: async () => {
            const res = await useAxios.get(`/api/allCollage?search=${search}`)
            console.log(res);
            return res.data
        }
    })
    const filterTedCollage = useMemo(() => {
        if (!debouncedSearch.trim()) return allCollage

        return allCollage.filter(collage =>
            collage.collage_Name.toLowerCase().includes(debouncedSearch.toLocaleLowerCase())
        )


    }, [debouncedSearch, allCollage])
    return { allCollage: filterTedCollage, isLoading, setSearch, search };
};

export default AllCollage;