import axios from "axios"


export const onLoginWithCredentials = async (username,password)=>{
    try{
        const response = await axios.post(
            "https://admin.titan97.live/Apicall/login_process",
            { username, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        return response.data
    }
    catch(error){
        console.error("Failed to login:", error.response?.data || error.message)
        return error.response?.data || error.message
    }
    
}