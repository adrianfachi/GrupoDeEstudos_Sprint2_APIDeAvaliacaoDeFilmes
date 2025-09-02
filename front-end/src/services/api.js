import axios from "axios"

const api = axios.create({
    baseURL: "https://grupodeestudos-sprint2.onrender.com"
})

export default api