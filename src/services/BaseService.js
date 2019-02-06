import axios from 'axios';

export function get(url){
    return axios.get(url);
}

export function post(url,message){
    return axios.post(url,message);
}