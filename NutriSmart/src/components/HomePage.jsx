import NavBar from "./Navbar"
import Inicio from "./Inicio";
import ParaTi from "./ParaTi";
import ComoFunciona from "./ComoFunciona";
import Testimonios from "./Testimonios";
import CTA from "./CTA";
import Footer from "./Footer"

const HomePage = () => {
    return (
    <>
        <NavBar/>
        <Inicio/>
        <ParaTi/>
        <Testimonios></Testimonios>
        <ComoFunciona/>
        <CTA></CTA>
        <Footer></Footer>
    </>
    );
};

export default HomePage