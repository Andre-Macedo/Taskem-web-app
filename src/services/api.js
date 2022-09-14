import axios from "axios";

const URL = process.env.REACT_APP_API_URL + "/api/";

const instance = axios.create({
    baseURL: URL,
    timeout: 30000
});

export const executeRequest = (endpoint, method, body) => {
    console.log(`executing: ${URL}${endpoint}, method: ${method}, body: ${body}`);

    return instance.request({
        url: endpoint,
        method: method,
        data: body ? body : ""
    });
}