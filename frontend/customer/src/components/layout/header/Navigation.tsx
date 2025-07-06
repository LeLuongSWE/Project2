import { Link } from "react-router-dom"

function Navigation(){

    return (
        <nav className="navbar">
            <Link className="navbar-item" to="/">Trang chủ</Link>
            <Link className="navbar-item" to="/about">Giới thiệu</Link>
            <Link className="navbar-item" to="/menu">Thực đơn</Link>
            <Link className="navbar-item" to="/contact">Liên hệ</Link>
        </nav>
    )
}

export default Navigation