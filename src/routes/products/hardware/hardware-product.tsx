import { useEffect } from "react";
import NavbarTop from "../../../components/navbar/navbar-top";
import FooterTop from "../../../components/footer/footer-top";
import FooterBottom from "../../../components/footer/footer-bottom";
import HardwareDisplay from "./hardware-display";
import { Link } from "react-router-dom";

function HardwareProduct() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    
    return (
        <div>
            {/* NavBar */}
            <div className="w-full">
                <NavbarTop />
            </div>

            <div className="max-w-[1440px] px-4 py-6 mx-auto font-medium flex flex-row">
                <Link to="/" className="hover:text-slate-500">Home</Link>
                <div className="px-2">/</div>
                <Link to="/hardware" className="hover:text-slate-500">Hardware</Link>
                <div className="px-2">/</div>
                <div>SUPERPC9000</div>
            </div>
            <div className="pb-8">
                <HardwareDisplay />
            </div>
            <FooterTop />
            <FooterBottom />
        </div>
    )
}

export default HardwareProduct;