import { useNavigate } from "react-router-dom"

function SigninButton(){
    const navigate = useNavigate()
    const navigateToSignInPage = () => {
        navigate("/signin")
    }
    return (
        <button className="button sign-in-button" onClick={navigateToSignInPage}>
            ĐĂNG NHẬP/ ĐĂNG KÝ
        </button>
    )
}

export default SigninButton