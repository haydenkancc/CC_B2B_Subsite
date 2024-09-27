import React, { startTransition, useEffect, useRef, useState } from "react";
import "./procurement.css";
import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import changebuilding from "../../assets/changebuilding.gif";
import tmulogo from "../../assets/tmulogo.png"
import tmumeeting from "../../assets/tmumeeting.png"
import out from "../../assets/out.png"
import strat1 from "../../assets/strat1.png"
import strat2 from "../../assets/strat2.png"
import strat3 from "../../assets/strat3.png"
import strat4 from "../../assets/strat4.png"
import strat5 from "../../assets/strat5.png"
import strat6 from "../../assets/strat6.png"
import strat7 from "../../assets/strat7.png"
import scale from "../../assets/scale.png"
import supply from "../../assets/supply.png"
import knowledge from "../../assets/knowledge.png"
import tech from "../../assets/tech.png"
import relationships from "../../assets/relationships.png"
import compliance from "../../assets/compliance.png"
import strategy from "../../assets/strategy.png"
import spend from "../../assets/spend.png"
import contract from "../../assets/contract.png"
import supplier from "../../assets/supplier.png"
import optimization from "../../assets/optimization.png"

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

const stratcards = [
    {
        image: strat1,
        step: "Step 1",
        title: "Initial Assessment and Needs Analysis",
        sub1: "Understanding the Client's Goals:",
        sub2: "Identifying Key Areas:",
        sub3: "Assessing Current Processes:",
        text1: "Clearly define the client's objectives, challenges, and desired outcomes.",
        text2: "Pinpoint specific areas where procurement can be improved, such as cost reduction, risk management, or supplier performance.",
        text3: "Evaluate the client's existing procurement practices, identifying strengths, weaknesses, and opportunities for improvement.",
    },
    {
        image: strat2,
        step: "Step 2",
        title: "Data Collection and Analysis",
        sub1: "Spend Analysis:",
        sub2: "Supplier Performance Review:",
        sub3: "Benchmarking:",
        text1: "Gather and analyze spending data to identify areas of potential cost savings.",
        text2: "Evaluate supplier performance against established metrics.",
        text3: "Compare the client's procurement practices to industry benchmarks.",
    },
    {
        image: strat3,
        step: "Step 3",
        title: "Strategic Planning",
        sub1: "Goal Setting:",
        sub2: "Strategy Development:",
        sub3: "Risk Assessment:",
        text1: "Develop clear, measurable goals for procurement.",
        text2: "Create a strategic plan outlining the steps needed to achieve the goals.",
        text3: "Identify potential risks and develop mitigation strategies.",
    },
    {
        image: strat4,
        step: "Step 4",
        title: "Supplier Evaluation and Selection",
        sub1: "Supplier Identification: ",
        sub2: "Supplier Evaluation:",
        sub3: "Supplier Selection:",
        text1: "Identify potential suppliers based on criteria such as cost, quality, delivery time, and sustainability.",
        text2: "Evaluate suppliers using a structured evaluation process.",
        text3: "Select the most suitable suppliers based on the evaluation criteria.",
    },
    {
        image: strat5,
        step: "Step 5",
        title: "Contract Negotiation",
        sub1: "Contract Development:",
        sub2: "Risk Mitigation:",
        sub3: "Performance Metrics:",
        text1: "Draft and negotiate contracts with selected suppliers.",
        text2: "Ensure that contracts include appropriate clauses to mitigate risks.",
        text3: "Establish clear performance metrics to measure supplier performance.",
    },
    {
        image: strat6,
        step: "Step 6",
        title: "Supplier Relationship Management",
        sub1: "Ongoing Monitoring:",
        sub2: "Collaboration:",
        sub3: "Performance Improvement:",
        text1: "Monitor supplier performance and address any issues proactively.",
        text2: "Foster collaboration with suppliers to improve efficiency and reduce costs.",
        text3: "Work with suppliers to identify areas for improvement and implement corrective actions.",
    },
    {
        image: strat7,
        step: "Step 7",
        title: "Continuous Improvement",
        sub1: "Regular Reviews: ",
        sub2: "Data Analysis:",
        sub3: "",
        text1: "Conduct regular reviews of procurement processes and performance.",
        text2: "Use data analytics to identify trends and opportunities for improvement.",
        text3: "",
    },
];

function Procurement() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const leftRefs = useRef([]);
    const rightRefs = useRef([]);
    const bannerRef = useRef(null);

    const [revenue, setRevenue] = useState(0);
    const [marketShare, setMarketShare] = useState(0);
    const [satisfaction, setSatisfaction] = useState(0);
    const [startProcessAnimation, setStartProcessAnimation] = useState(false);
    const [startBannerAnimation, setStartBannerAnimation] = useState(false);

    // Animation for revenue, market share, and satisfaction
    useEffect(() => {
        const revenueTarget = 5;
        const marketShareTarget = 30;
        const satisfactionTarget = 97;

        const startAnimationWithDelay = setTimeout(() => {
            const revenueInterval = setInterval(() => {
                if (startBannerAnimation) {
                    setRevenue(prev => {
                        if (prev < revenueTarget) return Math.min(prev + 1, revenueTarget);
                        clearInterval(revenueInterval);
                        return revenueTarget;
                    });
                }
            }, 400);

            const marketShareInterval = setInterval(() => {
                if (startBannerAnimation) {
                    setMarketShare(prev => {
                        if (prev < marketShareTarget) return Math.min(prev + 1, marketShareTarget);
                        clearInterval(marketShareInterval);
                        return marketShareTarget;
                    });
                }
            }, 66.67);

            const satisfactionInterval = setInterval(() => {
                if (startBannerAnimation) {
                    setSatisfaction(prev => {
                        if (prev < satisfactionTarget) return Math.min(prev + 1, satisfactionTarget);
                        clearInterval(satisfactionInterval);
                        return satisfactionTarget;
                    });
                }
            }, 20.62);

            return () => {
                clearInterval(revenueInterval);
                clearInterval(marketShareInterval);
                clearInterval(satisfactionInterval);
            };
        }, 500); // 1000 = Delay of 1 second

        return () => {
            clearTimeout(startAnimationWithDelay);
        };
    }, [startBannerAnimation]);

    // Observer for the process section
    useEffect(() => {
        const options = {
            root: null,
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setStartProcessAnimation(true);
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop lookin once it's in view
                }
            });
        }, options);

        // Observe left-side process elements
        leftRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        // Observe right-side process elements
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

    // Observer for the banner
    useEffect(() => {
        const options = {
            root: null,
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setStartBannerAnimation(true);
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once it's in view
                }
            });
        }, options);

        // Observe the banner only
        if (bannerRef.current) {
            observer.observe(bannerRef.current);
        }

        return () => {
            if (bannerRef.current) {
                observer.unobserve(bannerRef.current);
            }
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
                            <h1 className="text-4xl font-bold uppercase">Optimize your technology with</h1>
                            <h1 className="text-4xl font-bold uppercase mt-3">Canada Computers & Electronics</h1>
                            <p className="text-xl font-medium mt-6">Innovative Services to Drive Your Success</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Problems */}
            <div className="bg-ghost-white px-[10vw] 2xl:px-[20vw]">
                <div className="flex flex-row mt-20 mb-18">
                    <img src={out} className="rounded-sm object-cover w-72" />
                    <div className="flex flex-col ml-14">
                        <div className="text-2xl font-bold flex mt-10 mb-2 ml-4">
                            The Problems And How We Address Them
                        </div>
                        <div className="flex flex-col">
                            {/* First row of problems */}
                            <div className="flex flex-row justify-between gap-x-7">
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
                                        <img src={strategy} className="w-12 py-1"/>
                                    </div>
                                    <div className="rounded-sm w-72 mb-8 flex flex-col py-4">
                                        <div className="text-black font-medium">Strategic Sourcing</div>
                                        <div className="text-black text-sm mt-2">Enhance your procurement process by leveraging data-driven insights and supplier collaboration to drive value and efficiency.</div>
                                    </div>
                                    <div className="rounded-sm w-72 flex flex-col">
                                        <img src={supplier} className="w-12 py-1"/>
                                    </div>
                                    <div className="rounded-sm w-72 flex flex-col py-4">
                                        <div className="text-black font-medium">Supplier Relationship Management</div>
                                        <div className="text-black text-sm mt-2">Cultivate strong partnerships with suppliers through effective communication and performance metrics, fostering collaboration that drives innovation and value.</div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="rounded-sm w-72 flex flex-col">
                                        <img src={spend} className="w-12 py-1"/>
                                    </div>
                                    <div className="rounded-sm w-72 mb-8 flex flex-col py-4">
                                        <div className="text-black font-medium">Spend Analysis</div>
                                        <div className="text-black text-sm mt-2">Unlock actionable insights by dissecting your spending patterns, enabling informed decisions that maximize cost savings and improve budget management.</div>
                                    </div>
                                    <div className="rounded-sm w-72 flex flex-col">
                                        <img src={optimization} className="w-12 py-1"/>
                                    </div>
                                    <div className="rounded-sm w-72 flex flex-col py-4">
                                        <div className="text-black font-medium">Procurement Process Optimization</div>
                                        <div className="text-black text-sm mt-2">Streamline your purchasing workflows by identifying bottlenecks and implementing best practices, ensuring efficiency and cost-effectiveness throughout the supply chain.</div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="rounded-sm w-72 flex flex-col">
                                        <img src={contract} className="w-12 py-1"/>
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
                <div className="text-2xl text-black font-bold mt-4">Join our network.</div>
                <div className="text-2xl text-black font-bold mb-10">Simplify the process.</div>
                <div className="flex flex-col mb-14">
                    {stratcards.map((strat, index) => (
                        <div key={index} className={`py-2.5 ${index % 2 === 1 ? 'ml-72' : ''}`}>
                            <div className={`fade-in-left`} ref={el => leftRefs.current[index] = el}>
                                <div className="flex flex-row">
                                    <img src={strat.image} className="w-64 h-48 object-cover rounded-xl" />
                                    <div className="flex flex-col ml-8 justify-center">
                                        <div className="text-blue-700 text-sm uppercase">{strat.step}</div>
                                        <div className="text-lg font-semibold">{strat.title}</div>
                                        <span>
                                            <span className="text-sm font-medium">{strat.sub1}</span>
                                            <span className="ml-1 text-sm">{strat.text1}</span>
                                        </span>
                                        <span>
                                            <span className="text-sm font-medium">{strat.sub2}</span>
                                            <span className="ml-1 text-sm">{strat.text2}</span>
                                        </span>
                                        <span>
                                            <span className="text-sm font-medium">{strat.sub3}</span>
                                            <span className="ml-1 text-sm">{strat.text3}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>

            {/* Expertise */}
            <div className="bg-ghost-white w-full px-[10vw] 2xl:px-[20vw] py-14 text-center mb-8">
                <div className="text-2xl text-black font-semibold">What We Do Best</div>
                <div className="text-md text-black mt-4">
                    Under our main brand, we are a leading technology retailer in Canada, we have a strong foundation in procurement and sourcing due to our extensive experience and operations.
                </div>
                <div className="flex flex-row justify-between mt-10">
                    <div className="bg-slate-200 w-80 flex flex-col items-center p-4">
                        <img src={scale} className="w-12 py-1"/>
                        <div className="text-black font-semibold mt-2">Scale and Buying Power</div>
                        <div className="text-black text-sm mt-2">Using significant purchasing power and expert negotiation skills to secure advantageous terms.</div>
                    </div>
                    <div className="bg-slate-200 w-80 flex flex-col items-center p-4">
                        <img src={supply} className="w-12 py-1"/>
                        <div className="text-black font-semibold mt-2">Supply Chain Management</div>
                        <div className="text-black text-sm mt-2">Sourcing products efficiently with a global supply chian network while expertly managing risks.</div>
                    </div>
                    <div className="bg-slate-200 w-80 flex flex-col items-center p-4">
                        <img src={knowledge} className="w-12 py-1"/>
                        <div className="text-black font-semibold mt-2">Product Knowledge</div>
                        <div className="text-black text-sm mt-2">A deep understanding of technology products ensures we can accurately evaluate quality.</div>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-10">
                    <div className="bg-slate-200 w-80 flex flex-col items-center p-4">
                        <img src={tech} className="w-12 py-1"/>
                        <div className="text-black font-semibold mt-2">Technology Expertise</div>
                        <div className="text-black text-sm mt-2">Leverage data analytics with a robust IT infrastructure to streamline procurement processes and identify savings.</div>
                    </div>
                    <div className="bg-slate-200 w-80 flex flex-col items-center p-4">
                        <img src={relationships} className="w-12 py-1"/>
                        <div className="text-black font-semibold mt-2">Supplier Relationships</div>
                        <div className="text-black text-sm mt-2">Long-term partnerships with suppliers through trust and ethical practices provide us with a competitive advantage.</div>
                    </div>
                    <div className="bg-slate-200 w-80 flex flex-col items-center p-4">
                        <img src={compliance} className="w-12 py-1"/>
                        <div className="text-black font-semibold mt-2">Regulatory Compliance</div>
                        <div className="text-black text-sm mt-2">Being well-versed in industry regulations and standards ensure compliance while helping clients navigate complexities and mitigate risks.</div>
                    </div>
                </div>
            </div>

            {/* Banner */}
            <div ref={bannerRef} className={`bg-oxford-blue text-ghost-white flex flex-col w-full overflow-hidden px-[10vw] 2xl:px-[20vw] ${startBannerAnimation ? 'animate' : ''}`}>
                <div className="flex flex-row justify-between py-14">
                    {/* Leftside */}
                    <div className="w-1/3 flex flex-col items-center justify-center">
                        <div className="font-bold text-4xl">${revenue}M</div>
                        <div className="mt-4 font-medium" ref={el => rightRefs.current.push(el)}>Additional Revenue</div>
                    </div>
                    {/* Center */}
                    <div className="w-1/3 flex flex-col items-center justify-center">
                        <div className="font-bold text-4xl">{marketShare}%</div>
                        <div className="mt-4 font-medium" ref={el => rightRefs.current.push(el)}>Increased Growth in Client Market Share</div>
                    </div>
                    {/* Rightside */}
                    <div className="w-1/3 flex flex-col items-center justify-center">
                        <div className="font-bold text-4xl">{satisfaction}%</div>
                        <div className="mt-4 font-medium" ref={el => rightRefs.current.push(el)}>Client Satisfaction Rate</div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Procurement;
