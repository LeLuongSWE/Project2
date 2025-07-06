import React from "react";
import "./style.css"
function Footer(){

    return (

        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section">
                    <h4>Về chúng tôi</h4>
                    <ul>
                        <li>Giới thiệu</li>
                        <li>Tuyển dụng</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Giờ làm việc</h4>
                    <ul>
                        <li><b>Hằng ngày</b>: 6:30 - 22:00</li>

                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Liên hệ</h4>
                    <p>123 Đường ABC, Hà Nội</p>
                    <p>Hotline: 0123 456 789</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Bình Dân Restaurant. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;