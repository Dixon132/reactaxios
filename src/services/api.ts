import axios from "axios"
export interface Model {
    message: String,
    status: String
}

const API_URL = 'https://dog.ceo/api/breeds/image/random'

export const fetchModels = async (): Promise<any> => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (e) {
        console.error("error", e)
        return [];
    }
}