import React, { useState, useEffect } from "react";
import "./solutions.css"
import CorporateSalesCarousel from "./corporate-sales-carousel.tsx";

import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import enterprise from "../../assets/enterprise.png"
import home from "../../assets/home.png"
import office from "../../assets/office.png"
import meeting from "../../assets/meeting.png"
import Logo from '../../assets/Canada_Computers_(Icon).svg?react';
import chris from "../../assets/chris.png"
import envelope from "../../assets/envelope.png"
import message from "../../assets/message.png"
import call from "../../assets/call.png"
import { ClipboardText, Cardholder, HandCoins, UserCircleGear, CaretRight, Check } from '@phosphor-icons/react';
import story1 from "../../assets/story1.png"

const pages = ['Partners', 'Industry', 'About'];

function EnterpriseSolutions() {

    const [currentRelationship, setCurrentRelationship] = useState("");

    const handleSelectChange = (event) => {
        setCurrentRelationship(event.target.value);
    };

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [location]);

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

    return (
        <>

            {/* NavBar */}
            <div className="w-screen overflow-hidden">
                <NavbarTop />
                <NavbarBottom pages={pages} />
            </div>

            {/* Homepage */}
            <div
                className="overflow-hidden h-116 w-[100vw] bg-center"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 1) 100%), url(${enterprise})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="contents absolute">
                    <div className=" px-[10vw] py-24">
                        <p className="text-xl text-ghost-white mt-6">BUSINESS</p>
                        <h1 className="text-4xl font-bold text-ghost-white mt-6">Fulfill the Needs of Your</h1>
                        <h1 className="text-4xl font-bold text-ghost-white mt-2">Employees and Unlock</h1>
                        <h1 className="text-4xl font-bold text-ghost-white mt-2">Your Team's True Potential</h1>
                    </div>
                </div>
            </div>

            {/* Business */}
            <div className="bg-gradient-to-b from-white to-ghost-white py-4 w-screen overflow-hidden flex items-center justify-center">
                <div className="flex flex-row items-center justify-between">
                    <div className="contents">
                        <div className="mt-10">
                            <h1 className="text-3xl text-black mt-12 font-semibold">Gain Business Agility Through</h1>
                            <h1 className="text-3xl text-black mt-2 font-semibold">Canada Computers & Electronics</h1>
                            <div className="text-black py-6">Regardless of where you are on your cloud journey, our<br></br> 
                            services and expertise can empower your team to innovate<br></br> with technology and mature your business processes. We <br></br>
                            focus on helping organizations improve their IT maturity <br></br>through advancement in resiliency, portability, manageability,<br></br>
                             observability and cybersecurity. Our team of experts will help <br></br>you build a cohesive strategyto drive business value and <br></br>extend your lead over the competition.</div>
                        </div>
                        <div className="ml-24 mt-20">
                            <div className="flex flex-col">
                                <div className="w-96 flex flex-row items-center text-center">
                                    <Check size={32} weight="light" />
                                    <div className="text-black ml-6 font-semibold">Simply Buying</div>
                                </div>
                                <div className="text-black text-sm ml-14 mb-4">Experience a hassle-free purchasing process with our streamlined <br></br>solutions designed to make buying easy and efficient.</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="w-96 flex flex-row items-center text-center">
                                    <Check size={32} weight="light" />
                                    <div className="text-black ml-6 font-semibold">Reduce Costs</div>
                                </div>
                                <div className="text-black text-sm ml-14 mb-4">Cut expenses effectively with our cost-reduction strategies <br></br>tailored to maximize your budget and increase your savings.</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="w-96 flex flex-row items-center text-center">
                                    <Check size={32} weight="light" />
                                    <div className="text-black ml-6 font-semibold">Manage Purchasing</div>
                                </div>
                                <div className="text-black text-sm ml-14 mb-4">Take control of your procurement with our expert services that<br></br> simplify and enhance the management of your purchasing needs.</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="w-96 flex flex-row items-center text-center">
                                    <Check size={32} weight="light" />
                                    <div className="text-black ml-6 font-semibold">Streamline Procurement</div>
                                </div>
                                <div className="text-black text-sm ml-14 mb-4">Optimize your procurement process with our solutions that<br></br> streamline every step, ensuring efficiency and smooth operations.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits */}
            <div className="bg-ghost-white flex flex-col items-center py-4 w-screen overflow-hidden">
                <h1 className="text-2xl text-black font-bold text-center mt-12">Prepare Solutions for Every Space</h1>
                <div className="text-black py-6">We'll craft tailored solutions that optimize functionality and enhance performance in every space.</div>
            </div>

            {/* Solutions */}
            <div className="bg-gradient-to-b from-ghost-white to-white flex flex-col items-center">
                <div className="flex gap-x-16">
                    <div className="contents">
                        <div>
                            <div className="rounded-sm w-80 h-60 flex flex-col items-center">
                                <img src={home} className="rounded-sm w-80"/>
                            </div>
                            <div className="rounded-sm w-80 mb-8 flex flex-col">
                                <div className="text-black font-semibold mb-2">Working from Home</div>
                                <div className="text-black text-sm">Transform your home office into a productivity powerhouse with our tailored solutions. Ergonomic workspaces that blend comfort with functionality, ensuring you can work efficiently while staying focused.</div>
                                <div className="cursor-pointer text-blue-600 text-sm py-2.5">Read More →</div>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-sm w-80 h-60 flex flex-col items-center">
                                <img src={office} className="rounded-sm w-80"/>
                            </div>
                            <div className="rounded-sm w-80 mb-10 flex flex-col">
                                <div className="text-black font-semibold mb-2">Office Workplace</div>
                                <div className="text-black text-sm">Revitalize your office workplace with our expert solutions designed to enhance collaboration and efficiency. With strategic space planning and advanced technology integration, the office will develop into a dynamic and productive workspace that drives organizational success.</div>
                                <div className="cursor-pointer text-blue-600 text-sm py-2.5">Read More →</div>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-sm w-80 h-60 flex flex-col items-center">
                                <img src={meeting} className="rounded-sm w-80"/>
                            </div>
                            <div className="rounded-sm w-80 mb-10 flex flex-col">
                                <div className="text-black font-semibold mb-2">Meeting Spaces</div>
                                <div className="text-black text-sm">Elevate your meeting spaces with solutions that foster effective communication and collaboration. Versatile and technology-enabled meeting rooms that facilitate seamless presentations and discussions that will make every interaction productive and impactful.</div>
                                <div className="cursor-pointer text-blue-600 text-sm py-2.5 mb-4">Read More →</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Why */}
            <div className="bg-white py-4 w-screen overflow-hidden flex items-center justify-center">
                <div className="flex flex-row items-center justify-between mb-20">
                    <div className="contents">
                        <div className="">
                            <h1 className="text-2xl text-black mt-12 font-semibold">Why Partner with Us?</h1>
                            <div className="text-black py-6">Empower your developers with platforms that provide <br></br>the tools and services they need to create value for your <br></br>organization without sacrificing the governance, <br></br>spend control and required security. We ensure you <br></br>have the expertise and technology partnerships to<br></br> transform your business and stay ahead of what's next.</div>
                        </div>
                        <div className="ml-32 mt-6">
                            <div className="rounded-sm w-40 flex flex-col items-center">
                                <ClipboardText size={56} weight="light" />
                            </div>
                            <div className="rounded-sm w-40 mb-8 flex flex-col items-center text-center">
                                <div className="text-black">Access to an Account Manager</div>
                            </div>
                            <div className="rounded-sm w-40 flex flex-col items-center">
                                <Cardholder size={56} weight="light" />
                            </div>
                            <div className="rounded-sm w-40 flex flex-col items-center text-center">
                                <div className="text-black">Flexible Payment Options</div>
                            </div>
                        </div>
                        <div className="ml-12 mt-6">
                            <div className="rounded-sm w-40 flex flex-col items-center">
                                <HandCoins size={56} weight="light" />
                            </div>
                            <div className="rounded-sm w-40 mb-8 flex flex-col items-center text-center">
                                <div className="text-black">Education Savings on Products</div>
                            </div>
                            <div className="rounded-sm w-40 flex flex-col items-center">
                                <UserCircleGear size={56} weight="light" />
                            </div>
                            <div className="rounded-sm w-40 flex flex-col items-center text-center">
                                <div className="text-black">Support throughout Product Cycle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Succeed */}
            <div className="bg-ghost-white flex flex-col items-center py-4 px-20 w-screen overflow-hidden">
                <div className="text-xl text-oxford-blue font-bold text-center mt-12 mb-10">With unparalleled expertise and delivery capabilities, we tackle complexity and drive innovation across diverse <br></br>environments. We'll craft tailored solutions that optimize functionality and enhance performance.</div>
            </div>
            <div className="bg-ghost-white flex flex-col items-center py-4 px-20 w-screen overflow-hidden">
                <div className="flex flex-row gap-16">
                    <div className="bg-white rounded-lg shadow flex flex-wrap justify-center gap-10 mb-8">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center">
                                <img src={story1} className="rounded-lg w-88 h-48 object-cover" />
                            </div>
                            <div className="w-88 mt-4 font-bold text-oxford-blue px-6">Doubling Revenue with Cutting-Edge Analytics</div>
                            <div className="w-88 mt-2 text-oxford-blue text-sm px-6 mb-3">By integrating our advanced analytics platform, Company X increased their revenue by 150% within just six months, transforming their market strategy and driving unprecedented growth.</div>
                            <button className="flex flex-row items-center mb-6">
                                <div className= "text-oxford-blue text-sm px-2 ml-4">Read More</div>
                                <CaretRight size={20} weight="light" />
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow flex flex-wrap justify-center gap-10 mb-8">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center">
                                <img src={story1} className="rounded-lg w-88 h-48 object-cover" />
                            </div>
                            <div className="w-88 mt-4 font-bold text-oxford-blue px-6">Doubling Revenue with Cutting-Edge Analytics</div>
                            <div className="w-88 mt-2 text-oxford-blue text-sm px-6 mb-3">By integrating our advanced analytics platform, Company X increased their revenue by 150% within just six months, transforming their market strategy and driving unprecedented growth.</div>
                            <button className="flex flex-row items-center mb-6">
                                <div className= "text-oxford-blue text-sm px-2 ml-4">Read More</div>
                                <CaretRight size={20} weight="light" />
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow flex flex-wrap justify-center gap-10 mb-8">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center">
                                <img src={story1} className="rounded-lg w-88 h-48 object-cover" />
                            </div>
                            <div className="w-88 mt-4 font-bold text-oxford-blue px-6">Doubling Revenue with Cutting-Edge Analytics</div>
                            <div className="w-88 mt-2 text-oxford-blue text-sm px-6 mb-3">By integrating our advanced analytics platform, Company X increased their revenue by 150% within just six months, transforming their market strategy and driving unprecedented growth.</div>
                            <button className="flex flex-row items-center mb-6">
                                <div className= "text-oxford-blue text-sm px-2 ml-4">Read More</div>
                                <CaretRight size={20} weight="light" />
                            </button>
                        </div>
                    </div>
                </div>
                <button className="bg-oxford-blue hover:bg-slate-700 w-40 h-8 text-white text-sm font-semibold mb-10 rounded-sm">See more stories</button>
            </div>

            {/* Banner */}
            <div className="bg-oxford-blue flex py-10 w-screen overflow-hidden relative">
                <div className="contents">
                    <div>
                        <div className="text-3xl text-white font-bold ml-[10vw] mb-4">Empower your Workplace Today</div>
                        <h1 className="text-xl text-white ml-[10vw]">Contact us today to get started!</h1>
                    </div>
                    <div className="absolute right-[10vw]">
                        <Logo className="h-full w-24"></Logo>
                    </div>
                </div>
            </div>

            {/* Corporate Sales Carousel */}
            <div className="bg-white">
                <div className="py-20">
                    <CorporateSalesCarousel slides={slides} />
                </div>
            </div>

            {/* Apply */}
            <div className="bg-white flex flex-col items-center">
                <div className="text-2xl text-black font-bold uppercase mb-4">Apply for an account today</div>
                <div className="flex flex-row items-center py-3 mb-20">
                    <img src={envelope} className="w-6"/>
                    <div className="cursor-pointer text-black ml-2">corporate@canadacomputers.com</div>
                    <img src={call} className="w-6 ml-24"/>
                    <div className="cursor-pointer text-black ml-2">Telephone: 905-780-2632</div>
                </div>
            </div>

        </>
    );
}

export default EnterpriseSolutions;