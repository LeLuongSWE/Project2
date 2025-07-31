import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import LoginCustomer from './data'
import { LoginFormData } from '../../interfaces/LoginFormData'
import { isValidEmail } from '../../helper/validation'

function LoginForm(){
    const loginFormDataInitation: LoginFormData = {
        email: '',
        password: '',
        // rememberMe: false,
    }
    const [formData, setFormData] = useState<LoginFormData>(loginFormDataInitation)
    const [errors, setErrors] = useState<LoginFormData>(loginFormDataInitation)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        } as unknown as LoginFormData))
    }

    const validate = (): boolean => {
        const newErrors: Partial<LoginFormData> = {}
        if (!isValidEmail(formData.email)) {
            newErrors.email = 'Vui lòng nhập email hợp lệ.'
        }
        if (!formData.password) {
            newErrors.password = 'Vui lòng nhập mật khẩu.'
        }
        setErrors(newErrors as LoginFormData)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!validate()) return
        console.log('Logging in:', formData)
        const token = await LoginCustomer(formData)
        if (token) {
            alert(`Đăng nhập thành công! Token: ${token}`)
            setFormData(loginFormDataInitation)
            setErrors(loginFormDataInitation)
        }
        else {
            alert("Đã có lỗi")
        }
    }

    const navigate = useNavigate()
    const navigateToRegisterPage = () => {
        navigate("/register")
    }
    const navigateToForgetPasswordPage = () => {
        navigate("/forget-password")
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])

    return (
        <div className='login-page'>
            <form onSubmit={handleSubmit}>
                <h2>Đăng nhập</h2>

                <div className='email-input'>
                    <label htmlFor="email">Email / Số điện thoại:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <div>{errors.email}</div>}
                </div>

                <div className='password-input'>
                    <label htmlFor="password">Mật khẩu:</label><br />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <div>{errors.password}</div>}
                </div>

                <div className='remember-me-checkbox'>
                    <label>
                        <input
                            type="checkbox"
                            name="rememberMe"
                            // checked={formData.rememberMe}
                            onChange={handleChange}
                        />{' '}
                        Ghi nhớ đăng nhập
                    </label>
                </div>

                <button
                    type="submit"
                >
                    Đăng nhập
                </button>
            </form>
            <p>Chưa có tài khoản ? <a onClick={navigateToRegisterPage}>Đăng ký ngay !</a></p>
            <a onClick={navigateToForgetPasswordPage}>Quên mật khẩu</a>
        </div>


    )
}

export default LoginForm
