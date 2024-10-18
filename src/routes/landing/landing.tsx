import React, { useState, useEffect } from "react";
import "./landing.css";
import Carousel from './carousel.tsx';
import { Link } from "react-router-dom";
import header from "../../assets/header.png"
import working from "../../assets/working.png"
import person from "../../assets/person.png"
import person2 from "../../assets/person2.png"
import partners from "../../assets/partners.png"
import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import adspace from "../../assets/adspace.png"
import services from "../../assets/services.png"
import hardware from "../../assets/hardware.png"
import software from "../../assets/software.png"
import prototype from "../../assets/prototype.png"
import hardwarebg from "../../assets/hardwarebg.png"
import softwarebg from "../../assets/softwarebg.png"
import solutionsblue from "../../assets/solutionsblue.png"
import out from "../../assets/out.png"
import enterpriseicon from "../../assets/enterpriseicon.png"
import healthcareicon from "../../assets/healthcareicon.png"
import educationicon from "../../assets/educationicon.png"
import { CaretRight, Envelope, Phone, Pen } from "@phosphor-icons/react";
import FooterTop from "../../components/footer/footer-top.tsx";
import FooterBottom from "../../components/footer/footer-bottom.tsx";
import Logo from '../../assets/Canada_Computers_(Icon).svg?react';

const pages = ['Partners', 'Industry', 'About'];



function Landing() {

    const [currentRelationship, setCurrentRelationship] = useState("");

    const [hoveredSide, setHoveredSide] = useState('hardware');

    const handleSelectChange = (event) => {
        setCurrentRelationship(event.target.value);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    let slides = [
        {
            image: "https://learn.credly.com/hs-fs/hubfs/shutterstock_370595594-2000x400-sfw-1.webp?width=2000&height=400&name=shutterstock_370595594-2000x400-sfw-1.webp",
            text: "Enterprise Solutions",
            body: "Unlock unparalleled growth and efficiency with our advanced enterprise solutions, crafted to streamline your operations and propel your business forward.",
            link: "/enterprise-solutions",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgCwrQ9IuQEc-Afea7lwVHZoJXvskB0BPdQ&s",
            text: "Healthcare Solutions",
            body: "Enhance patient care and operational excellence with our state-of-the-art healthcare solutions, designed to meet the unique needs of your medical practice or facility.",
            link: "/healthcare-solutions",
        },
        {
            image: "https://www.havanail.gov/wp-content/uploads/header-sunflowers-2000x400.jpg",
            text: "Education Solutions",
            body: "Revolutionize your educational environment with our innovative solutions, offering tools and resources that empower both educators and students for success.",
            link: "/education-solutions",
        }
    ];
    
    return (

        <>

            {/* NavBar */}
            <div className="w-full">
                <NavbarTop />
                {/* <NavbarBottom pages={pages} /> */}
            </div>

            {/* Homepage */}
            <div
                className="overflow-hidden bg-cover h-120"
                style={{
                    backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 75%), url(${header})`,
                    backgroundSize: '100%', // Adjust this value as needed
                    backgroundPosition: 'center'
                }}
            >
                <div className="text-ghost-white h-full">
                    <div className="max-w-[1440px] px-4 mx-auto h-full flex items-center">
                        <div>
                            <h1 className="text-5xl font-bold">Welcome to Better</h1>
                            <h1 className="text-5xl font-bold mt-3">Business Buying</h1>
                            <p className="text-xl mt-6">Elevate your business to the next level</p>
                            <button className="text-lg bg-ghost-white hover:bg-slate-300 text-oxford-blue font-bold py-2 px-8 my-8 rounded-sm">
                                EXPLORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* About Us */}
            <div className="bg-ghost-white max-w-[1440px] px-4 mx-auto">
                <div className="flex flex-row items-center justify-between py-20">
                    <div className="flex flex-col text-black w-1/2">
                        <div className="text-2xl font-semibold">Transform your future with technology.</div>
                        <p className="mt-4">
                        At Canada Computers & Electronics, we empower businesses to thrive in the digital landscape with tailored IT solutions, including hardware, software, and electronics service. Our focus on agility and innovation enhances collaboration and productivity, driving success for your workforce and customers. With industry-specific solutions and ongoing support, we help you navigate the digital world. Connect with us to unlock new growth opportunities!
                        </p>
                        <Link to={"/about"} className="text-oxford-blue font-semibold mt-5 flex flex-row items-center w-48">
                            Learn more about us
                            <CaretRight size={20} weight="light" className="ml-1" />
                        </Link>
                    </div>
                    <img src={working} className="h-64 w-2/5 rounded-sm object-fill" />
                </div>
            </div>

            {/* Solutions */}
            <div className="max-w-[1440px] px-4 mx-auto">
                <div className="bg-ghost-white flex flex-col">
                    <div className="flex flex-row justify-between">
                        <div className="bg-slate-200 rounded-sm w-2/5 h-60 mb-4 px-8 py-7 mt-10 mr-4">
                            <img src={prototype} className="w-12 mb-2"/>
                            <div className="text-black font-semibold py-1">Prototyping and Development</div>
                            <div className="text-black text-sm">Competitive product manufacturing within the tech industry using high quality materials with the best terms, rates, conditions, and prices.</div>
                            <Link to={"/procurement"} className="text-blue-600 text-sm py-2 flex flex-row items-center">
                                Explore our procurement options
                                <CaretRight size={20} weight="light" />
                            </Link>
                        </div>
                        <div className="bg-slate-200 rounded-sm w-3/5 h-60 mb-4 mt-10">
                            <img src={adspace} className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>
                <div className="bg-ghost-white flex flex-col">
                    <div className="flex flex-row justify-between gap-4">
                        <div className="bg-slate-200 rounded-sm w-1/3 h-60 mb-10 px-8 py-7">
                            <img src={enterpriseicon} className="w-12 mb-2"/>
                            <div className="text-black font-semibold py-1">Enterprise Solutions</div>
                            <div className="text-black text-sm">Scalable tools that boost productivity and streamline operations with exceptional reliability.</div>
                            <Link to={"/enterprise-solutions"} className="text-blue-600 text-sm py-2 flex flex-row items-center">
                                Explore our enterprise solutions
                                <CaretRight size={20} weight="light" />
                            </Link>
                        </div>
                        <div className="bg-slate-200 rounded-sm w-1/3 h-60 mb-10 px-8 py-7">
                            <img src={healthcareicon} className="w-12 mb-2"/>
                            <div className="text-black font-semibold py-1">Healthcare Solutions</div>
                            <div className="text-black text-sm">Innovative technologies that improve patient outcomes and accessibility, grounded in best practices.</div>
                            <Link to={"/healthcare-solutions"} className="text-blue-600 text-sm py-2 flex flex-row items-center">
                                Explore our healthcare solutions
                                <CaretRight size={20} weight="light" />
                            </Link>
                        </div>
                        <div className="bg-slate-200 rounded-sm w-1/3 h-60 mb-10 px-8 py-7">
                            <img src={educationicon} className="w-12 mb-2"/>
                            <div className="text-black font-semibold py-1">Education Solutions</div>
                            <div className="text-black text-sm">Engaging platforms that enhance collaboration and critical thinking for educators and students.</div>
                            <Link to={"/education-solutions"} className="text-blue-600 text-sm py-2 flex flex-row items-center">
                                Explore our education solutions
                                <CaretRight size={20} weight="light" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products
            <div className="bg-gradient-to-b from-ghost-white to-white px-[10vw] 2xl:px-[20vw]">
                <div className="flex flex-row justify-between text-center mt-20">
                    <div
                        className="relative bg-oxford-blue w-1/2 h-96 flex flex-col justify-center items-center ease-in-out text-ghost-white"
                        onMouseEnter={() => setHoveredSide('hardware')}
                        onMouseLeave={() => setHoveredSide('hardware')}
                    >
                        {hoveredSide === 'hardware' ? null : (
                            <div
                                className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                                style={{
                                    backgroundImage: `url(${softwarebg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />
                        )}
                        {hoveredSide === 'hardware' && (
                            <div className="font-bold text-xl z-10 relative">
                                Hardware for Enhanced Performance
                            </div>
                        )}
                        {hoveredSide === 'hardware' && (
                            <div className="text-lg font-medium px-10 py-1 z-10 relative flex flex-col items-center">
                                <div className="text-center">
                                    Enhance efficiency and reliability—invest in the best for your business.
                                </div>
                                <Link to={"/hardware"} className="text-sm uppercase border-2 border-ghost-white px-2 py-1 font-semibold mt-4 flex flex-row items-center z-10 relative">
                                    Shop Now
                                </Link>
                            </div>
                        )}
                    </div>

                    <div
                        className="relative bg-slate-200 w-1/2 h-96 flex flex-col justify-center items-center ease-in-out text-oxford-blue"
                        onMouseEnter={() => setHoveredSide('sam')}
                        onMouseLeave={() => setHoveredSide('sam')}
                    >
                        {hoveredSide === 'sam' ? null : (
                            <div
                                className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                                style={{
                                    backgroundImage: `url(${hardwarebg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />
                        )}
                        {hoveredSide === 'sam' && (
                            <div className="font-bold text-xl z-10 relative">
                                Sam for a Smarter Workplace
                            </div>
                        )}
                        {hoveredSide === 'sam' && (
                            <div className="text-lg font-medium px-10 py-1 z-10 relative flex flex-col items-center">
                                <div className="text-center">
                                    Streamline processes and boost productivity—transform the way you work.
                                </div>
                                <Link to={"/sam"} className="text-sm uppercase border-2 border-oxford-blue px-2 py-1 font-semibold mt-4">
                                    Shop Now
                                </Link>
                            </div>
                        )}

                    </div>
                </div>
            </div> */}

            {/* Products */}
            <div className="bg-gradient-to-b from-ghost-white to-white">
                <div className="flex flex-col mt-10 max-w-[1440px] px-4 mx-auto">
                    <div className="flex flex-row justify-between text-center mt-10">
                        <img src={hardwarebg} className="bg-cover w-1/2 rounded-tl-sm" />
                        <div className="relative bg-oxford-blue w-1/2 h-90 flex flex-col justify-center items-center ease-in-out text-ghost-white rounded-tr-sm">
                            <div className="font-bold text-xl relative">
                                Hardware for Enhanced Performance
                            </div>
                            <div className="text-lg font-medium px-10 py-1 relative flex flex-col items-center">
                                <div className="text-center">
                                    Enhance efficiency and reliability—invest in the best for your business.
                                </div>
                                <Link to={"/hardware"} className="text-sm uppercase border-2 border-ghost-white px-2 py-1 font-semibold mt-4 flex flex-row items-center relative">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between text-center">
                        <div className="relative bg-slate-200 w-1/2 h-90 flex flex-col justify-center items-center ease-in-out text-oxford-blue rounded-bl-sm">
                            <div className="font-bold text-xl relative">
                                Software for a Smarter Workplace
                            </div>
                            <div className="text-lg font-medium px-10 py-1 relative flex flex-col items-center">
                                <div className="text-center">
                                    Streamline processes and boost productivity—transform the way you work.
                                </div>
                                <Link to={"/sam"} className="text-sm uppercase border-2 border-oxford-blue px-2 py-1 font-semibold mt-4">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                        <img src={softwarebg} className="bg-contain w-1/2 rounded-br-sm" />
                    </div>

                </div>
            </div>

            {/* Partners */}
            <div className="bg-white flex flex-col items-center py-4 w-full overflow-hidden">
                <h1 className="text-2xl text-oxford-blue font-bold font-mono text-center max-w-[1440px] px-4 mx-auto mb-4 mt-14">
                    SOME OF OUR TECHNOLOGY PARTNERS
                    <img src={partners} className="w-[75vw] 2xl:w-[55vw] mb-6 mt-4" />
                </h1>
            </div>

            <FooterTop />
            <FooterBottom />
                
        </>        
    )
}

export default Landing;