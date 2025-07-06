import AboutImage from "../../../assets/images/about-image.jpeg"
import AboutButton from "../../../components/ui/button/AboutButton"
import "./style.css"
export default function AboutSection() {

    return (
        <section id="about-section" className="about-section">
            <article className="about-text">
                <h2 className="section-title">Về Nhà hàng Cơm Bình Dân</h2>
                <div className="section-paragraph">
                    <p className="section-text">
                    Tọa lạc tại trung tâm Hà Nội, <strong>Nhà hàng Cơm Bình Dân</strong> mang đến cho thực khách những bữa ăn
                    đậm đà hương vị quê hương trong một không gian ấm cúng và hiện đại.
                </p>
                <p className="section-text">
                    Thực đơn của chúng tôi được xây dựng từ những nguyên liệu tươi ngon nhất, đảm bảo vệ sinh an toàn thực phẩm,
                    cùng sự kết hợp hài hòa giữa hương vị truyền thống và phong cách phục vụ chuyên nghiệp.
                </p>
                <p className="section-text">
                    Dù là bữa trưa văn phòng, bữa tối gia đình hay những buổi họp mặt thân mật, <strong>Nhà hàng Cơm Bình Dân</strong> luôn sẵn sàng
                    phục vụ bạn với chất lượng tốt nhất và giá cả hợp lý.
                </p>
                </div>
                <AboutButton/>
            </article>
            <div className="about-image">
                <img src={AboutImage} />
            </div>
            
        </section>

    )
}
