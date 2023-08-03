import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.exchangeratesapi.io/v1/'
})

export default api
