import axios from "axios"

const api = axios.create({
    baseURL: "http://grupo-de-estudos-sprint2-api-de-ava-sigma.vercel.app"
})

export default api