import axios from "axios";

export async function getApiResponse(apiUrl) {
    try {
        const response = await axios.get(apiUrl);
        return response;
    } catch (error) {
        throw error;
    }
}
