
import axios from "axios";

export const getAllCasinoGame = async () => {
    try {
        const response = await axios.get("https://titan97.live/get-casinotable");
        console.log("helo");
        
        return response.data; 
    } catch (error) {
        console.error("Failed to fetch casino games:", error.response?.data || error.message);
        return  error.response?.data || error.message; 
    }
};



