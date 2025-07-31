import api from "../../api/index"

const apiUrlExtension = "/auth/forget-password"

export async function CheckEmail(email: string) {
    try {
        const res = await api.post(`${apiUrlExtension}/check-email`, {"email": email})
        console.log(res)
        return res.status
    }
    catch (error){
        console.log(error)
    }
}

export async function CheckOtp(otp: string, email: string) {
    try {
        const res = await api.post(`${apiUrlExtension}/check-otp`,
            {
                "otp": otp,
                "email": email
            }
        )
        return res.data
    }
    catch (error){
        console.log(error)
    }
}


export async function SendOtp(email: string) {
    try {
       const res = await api.post(`${apiUrlExtension}/send-otp`, {'email': email})
       return res.status
    }
    catch (error){
        console.log(error)
    }
}