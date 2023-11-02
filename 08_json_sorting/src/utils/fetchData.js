import { fetchConfig } from "../config/fetch.js";
import fetchingWithTimeOut from "./fetchingWithTimeOut.js";

export async function fetchData(url, attempts = 3) {
    const {options, timeout} = fetchConfig;
    try {
        const response = await fetchingWithTimeOut(url, options, timeout);
        const data = await response.json();
        return data;
    } catch (error) {
        if (attempts === 1) {
            throw error;
        }
        return fetchData(url, attempts - 1);
    }
}
