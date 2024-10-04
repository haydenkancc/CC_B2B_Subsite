import { useState, useEffect } from "react";
import "./solutions.css"
import CorporateSalesCarousel from "./corporate-sales-carousel.tsx";
import { Link } from "react-router-dom";
import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import healthcare from "../../assets/healthcare.png"
import common from "../../assets/common.png"
import hoffice from "../../assets/hoffice.png"
import meeting from "../../assets/meeting.png"
import hmeeting from "../../assets/hmeeting.png"
import Logo from '../../assets/Canada_Computers_(Icon).svg?react';
import envelope from "../../assets/envelope.png"
import call from "../../assets/call.png"
import { ClipboardText, Cardholder, HandCoins, UserCircleGear, CaretRight, Check, UserFocus, ChartLineUp, Pen, Envelope, Phone } from '@phosphor-icons/react';
import enterprise1 from "../../assets/enterprise1.png"
import enterprise2 from "../../assets/enterprise2.png"
import enterprise3 from "../../assets/enterprise3.png"
import person2 from "../../assets/person2.png"
import solutionsblue from "../../assets/solutionsblue.png"

const pages = ['Partners', 'Industry', 'About'];

function HealthcareSolutions() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    let slides = [
        {
            image: meeting,
            text: "Rudra Casey Samaroo",
            body: "Marketing Coordinator - B2B",
            mail: "rudra.samaroo@cc.ca",
            phone: "905-780-2632",
            
        },
        {
            image: meeting,
            text: "Rudra Casey Samaroo",
            body: "Marketing Coordinator - B2B",
            mail: "rudra.samaroo@cc.ca",
            phone: "905-780-2632",
        },
        {
            image: meeting,
            text: "Rudra Casey Samaroo",
            body: "Marketing Coordinator - B2B",
            mail: "rudra.samaroo@cc.ca",
            phone: "905-780-2632",
        },
    ];

    const [currentRelationship, setCurrentRelationship] = useState("");

    const [isOpen, setIsOpen] = useState(false);

    const handleSelectChange = (event) => {
        setCurrentRelationship(event.target.value);
    };

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);


    return (
        <>

            {/* NavBar */}
            <div className="w-full overflow-hidden">
                <NavbarTop />
                <NavbarBottom pages={pages} />
            </div>

            {/* Homepage */}
            <div
                className="overflow-hidden h-116 w-full bg-left-bottom"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 1) 100%), url(${healthcare})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="contents absolute">
                    <div className="max-w-[1440px] px-4 mx-auto py-24">
                        <p className="text-xl text-ghost-white mt-6">HEALTHCARE</p>
                        <h1 className="text-4xl font-bold text-ghost-white mt-6">Enhance Patient Care and</h1>
                        <h1 className="text-4xl font-bold text-ghost-white mt-2">Empower Your Healthcare</h1>
                        <h1 className="text-4xl font-bold text-ghost-white mt-2">Team to Achieve Excellence</h1>
                    </div>
                </div>
            </div>

            {/* Business */}
            <div className="bg-gradient-to-b from-white to-ghost-white py-4 w-full overflow-hidden items-center justify-between">
                <div className="flex flex-row items-center justify-between max-w-[1440px] px-4 mx-auto">
                    <div className="contents">
                        <div className="w-136">
                            <h1 className="text-3xl text-black mt-12 font-semibold">Transform Healthcare Efficiency with Canada Computers & Electronics</h1>
                        </div>
                        <div className="mt-12 ml-8 w-192 text-black py-6">Whether you're just starting or well into your digital transformation, our expertise is designed to help your healthcare organization harness technology to enhance patient care and streamline operations. We focus on boosting your IT capabilities by improving data resilience, system flexibility, operational efficiency, patient insights, and cybersecurity. Our skilled team will partner with you to craft a comprehensive strategy that not only advances healthcare delivery but also ensures you remain a leader in the field. Let us guide you in achieving superior outcomes and staying ahead in the ever-evolving healthcare landscape.</div>
                    </div>
                </div>
                <div className="flex flex-row mt-10 max-w-[1440px] px-4 mx-auto">
                    <div className="flex flex-col">
                        <div className="w-80 flex flex-row items-center text-center">
                            <Check size={32} weight="light" />
                            <div className="text-black ml-6 font-semibold">Hospitals</div>
                        </div>
                        <div className="text-black text-sm ml-14 mb-4">Streamline your operations with our expert services that simplify and enhance the management of your healthcare resources and workflows.</div>
                    </div>
                    <div className="flex flex-col px-5">
                        <div className="w-80 flex flex-row items-center text-center">
                            <Check size={32} weight="light" />
                            <div className="text-black ml-6 font-semibold">Dentists</div>
                        </div>
                        <div className="text-black text-sm ml-14 mb-4">Elevate your dental practice with our expert solutions that simplify and enhance the management of your patient care and operational efficiency.</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-88 flex flex-row items-center text-center">
                            <Check size={32} weight="light" />
                            <div className="text-black ml-6 font-semibold">Non-Accute and Alternative Care</div>
                        </div>
                        <div className="text-black text-sm ml-14 mb-4">Enhance your non-acute and alternative care services with our expert solutions that refine and elevate the management of your patient care and operational processes.</div>
                    </div>
                </div>
            </div>

            {/* Benefits */}
            <div className="bg-ghost-white flex flex-col items-center py-4 w-full overflow-hidden">
                <h1 className="text-2xl text-black font-bold text-center mt-12">Create Solutions for Every Healthcare Facility</h1>
                <div className="text-black py-6">We’ll design customized strategies to improve efficiency and boost performance in every healthcare setting.</div>
            </div>

            {/* Solutions */}
            <div className="bg-gradient-to-b from-ghost-white to-white">
                <div className="flex flex-col max-w-[1440px] px-4 mx-auto">
                    <div className="flex flex-row justify-between">
                        <div>
                            <div className="rounded-sm w-96 h-52 flex flex-col items-center">
                                <img src={common} className="rounded-sm w-96 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-96 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">Common Areas and Patient Rooms</div>
                                <div className="text-black text-sm">Transform your common areas and patient rooms with our personalized solutions. We focus on creating spaces that are both comfortable and functional, making sure they feel welcoming and supportive. Our designs help improve the atmosphere, making life easier for both patients and healthcare staff.</div>
                                <button className="w-24 flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm py-2.5">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                        <div>
                        <div className="rounded-sm w-96 h-52 flex flex-col items-center">
                                <img src={hoffice} className="rounded-sm w-96 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-96 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">Office, Labs, and Front Desks</div>
                                <div className="text-black text-sm">Upgrade your office spaces, labs, and front desks with our customized solutions. We design environments that combine comfort and efficiency, ensuring smooth operations and a professional atmosphere. Our approach enhances functionality and supports a productive, welcoming experience for both staff and visitors.</div>
                                <button className="w-24 flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm py-2.5">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                        <div>
                        <div className="rounded-sm w-96 h-52 flex flex-col items-center">
                                <img src={hmeeting} className="rounded-sm w-96 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-96 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">Meeting Spaces</div>
                                <div className="text-black text-sm">Revitalize your meeting spaces with our tailored solutions. We create environments that foster collaboration and focus, blending comfort with practicality to ensure productive and engaging meetings. Our designs help make every discussion more effective and every gathering more seamless.</div>
                                <button className="w-24 flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm py-2.5">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Why */}
            <div className="bg-white">
                <div className="bg-white py-4 w-full overflow-hidden max-w-[1440px] px-4 mx-auto">
                    <div className="mb-20">
                        <div className="flex flex-row justify-between items-center gap-x-10">
                            <div className="w-1/2">
                                <h1 className="text-2xl text-black mt-12 font-semibold">Why Partner with Canada Computers & Electronics?</h1>
                                <div className="text-black py-6">Empower your developers with platforms that provide the tools and services they need to create value for your organization without sacrificing the governance, spend control and required security. We'll ensure you have the expertise and technology partnerships to transform your business and stay ahead of what's next.</div>
                            </div>
                            <div className="flex flex-row 2xl:gap-x-4">
                                <div className="mt-6">
                                    <div className="rounded-sm w-40 flex flex-col items-center">
                                        <ClipboardText size={52} weight="light" />
                                    </div>
                                    <div className="rounded-sm w-40 mb-8 flex flex-col items-center text-center">
                                        <div className="text-black">Access to an Account Manager</div>
                                    </div>
                                    <div className="rounded-sm w-40 flex flex-col items-center">
                                        <Cardholder size={52} weight="light" />
                                    </div>
                                    <div className="rounded-sm w-40 flex flex-col items-center text-center">
                                        <div className="text-black">Flexible Payment Options</div>
                                    </div>
                                </div>
                                <div className="ml-12 mt-6">
                                    <div className="rounded-sm w-40 flex flex-col items-center">
                                        <HandCoins size={52} weight="light" />
                                    </div>
                                    <div className="rounded-sm w-40 mb-8 flex flex-col items-center text-center">
                                        <div className="text-black">Education Savings on Products</div>
                                    </div>
                                    <div className="rounded-sm w-40 flex flex-col items-center">
                                        <UserCircleGear size={52} weight="light" />
                                    </div>
                                    <div className="rounded-sm w-40 flex flex-col items-center text-center">
                                        <div className="text-black">Support throughout Product Cycle</div>
                                    </div>
                                </div>
                                <div className="ml-12 mt-6">
                                    <div className="rounded-sm w-40 flex flex-col items-center">
                                        <UserFocus size={52} weight="light" />
                                    </div>
                                    <div className="rounded-sm w-40 mb-8 flex flex-col items-center text-center">
                                        <div className="text-black">Tailored Solutions for Clients</div>
                                    </div>
                                    <div className="rounded-sm w-40 flex flex-col items-center">
                                        <ChartLineUp size={52} weight="light" />
                                    </div>
                                    <div className="rounded-sm w-40 flex flex-col items-center text-center">
                                        <div className="text-black">Performance Analytics</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Succeed */}
            <div className="bg-ghost-white flex flex-col items-center py-4 px-20 w-full overflow-hidden justify-center max-w-[1440px] px-12 mx-auto">
                <div className="text-xl text-oxford-blue font-bold text-center mt-12 mb-10">With unmatched expertise and a deep understanding of healthcare needs, we address challenges and drive innovation across various medical settings. We design customized solutions to improve functionality and elevate patient care, ensuring that every aspect of your facility operates at its best.</div>
            </div>
            <div className="bg-ghost-white items-center w-full overflow-hidden py-4">
                <div className="flex flex-row justify-between max-w-[1440px] px-4 mx-auto">
                    <div className="bg-white rounded-lg shadow flex flex-wrap justify-center gap-10 mb-8 ml-2 2xl:ml-0">
                        <div className="flex flex-col w-96">
                            <div className="flex items-center justify-center">
                                <img src={enterprise1} className="rounded-t-lg w-96 h-48 object-cover" />
                            </div>
                            <div className="px-6">
                                <div className="mt-4 font-bold text-oxford-blue">Doubling Revenue with Cutting-Edge Analytics</div>
                                <div className="mt-2 text-oxford-blue text-sm mb-3">By integrating our advanced analytics platform, Company X increased their revenue by 150% within just six months, transforming their market strategy and driving unprecedented growth.</div>
                                <button className="flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow flex flex-wrap justify-center gap-10 mb-8">
                        <div className="flex flex-col w-96">
                            <div className="flex items-center justify-center">
                                <img src={enterprise2} className="rounded-t-lg w-96 h-48 object-cover" />
                            </div>
                            <div className="px-6">
                                <div className="mt-4 font-bold text-oxford-blue">Transforming Success with Tailored Solutions</div>
                                <div className="mt-2 text-oxford-blue text-sm mb-3">By adopting our custom digital solutions, Company Y improved their operational efficiency by 200% in just three months, revolutionizing their processes and accelerating their growth.</div>
                                <button className="flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow flex flex-wrap justify-center gap-10 mb-8">
                        <div className="flex flex-col w-96">
                            <div className="flex items-center justify-center">
                                <img src={enterprise3} className="rounded-t-lg w-96 h-48 object-cover" />
                            </div>
                            <div className="px-6">
                                <div className="mt-4 font-bold text-oxford-blue">Enhancing Customer Engagement with Advanced CRM Tools</div>
                                <div className="mt-2 text-oxford-blue text-sm mb-3">Using our cutting-edge CRM system, Company Z boosted customer retention rates by 130% within just five months, significantly improving their engagement strategy and customer satisfaction.</div>
                                <button className="flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-oxford-blue hover:bg-slate-700 w-44 h-10 text-white text-md font-semibold mb-10 rounded-sm">See more stories</button>
                </div>
            </div>

            {/* Banner */}
            <div className="bg-oxford-blue py-10 w-full relative">
                <div className="flex flex-row justify-between max-w-[1440px] px-4 mx-auto">
                    <div className="flex flex-col">
                        <div className="text-3xl text-white font-bold mb-4">Empower your Workplace Today</div>
                        <h1 className="text-xl text-white">Contact us today to get started!</h1>
                    </div>
                    <div className="">
                        <Logo className="h-full w-24"></Logo>
                    </div>
                </div>
            </div>

            {/* Corporate Sales Carousel */}
            <div className="bg-white">
                <div className="py-20 max-w-[1440px] px-4 mx-auto">
                    <CorporateSalesCarousel slides={slides} />
                </div>
            </div>

            {/* Contact */}
            <div className="bg-ghost-white w-full py-14 max-w-[1440px] px-44 mx-auto text-center">
                <div className="uppercase text-2xl font-semibold">Contact us for the solutions you need</div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col items-center font-medium text-lg mt-10 w-28 h-18 cursor-pointer" onClick={handleOpen}>
                        <Envelope size={40} weight="light" />
                        <div>Message Us</div>
                    </div>
                    <div className="flex flex-col items-center font-medium text-lg mt-10 w-72">
                        <Phone size={40} weight="light" />
                        <div>Call Us</div>
                        <div className="text-sm">Toll-Free : 1-855-940-2400</div>
                        <div className="text-sm">Toronto/GTA : 905-780-2632</div>
                        <div className="text-sm">Ottawa Area : 613-225-8188</div>
                        <div className="text-sm">Vancouver Area : 604-235-3251</div>
                    </div>
                    <Link to={"/create-account"} className="flex flex-col items-center font-medium text-lg mt-10 w-28 h-18">
                        <Pen size={40} weight="light" />
                        <div>Sign Up</div>
                    </Link>
                </div>

                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-ghost-white rounded shadow-lg w-full max-w-[70vw] relative">
                            <div className="h-[90vh] overflow-y-auto">
                            <div className="flex flex-row">
                                <div className="bg-oxford-blue w-1/2">
                                    {/* <img src={person} className="rounded-l-sm w-1/2 items-center bottom-10 absolute bg-contain" /> */}
                                    <img src={person2} className="rounded-l-sm h-full absolute bg-contain" />
                                </div>
                                <form className="rounded-r-sm w-1/2 h-full">
                                    <img src={solutionsblue} className="h-10 mt-8 px-[3vw]" />
                                    <div className="text-2xl text-black font-semibold mt-4 px-[3vw] text-left">Send us a Message</div>
                                    <div className="text-slate-500 text-sm font-medium text-left py-2.5 px-[3vw]">Have a question or need assistance? Just fill out the form, and we'll get back to you shortly.</div>
                                        <div className="flex flex-wrap mb-2 justify-between">
                                            <div className="w-2/5 ml-[3vw]">
                                                <label className="block tracking-wide text-left text-black text-sm font-bold mb-2">First Name</label>
                                                <input className="appearance-none block w-full bg-white text-black border-2 border-slate-300 rounded py-2 px-3 mb-3 leading-tight" />
                                            </div>
                                            <div className="w-2/5 mr-[3vw]">
                                                <label className="block tracking-wide text-left text-black text-sm font-bold mb-2">Last Name</label>
                                                <input className="appearance-none block w-full bg-white text-black border-2 border-slate-300 rounded py-2 px-3 leading-tight" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap px-[3vw] mb-2">
                                            <div className="w-full">
                                                <label className="block tracking-wide text-left text-black text-sm font-bold mb-2">Company Name</label>
                                                <input className="appearance-none block w-full bg-white text-black border-2 border-slate-300 rounded py-2 px-3 mb-3 leading-tight" />
                                                <label className="block tracking-wide text-left text-black text-sm font-bold mb-2">Business Email</label>
                                                <input className="appearance-none block w-full bg-white text-black border-2 border-slate-300 rounded py-2 px-3 mb-3 leading-tight" />
                                                <label className="block tracking-wide text-left text-black text-sm font-bold mb-2">Phone Number</label>
                                                <input className="appearance-none block w-full bg-white text-black border-2 border-slate-300 rounded py-2 px-3 mb-3 leading-tight" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap px-[3vw] mb-2">
                                            <label className="block tracking-wide text-black text-sm font-bold mb-2">What is your current working relationship with us?</label>
                                            <div className="relative w-full">
                                                <select className="block appearance-none w-full bg-white border-2 border-slate-300 text-black py-2 px-3 pr-8 rounded leading-tight" value={currentRelationship} onChange={handleSelectChange}>
                                                    <option value="" disabled selected>Please Select</option>
                                                    <option value="working">I'm currently working with Canada Computers</option>
                                                    <option value="not-working">I'm not currently working with Canada Computers</option>
                                                    <option value="want-to-work">I want to work with Canada Computers</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                </div>
                                            </div>
                                            {currentRelationship === "working" && (
                                                <div className="flex flex-wrap mt-4 mb-2">
                                                    <div className="w-full md:w-1/2 mb-6 pr-3 md:mb-0">
                                                        <label className="block tracking-wide text-black text-left text-sm font-bold mb-2">Account Number</label>
                                                        <input className="appearance-none block w-full bg-white text-black border-2 border-slate-300 rounded py-2 px-3 mb-3 leading-tight" />
                                                    </div>
                                                    <div className="w-full md:w-1/2 pl-3">
                                                        <label className="block tracking-wide text-black text-left text-sm font-bold mb-2">Corporate Account Rep</label>
                                                        <input className="appearance-none block w-full bg-white text-black border-2 border-slate-300 rounded py-2 px-3 leading-tight" />
                                                    </div>
                                                    <div className="w-full md:w-1/2 mb-6 pr-3 md:mb-0">
                                                        <label className="block tracking-wide text-black text-left text-sm font-bold mb-2">Invoice Number</label>
                                                        <input className="appearance-none block w-full bg-white text-black border-2 border-slate-300 rounded py-2 px-3 leading-tight" />
                                                    </div>
                                                    <div className="w-full md:w-1/2 pl-3">
                                                        <label className="block tracking-wide text-black text-left text-sm font-bold mb-2">Quote/Order Number</label>
                                                        <input className="appearance-none block w-full bg-white text-black border-2 border-slate-300 rounded py-2 px-3 leading-tight" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-wrap px-[3vw] mb-4">
                                            <div className="w-full">
                                                <label className="block tracking-wide text-left text-black text-sm font-bold mt-3 mb-2">How can we be of assistance?</label>
                                                <textarea className="appearance-none block w-full bg-white text-black border-2 border-slate-300 rounded py-2 px-3 mb-3 leading-6" rows="3" />
                                            </div>
                                        </div>
                                        <div className="px-[3vw]">
                                            <button type="submit" className="px-[3vw] mb-6 w-full shadow bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 rounded">
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <button className="absolute top-6 right-8 text-gray-500 text-xl" onClick={handleClose}>
                                ✖
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
}

export default HealthcareSolutions;