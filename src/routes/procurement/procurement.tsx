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

const pages = ['Partners', 'Industry', 'About'];

const stratcards1 = [
    {
        image: laptop,
        title: "Custom Solutions",
        text: "Tailored strategies to address your unique business needs.",
    },
    {
        image: laptop,
        title: "Change Management",
        text: "Leveraging analytics for informed decision-making and growth.",
    },
    {
        image: laptop,
        title: "Data-Driven Insights",
        text: "Guiding seamless transitions during transformative periods.",
    },
];

const stratcards2 = [
    {
        image: laptop,
        title: "Custom Solutions",
        text: "Tailored strategies to address your unique business needs.",
    },
    {
        image: laptop,
        title: "Change Management",
        text: "Leveraging analytics for informed decision-making and growth.",
    },
];

const quotes = [
    {
        question: "How would you describe the overall satisfaction and trust you have in our company?",
        answer: "Extremely satisfied. Canada Computers has never been anything other than timely in responses and supportive of any issues that we are dealing with at the creative school. They have been a joy to work with throughout.",
        person: "- Geoffrey Lachapelle",
    },
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
                if (prev < revenueTarget) return Math.min(prev + 0.1, revenueTarget);
                clearInterval(revenueInterval);
                return revenueTarget;
            });
        }, 50);

        const marketShareInterval = setInterval(() => {
            setMarketShare(prev => {
                if (prev < marketShareTarget) return Math.min(prev + 1, marketShareTarget);
                clearInterval(marketShareInterval);
                return marketShareTarget;
            });
        }, 100);

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
            <div>
                <div
                    className="overflow-hidden bg-cover h-[85vh] 2xl:h-[90vh] bg-center"
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
            </div>

            {/* Banner */}
            <div className="bg-oxford-blue flex flex-col py-20 w-full items-center overflow-hidden px-[10vw] 2xl:px-[20vw]">
                <div className="text-2xl text-white font-bold text-center">Canada Computers & Electronics empowers businesses with transformative strategies, delivering results that are 50% more efficient.</div>
            </div>

            {/* Strategy */}
            <div className="bg-ghost-white flex flex-col mt-14 w-full overflow-hidden px-[10vw] 2xl:px-[20vw]">
                <div className="text-2xl text-black font-bold text-center">Our Strategic Approach</div>
                <div className="flex flex-row justify-center mt-10">
                    {/* Leftside */}
                    <div className="w-1/3 flex flex-col items-center">
                        <div className="flex flex-col">
                            {stratcards1.map((strat, index) => (
                                <div key={index} className="py-6">
                                    <div className="flex flex-col items-center">
                                        <div className={`fade-in-right mt-4`} ref={el => leftRefs.current[index] = el}>
                                            <div className={`bg-slate-200 text-sm w-58 px-4 py-4 rounded-sm`}>
                                                <div className="flex-col">
                                                    <div className="mt-1 text-md font-semibold">{strat.title}</div>
                                                    <div className="mt-1">{strat.text}</div>
                                                </div>
                                            </div>
                                            <img src={strat.image} className={`w-58 h-36 object-cover`} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Center */}
                    <div className="w-10 flex flex-col items-center relative">
                        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-black" />
                        <div className="flex flex-col items-center">
                            {stratcards1.map((strat, index) => (
                                <div key={index} className="py-10">
                                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white" />
                                    <div className="h-60" />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Rightside */}
                    <div className="w-1/3 flex flex-col items-center justify-center">
                        <div className="flex flex-col">
                            {stratcards2.map((strat, index) => (
                                <div key={index} className="py-6">
                                    <div className="flex flex-col items-center">
                                        <div className={`fade-in-right mt-4`} ref={el => rightRefs.current[index] = el}>
                                            <div className={`bg-slate-200 text-sm w-58 px-4 py-4 rounded-sm`}>
                                                <div className="flex-col">
                                                    <div className="mt-1 text-md font-semibold">{strat.title}</div>
                                                    <div className="mt-1">{strat.text}</div>
                                                </div>
                                            </div>
                                            <img src={strat.image} className={`w-58 h-36 object-cover`} />
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
                <div className="flex flex-row justify-between mt-20">
                    <img src={quote1} className="w-120" />
                    <img src={quote2} className="w-120" />
                </div>
            </div>

            <div className="bg-ghost-white px-[10vw] 2xl:px-[20vw]">
                <div className="flex flex-row justify-between text-center py-20">
                    {quotes.map((quote, index) => (
                        <div key={index} className="py-10">
                            <div className="bg-slate-200 w-120 h-96 flex flex-col justify-between px-10 py-4">
                                <div className="py-2">
                                    <div className="flex flex-row h-16 justify-center gap-x-14">
                                        <img src={cclogo} />
                                        <img src={tmulogo} />
                                    </div>
                                </div>
                                <div className="uppercase text-black text-sm font-semibold py-2">
                                    {quote.question}
                                </div>
                                <div className="uppercase text-black text-sm font-semibold py-2">
                                    {quote.answer}
                                </div>
                                <div className="text-black text-sm font-semibold py-2">
                                    {quote.person}
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
