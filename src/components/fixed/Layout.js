import { Outlet } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Contact />
            <Footer />
        </>
    )
}

export default Layout;