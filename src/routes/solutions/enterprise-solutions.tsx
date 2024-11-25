import { useState, useEffect, useRef } from "react";
import "./solutions.css"
import CorporateSalesCarousel from "./corporate-sales-carousel.tsx";
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import enterprise from "../../assets/enterprise.png"
import home from "../../assets/home.png"
import office from "../../assets/office.png"
import meeting from "../../assets/meeting.png"
import { ClipboardText, Cardholder, HandCoins, UserCircleGear, CaretRight, Check, ChartLineUp, UserFocus } from '@phosphor-icons/react';
import enterprise1 from "../../assets/enterprise1.png"
import enterprise2 from "../../assets/enterprise2.png"
import enterprise3 from "../../assets/enterprise3.png"
import FooterBottom from "../../components/footer/footer-bottom.tsx";
import FooterTop from "../../components/footer/footer-top.tsx";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar.tsx";

function EnterpriseSolutions() {

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
    ];

    const checks = [
        { title: "Simply Buying", body: "Experience a hassle-free purchasing process with our streamlined solutions designed to make buying easy and efficient." },
        { title: "Reduce Costs", body: "Cut expenses effectively with our cost-reduction strategies tailored to maximize your budget and increase your savings." },
        { title: "Rent Technology", body: "Enhance your corporate events with our technology rental services, offering quality equipment to support your business needs." },
    ]

    const solutions = [
        { image: home, title: "Working from Home", body: "Transform your home office into a productivity powerhouse with our tailored solutions. Ergonomic workspaces that blend comfort with functionality, ensuring you can work efficiently while staying focused." },
        { image: office, title: "Office Workplace", body: "Revitalize your office workplace with our expert solutions designed to enhance collaboration and efficiency. With strategic space planning and advanced technology integration, the office will develop into a dynamic and productive workspace that drives organizational success." },
        { image: meeting, title: "Meeting Spaces", body: "Elevate your meeting spaces with solutions that foster effective communication and collaboration. Versatile and technology-enabled meeting rooms that facilitate seamless presentations and discussions that will make every interaction productive and impactful." },
    ]

    const stories = [
        { image: enterprise1, title: "Doubling Revenue with Cutting-Edge Analytics", body: "By integrating our advanced analytics platform, Company X increased their revenue by 150% within just six months, transforming their market strategy and driving unprecedented growth." },
        { image: enterprise2, title: "Transforming Success with Tailored Solutions", body: "By adopting our custom digital solutions, Company Y improved their operational efficiency by 200% in just three months, revolutionizing their processes and accelerating their growth." },
        { image: enterprise3, title: "Enhancing Customer Engagement with Advanced CRM Tools", body: "Using our cutting-edge CRM system, Company Z boosted customer retention rates by 130% within just five months, significantly improving their engagement strategy and customer satisfaction." },
    ]

    const bottomRef = useRef(null);

    return (
        <>

            {/* NavBar */}
            <div className="w-full">
                <NavigationBar />
            </div>

            {/* Homepage */}
            <div
                className="overflow-hidden h-120 w-full bg-center"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 1) 100%), url(${enterprise})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="contents absolute">
                    <div className="max-w-[1440px] px-4 mx-auto py-24">
                        <div className="text-lg text-ghost-white mt-6">ENTERPRISE</div>
                        <div className="text-4xl font-bold text-ghost-white mt-4 w-108 leading-snug">Fulfill the Needs of Your Employees and Unlock Your Team's Full Potential</div>
                    </div>
                </div>
            </div>

            {/* Business */}
            <div className="bg-gradient-to-b from-white to-ghost-white py-4 w-full overflow-hidden items-center justify-between">
                <div className="flex flex-row items-center justify-between max-w-[1440px] px-4 mx-auto">
                    <div className="flex flex-row gap-x-20 mt-20">
                        <div className="flex flex-col w-1/2">
                            <h1 className="text-3xl text-black font-semibold">Gain Business Agility Through Canada Computers & Electronics</h1>
                            <div className="text-black py-6">Regardless of where you are on your cloud journey, our services and expertise can empower your team to innovate with technology and mature your business processes. Our team of experts will help you build a cohesive strategy to drive business value and extend your lead over the competition.</div>
                            <button 
                                onClick={() => { bottomRef.current.scrollIntoView({ behavior: 'smooth' });}}
                                className="text-oxford-blue border-2 border-oxford-blue rounded-sm py-2 px-4 font-medium w-44 hover:bg-oxford-blue hover:text-ghost-white"
                            >
                                Learn More
                            </button>
                        </div>
                        <div className="w-1/2">
                            {checks.map(item => (
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center">
                                        <Check size={32} weight="light" />
                                        <div className="text-black ml-6 font-semibold">{item.title}</div>
                                    </div>
                                    <div className="text-black text-sm ml-14 mb-4">{item.body}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits */}
            <div className="bg-ghost-white flex flex-col items-center py-4 w-full overflow-hidden">
                <h1 className="text-2xl text-black font-bold text-center mt-12">Prepare Solutions for Every Space</h1>
                <div className="text-black py-4 mb-2">We'll craft tailored solutions that optimize functionality and enhance performance in every space.</div>
            </div>

            {/* Solutions */}
            <div className="bg-gradient-to-b from-ghost-white to-white pb-10">
                <div className="flex flex-col max-w-[1280px] px-4 mx-auto">
                    <div className="flex flex-row justify-between">
                        {solutions.map(item => (
                            <div className="flex flex-col gap-y-6">
                                <div className="rounded-sm w-96 h-52 flex flex-col items-center">
                                    <img src={item.image} className="rounded-sm w-96 w-full h-full object-cover"/>
                                </div>
                                <div className="rounded-sm w-96 flex flex-col gap-y-2.5">
                                    <div className="text-black font-semibold">{item.title}</div>
                                    <div className="text-black text-sm">{item.body}</div>
                                    <button className="w-24 flex flex-row items-center gap-x-1 pt-2">
                                        <div className="text-oxford-blue text-sm">Read More</div>
                                        <CaretRight size={18} weight="light" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Why */}
            <div className="bg-white">
                <div className="bg-white py-14 w-full overflow-hidden max-w-[1440px] px-4 mx-auto">
                    <div className="mb-6">
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
                    <div className="text-xl text-oxford-blue font-bold text-center mt-12 mb-10">With unparalleled expertise and delivery capabilities, we tackle complexity and drive innovation across diverse environments. We'll craft tailored solutions that optimize functionality and enhance performance.</div>
                </div>
            </div>
            <div className="bg-ghost-white items-center w-full overflow-hidden pt-4 pb-16">
                <div className="flex flex-row justify-between max-w-[1280px] px-4 mx-auto">
                    <div className="flex flex-row justify-between w-full">
                        {stories.map(item => (
                            <div className="bg-white p-2.5 rounded-xl shadow border border-slate-100 mb-8">
                                <div className="flex flex-col w-92">
                                    <div className="flex items-center justify-center">
                                        <img src={item.image} className="rounded-lg w-92 h-48 object-cover" />
                                    </div>
                                    <div className="flex flex-col justify-between gap-y-4 px-2.5 py-4">
                                        <div className="flex flex-col gap-y-2.5">
                                            <div className="text-lg font-bold text-oxford-blue">{item.title}</div>
                                            <div className="text-oxford-blue text-sm mb-3">{item.body}</div>
                                        </div>
                                        <div className="text-black font-medium font-medium underline cursor-pointer">Read More</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="flex justify-center">
                    <button className="bg-oxford-blue hover:bg-slate-700 inline-block w-auto px-4 py-2 text-white text-md font-semibold mb-10 rounded">See more stories</button>
                </div> */}
            </div>

            {/* Corporate Sales Carousel */}
            <div className="bg-ghost-white">
                <div className="pt-5 pb-20 max-w-[1440px] px-4 mx-auto">
                    <CorporateSalesCarousel slides={slides} />
                </div>
            </div>

            <FooterTop />
            <div ref={bottomRef}>
                <FooterBottom />
            </div>

        </>
    );
}

export default EnterpriseSolutions;