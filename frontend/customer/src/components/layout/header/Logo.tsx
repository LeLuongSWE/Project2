import { useNavigate } from "react-router-dom"
import LogoImage from "../../../assets/images/logo/logo.png"

function Logo(){

    const navigate = useNavigate()

    const logoOnClickHandle = () => {
        navigate("/")
    }

    return (
        <img className="logo-image" src={LogoImage} onClick={logoOnClickHandle}/>
    )
}

export default Logo