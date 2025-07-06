import AboutSection from "./about-section/AboutSection";
import ContactSection from "./contact-section/ContactSection";
import GallerySection from "./gallery-section/GallerySection";
import MenuSection from "./menu-section/MenuSection";
import WelcomeSection from "./welcome-section/WelcomeSection";

function HomePage(){

    return (
        <div>
            <WelcomeSection />
            <AboutSection />
            <GallerySection/>
            <MenuSection />
            <ContactSection />
        </div>
        
    )
}

export default HomePage