import api from "../../api/index"
import { LoginFormData } from "customer/src/interfaces/LoginFormData";

const LoginCustomer = async (formData: LoginFormData) => {
    try{
        const res = await api.post("/auth/login", formData)
        console.log(formData)
        return res.data
    }
    catch (error){
        console.log(error)
        return
    }
};

export default LoginCustomer;