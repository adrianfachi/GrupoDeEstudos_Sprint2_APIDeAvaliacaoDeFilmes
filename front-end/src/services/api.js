import axios from "axios"

const API_URL = "https://grupodeestudos-sprint2.onrender.com/"

const api = axios.create({
    baseURL: API_URL
})

export default api