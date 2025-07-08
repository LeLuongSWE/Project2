import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/layout/HomeLayout"
import HomePage from './pages/home-page/HomePage';
import AboutPage from './pages/about-page/AboutPage';
import ContactPage from './pages/contact-page/ContactPage';
import SignInLayout from './pages/layout/SignInLayout';
import SignInPage from './pages/signin-page/SignInPage';
function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SignInLayout/>}>
          <Route path='/signin' element={<SignInPage />}/>
          <Route path='/signup' />

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
