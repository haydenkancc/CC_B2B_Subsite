import React, { useEffect, useRef, useState } from "react";
import "./procurement.css";
import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import changebuilding from "../../assets/changebuilding.gif";
import laptop from "../../assets/laptop.png";
import quote1 from "../../assets/quote1.png"
import quote2 from "../../assets/quote2.png"
import cclogo from "../../assets/cclogo.png"
import tmulogo from "../../assets/tmulogo.png"
import tmumeeting from "../../assets/tmumeeting.png"
import out from "../../assets/out.png"

import { Strategy, Coins, HeadCircuit, Headset, ClockUser  } from "@phosphor-icons/react";

const pages = ['Partners', 'Industry', 'About'];

const problems1 = [
    {
        title: "Cost",
        sub: "Address Cost Pressure Effectively.",
        text: "Leveraging strategic sourcing, negotiation, and supplier relationships is essential for achieving cost savings and enhancing overall procurement efficiency.",
    },
    {
        title: "Disruption",
        sub: "Mitigate Supply Chain Disruptions.",
        text: "Conducting thorough risk assessments while diversifying suppliers is crucial for strengthening supply chain resilience and mitigating disruptions.",
    },
]

const problems2 = [
    {
        title: "Relationship",
        sub: "Strengthen Supplier Relationships.",
        text: "Showcasing industry and supply chain expertise along with buying power is essential to negotiate better terms and prices.",
    },
    {
        title: "Risk",
        sub: "Manage Risk for Greater Stability.",
        text: "Thoroughly assessing and prioritizing risks while evaluating supplier stability and regulatory compliance are key to maintaining a resilient supply chain.",
    },
]

const stratcards1 = [
    {
        image: laptop,
        title: "Initial Assessment and Needs Analysis",
        text1: "Understanding the Client's Goals: Clearly define the client's objectives, challenges, and desired outcomes.",
        text2: "Identifying Key Areas: Pinpoint specific areas where procurement can be improved, such as cost reduction, risk management, or supplier performance.",
        text3: "Assessing Current Processes: Evaluate the client's existing procurement practices, identifying strengths, weaknesses, and opportunities for improvement.",
    },
    {
        image: laptop,
        title: "Strategic Planning",
        text1: "Leveraging analytics for informed decision-making and growth.",
    },
    {
        image: laptop,
        title: "Contract Negotiation",
        text1: "Guiding seamless transitions during transformative periods.",
    },
    {
        image: laptop,
        title: "Continuous Improvement",
        text1: "Guiding seamless transitions during transformative periods.",
    },
];

const stratcards2 = [
    {
        image: laptop,
        title: "Data Collection and Analysis",
        text1: "Tailored strategies to address your unique business needs.",
    },
    {
        image: laptop,
        title: "Supplier Evaluation and Selection",
        text1: "Leveraging analytics for informed decision-making and growth.",
    },
    {
        image: laptop,
        title: "Supplier Relationship Management",
        text1: "Leveraging analytics for informed decision-making and growth.",
    },
];

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

function Procurement() {
    const leftRefs = useRef([]);
    const rightRefs = useRef([]);

    const [revenue, setRevenue] = useState(0);
    const [marketShare, setMarketShare] = useState(0);
    const [satisfaction, setSatisfaction] = useState(0);

    useEffect(() => {
        const revenueTarget = 5;
        const marketShareTarget = 30;
        const satisfactionTarget = 97;

        const revenueInterval = setInterval(() => {
            setRevenue(prev => {
                if (prev < revenueTarget) return Math.min(prev + 1, revenueTarget);
                clearInterval(revenueInterval);
                return revenueTarget;
            });
        }, 1000);

        const marketShareInterval = setInterval(() => {
            setMarketShare(prev => {
                if (prev < marketShareTarget) return Math.min(prev + 1, marketShareTarget);
                clearInterval(marketShareInterval);
                return marketShareTarget;
            });
        }, 150);

        const satisfactionInterval = setInterval(() => {
            setSatisfaction(prev => {
                if (prev < satisfactionTarget) return Math.min(prev + 1, satisfactionTarget);
                clearInterval(satisfactionInterval);
                return satisfactionTarget;
            });
        }, 50);

        return () => {
            clearInterval(revenueInterval);
            clearInterval(marketShareInterval);
            clearInterval(satisfactionInterval);
        };
    }, []);

    useEffect(() => {
        const options = {
            root: null, // Viewport as root
            threshold: 0.1 // Trigger at 10% of the element in view
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop lookin once its in view
                }
            });
        }, options);

        // Observe left-side
        leftRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        // Observe right-side
        rightRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            leftRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
            rightRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <>
            {/* NavBar */}
            <div className="w-full overflow-hidden">
                <NavbarTop />
                <NavbarBottom pages={pages} />
            </div>

            {/* Homepage */}
            <div
                className="overflow-hidden bg-cover h-116 bg-top"
                style={{
                    backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 75%), url(${changebuilding})`,
                }}
            >
                <div className="text-ghost-white h-full">
                    <div className="px-[10vw] 2xl:px-[20vw] h-full flex items-center">
                        <div>
                            <h1 className="text-4xl font-bold uppercase">Unlocking Solutions with</h1>
                            <h1 className="text-4xl font-bold uppercase mt-3">Canada Computers & Electronics</h1>
                            <p className="text-xl font-medium mt-6">Innovative Consulting Services to Drive Your Success</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Problems */}
            <div className="bg-ghost-white px-[10vw] 2xl:px-[20vw]">
                <div className="flex flex-row mt-20 mb-18">
                    <img src={out} className="rounded-sm object-cover w-72" />
                    <div className="flex flex-col ml-10">
                        <div className="text-2xl font-bold flex mt-10 mb-2 ml-4">
                            The Problems And How We Address Them
                        </div>
                        <div className="flex flex-col">
                            {/* First row of problems */}
                            <div className="flex flex-row justify-between gap-x-6">
                                {problems1.map((problem, index) => (
                                    <div key={index} className="py-6 flex-1">
                                        <div className={`text-sm w-full px-4 py-4 rounded-sm`}>
                                            <div className="flex-col">
                                                <div className="bg-oxford-blue text-white rounded-full p-1.5 w-28 text-center mt-1 font-semibold">{problem.title}</div>
                                                <div className="mt-4 text-base font-semibold">{problem.sub}</div>
                                                <div className="mt-4">{problem.text}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Second row of problems */}
                            <div className="flex flex-row justify-between gap-x-6">
                                {problems2.map((problem, index) => (
                                    <div key={index} className="flex-1">
                                        <div className={`text-sm w-full px-4 mb-4 rounded-sm`}>
                                            <div className="flex-col">
                                                <div className="bg-oxford-blue text-white rounded-full p-1.5 w-28 text-center mt-1 font-semibold">{problem.title}</div>
                                                <div className="mt-4 text-base font-semibold">{problem.sub}</div>
                                                <div className="mt-4">{problem.text}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-5">
                                <button className="bg-oxford-blue text-white rounded-md w-32 p-2 font-semibold text-sm items-center hover:bg-slate-700">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className="bg-white py-4 w-full overflow-hidden px-[10vw] 2xl:px-[20vw]">
                <div className="mb-20">
                    <div className="flex justify-between">
                        <div className="flex-grow">
                            <h1 className="text-2xl text-black mt-12 font-semibold">Our Services</h1>
                            <div className="flex flex-row justify-between mt-4">
                                <div className="mt-6">
                                    <div className="rounded-sm w-72 flex flex-col">
                                        <Strategy size={52} weight="light" />
                                    </div>
                                    <div className="rounded-sm w-72 mb-8 flex flex-col py-4">
                                        <div className="text-black font-medium">Strategic Sourcing</div>
                                        <div className="text-black text-sm mt-2">Enhance your procurement process by leveraging data-driven insights and supplier collaboration to drive value and efficiency.</div>
                                    </div>
                                    <div className="rounded-sm w-72 flex flex-col">
                                        <Headset size={52} weight="light" />
                                    </div>
                                    <div className="rounded-sm w-72 flex flex-col py-4">
                                        <div className="text-black font-medium">Supplier Relationship Management</div>
                                        <div className="text-black text-sm mt-2">Cultivate strong partnerships with suppliers through effective communication and performance metrics, fostering collaboration that drives innovation and value.</div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="rounded-sm w-72 flex flex-col">
                                        <Coins size={52} weight="light" />
                                    </div>
                                    <div className="rounded-sm w-72 mb-8 flex flex-col py-4">
                                        <div className="text-black font-medium">Spend Analysis</div>
                                        <div className="text-black text-sm mt-2">Unlock actionable insights by dissecting your spending patterns, enabling informed decisions that maximize cost savings and improve budget management.</div>
                                    </div>
                                    <div className="rounded-sm w-72 flex flex-col">
                                        <ClockUser size={52} weight="light" />
                                    </div>
                                    <div className="rounded-sm w-72 flex flex-col py-4">
                                        <div className="text-black font-medium">Procurement Process Optimization</div>
                                        <div className="text-black text-sm mt-2">Streamline your purchasing workflows by identifying bottlenecks and implementing best practices, ensuring efficiency and cost-effectiveness throughout the supply chain.</div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="rounded-sm w-72 flex flex-col">
                                        <HeadCircuit size={52} weight="light" />
                                    </div>
                                    <div className="rounded-sm w-72 flex flex-col py-4">
                                        <div className="text-black font-medium">Contract Negotiation</div>
                                        <div className="text-black text-sm mt-2">Achieve favorable terms and strengthen supplier relationships through skilled negotiation tactics that align with your business objectives and drive value.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process */}
            <div className="bg-ghost-white flex flex-col mt-14 w-full overflow-hidden px-[10vw] 2xl:px-[20vw]">
                <div className="text-2xl text-black font-bold text-center mt-6">Our Process</div>
                <div className="flex flex-row justify-center">
                    {/* Leftside */}
                    <div className="w-2/5 flex flex-col items-center">
                        <div className="flex flex-col">
                            {stratcards1.map((strat, index) => (
                                <div key={index} className="py-6">
                                    <div className="flex flex-col items-center">
                                        <div className={`fade-in-left mt-4`} ref={el => leftRefs.current[index] = el}>
                                            <div className={`bg-slate-200 text-sm w-80 px-4 py-4 rounded-sm`}>
                                                <div className="flex-col">
                                                    <div className="mt-1 text-md font-semibold">{strat.title}</div>
                                                    <div className="mt-1">{strat.text1}</div>
                                                </div>
                                            </div>
                                            <img src={strat.image} className={`w-80 h-48 object-cover`} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Rightside */}
                    <div className="w-2/5 flex flex-col items-center justify-center">
                        <div className="flex flex-col">
                            {stratcards2.map((strat, index) => (
                                <div key={index} className="py-6">
                                    <div className="flex flex-col items-center">
                                        <div className={`fade-in-right mt-4`} ref={el => rightRefs.current[index] = el}>
                                            <div className={`bg-slate-200 text-sm w-80 px-4 py-4 rounded-sm`}>
                                                <div className="flex-col">
                                                    <div className="mt-1 text-md font-semibold">{strat.title}</div>
                                                    <div className="mt-1">{strat.text1}</div>
                                                </div>
                                            </div>
                                            <img src={strat.image} className={`w-80 h-48 object-cover`} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Success */}
            <div className="bg-oxford-blue text-ghost-white flex flex-col mt-20 w-full overflow-hidden px-[10vw] 2xl:px-[20vw]">
                <div className="text-2xl font-bold text-center mt-10">Proven Success</div>
                <div className="flex flex-row justify-between py-10">
                    {/* Leftside */}
                    <div className="w-1/3 flex flex-col items-center justify-center">
                        <div>+${revenue.toLocaleString()}M</div>
                        <div>Generated additional revenue for our clients</div>
                    </div>
                    {/* Center */}
                    <div className="w-1/3 flex flex-col items-center justify-center">
                        <div>+{marketShare}%</div>
                        <div>Achieved growth in client market share</div>
                    </div>
                    {/* Rightside */}
                    <div className="w-1/3 flex flex-col items-center justify-center">
                        <div>{satisfaction}%</div>
                        <div>Client satisfaction rate</div>
                    </div>
                </div>
            </div>

            {/* Quotes */}
            <div className="bg-ghost-white px-[10vw] 2xl:px-[20vw]">
                <div className="flex justify-between py-10">
                    {quotes.map((quote, index) => (
                        <div key={index} className="py-10">
                            <div className="bg-slate-200 w-full flex flex-col rounded-lg p-8">
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
                                        <div className="text-black text-lg font-medium py-2">
                                            "{quote.answer}"
                                        </div>
                                        <div className="text-black text-md py-2">
                                            {quote.person}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Procurement;
