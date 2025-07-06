import BookingButton from "../../ui/button/BookingButton";
import SigninButton from "../../ui/button/SignInButton";
import Logo from "./Logo";
import Navigation from "./Navigation";
import "./style.css";

function Header() {

  

  return (
    <header className="header">
        <div className="upper-header">
          <div className="header-slot"><BookingButton/></div>
          <div className="header-slot"><Logo/></div>
          <div className="header-slot"><SigninButton/></div>
        </div>
        <div className="navbar"><Navigation/></div>
    </header>
  );
}

export default Header;
