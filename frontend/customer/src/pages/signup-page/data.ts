import api from "../../api/index"

interface RegisterFormData {
    email: string;
    fullName: string;
    phoneNumber: string;
    password: string;
}
export default async function RegisterNewCustomer(formData: RegisterFormData): Promise<void> {
    try {
        await api.post("/auth/register", formData);
        return 
    }
    catch (error) {
        console.log(error)
    }
}

