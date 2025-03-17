import axios from "axios"


export const onLoginWithCredentials = async (mobile, password) => {
    try {
        const formData = new URLSearchParams();
        formData.append("mobile", mobile);
        formData.append("password", password);

        const response = await axios.post(
            "https://admin.titan97.live/Apicall/login_process",
            formData.toString(),  
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        

        return response;
    } catch (error) {
        console.error("Failed to login:", error.response?.data || error.message);
        return error.response?.data || error.message;
    }
};