import { useEffect } from "react";
import "./solutions.css"
import CorporateSalesCarousel from "./corporate-sales-carousel.tsx";

import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import education from "../../assets/education.png"
import remote from "../../assets/remote.png"
import auditorium from "../../assets/auditorium.png"
import eoffice from "../../assets/eoffice.png"
import meeting from "../../assets/meeting.png"
import dormitories from "../../assets/dormitories.png"
import itroom from "../../assets/itroom.png"
import esports from "../../assets/esports.png"
import Logo from '../../assets/Canada_Computers_(Icon).svg?react';
import envelope from "../../assets/envelope.png"
import call from "../../assets/call.png"
import { ClipboardText, Cardholder, HandCoins, UserCircleGear, CaretRight, Check } from '@phosphor-icons/react';
import enterprise1 from "../../assets/enterprise1.png"
import enterprise2 from "../../assets/enterprise2.png"
import enterprise3 from "../../assets/enterprise3.png"

const pages = ['Partners', 'Industry', 'About'];

function EducationSolutions() {
    
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
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 1) 100%), url(${education})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="contents absolute">
                    <div className="px-[10vw] 2xl:px-[20vw] py-24">
                        <p className="text-xl text-ghost-white mt-6">EDUCATION</p>
                        <h1 className="text-4xl font-bold text-ghost-white mt-6">Inspire Learning and Unlock Your</h1>
                        <h1 className="text-4xl font-bold text-ghost-white mt-2">Students' Full Potential with</h1>
                        <h1 className="text-4xl font-bold text-ghost-white mt-2">Innovative Educational Solutions</h1>
                    </div>
                </div>
            </div>

            {/* Business */}
            <div className="bg-gradient-to-b from-white to-ghost-white py-4 w-screen overflow-hidden items-center justify-between px-[10vw] 2xl:px-[20vw]">
                <div className="flex flex-row items-center justify-between">
                    <div className="contents">
                        <div className="mt-10 w-136">
                            <h1 className="text-3xl text-black mt-12 font-semibold">Unlock Educational Excellence with Canada Computers & Electronics</h1>
                            <div className="text-black py-6">Ready to modernize your school's tech? At Canada Computers & Electronics, we provide innovative solutions that enhance learning and streamline operations. Our expertise in technology integration ensures your systems are reliable, adaptable, and secure. Let's work together to develop a strategy that elevates your educational programs and sets your institution ahead of the curve.</div>
                        </div>
                        <div className="ml-20 mt-20 w-128">
                            <div className="flex flex-col">
                                <div className="w-96 flex flex-row items-center text-center">
                                    <Check size={32} weight="light" />
                                    <div className="text-black ml-6 font-semibold">Selection and Pricing Advantages</div>
                                </div>
                                <div className="text-black text-sm ml-14 mb-4">Discover value with our diverse selection and competitive pricing. We offer exclusive access to top-quality products at the best rates, ensuring you get more for your money.</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="w-96 flex flex-row items-center text-center">
                                    <Check size={32} weight="light" />
                                    <div className="text-black ml-6 font-semibold">Analytics</div>
                                </div>
                                <div className="text-black text-sm ml-14 mb-4">Unlock powerful insights with our advanced analytics tools that enhance efficiency and drive better outcomes.</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="w-96 flex flex-row items-center text-center">
                                    <Check size={32} weight="light" />
                                    <div className="text-black ml-6 font-semibold">Flexible Account Settings</div>
                                </div>
                                <div className="text-black text-sm ml-14 mb-4">Customize your experience by tailoromg your preferences and managing your account effortlessly to suit your needs.</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="w-96 flex flex-row items-center text-center">
                                    <Check size={32} weight="light" />
                                    <div className="text-black ml-6 font-semibold">Free Shipping</div>
                                </div>
                                <div className="text-black text-sm ml-14 mb-4">We cover the delivery costs so you can focus on what matters most, with no added expenses.</div>
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
            <div className="bg-gradient-to-b from-ghost-white to-white flex flex-col">
                <div className="px-[10vw] 2xl:px-[20vw]">
                    <div className="flex flex-row justify-between">
                        <div>
                            <div className="rounded-sm w-76 h-52 flex flex-col items-center">
                                <img src={remote} className="rounded-sm w-76 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-76 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">Remote Learning</div>
                                <div className="text-black text-sm">Enhance your remote learning environment with our tailored solutions that support interactive and engaging online education. From advanced video conferencing tools to collaborative platforms, we ensure a seamless virtual learning experience that connects students and educators effectively.</div>
                                <button className="w-24 flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm py-2.5">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                        <div>
                        <div className="rounded-sm w-76 h-52 flex flex-col items-center">
                                <img src={auditorium} className="rounded-sm w-76 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-76 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">Classrooms and Auditoriums</div>
                                <div className="text-black text-sm">Transform your classrooms and auditoriums with cutting-edge technology and smart design. Our solutions integrate interactive displays, audio-visual systems, and flexible seating arrangements to create dynamic learning spaces that inspire and engage students.</div>
                                <button className="w-24 flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm py-2.5">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                        <div>
                        <div className="rounded-sm w-76 h-52 flex flex-col items-center">
                                <img src={eoffice} className="rounded-sm w-76 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-76 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">Offices</div>
                                <div className="text-black text-sm">Revamp your administrative offices with our strategic solutions that boost productivity and efficiency. We offer ergonomic furniture, optimized workstations, and advanced IT infrastructure to create a professional environment that supports your educational institution’s operations.</div>
                                <button className="w-24 flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm py-2.5">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>
                            <div className="rounded-sm w-76 h-52 flex flex-col items-center">
                                <img src={dormitories} className="rounded-sm w-76 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-76 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">Dormitories and Common Spaces</div>
                                <div className="text-black text-sm">Upgrade your dormitories and common areas with solutions that promote comfort and community. Our designs focus on creating inviting, functional spaces that enhance student living experiences and foster social interaction.</div>
                                <button className="w-24 flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm py-2.5">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                        <div>
                        <div className="rounded-sm w-76 h-52 flex flex-col items-center">
                                <img src={itroom} className="rounded-sm w-76 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-76 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">IT Rooms</div>
                                <div className="text-black text-sm">Optimize your IT rooms with our specialized solutions for efficient management and maintenance. From high-performance hardware to organized network setups, we ensure your technology infrastructure supports smooth operations and reliable performance.</div>
                                <button className="w-24 flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm py-2.5">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                        <div>
                        <div className="rounded-sm w-76 h-52 flex flex-col items-center">
                                <img src={esports} className="rounded-sm w-76 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-76 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">Esports Gaming Lab</div>
                                <div className="text-black text-sm">Elevate your esports gaming lab with state-of-the-art equipment and setup. We provide high-performance gaming systems, ergonomic seating, and immersive environments that enhance both competitive play and training sessions, making your lab a top-tier gaming destination.</div>
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
            <div className="bg-white py-4 w-screen overflow-hidden px-[10vw] 2xl:px-[20vw]">
                <div className="mb-20">
                    <div className="flex justify-between">
                        <div className="">
                            <h1 className="text-2xl text-black mt-12 font-semibold">Why Partner with Canada Computers & Electonics?</h1>
                            <div className="text-black py-6">Empower your developers with platforms that provide the tools and services <br></br>they need to create value for your organization without sacrificing the<br></br> governance, spend control and required security. We ensure you have the <br></br>expertise and technology partnerships to transform your business and stay <br></br>ahead of what's next.</div>
                        </div>
                        <div className="flex flex-row">
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
                        </div>
                    </div>
                </div>
            </div>

            {/* Succeed */}
            <div className="bg-ghost-white flex flex-col items-center py-4 px-20 w-screen overflow-hidden justify-center px-[10vw] 2xl:px-[20vw]">
                <div className="text-xl text-oxford-blue font-bold text-center mt-12 mb-10">With our extensive experience in education, we simplify complex challenges and drive innovation in learning spaces with customized solutions that elevate the overall educational experience.</div>
            </div>
            <div className="bg-ghost-white items-center w-screen overflow-hidden py-4">
                <div className="flex flex-row justify-between gap-x-8 px-[10vw] 2xl:px-[20vw]">
                    <div className="bg-white rounded-lg shadow flex flex-wrap justify-center gap-10 mb-8">
                        <div className="flex flex-col w-80">
                            <div className="flex items-center justify-center">
                                <img src={enterprise1} className="rounded-t-lg w-80 h-48 object-cover" />
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
                        <div className="flex flex-col w-80">
                            <div className="flex items-center justify-center">
                                <img src={enterprise2} className="rounded-t-lg w-80 h-48 object-cover" />
                            </div>
                            <div className="px-6">
                                <div className="mt-4 font-bold text-oxford-blue">Transforming Success with Tailored Solutions</div>
                                <div className="mt-2 text-oxford-blue text-sm mb-3">By adopting our custom digital solutions, Company Y improved their operational efficiency by 200% in just three months, revolutionizing their processes and accelerating their growth trajectory.</div>
                                <button className="flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow flex flex-wrap justify-center gap-10 mb-8">
                        <div className="flex flex-col w-80">
                            <div className="flex items-center justify-center">
                                <img src={enterprise3} className="rounded-t-lg w-80 h-48 object-cover" />
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
                    <button className="bg-oxford-blue hover:bg-slate-700 w-40 h-8 text-white text-sm font-semibold mb-10 rounded-sm">See more stories</button>
                </div>
            </div>

            {/* Banner */}
            <div className="bg-oxford-blue flex py-10 w-screen overflow-hidden relative flex justify-between px-[10vw] 2xl:px-[20vw]">
                <div className="contents">
                    <div>
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
                <div className="py-20 px-[4vw] 2xl:px-[14vw]">
                    <CorporateSalesCarousel slides={slides} />
                </div>
            </div>

            {/* Apply */}
            <div className="bg-white flex flex-col items-center">
                <div className="text-2xl text-black font-bold uppercase mb-4">Apply for an account today</div>
                <div className="flex flex-row items-center py-3 mb-20 px-[10vw] 2xl:px-[20vw]">
                    <img src={envelope} className="w-6"/>
                    <div className="cursor-pointer text-black ml-2">corporate@canadacomputers.com</div>
                    <img src={call} className="w-6 ml-24"/>
                    <div className="cursor-pointer text-black ml-2">Telephone: 905-780-2632</div>
                </div>
            </div>

        </>
    );
}

export default EducationSolutions;