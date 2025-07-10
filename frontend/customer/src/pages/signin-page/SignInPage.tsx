import { useState, ChangeEvent, FormEvent } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface Errors {
  email?: string;
  password?: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    } as unknown as FormData));
  };

  const validate = (): boolean => {
    const newErrors: Errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Vui lòng nhập email hợp lệ.';
    }
    if (!formData.password) {
      newErrors.password = 'Vui lòng nhập mật khẩu.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Logging in:', formData);
    // Xử lý đăng nhập ở đây, có thể lưu rememberMe lên storage
    alert(`Đăng nhập thành công! Ghi nhớ: ${formData.rememberMe}`);
    setFormData({ email: '', password: '', rememberMe: false });
    setErrors({});
  };

  const navigate = useNavigate()
    const navigateToRegisterPage = () => {
        navigate("/signup")
    }

  return (
    <div className='signin-page'>
      <form onSubmit={handleSubmit} style={{ maxWidth: '360px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Đăng nhập</h2>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Mật khẩu:</label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
          {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />{' '}
            Ghi nhớ đăng nhập
          </label>
        </div>

        <button
          type="submit"
          style={{ width: '100%', padding: '0.75rem', fontSize: '1rem' }}
        >
          Đăng nhập
        </button>
      </form>
      <p>Chưa có tài khoản ? <a onClick={navigateToRegisterPage}>Đăng ký ngay !</a></p>
    </div>


  );
};

export default LoginForm;
