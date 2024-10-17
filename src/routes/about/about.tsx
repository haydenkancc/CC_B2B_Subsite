import { useEffect } from "react";
import "../solutions/solutions.css"
import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import bluilding from "../../assets/bluilding.png";
import { CaretRight } from '@phosphor-icons/react';
import enterprise1 from "../../assets/enterprise1.png";
import enterprise2 from "../../assets/enterprise2.png";
import enterprise3 from "../../assets/enterprise3.png";
import FooterBottom from "../../components/footer/footer-bottom.tsx";
import FooterTop from "../../components/footer/footer-top.tsx";
import partners from "../../assets/partners.png";
import social from "../../assets/social.png"
import relation from "../../assets/relation.png"

const pages = ['Partners', 'Industry', 'About'];

function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>

            {/* NavBar */}
            <div className="w-full">
                <NavbarTop />
                {/* <NavbarBottom pages={pages} /> */}
            </div>

            {/* Homepage */}
            <div
                className="overflow-hidden bg-cover h-120 bg-top"
                style={{
                    backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.6) 25%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 75%), url(${bluilding})`,
                }}
            >
                <div className="text-ghost-white h-full">
                    <div className="max-[1440px] px-6 h-full text-center flex flex-col justify-center">
                        <h1 className="text-4xl font-bold uppercase">Discover Canada Computers & Electronics</h1>
                        <p className="text-2xl font-medium mt-10">Leading the Way in Technology Solutions for Businesses</p>
                    </div>
                </div>
            </div>

            {/* Banner */}
            <div className="bg-ghost-white py-20">
                <div className="max-w-[1440px] px-4 mx-auto flex flex-col">
                    <div className="text-center text-black text-2xl">Advocating for Innovation: Our Commitment to Businesses Worldwide</div>
                    <div className="text-center text-black text-xl font-light mt-6">We empower organizations with innovative technology solutions tailored to their specific needs. Our commitment to integrity and collaboration ensures that we provide the best tools and resources to help our clients succeed in today's digital landscape.</div>
                </div>
            </div>

            {/* About */}
            <div className="bg-white py-20">
                <div className="max-w-[1440px] px-4 mx-auto flex flex-row justify-between items-center gap-x-14">
                    <div className="flex flex-col w-1/2">
                        <div className="text-black text-xl font-medium">Driving Social Impact with Innovation</div>
                        <div className="text-black mt-6">At Canada Computers & Electronics, we are driven by the transformative potential of technology to enhance lives. We recognize the significance of contributing to the communities where we work and reside worldwide, and we are committed to making a positive difference.</div>
                        <div className="text-black mt-6">Giving back is not just a principle for us; it's an essential part of our mission.</div>
                        <button className="text-oxford-blue border-2 border-oxford-blue rounded-sm py-2 px-4 font-medium w-44 hover:bg-oxford-blue hover:text-ghost-white mt-8">
                            Learn More
                        </button>
                    </div>
                    <div className="w-1/2">
                        <img src={social} className="rounded-sm w-full h-88 object-cover" />
                    </div>
                </div>
            </div>
            <div className="bg-white pt-5 pb-20">
                <div className="max-w-[1440px] px-4 mx-auto flex flex-row justify-between items-center gap-x-14">
                    <div className="w-1/2">
                        <img src={relation} className="rounded-sm w-full h-88 object-cover object-bottom" />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="text-black text-xl font-medium">Engaging with Communities and Sharing Updates</div>
                        <div className="text-black mt-6">At Canada Computers & Electronics, we understand that innovation extends beyond technology—it's about fostering meaningful relationships within our communities and networks. We invite you to explore our newsroom for the latest updates on our initiatives, press releases, and essential announcements.</div>
                        <div className="text-black mt-6">Stay informed about how we're making a difference and connecting with those we serve.</div>
                        <button className="text-oxford-blue border-2 border-oxford-blue rounded-sm py-2 px-4 font-medium w-44 hover:bg-oxford-blue hover:text-ghost-white mt-8">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Succeed */}
            <div className="bg-ghost-white flex flex-col items-center py-4 px-20 w-full overflow-hidden justify-center max-w-[1440px] px-12 mx-auto">
                <div className="text-xl text-oxford-blue font-medium text-center mt-12 mb-10">Harnessing deep industry knowledge and agile methodologies, we transform challenges into opportunities that elevate operational efficiency and drive sustainable growth.</div>
            </div>
            <div className="bg-gradient-to-b from-ghost-white to-white items-center w-full overflow-hidden py-4">
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

            {/* Partners */}
            <div className="bg-white py-20 w-full overflow-hidden items-center justify-between">
                <div className="flex flex-row items-center justify-between max-w-[1440px] px-4 mx-auto">
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <h1 className="text-2xl text-black font-semibold">Some of Our Technology Partners</h1>
                            <img src={partners} className="mt-6" />
                        </div>
                    </div>
                </div>
            </div>

            <FooterTop />
            <FooterBottom />

        </>
    );
}

export default About;