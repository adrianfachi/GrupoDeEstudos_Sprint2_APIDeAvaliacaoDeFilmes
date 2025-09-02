import axios from "axios"

const API_URL = "https://api.render.com/deploy/srv-d2r6ifadbo4c73ctcq00?key=3LdMe2vV5_s"

const api = axios.create({
    baseURL: API_URL
})

export default api