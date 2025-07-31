import { useNavigate } from "react-router-dom"

function LoginButton(){
    const navigate = useNavigate()
    const navigateToLoginPage = () => {
        navigate("/login")
    }
    return (
        <button className="button login-button" onClick={navigateToLoginPage}>
            ĐĂNG NHẬP/ ĐĂNG KÝ
        </button>
    )
}

export default LoginButton