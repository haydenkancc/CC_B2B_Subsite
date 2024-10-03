import { useState, useEffect } from "react";
import "./solutions.css"
import CorporateSalesCarousel from "./corporate-sales-carousel.tsx";
import { Link } from "react-router-dom";
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
import { ClipboardText, Cardholder, HandCoins, UserCircleGear, CaretRight, Check, UserFocus, ChartLineUp, Envelope, Pen, Phone } from '@phosphor-icons/react';
import enterprise1 from "../../assets/enterprise1.png"
import enterprise2 from "../../assets/enterprise2.png"
import enterprise3 from "../../assets/enterprise3.png"
import tmumeeting from "../../assets/tmumeeting.png"
import tmulogo from "../../assets/tmulogo.png"
import solutionsblue from "../../assets/solutionsblue.png"
import person2 from "../../assets/person2.png"

const pages = ['Partners', 'Industry', 'About'];

const quotes = [
    // {
    //     question: "How would you describe the overall satisfaction and trust you have in our company?",
    //     answer: "Extremely satisfied. Canada Computers has never been anything other than timely in responses and supportive of any issues that we are dealing with at the creative school. They have been a joy to work with throughout.",
    //     person: "- Geoffrey Lachapelle",
    // },
    {
        question: "Are there any specific team members or individuals from our company who have made a significant impact on your experience?",
        answer: "I have been overjoyed to be working with Austin Kuo and Marco Mo throughout this process. I can happily say that I have rarely had the privilege to work with a company contact who is as prompt, communicative, and (when needed) patient with solving challenges and working on projects as Austin is.",
        person: "- Geoffrey Lachapelle",
    },
]

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
                className="overflow-hidden h-116 w-full bg-center"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 1) 100%), url(${education})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="contents absolute">
                    <div className="max-w-[1440px] px-4 mx-auto py-24">
                        <p className="text-xl text-ghost-white mt-6">EDUCATION</p>
                        <h1 className="text-4xl font-bold text-ghost-white mt-6">Inspire Learning and Unlock Your</h1>
                        <h1 className="text-4xl font-bold text-ghost-white mt-2">Students' Full Potential with</h1>
                        <h1 className="text-4xl font-bold text-ghost-white mt-2">Innovative Educational Solutions</h1>
                    </div>
                </div>
            </div>

            {/* Business */}
            <div className="bg-gradient-to-b from-white to-ghost-white py-4 w-full overflow-hidden items-center justify-between ">
                <div className="flex flex-row items-center justify-between max-w-[1440px] px-4 mx-auto">
                    <div className="contents">
                        <div className="mt-10 w-1/2">
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
            <div className="bg-ghost-white flex flex-col items-center py-4 w-full overflow-hidden">
                <h1 className="text-2xl text-black font-bold text-center mt-12">Prepare Solutions for Every Space</h1>
                <div className="text-black py-6">We'll craft tailored solutions that optimize functionality and enhance performance in every space.</div>
            </div>

            {/* Solutions */}
            <div className="bg-ghost-white">
                <div className="flex flex-col max-w-[1440px] px-4 mx-auto">
                    <div className="flex flex-row justify-between">
                        <div>
                            <div className="rounded-sm w-96 h-52 flex flex-col items-center">
                                <img src={remote} className="rounded-sm w-96 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-96 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">Remote Learning</div>
                                <div className="text-black text-sm">Enhance your remote learning environment with our tailored solutions that support interactive and engaging online education. From advanced video conferencing tools to collaborative platforms, we ensure a seamless virtual learning experience that connects students and educators effectively.</div>
                                <button className="w-24 flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm py-2.5">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                        <div>
                        <div className="rounded-sm w-96 h-52 flex flex-col items-center">
                                <img src={auditorium} className="rounded-sm w-96 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-96 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">Classrooms and Auditoriums</div>
                                <div className="text-black text-sm">Transform your classrooms and auditoriums with cutting-edge technology and smart design. Our solutions integrate interactive displays, audio-visual systems, and flexible seating arrangements to create dynamic learning spaces that inspire and engage students.</div>
                                <button className="w-24 flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm py-2.5">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                        <div>
                        <div className="rounded-sm w-96 h-52 flex flex-col items-center">
                                <img src={eoffice} className="rounded-sm w-96 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-96 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">Offices</div>
                                <div className="text-black text-sm">Revamp your administrative offices with our strategic solutions that boost productivity and efficiency. We offer ergonomic furniture, optimized workstations, and advanced IT infrastructure to create a professional environment that supports your educational institution's operations.</div>
                                <button className="w-24 flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm py-2.5">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-b from-ghost-white to-white">
                <div className="flex flex-col max-w-[1440px] px-4 mx-auto">
                    <div className="flex flex-row justify-between">
                        <div>
                            <div className="rounded-sm w-96 h-52 flex flex-col items-center">
                                <img src={dormitories} className="rounded-sm w-96 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-96 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">Dormitories and Common Spaces</div>
                                <div className="text-black text-sm">Upgrade your dormitories and common areas with solutions that promote comfort and community. Our designs focus on creating inviting, functional spaces that enhance student living experiences and foster social interaction.</div>
                                <button className="w-24 flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm py-2.5">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                        <div>
                        <div className="rounded-sm w-96 h-52 flex flex-col items-center">
                                <img src={itroom} className="rounded-sm w-96 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-96 py-6 flex flex-col">
                                <div className="text-black font-semibold mb-2">IT Rooms</div>
                                <div className="text-black text-sm">Optimize your IT rooms with our specialized solutions for efficient management and maintenance. From high-performance hardware to organized network setups, we ensure your technology infrastructure supports smooth operations and reliable performance.</div>
                                <button className="w-24 flex flex-row items-center mb-6">
                                    <div className= "text-oxford-blue text-sm py-2.5">Read More</div>
                                    <CaretRight size={20} weight="light" />
                                </button>
                            </div>
                        </div>
                        <div>
                        <div className="rounded-sm w-96 h-52 flex flex-col items-center">
                                <img src={esports} className="rounded-sm w-96 w-full h-full object-cover"/>
                            </div>
                            <div className="rounded-sm w-96 py-6 flex flex-col">
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
            <div className="bg-white">
                <div className="bg-white py-4 w-full overflow-hidden max-w-[1440px] px-4 mx-auto">
                    <div className="mb-20">
                        <div className="flex flex-row justify-between gap-x-10">
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
                <div className="text-xl text-oxford-blue font-bold text-center mt-12">With our extensive experience in education, we simplify complex challenges and drive innovation in learning spaces with customized solutions that elevate the overall educational experience.</div>
            </div>

            {/* Quotes */}
            <div className="bg-ghost-white">
                <div className="flex justify-between py-10 max-w-[1440px] px-4 mx-auto">
                    {quotes.map((quote, index) => (
                        <div key={index}>
                            <div className="bg-slate-200 w-full rounded-sm p-8">
                                <div className="flex flex-row justify-between">
                                    <div className="w-1/2 flex items-center justify-center">
                                        <div className="w-88 2xl:mr-14">
                                            <img src={tmumeeting} className="rounded-sm" />
                                        </div>
                                    </div>
                                    <div className="absolute m-auto">
                                        <img src={tmulogo} className="h-18" />
                                    </div>
                                    <div className="w-1/2 py-6">
                                        <div className="text-black text-md py-2">
                                            "{quote.answer}"
                                        </div>
                                        <div className="text-black text-md font-light py-2">
                                            {quote.person}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-ghost-white items-center w-full overflow-hidden py-4 mt-6">
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
                <div className="py-20 px-[4vw] 2xl:px-[14vw]">
                    <CorporateSalesCarousel slides={slides} />
                </div>
            </div>

            {/* Contact */}
            <div className="bg-ghost-white w-full py-14 px-[10vw] 2xl:px-[20vw] text-center">
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

export default EducationSolutions;