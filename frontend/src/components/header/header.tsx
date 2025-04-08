import Logo from "../../assets/logoco.png";
import "./style.css";

function Header() {
  return (
    <div>
      <header id="header">
        <img id="logo" src={Logo} alt={"Logo"}></img>
        <button id="booking-button">Book a table</button>
      </header>
      <nav id="nav">
        <a id="home" href="/">HOME</a>
        <a id="about" href="#about">ABOUT</a>
        <a id="menu" href="#menu">MENU</a>
        <a id="event" href="#event">EVENT</a>
        <a id="location" href="#location">LOCATION</a>
        <a id="gallery" href="#gallery">GALLERY</a>
        <a id="contact" href="#contact">CONTACT US</a>
      </nav>
    </div>
  );
}

export default Header;
