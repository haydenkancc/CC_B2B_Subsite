import React, { useState, useEffect } from "react";
import "./landing.css";
import Carousel from './carousel.tsx';
import { Link } from "react-router-dom";

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
import hardwarebg from "../../assets/hardwarebg.png"
import softwarebg from "../../assets/softwarebg.png"

import { CaretRight, Envelope, Phone, Pen } from "@phosphor-icons/react";

const pages = ['Partners', 'Industry', 'About'];



function Landing() {

    const [currentRelationship, setCurrentRelationship] = useState("");

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
            <div className="w-full overflow-hidden">
                <NavbarTop />
                <NavbarBottom pages={pages} />
            </div>

            {/* Homepage */}
            <div>
                <div
                    className="overflow-hidden bg-cover h-116"
                    style={{
                        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 75%), url(${header})`,
                    }}
                >
                    <div className="text-ghost-white h-full">
                        <div className="px-[10vw] 2xl:px-[20vw] h-full flex items-center">
                            <div>
                                <h1 className="text-5xl font-bold">Welcome to Better</h1>
                                <h1 className="text-5xl font-bold mt-3">Business Buying</h1>
                                <p className="text-xl mt-6">Elevate your business to the next level</p>
                                <button className="text-lg bg-ghost-white hover:bg-slate-300 text-oxford-blue font-bold py-2 px-8 my-8 rounded-sm">
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us */}
            <div className="bg-ghost-white px-[10vw] 2xl:px-[20vw]">
                <div className="flex flex-row items-center justify-between gap-x-12 py-20">
                    <div className="flex flex-col text-black w-1/2">
                        <div className="text-2xl font-medium">We are Canada Computers & Electronics</div>
                        <p className="mt-4">
                            We empower businesses to thrive in a rapidly evolving digital landscape. Our comprehensive IT solutions enable organizations to harness the power of technology, fostering agility and innovation across teams. We'll drive success for both your customers and your workforce.
                        </p>
                        <Link to={"/enterprise-solutions"} className="text-oxford-blue text-sm font-semibold mt-5 flex flex-row items-center">
                            Learn more about us
                            <CaretRight size={20} weight="light" />
                        </Link>
                        <Link to={"/enterprise-solutions"} className="text-oxford-blue text-sm font-semibold mt-3 flex flex-row items-center">
                            Explore career opportunities
                            <CaretRight size={20} weight="light" />
                        </Link>
                    </div>
                    <img src={working} className="w-1/2 h-72 w-116 rounded-sm object-fill" />
                </div>
            </div>

            {/* Solutions */}
            <div className="bg-gradient-to-b from-ghost-white to-white w-full">
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

            {/* <div className="bg-white px-[10vw] 2xl:px-[20vw]">
                <div className="flex flex-row justify-between text-center mt-20">
                    <div className="relative bg-teal-500 w-1/2 h-96 flex flex-col justify-center items-center ease-in-out text-oxford-blue">
                        <div className="font-bold text-xl z-10 relative">
                            Hardware for Enhanced Performance
                        </div>
                        <div className="text-lg font-medium px-10 py-1 z-10 relative">
                            Enhance efficiency and reliability—invest in the best for your business.
                        </div>
                        <Link to={"/hardware"} className="text-sm uppercase border-2 border-oxford-blue px-2 py-1 font-semibold mt-4 flex flex-row items-center z-10 relative">
                            Shop Now
                        </Link>
                        <div
                            className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                            style={{
                                backgroundImage: `url(${hardwarebg})`,
                                opacity: 0.5,
                                backgroundSize: 'cover', // Ensure the image covers the entire area
                                backgroundPosition: 'center', // Center the image
                                backgroundRepeat: 'no-repeat' // Prevent the image from repeating
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.opacity = 0.5;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.opacity = 0; // Reset to lower opacity
                            }}
                        />

                    </div>
                    <div className="relative bg-gray-100 w-1/2 h-96 flex flex-col justify-center items-center ease-in-out text-oxford-blue">
                        <div className="font-bold text-xl z-10 relative">
                            Software for a Smarter Workplace
                        </div>
                        <div className="text-lg font-medium px-10 py-1 z-10 relative">
                            Streamline processes and boost productivity—transform the way you work.
                        </div>
                        <Link to={"/software"} className="text-sm uppercase border-2 border-oxford-blue px-2 py-1 font-semibold mt-4 flex flex-row items-center z-10 relative">
                            Shop Now
                        </Link>
                        <div
                            className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                            style={{ backgroundImage: `url(${softwarebg})`, opacity: 0.5 }} // Set lower opacity here
                            onMouseEnter={(e) => {
                                e.currentTarget.style.opacity = 0.5;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.opacity = 0; // Reset to lower opacity
                            }}
                        />
                    </div>
                </div>
            </div> */}

            {/* Products */}
            <div className="bg-ghost-white flex flex-col px-[10vw] 2xl:px-[20vw]">
                <div className="flex flex-row justify-between">
                    <div className="bg-slate-200 rounded-sm w-2/5 h-60 mb-4 px-8 py-7 mt-28 mr-4">
                        <img src={services} className="w-10 mb-2"/>
                        <div className="text-black font-semibold py-1">Our Services</div>
                        <div className="text-black text-sm">Clearing the path ahead with action plans and roadmaps; we provide guidance and mentorship for the entire journey.</div>
                        <Link to={"/hardware"} className="text-blue-600 text-sm py-2 flex flex-row items-center">
                            Explore the servies we offer
                            <CaretRight size={20} weight="light" />
                        </Link>
                    </div>
                    <div className="bg-slate-200 rounded-sm w-3/5 h-60 mb-4 mt-28">
                        <img src={adspace} className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-b from-ghost-white to-white flex flex-col px-[10vw] 2xl:px-[20vw]">
                <div className="flex flex-row justify-between gap-4">
                    <div className="bg-slate-200 rounded-sm w-1/3 h-60 mb-10 px-8 py-7">
                        <img src={hardware} className="w-10 mb-2"/>
                        <div className="text-black font-semibold py-1">Hardware Products</div>
                        <div className="text-black text-sm">Components exceeding in performance and durability for every precision-engineered part or comprehensive hardware system.</div>
                        <Link to={"/hardware"} className="text-blue-600 text-sm py-2 flex flex-row items-center">
                            Explore our hardware products
                            <CaretRight size={20} weight="light" />
                        </Link>
                    </div>
                    <div className="bg-slate-200 rounded-sm w-1/3 h-60 mb-10 px-8 py-7">
                        <img src={software} className="w-10 mb-2"/>
                        <div className="text-black font-semibold py-1">Software Products</div>
                        <div className="text-black text-sm">Cutting-edge applications and solutions using the latest technologies and best practices with exceptional quality.</div>
                        <Link to={"/hardware"} className="text-blue-600 text-sm py-2 flex flex-row items-center">
                            Explore our software products
                            <CaretRight size={20} weight="light" />
                        </Link>
                    </div>
                    <div className="bg-slate-200 rounded-sm w-1/3 h-60 mb-10 px-8 py-7">
                        <img src={prototype} className="w-10 mb-2"/>
                        <div className="text-black font-semibold py-1">Prototyping and Development</div>
                        <div className="text-black text-sm">Competitive product manufacturing within the tech industry using high quality materials with the best terms, rates, conditions, and prices.</div>
                        <Link to={"/procurement"} className="text-blue-600 text-sm py-2 flex flex-row items-center">
                            Explore our procurement options
                            <CaretRight size={20} weight="light" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Partners */}
            <div className="bg-white flex flex-col items-center py-4 w-full overflow-hidden px-[10vw] 2xl:px-[20vw]">
                <h1 className="text-2xl text-oxford-blue font-bold font-mono text-center mb-4 mt-10">
                    OUR PARTNERS
                    <img src={partners} className="w-[75vw] 2xl:w-[55vw] mb-6 mt-4" />
                </h1>
            </div>

            {/* Banner */}
            <div className="bg-oxford-blue flex flex-col items-center py-8 w-full overflow-hidden">
                <h1 className="text-2xl text-white font-semibold text-center">
                    TAKE YOUR BUSINESS
                    <span className="text-2xl text-blue-400 font-bold ml-2">TO THE NEXT LEVEL</span>  
                </h1>
            </div>
            
            {/* Contact */}
            <div className="bg-ghost-white w-full px-[10vw] 2xl:px-[20vw] text-center">
                <div className="uppercase text-2xl mt-10 font-semibold">Contact us for the solutions you need</div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col items-center font-medium text-lg mt-10 w-1/3 bg-blue-200">
                        <Envelope size={40} weight="light" />
                        <div>Message Us</div>
                    </div>
                    <div className="flex flex-col items-center font-medium text-lg mt-10 w-1/3 bg-blue-200">
                        <Phone size={40} weight="light" />
                        <div>Call Us</div>
                    </div>
                    <div className="flex flex-col items-center font-medium text-lg mt-10 w-1/3 bg-blue-200">
                        <Pen size={40} weight="light" />
                        <div>Apply for a Corporate Account</div>
                    </div>
                </div>
            </div>

            <div className="bg-ghost-white w-full px-[10vw] 2xl:px-[20vw] text-center">
                <div className="uppercase text-2xl mt-10 font-semibold">Contact us for the solutions you need</div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col items-center font-medium text-lg mt-10 w-1/3 bg-blue-200 cursor-pointer" onClick={handleOpen}>
                        <Envelope size={40} weight="light" />
                        <div>Message Us</div>
                    </div>
                </div>

                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded shadow-lg w-full max-w-lg relative">
                            <div className="px-6 h-[80vh] overflow-y-auto">
                                <form>
                                    <h2 className="text-xl font-semibold p-6">Send us a Message</h2>
                                    <div className="flex flex-wrap mb-4">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2">First Name</label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:bg-white" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2">Last Name</label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap px-3 mb-6">
                                        <div className="w-full">
                                            <label className="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2">Company Name</label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white" />
                                            <label className="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2">Business Email</label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white" />
                                            <label className="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2">Phone Number</label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap px-3 mb-6">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">What is your current working relationship with us?</label>
                                        <div className="relative w-full">
                                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:bg-white" value={currentRelationship} onChange={handleSelectChange}>
                                                <option value="" disabled>Please Select</option>
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
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Account Number</label>
                                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:bg-white" />
                                                </div>
                                                <div className="w-full md:w-1/2 pl-3">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Corporate Account Rep</label>
                                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white" />
                                                </div>
                                                <div className="w-full md:w-1/2 mb-6 pr-3 md:mb-0">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Invoice Number</label>
                                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:bg-white" />
                                                </div>
                                                <div className="w-full md:w-1/2 pl-3">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Quote/Order Number</label>
                                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white" />
                                                </div>
                                            </div>
                                        )}
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6">Where should we route your inquiry?</label>
                                        <div className="relative w-full">
                                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:bg-white">
                                                <option value="" disabled>Please Select</option>
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
                                        <label className="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2">How can we help you?</label>
                                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 mb-3 leading-tight focus:bg-white" rows="3" />
                                    </div>

                                    </div>
                                    <div className="px-3">
                                        <button type="submit" className="px-3 mb-6 w-full shadow bg-glaucous hover:bg-blue-900 focus:shadow-outline text-white font-bold py-2 rounded">
                                            SEND MESSAGE
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <button className="absolute top-2 right-8 text-gray-500" onClick={handleClose}>
                                ✖
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Contact Form */}
            {/* <div className="bg-ghost-white w-full overflow-hidden">
                <div className="flex justify-between px-[10vw] 2xl:px-[20vw]">
                    <div className="contents">

                        <div className="text-oxford-blue py-8 mt-12">
                            <div className="text-3xl font-bold mt-8">CONTACT US FOR THE<br></br>SOLUTIONS YOU NEED</div>
                            <p className="mt-6">Whether you're looking to redefine your office<br></br>workspace, improve day-to-day operations, or
                                <br></br>provide the perfect work-at-home gear for your
                                <br></br>employees, we're here to help you acquire the
                                <br></br>best tech solutions for your business.
                            </p>
                            <img src={person} className="mt-20 max-w-[40vw] rounded-full"></img>
                        </div>

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
            </div> */}
                
        </>        
    )
}

export default Landing;