import axios from 'axios';

export const  getAllSports = async ()=>{
    try {
        const response = await axios.get('https://titan97.live/get-allsports');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch sports:', error.response?.data || error.message);
        return error.response?.data || error.message;
    }

}

