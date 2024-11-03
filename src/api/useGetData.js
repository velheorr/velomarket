import {useQuery} from "react-query";
import axios from "axios";

async function fetchCatalogData(){
    const res = (await axios.get('https://storage.yandexcloud.net/velomarketkoleso/data/data.json')).data
    const x = res.filter(i => i.ВНаличии >= 1)
    return x;
}

export const useGetCatalogData = () => {
    return useQuery('catalog', fetchCatalogData,
        {
            keepPreviousData: true,
            refetchOnWindowFocus: true,
        })
}