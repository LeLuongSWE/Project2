import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react"
import { SendOtp } from "./data"
import { useNavigate } from "react-router-dom"

export function ForgetPasswordOtpPage(){

    const [otp, setOtp] = useState<string>("")
    const navigate = useNavigate()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setOtp(e.target.value)
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
    }
    const sendOtp = async () => {
        const email = localStorage.getItem('email')
        if (email === null){
            alert("Vui lòng nhập email")
            navigate("/forget-password")
            return
        }
        const status = await SendOtp(email);
        if (status !== 200){
            alert("Không thể gửi otp")
        }
        else{
            alert("Gửi otp thành công")
        }
    }
    const handleSendOtp = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        sendOtp()
    }

    useEffect(()=> {
        sendOtp()
    }, [])
    return (
        <div className="forget-password-otp-page">
            <form className="forget-password-otp-form" onSubmit={handleSubmit}>
                <h1>Nhập OTP</h1>
                <p>Hãy nhập OTP đã được gửi đến email của bạn</p>
                <label htmlFor="otp">Nhập OTP</label>
                <input
                    id="otp"
                    name="otp"
                    className="otp-input"
                    value={otp}
                    onChange={handleChange}
                >
                    
                </input>
                <button
                    type="submit"
                    className="submit-button"
                >
                    Tiếp tục
                </button>
                <p>Không nhận được mã ? <b onClick={handleSendOtp}>Thử lại</b></p>
            </form>
        </div>

    )
}