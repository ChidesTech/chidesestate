import axios from "axios";

const http = axios.create({
    // baseURL : "http://localhost:5000/api",
    baseURL : "https://chidesestates.up.railway.app/api",
    headers : {
        "Content-type" : "application/json"
    }
});

export default http;