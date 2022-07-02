import axios from "axios";

export const api=axios.create({
    baseURL: 'https://api.tnakrean.info/api/v1'
})