import { useNavigate } from "react-router-dom"
import "./style.css"

export default function ContactButton(){

    const navigate = useNavigate()
    const navigateToContactPage = () => {
        navigate("/contact")
    }

    return (
        <button className="button contact-button" onClick={navigateToContactPage}>Liên hệ ngay</button>
    )
}