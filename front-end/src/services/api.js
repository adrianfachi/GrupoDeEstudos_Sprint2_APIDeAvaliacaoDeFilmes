import axios from "axios"

const api = axios.create({
    baseURL: "grupo-de-estudos-sprint2-api-d-git-dc18d7-adrianfachis-projects.vercel.app"
})

export default api