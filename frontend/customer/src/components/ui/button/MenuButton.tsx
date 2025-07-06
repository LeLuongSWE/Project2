import { useNavigate } from "react-router-dom"

export default function MenuButton(){
    const navigate = useNavigate()
    const navigateToMenuPage = () => {
        navigate("/menu")
    }
    return (
            <button className="button show-menu-button" onClick={navigateToMenuPage}>Xem toàn bộ thực đơn</button>
    )
}