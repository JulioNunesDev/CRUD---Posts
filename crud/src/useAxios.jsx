import { api } from "./api"
import useSWR from 'swr'


export const useAxios=(url)=>{
    const {data, error, mutate} = useSWR(
        url,
        async (url) =>{
            const {data}= await api.get(url)
            return data
        }
    )
        return {data, error, mutate}
}