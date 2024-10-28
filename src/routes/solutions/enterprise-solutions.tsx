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
        {
            image: meeting,
            text: "Rudra Casey Samaroo",
            body: "Marketing Coordinator - B2B",
            mail: "rudra.samaroo@cc.ca",
            phone: "905-780-2632",
        },
    ];

    const bottomRef = useRef(null);
    const [isHighlighted, setIsHighlighted] = useState(false);


    return (
        <>

            {/* NavBar */}
            <div className="w-full">
                <NavbarTop />
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
                        <p className="text-lg text-ghost-white mt-6">ENTERPRISE</p>
                        <h1 className="text-4xl font-bold text-ghost-white mt-6">Fulfill the Needs of Your</h1>
                        <h1 className="text-4xl font-bold text-ghost-white mt-2">Employees and Unlock</h1>
                        <h1 className="text-4xl font-bold text-ghost-white mt-2">Your Team's True Potential</h1>
                    </div>
                </div>
            </div>

            {/* Business */}
            <div className="bg-gradient-to-b from-white to-ghost-white py-4 w-full overflow-hidden items-center justify-between">
                <div className="flex flex-row items-center justify-between max-w-[1440px] px-4 mx-auto">
                    <div className="flex flex-row">
                        <div className="flex flex-col mt-10 w-1/2">
                            <h1 className="text-3xl text-black mt-12 font-semibold">Gain Business Agility Through Canada Computers & Electronics</h1>
                            <div className="text-black py-6">Regardless of where you are on your cloud journey, our services and expertise can empower your team to innovate with technology and mature your business processes. We focus on helping organizations improve their IT maturity through advancement in resiliency, portability, manageability, observability and cybersecurity. Our team of experts will help you build a cohesive strategyto drive business value and extend your lead over the competition. your lead over the competition.</div>
                                <button 
                                    onClick={() => {
                                        bottomRef.current.scrollIntoView({ behavior: 'smooth' });
                                        setIsHighlighted(true);
                                        setTimeout(() => {
                                            setIsHighlighted(false);
                                        }, 2000); // Highlight for 2 seconds
                                    }} 
                                    className="text-oxford-blue border-2 border-oxford-blue rounded-sm py-2 px-4 font-medium w-44 hover:bg-oxford-blue hover:text-ghost-white"
                                >
                                    Learn More
                                </button>
                            </div>
                        <div className="ml-20 mt-20 w-1/2">
                            <div className="flex flex-col">
                                <div className="w-96 flex flex-row items-center text-center">
                                    <Check size={32} weight="light" />
                                    <div className="text-black ml-6 font-semibold">Simply Buying</div>
                                </div>
                                <div className="text-black text-sm ml-14 mb-4">Experience a hassle-free purchasing process with our streamlined solutions designed to make buying easy and efficient.</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="w-96 flex flex-row items-center text-center">
                                    <Check size={32} weight="light" />
                                    <div className="text-black ml-6 font-semibold">Reduce Costs</div>
                                </div>
                                <div className="text-black text-sm ml-14 mb-4">Cut expenses effectively with our cost-reduction strategies tailored to maximize your budget and increase your savings.</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="w-96 flex flex-row items-center text-center">
                                    <Check size={32} weight="light" />
                                    <div className="text-black ml-6 font-semibold">Manage Purchasing</div>
                                </div>
                                <div className="text-black text-sm ml-14 mb-4">Take control of your procurement with our expert services that simplify and enhance the management of your purchasing needs.</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="w-96 flex flex-row items-center text-center">
                                    <Check size={32} weight="light" />
                                    <div className="text-black ml-6 font-semibold">Streamline Procurement</div>
                                </div>
                                <div className="text-black text-sm ml-14 mb-4">Optimize your procurement process with our solutions that streamline every step, ensuring efficiency and smooth operations.</div>
                            </div>
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
            <div className="bg-gradient-to-b from-ghost-white to-white">
                <div className="flex flex-col max-w-[1440px] px-4 mx-auto">
                    <div className="flex flex-row justify-between">
                        <div>
                            <div className="rounded-sm w-96 h-52 flex flex-col items-center">
                                <img src={home} className="rounded-sm w-96 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-96 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">Working from Home</div>
                                <div className="text-black text-sm">Transform your home office into a productivity powerhouse with our tailored solutions. Ergonomic workspaces that blend comfort with functionality, ensuring you can work efficiently while staying focused.</div>
                                <button className="w-24 flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm py-2.5">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                        <div>
                        <div className="rounded-sm w-96 h-52 flex flex-col items-center">
                                <img src={office} className="rounded-sm w-96 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-96 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">Office Workplace</div>
                                <div className="text-black text-sm">Revitalize your office workplace with our expert solutions designed to enhance collaboration and efficiency. With strategic space planning and advanced technology integration, the office will develop into a dynamic and productive workspace that drives organizational success.</div>
                                <button className="w-24 flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm py-2.5">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                        <div>
                        <div className="rounded-sm w-96 h-52 flex flex-col items-center">
                                <img src={meeting} className="rounded-sm w-96 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-96 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">Meeting Spaces</div>
                                <div className="text-black text-sm">Elevate your meeting spaces with solutions that foster effective communication and collaboration. Versatile and technology-enabled meeting rooms that facilitate seamless presentations and discussions that will make every interaction productive and impactful.</div>
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
                    <div className="text-xl text-oxford-blue font-bold text-center mt-12 mb-10">With unparalleled expertise and delivery capabilities, we tackle complexity and drive innovation across diverse environments. We'll craft tailored solutions that optimize functionality and enhance performance.</div>
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
            <div ref={bottomRef}>
                <FooterBottom />
            </div>

        </>
    );
}

export default EnterpriseSolutions;