import { useEffect } from "react";
import "./hardware.css"

import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import typing from '../../assets/typing.png'

const pages = ['Partners', 'Industry', 'About'];

function Hardware() {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [location]);

    return (
        <>

            {/* NavBar */}
            <div className="w-screen overflow-hidden">
                <NavbarTop />
                <NavbarBottom pages={pages} />
            </div>

            {/* Homepage */}
            <div
                className="overflow-hidden h-64 w-[100vw] bg-center"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%), url(${typing})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="contents absolute">
                    <div className="px-[10vw] 2xl:px-[20vw] py-16 w-192">
                        <div className="bg-oxford-blue">
                            <p className="text-4xl text-ghost-white">HARDWARE</p>
                            <h1 className="text-l text-ghost-white mt-6">Explore IT hardware and technology for your business, including desktops, laptops, monitors, cables, printers, and more.</h1>
                        </div>
                    </div>
                </div>
            </div>

            

        </>
    );
}

export default Hardware;