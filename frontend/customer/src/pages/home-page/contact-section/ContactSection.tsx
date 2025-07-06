import "./style.css"

export default function ContactSection() {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Liên hệ với chúng tôi</h2>
                <p className="contact-description">
                    Hãy để lại lời nhắn hoặc ghé qua địa chỉ của nhà hàng. Chúng tôi luôn sẵn sàng phục vụ bạn!
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Thông tin liên hệ</h3>
                        <p><strong>Địa chỉ:</strong> 123 Đường Ẩm Thực, Quận 1, TP. HCM</p>
                        <p><strong>Điện thoại:</strong> 0123 456 789</p>
                        <p><strong>Email:</strong> lienhe@combinhdan.vn</p>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <h3>Gửi lời nhắn</h3>
                        <input type="text" placeholder="Tên của bạn" required />
                        <input type="email" placeholder="Email" required />
                        <textarea placeholder="Nội dung..." rows={5} required />
                        <button type="submit">Gửi</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
