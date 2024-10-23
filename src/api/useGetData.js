import {useQuery} from "react-query";
import axios from "axios";

async function fetchRealizationData(){
    const res = (await axios.get('https://storage.yandexcloud.net/velomarketkoleso/data/data.json')).data
    const x = res.filter(i => i.ВНаличии >= 1)
    return x;
}

export const useGetRealizationData = () => {
    return useQuery('realization', fetchRealizationData,
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        })
}