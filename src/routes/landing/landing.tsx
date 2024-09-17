import React, { useState, useEffect } from "react";
import "./landing.css";
import Carousel from './carousel.tsx';

import header from "../../assets/header.png"
import working from "../../assets/working.png"
import person from "../../assets/person.png"
import partners from "../../assets/partners.png"
import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import adspace from "../../assets/adspace.png"
import services from "../../assets/services.png"
import hardware from "../../assets/hardware.png"
import software from "../../assets/software.png"
import prototype from "../../assets/prototype.png"

const pages = ['Partners', 'Industry', 'About'];



function Landing() {

    const [currentRelationship, setCurrentRelationship] = useState("");

    const handleSelectChange = (event) => {
        setCurrentRelationship(event.target.value);
    };

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
            <div className="w-screen overflow-hidden">
                <NavbarTop />
                <NavbarBottom pages={pages} />
            </div>

            {/* Homepage */}
            <div>
                <div
                    className="overflow-hidden bg-cover h-[85vh]"
                    style={{
                        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 75%), url(${header})`,
                    }}
                >
                    <div className="contents absolute">
                        <div className="px-[10vw] 2xl:px-[20vw] py-16">
                            <h1 className="text-5xl font-bold text-ghost-white mt-10">Welcome to Better</h1>
                            <h1 className="text-5xl font-bold text-ghost-white mt-3">Business Buying</h1>
                            <p className="text-xl text-ghost-white font-mono mt-6">Elevate your business to the next level</p>
                            <button className="text-lg bg-ghost-white hover:bg-slate-300 text-oxford-blue font-bold py-2 px-8 my-8 rounded-sm">
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us */}
            <div className="bg-gradient-to-b from-slate-300 to-ghost-white w-screen overflow-hidden flex items-center justify-center">
                <div className="flex py-20 px-[10vw] 2xl:px-[20vw] w-full">
                    <div className="flex items-center justify-between w-full">
                        <div className="text-black w-128">
                            <div className="text-2xl">We are Canada Computers</div>
                            <p className="mt-4 text-md">
                                Over its 32-year history, Canada Computers & Electronics has continued to provide customers with the best products at the best value. Its first location established itself in the heart of Kingston, Ontario, with an initial vision of providing high-quality products for university students, at a student-friendly price. Striving to serve the great minds of our future, there was no better place to start than a location near Kingston's Queens University.
                            </p>
                            <button className="bg-slate-300 hover:bg-slate-400 text-oxford-blue rounded-sm px-3 py-2 hover:text-oxford-blue mt-4">
                                Learn More About Us
                            </button>
                        </div>
                        <img src={working} alt="Working" className="ml-10 h-72 hidden md:block"/>
                    </div>
                </div>
            </div>


            {/* Solutions */}
            <div className="bg-gradient-to-b from-ghost-white to-white w-screen overflow-hidden">
                <h1 className="text-2xl text-oxford-blue text-center py-6">
                    WHY CHOOSE US
                </h1>
                <h1 className="text-base text-oxford-blue text-lg font-mono text-center mb-6">
                    Productivity and Efficiency Supercharged with the proper Equipment and Technology
                </h1>
                <div>
                    <Carousel slides={slides} />
                </div>
            </div>

            {/* Products */}
            <div className="bg-ghost-white flex flex-col items-center">
                <div className="flex gap-4">
                    <div className="contents">
                        <div className="bg-slate-200 rounded-sm w-80 h-60 mb-4 px-8 py-7 mt-28">
                            <img src={services} className="w-10 mb-2"/>
                            <div className="text-black font-semibold py-1">Our Services</div>
                            <div className="text-black text-sm">Clearing the path ahead with action plans and roadmaps; we provide guidance and mentorship for the entire journey.</div>
                            <div className="cursor-pointer text-blue-600 text-sm py-2">Explore the services we offer →</div>
                        </div>
                        <div className="bg-slate-200 rounded-sm w-164 h-60 mb-4 mt-28">
                            <img src={adspace} className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-b from-ghost-white to-white flex flex-col items-center">
                <div className="flex gap-4">
                    <div className="contents">
                        <div className="bg-slate-200 rounded-sm w-80 h-60 mb-10 px-8 py-7">
                            <img src={hardware} className="w-10 mb-2"/>
                            <div className="text-black font-semibold py-1">Hardware Products</div>
                            <div className="text-black text-sm">Components exceeding in performance and durability for every precision-engineered part or comprehensive hardware system.</div>
                            <div className="cursor-pointer text-blue-600 text-sm py-2">Explore our hardware products →</div>
                        </div>
                        <div className="bg-slate-200 rounded-sm w-80 h-60 mb-10 px-8 py-7">
                            <img src={software} className="w-10 mb-2"/>
                            <div className="text-black font-semibold py-1">Software Products</div>
                            <div className="text-black text-sm">Cutting-edge applications and solutions using the latest technologies and best practices with exceptional quality.</div>
                            <div className="cursor-pointer text-blue-600 text-sm py-2">Explore our software products →</div>
                        </div>
                        <div className="bg-slate-200 rounded-sm w-80 h-60 mb-10 px-8 py-7">
                            <img src={prototype} className="w-10 mb-2"/>
                            <div className="text-black font-semibold py-1">Prototyping and Development</div>
                            <div className="text-black text-sm">Competitive product manufacturing within the tech industry using high quality materials with the best terms, rates, conditions, and prices.</div>
                            <div className="cursor-pointer text-blue-600 text-sm py-2">Explore our sourcing options →</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partners */}
            <div className="bg-white flex flex-col items-center py-4 w-screen overflow-hidden">
                <h1 className="text-2xl text-oxford-blue font-bold font-mono text-center mb-4 mt-10 px-[10vw] 2xl:px-[20vw]">
                    OUR PARTNERS
                    <img src={partners} className="w-[75vw] 2xl:w-[55vw] mb-6 mt-4" />
                </h1>
            </div>

            {/* Banner */}
            <div className="bg-oxford-blue flex flex-col items-center py-8 w-screen overflow-hidden">
                <h1 className="text-2xl text-white font-semibold text-center">
                    TAKE YOUR BUSINESS
                    <span className="text-2xl text-blue-400 font-bold ml-2">TO THE NEXT LEVEL</span>  
                </h1>
            </div>

            {/* Contact Form */}
            <div className="bg-ghost-white w-screen overflow-hidden">
                <div className="flex justify-between px-[10vw] 2xl:px-[20vw]">
                    <div className="contents">
                        {/* Leftside */}
                        <div className="text-oxford-blue py-8 mt-12">
                            <div className="text-3xl font-bold mt-8">CONTACT US FOR THE<br></br>SOLUTIONS YOU NEED</div>
                            <p className="mt-6">Whether you're looking to redefine your office<br></br>workspace, improve day-to-day operations, or
                                <br></br>provide the perfect work-at-home gear for your
                                <br></br>employees, we're here to help you acquire the
                                <br></br>best tech solutions for your business.
                            </p>
                            <img src={person} className="mt-20 max-w-[40vw] rounded-full"></img>
                        </div>

                        {/* Rightside */}
                        <form className="w-full max-w-lg">
                            <div className="flex flex-wrap mb-6 mt-24">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        First Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:bg-white"></input>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Last Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white"></input>
                                </div>
                            </div>
                            <div className="flex flex-wrap px-3 mb-6">
                                <div className="w-full">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Company Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white"></input>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Business Email
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white"></input>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Phone Number
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white"></input>
                                </div>
                            </div>
                            <div className="flex flex-wrap px-3 mb-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    What is your current working relationship with us?
                                </label>
                                <div className="relative w-full">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:bg-white" value={currentRelationship} onChange={handleSelectChange}>
                                    <option value="" disabled selected>Please Select</option>
                                    <option value="working">I'm currently working with Canada Computers</option>
                                    <option value="not-working">I'm not currently working with Canada Computers</option>
                                    <option value="want-to-work">I want to work with Canada Computers</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                                {currentRelationship === "working" && (
                                    <div className="flex flex-wrap py-4">
                                        <div className="w-full md:w-1/2 mb-6 pr-3 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                Account Number
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:bg-white"></input>
                                        </div>
                                        <div className="w-full md:w-1/2 pl-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                Corporate Account Rep
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white"></input>
                                        </div>
                                        <div className="w-full md:w-1/2 mb-6 pr-3 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                Invoice Number
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:bg-white"></input>
                                        </div>
                                        <div className="w-full md:w-1/2 pl-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                Quote/Order Number
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white"></input>
                                        </div>
                                    </div>                                    
                                )}
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6">
                                    Where should we route your inquiry?
                                </label>
                                <div className="relative w-full">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:bg-white">
                                    <option value="" disabled selected>Please Select</option>
                                    <option>General Questions/Comments</option>
                                    <option>Human Resources</option>
                                    <option>Product, Service, or Business Solution</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap px-3 mb-4">
                                <div className="w-full">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        How can we help you?
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-3 leading-tight focus:bg-white"></input>
                                </div>
                            </div>
                            <div className="px-3">
                                <button className=" px-3 mb-28 w-full shadow bg-glaucous hover:bg-blue-900 focus:shadow-outline text-white font-bold py-2 rounded">
                                    Get in Touch
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                
        </>        
    )
}

export default Landing;