import "./style.css"

export default function ContactPage() {

    return (

        <section className="contact-page">
            <div className="contact-container">
                <h2 className="contact-title">Liên hệ với Nhà hàng Cơm Bình Dân</h2>
                <p className="contact-description">
                    Nếu bạn có bất kỳ câu hỏi, phản hồi, hoặc muốn đặt bàn trước, hãy liên hệ với chúng tôi qua thông tin bên dưới hoặc gửi lời nhắn trực tiếp.
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Thông tin liên hệ</h3>
                        <p><strong>Địa chỉ:</strong> 123 Đường Ẩm Thực, Quận 1, TP. HCM</p>
                        <p><strong>Điện thoại:</strong> 0123 456 789</p>
                        <p><strong>Email:</strong> lienhe@combinhdan.vn</p>
                        <p><strong>Thời gian mở cửa:</strong> 10:00 – 22:00 (Thứ 2 đến Chủ nhật)</p>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <h3>Gửi lời nhắn</h3>
                        <input type="text" placeholder="Tên của bạn" required />
                        <input type="email" placeholder="Email" required />
                        <textarea placeholder="Nội dung lời nhắn..." rows={5} required></textarea>
                        <button type="submit">Gửi</button>
                    </form>
                </div>

                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.432163187386!2d106.70080631533483!3d10.776897062218754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3eafc6ea3d%3A0x13a2eb6bd82c90d3!2zMTIzIMSQxrDhu51uZyDEkOG6oW0gVGjGsOG7nWMsIFF14bqtbiAxLCBUUC4gSE9DSU1JTkgsIFZJVE5BTQ!5e0!3m2!1svi!2s!4v1610000000000!5m2!1svi!2s"
                        width="100%"
                        height="400"
                        // style="border:0; border-radius: 10px; margin-top: 2rem;"
                        // allowfullscreen=""
                        loading="lazy"
                        // referrerpolicy="no-referrer-when-downgrade"
                        >
                    </iframe>
                </div>
            </div>
        </section>

    )
}