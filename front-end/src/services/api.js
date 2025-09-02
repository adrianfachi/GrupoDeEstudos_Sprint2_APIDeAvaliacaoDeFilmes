import axios from "axios"

const api = axios.create({
    baseURL: "grupo-de-estudos-sprint2-api-de-ava-nine.vercel.app"
})

export default api