import axios from "axios";

const dummyApi = axios.create({
    baseURL: "https://dummyjson.com"
})

export {dummyApi}