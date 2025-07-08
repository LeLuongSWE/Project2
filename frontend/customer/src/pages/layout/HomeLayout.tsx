import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer"

import {Outlet} from "react-router-dom"


function HomeLayout(){

    return (
        <div>

            <Header />

            <Outlet />

            <Footer />

        </div>

    )
}

export default HomeLayout;