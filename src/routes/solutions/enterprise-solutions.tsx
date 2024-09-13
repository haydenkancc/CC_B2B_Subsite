import React, { useState } from "react";
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
import { ClipboardText, Cardholder, HandCoins, UserCircleGear, ChartLineUp, CurrencyCircleDollar, Warning, Alarm } from '@phosphor-icons/react';

const pages = ['Partners', 'Industry', 'About'];

function EnterpriseSolutions() {

    const [currentRelationship, setCurrentRelationship] = useState("");

    const handleSelectChange = (event) => {
        setCurrentRelationship(event.target.value);
    };



    let slides = [
        {
            image: "https://learn.credly.com/hs-fs/hubfs/shutterstock_370595594-2000x400-sfw-1.webp?width=2000&height=400&name=shutterstock_370595594-2000x400-sfw-1.webp",
            text: "Corporate Pricing",
            body: "Corporate savings on a wide range of products that will help your organization grow."
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgCwrQ9IuQEc-Afea7lwVHZoJXvskB0BPdQ&s",
            text: "Flexible Payment Options",
            body: "NET30 Credit Account (Subject to approval), Credit Card, EFT, In-store payments, leasing via our preferred partner and more."
        },
        {
            image: "https://www.havanail.gov/wp-content/uploads/header-sunflowers-2000x400.jpg",
            text: "Local Account Manager",
            body: "Let our dedicated Account Manager process your orders, answer your queries, and hear your personal requests for a smooth, worry-free experience."
        },
        {
            image: "https://www.acuraofmoncton.ca/images/ckfinder/Acura-Tire-2000x400.jpg",
            text: "Warranty Coverage",
            body: "A hassle-free experience with the privilege of replacement parts for eligible purchases to save your time and effort."
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
            <div>
                <div
                    className="overflow-hidden bg-cover h-[85vh]"
                    style={{
                        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0.5) 75%), url(${enterprise})`,
                    }}
                >
                    <div className="contents absolute">
                        <div className="px-32 py-16">
                            <h1 className="text-5xl font-bold text-ghost-white mt-10">Everything you Need</h1>
                            <h1 className="text-5xl font-bold text-ghost-white mt-3">for your Enterprise</h1>
                            <p className="text-xl text-ghost-white font-mono mt-6">Elevate your business to the next level</p>
                            <button className="text-lg bg-ghost-white hover:bg-slate-300 text-oxford-blue font-bold py-2 px-8 my-8 rounded-sm">
                                Reach Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why */}
            <div className="bg-white py-4 w-screen overflow-hidden">
                <div className="flex flex-row">
                    <div className="contents">
                        <div className="ml-24 mt-10 w-1/3">
                            <h1 className="text-2xl text-black mt-12">Why Partner with Canada Computers & Electronics?</h1>
                            <div className="text-black py-6">Empower your developers with platforms that provide <br></br>the tools and services they need to create value for your <br></br>organization without sacrificing the governance, <br></br>spend control and required security. We ensure you <br></br>have the expertise and technology partnerships to<br></br> transform your business and stay ahead of what's next.</div>
                        </div>
                        <div className="ml-32 mt-16">
                            <div className="rounded-sm w-40 h-20 flex flex-col items-center">
                                <ClipboardText size={72} />
                            </div>
                            <div className="rounded-sm w-40 mb-8 flex flex-col items-center text-center">
                                <div className="text-black">Access to an Account Manager</div>
                            </div>
                            <div className="rounded-sm w-40 h-20 flex flex-col items-center">
                                <Cardholder size={72} />
                            </div>
                            <div className="rounded-sm w-40 flex flex-col items-center text-center">
                                <div className="text-black">Flexible Payment Options</div>
                            </div>
                        </div>
                        <div className="mt-16 ml-12">
                            <div className="rounded-sm w-40 h-20 flex flex-col items-center">
                                <HandCoins size={72} />
                            </div>
                            <div className="rounded-sm w-40 mb-8 flex flex-col items-center text-center">
                                <div className="text-black">Education Savings on Products</div>
                            </div>
                            <div className="rounded-sm w-40 h-20 flex flex-col items-center">
                                <UserCircleGear size={72} />
                            </div>
                            <div className="rounded-sm w-40 mb-10 flex flex-col items-center text-center">
                                <div className="text-black">Support throughout Product Cycle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Succeed */}
            <div className="bg-gradient-to-b from-white to-ghost-white flex flex-col items-center py-4 px-20 w-screen overflow-hidden">
                <div className="text-xl text-oxford-blue font-bold text-center mt-12 mb-10">With unparalleled expertise and delivery capabilities, we tackle complexity and drive innovation across diverse environments. We'll craft tailored solutions that optimize functionality and enhance performance.</div>
            </div>
            <div className="bg-gradient-to-b from-ghost-white to-white flex flex-col items-center py-4 px-20 w-screen overflow-hidden">
                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    <div className="flex flex-col items-center">
                        <div className="rounded-sm w-48 h-20 flex items-center justify-center">
                            <ChartLineUp size={72} />
                        </div>
                        <div className="rounded-sm w-48 mt-2 text-center text-black">Grow Revenue</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-sm w-48 h-20 flex items-center justify-center">
                            <CurrencyCircleDollar size={72} />
                        </div>
                        <div className="rounded-sm w-48 mt-2 text-center text-black">Manage Cost</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-sm w-48 h-20 flex items-center justify-center">
                            <Warning size={72} />
                        </div>
                        <div className="rounded-sm w-48 mt-2 text-center text-black">Mitigate Risk</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-sm w-48 h-20 flex items-center justify-center">
                            <Alarm size={72} />
                        </div>
                        <div className="rounded-sm w-48 mt-2 text-center text-black">Operational Efficiences</div>
                    </div>
                </div>
            </div>



            {/* Benefits */}
            <div className="bg-gradient-to-b from-white to-ghost-white flex flex-col items-center py-4 w-screen overflow-hidden">
                <h1 className="text-2xl text-black font-bold text-center mt-12">Prepare Solutions for Every Space</h1>
                <div className="text-black py-6">We'll craft tailored solutions that optimize functionality and enhance performance in every space.</div>
            </div>

            {/* Solutions */}
            <div className="bg-gradient-to-t from-white to-ghost-white flex flex-col items-center">
                <div className="flex gap-x-16">
                    <div className="contents">
                        <div>
                            <div className="rounded-sm w-80 h-60 flex flex-col items-center">
                                <img src={home} className="w-80"/>
                            </div>
                            <div className="rounded-sm w-80 mb-8 flex flex-col">
                                <div className="text-black font-semibold mb-2">Working from Home</div>
                                <div className="text-black text-sm">Transform your home office into a productivity powerhouse with our tailored solutions. Ergonomic workspaces that blend comfort with functionality, ensuring you can work efficiently while staying focused.</div>
                                <div className="cursor-pointer text-blue-600 text-sm py-2.5">Read More →</div>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-sm w-80 h-60 flex flex-col items-center">
                                <img src={office} className="w-80"/>
                            </div>
                            <div className="rounded-sm w-80 mb-10 flex flex-col">
                                <div className="text-black font-semibold mb-2">Office Workplace</div>
                                <div className="text-black text-sm">Revitalize your office workplace with our expert solutions designed to enhance collaboration and efficiency. With strategic space planning and advanced technology integration, the office will develop into a dynamic and productive workspace that drives organizational success.</div>
                                <div className="cursor-pointer text-blue-600 text-sm py-2.5">Read More →</div>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-sm w-80 h-60 flex flex-col items-center">
                                <img src={meeting} className="w-80"/>
                            </div>
                            <div className="rounded-sm w-80 mb-10 flex flex-col">
                                <div className="text-black font-semibold mb-2">Meeting Spaces</div>
                                <div className="text-black text-sm">Elevate your meeting spaces with solutions that foster effective communication and collaboration. Versatile and technology-enabled meeting rooms that facilitate seamless presentations and discussions that will make every interaction productive and impactful.</div>
                                <div className="cursor-pointer text-blue-600 text-sm py-2.5 mb-10">Read More →</div>
                            </div>
                        </div>
                    </div>
                </div>
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

            {/* Contact */}
            <div className="bg-white flex flex-col items-center w-screen overflow-hidden">
                <div className="text-black text-3xl font-bold uppercase mt-20">Corporate Sales</div>
                <div className="flex gap-10">
                    <div className="contents">
                        <div className="bg-slate-200 px-6 py-6 h-116 mt-10 rounded-t-full">
                            <div className="rounded-sm h-60 flex flex-col items-center">
                                <img src={chris} className="rounded-full w-56"/>
                            </div>
                            <div className="rounded-sm h-96 mb-8 flex flex-col items-center mt-2">
                                <div className="text-black text-lg font-semibold mb-2">Aman Nahan</div>
                                <div className="text-black mb-1">Marketing Coordinator - B2B</div>
                                <div className="flex flex-row items-center py-3">
                                    <img src={envelope} className="w-5"/>
                                    <div className="cursor-pointer text-black text-sm ml-2">aman.nahan@cc.ca</div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <img src={message} className="w-5"/>
                                    <div className="cursor-pointer text-black text-sm ml-2">aman.nahan@cc.ca</div>
                                </div>
                                <div className="flex flex-row items-center py-3">
                                    <img src={call} className="w-5"/>
                                    <div className="cursor-pointer text-black text-sm ml-2">905-780-2632</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-200 px-6 py-6 h-116 mt-10 rounded-t-full">
                            <div className="rounded-sm h-60 flex flex-col items-center">
                                <img src={chris} className="rounded-full w-56"/>
                            </div>
                            <div className="rounded-sm h-96 mb-8 flex flex-col items-center mt-2">
                                <div className="text-black text-lg font-semibold mb-2">Rudra Casey Samaroo</div>
                                <div className="text-black mb-1">Marketing Coordinator - B2B</div>
                                <div className="flex flex-row items-center py-3">
                                    <img src={envelope} className="w-5"/>
                                    <div className="cursor-pointer text-black text-sm ml-2">rudra.samaroo@cc.ca</div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <img src={message} className="w-5"/>
                                    <div className="cursor-pointer text-black text-sm ml-2">rudra.samaroo@cc.ca</div>
                                </div>
                                <div className="flex flex-row items-center py-3">
                                    <img src={call} className="w-5"/>
                                    <div className="cursor-pointer text-black text-sm ml-2">905-780-2632</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-200 px-6 py-6 h-116 mt-10 rounded-t-full mb-20">
                            <div className="rounded-sm h-60 flex flex-col items-center">
                                <img src={chris} className="rounded-full w-56"/>
                            </div>
                            <div className="rounded-sm h-96 mb-8 flex flex-col items-center mt-2">
                                <div className="text-black text-lg font-semibold mb-2">Christopher Siu-Chong</div>
                                <div className="text-black mb-1">Corporate Sales Manager</div>
                                <div className="flex flex-row items-center py-3">
                                    <img src={envelope} className="w-5"/>
                                    <div className="cursor-pointer text-black text-sm ml-2">christopher.siu-chong@cc.ca</div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <img src={message} className="w-5"/>
                                    <div className="cursor-pointer text-black text-sm ml-2">christopher.siu-chong@cc.ca</div>
                                </div>
                                <div className="flex flex-row items-center py-3">
                                    <img src={call} className="w-5"/>
                                    <div className="cursor-pointer text-black text-sm ml-2">905-780-2632</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Apply */}
            <div className="bg-white flex flex-col items-center py-10">
                <div className="text-2xl text-black font-bold uppercase mb-4">Apply for an account today</div>
                <div className="flex flex-row items-center py-3">
                    <img src={envelope} className="w-6"/>
                    <div className="cursor-pointer text-black ml-2">corporate@canadacomputers.com</div>
                    <img src={call} className="w-6 ml-24"/>
                    <div className="cursor-pointer text-black ml-2">Telephone: 905-780-2632</div>
                </div>
            </div>
            
            {/* Corporate Sales Carousel */}
            <div className="bg-white">
                <div className="mb-20">
                    <CorporateSalesCarousel slides={slides} />
                </div>
            </div>

        </>
    );
}

export default EnterpriseSolutions;