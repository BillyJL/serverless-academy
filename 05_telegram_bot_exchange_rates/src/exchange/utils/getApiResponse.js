import axios from "axios";

export const getApiResponse = (apiUrl) => {
    return axios.get(apiUrl);
}
