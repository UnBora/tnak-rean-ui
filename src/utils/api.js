import axios from "axios";

export const api=axios.create({
    baseURL: 'https://amsjwt.hrd-edu.info/api'
})