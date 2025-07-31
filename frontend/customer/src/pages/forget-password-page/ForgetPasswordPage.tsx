import { ChangeEvent, FormEvent, useState } from "react"
import { CheckEmail } from "./data"
import { useNavigate } from "react-router-dom"

export default function ForgetPasswordPage() {

    const [email, setEmail] = useState<string>("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const navigate = useNavigate()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const status = await CheckEmail(email)
        if (status === 200){
            localStorage.setItem('email', email)
            navigate("/forget-password/otp")
        }
        else {
            alert("Đã có lỗi")
        }
    }

    return (
        <div className="forget-password-page">
            <form className="forget-password-form" onSubmit={handleSubmit}>
                <h2 className="forget-pasword-title">
                    Quên mật khẩu
                </h2>
                <label>Nhập email đã đăng ký</label>
                <input
                    type="text"
                    id="email"
                    name="Email"
                    value={email}
                    onChange={handleChange}
                ></input>
                <button
                    type="submit"
                    className="submit-button"
                >
                    Tiếp tục
                </button>
                
            </form>
        </div>

    )
}