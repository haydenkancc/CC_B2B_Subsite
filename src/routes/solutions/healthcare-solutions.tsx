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
import FooterTop from "../../components/footer/footer-top.tsx";
import FooterBottom from "../../components/footer/footer-bottom.tsx";

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
            <div className="w-full">
                <NavbarTop />
                {/* <NavbarBottom pages={pages} /> */}
            </div>

            {/* Homepage */}
            <div
                className="overflow-hidden h-120 w-full bg-left-bottom"
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
            <div className="bg-ghost-white items-center w-full justify-center">
                <div className="py-4 px-20 max-w-[1440px] px-12 mx-auto">
                    <div className="text-xl text-oxford-blue font-bold text-center mt-12 mb-10">With unmatched expertise and a deep understanding of healthcare needs, we address challenges and drive innovation across various medical settings. We design customized solutions to improve functionality and elevate patient care, ensuring that every aspect of your facility operates at its best.</div>
                </div>
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

            {/* Corporate Sales Carousel */}
            <div className="bg-ghost-white">
                <div className="pt-5 pb-20 max-w-[1440px] px-4 mx-auto">
                    <CorporateSalesCarousel slides={slides} />
                </div>
            </div>

            <FooterTop />
            <FooterBottom />

        </>
    );
}

export default HealthcareSolutions;