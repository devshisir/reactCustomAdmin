import axios from 'axios'
export default axios.create({
    baseURL: "http://react_api.test/api/",
    headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
    }
});