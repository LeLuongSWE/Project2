import {  useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import RegisterNewCustomer from "./data";

export default function SignUpPage() {
	const [formData, setFormData] = useState({
		email: '',
		fullName: '',
		phoneNumber: '',
		password: '',
		confirmPassword: ''
	});
	const [errors, setErrors] = useState({
		email: '',
		fullName: '',
		phoneNumber: '',
		password: '',
		confirmPassword: ''
	});

	const validate = () => {
		const newErrors: {
			email: string;
			fullName: string;
			phoneNumber: string;
			password: string;
			confirmPassword: string;
		} = {
			email: '',
			fullName: '',
			phoneNumber: '',
			password: '',
			confirmPassword: ''
		};
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		const phoneRegex = /^[0-9]{10,15}$/

		if (!emailRegex.test(formData.email)) {
			newErrors.email = "Hãy nhập đúng định dạng email"
		}
		if (!phoneRegex.test(formData.phoneNumber)) {
			newErrors.phoneNumber = "Hãy nhập đúng định dạng số điện thoại"
		}
		if (formData.password.length < 8) {
			newErrors.password = 'Mật khẩu dài ít nhất 8 ký tự'
		}
		if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = 'Mật khẩu không trùng khớp'
		}
		setErrors(newErrors)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	//   useEffect(() => {
	//     console.log(formData);
	//   }, [formData]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		validate()
		console.log('Submitting:', formData);
		RegisterNewCustomer(formData)
	};

	const navigate = useNavigate()
	const navigateToSignInPage = () => {
		navigate("/signin")
	}

	return (
		<div className="signup-page">
			<h1 className="signup-title">Đăng ký</h1>
			<form className="signup-form" onSubmit={handleSubmit}>
				<div className="signup-field">
					<label htmlFor="email" className="signup-label">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						className="signup-input"
						value={formData.email}
						onChange={handleChange}
						required
					/>
					{errors.email && 
						<span className="field-error">{errors.email}</span>
					}
				</div>

				<div className="signup-field">
					<label htmlFor="fullName" className="signup-label">Tên đầy đủ</label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						placeholder="Tên đầy đủ"
						className="signup-input"
						value={formData.fullName}
						onChange={handleChange}
						required
					/>
					
				</div>

				<div className="signup-field">
					<label htmlFor="phoneNumber" className="signup-label">Số điện thoại</label>
					<input
						type="tel"
						id="phoneNumber"
						name="phoneNumber"
						placeholder="Số điện thoại"
						className="signup-input"
						value={formData.phoneNumber}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="signup-field">
					<label htmlFor="password" className="signup-label">Mật khẩu</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Mật khẩu"
						className="signup-input"
						value={formData.password}
						onChange={handleChange}
						required
					/>
					{errors.password && (
						<span className="error-text">{errors.password}</span>
					)}
				</div>

				<div className="signup-field">
					<label htmlFor="confirmPassword" className="signup-label">Xác nhận mật khẩu</label>
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						placeholder="Xác nhận mật khẩu"
						className="signup-input"
						value={formData.confirmPassword}
						onChange={handleChange}
						required
					/>
					{errors.confirmPassword && (
						<span className="error-text">{errors.confirmPassword}</span>
					)}
				</div>

				<button type="submit" className="signup-button">Đăng ký</button>
			</form>
			<p>Đã có tài khoản ? <a onClick={navigateToSignInPage}>Đăng nhập ngay !</a></p>
		</div>
	);
}
