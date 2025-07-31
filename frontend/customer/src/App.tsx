import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/layout/HomeLayout"
import HomePage from './pages/home-page/HomePage';
import AboutPage from './pages/about-page/AboutPage';
import ContactPage from './pages/contact-page/ContactPage';
import LoginLayout from './pages/layout/LoginLayout';
import LoginPage from './pages/login-page/LoginPage';
import RegisterPage from './pages/register-page/RegisterPage';
import ForgetPasswordPage from './pages/forget-password-page/ForgetPasswordPage';
import { ForgetPasswordOtpPage } from './pages/forget-password-page/ForgetPasswordOtpPage';
function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginLayout/>}>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/forget-password' element={<ForgetPasswordPage />}/>
          <Route path='/forget-password/otp' element={<ForgetPasswordOtpPage />}/>

        </Route>

        <Route path='/' element={<HomeLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />}/>
          <Route path="contact" element={<ContactPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
