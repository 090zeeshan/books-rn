import { API_KEY, END_POINT_VOLUMES, BASE_URL } from './Constants';
import Axios, { AxiosResponse } from 'axios';
import Volume from '../model/Volume';
import QueryResponse from '../model/QueryResponse';

const axios = Axios.create({
    baseURL: BASE_URL
})

axios.interceptors.request.use(config => {
    config.params = { ...config.params, key: API_KEY };
    console.log("uri", config.baseURL + axios.getUri(config));
    return config;
});

export const search: (query: string, startIndex?: number) => Promise<QueryResponse<Volume>> = (query: string, startIndex: number = 0) => {
    return new Promise((resolve, reject) => {
        axios.get(END_POINT_VOLUMES, { params: { q: query, startIndex } })
            .then((response: AxiosResponse<QueryResponse<Volume>>) => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            })
    });
}