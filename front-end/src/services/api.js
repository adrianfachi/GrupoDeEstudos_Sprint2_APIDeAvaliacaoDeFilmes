import axios from "axios"

const API_URL = "backendsprint2.vercel.app"

const api = axios.create({
    baseURL: API_URL
})

export default api