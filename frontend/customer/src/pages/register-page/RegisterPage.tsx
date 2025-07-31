import {  useState } from "react"
import "./style.css"
import { useNavigate } from "react-router-dom"
import RegisterNewCustomer from "./data"
import { RegisterFormData } from "../../interfaces/RegisterFormData"
import { isValidEmail, isValidPhoneNumber } from "../../helper/validation"

export default function RegisterPage() {
    const registerFormDataInitation: RegisterFormData = {
        email: '',
        fullName: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    } 

	const [formData, setFormData] = useState<RegisterFormData>(registerFormDataInitation)
	const [errors, setErrors] = useState<RegisterFormData>(registerFormDataInitation)

	const validate = (name: string = '') : boolean => {
		const newErrors: Partial<RegisterFormData> = {}
        switch(name){
            case 'email':
                if (!formData[name]){
                    newErrors.email = "Hãy nhập email"
                }
                else if (!isValidEmail(formData.email)) {
                    newErrors.email = "Hãy nhập đúng định dạng email"
                }
                break
            case 'fullName':
                if (!formData[name]){
                    newErrors.fullName = "Hãy nhập tên đầy đủ"
                }
                break
            case 'phoneNumber':
                if (!formData[name]){
                    newErrors.phoneNumber = "Hãy nhập số điện thoại"
                }
                else if (!isValidPhoneNumber(formData[name])){
                    newErrors.phoneNumber = "Hãy nhập đúng định dạng số điện thoại"
                }
                break
            case 'password':
                if (!formData[name]){
                    newErrors.password = "Hãy nhập mật khẩu"
                }
                else if (formData[name].length < 8){
                    newErrors.password = "Hãy nhập mật khẩu trên 8 ký tự"
                }
                break
            case 'confirmPassword':
                if (formData.confirmPassword !== formData.password){
                    newErrors.confirmPassword = "Hãy nhập đúng mật khẩu xác thực"
                }
                break
        }
		
		setErrors(newErrors as RegisterFormData)    
	    return Object.keys(newErrors).length === 0
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
        console.log(name, value)
        validate(name)
		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (!validate()) return
		console.log('Submitting:', formData)
		RegisterNewCustomer(formData)
	}

	const navigate = useNavigate()
	const navigateToLoginPage = () => {
		navigate("/login")
	}

	return (
		<div className="register-page">
			<h1 className="register-title">Đăng ký</h1>
			<form className="register-form" onSubmit={handleSubmit}>
				<div className="register-field">
					<label htmlFor="email" className="register-label">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						className="register-input"
						value={formData.email}
						onChange={handleChange}
					/>
					{errors.email && 
						<span className="field-error">{errors.email}</span>
					}
				</div>

				<div className="register-field">
					<label htmlFor="fullName" className="register-label">Tên đầy đủ</label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						placeholder="Tên đầy đủ"
						className="register-input"
						value={formData.fullName}
						onChange={handleChange}
					/>
					
				</div>

				<div className="register-field">
					<label htmlFor="phoneNumber" className="register-label">Số điện thoại</label>
					<input
						type="tel"
						id="phoneNumber"
						name="phoneNumber"
						placeholder="Số điện thoại"
						className="register-input"
						value={formData.phoneNumber}
						onChange={handleChange}
					/>
				</div>

				<div className="register-field">
					<label htmlFor="password" className="register-label">Mật khẩu</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Mật khẩu"
						className="register-input"
						value={formData.password}
						onChange={handleChange}
						required
					/>
					{errors.password && (
						<span className="error-text">{errors.password}</span>
					)}
				</div>

				<div className="register-field">
					<label htmlFor="confirmPassword" className="register-label">Xác nhận mật khẩu</label>
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						placeholder="Xác nhận mật khẩu"
						className="register-input"
						value={formData.confirmPassword}
						onChange={handleChange}
						required
					/>
					{errors.confirmPassword && (
						<span className="error-text">{errors.confirmPassword}</span>
					)}
				</div>

				<button type="submit" className="register-button">Đăng ký</button>
			</form>
			<p>Đã có tài khoản ? <a onClick={navigateToLoginPage}>Đăng nhập ngay !</a></p>
		</div>
	)
}
