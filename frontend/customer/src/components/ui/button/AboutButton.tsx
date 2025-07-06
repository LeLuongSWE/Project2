import { useNavigate } from "react-router-dom"
import "./style.css"

export default function AboutButton(){

    const navigate = useNavigate()
    const navigateToAboutPage = () => {
        navigate("/about")
    }

    return (
        <button className="button about-button" onClick={navigateToAboutPage}>Xem giới thiệu đầy đủ</button>
    )
}