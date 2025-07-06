import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout"
import HomePage from './pages/home-page/HomePage';
import AboutPage from './pages/about-page/AboutPage';
import ContactPage from './pages/contact-page/ContactPage';
function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />}/>
          <Route path="contact" element={<ContactPage />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
