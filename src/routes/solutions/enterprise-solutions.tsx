import "./solutions.css"

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

const pages = ['Partners', 'Industry', 'About'];

function EnterpriseSolutions() {
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

            {/* Benefits */}
            <div className="bg-gradient-to-b from-white to-ghost-white flex flex-col items-center py-4 w-screen overflow-hidden">
                <h1 className="text-2xl text-oxford-blue font-bold text-center mt-12">Prepare Solutions for Every Space</h1>
                <div className="text-oxford-blue py-6">There is the solutions for a every spaces thumbs up very good</div>
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
                                <div className="text-black text-sm">Corporate savings on a wide range of products that will help your organization grow. Contact us for volume purchasing!</div>
                                <div className="cursor-pointer text-blue-600 text-sm py-2.5">Read More →</div>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-sm w-80 h-60 flex flex-col items-center">
                                <img src={office} className="w-80"/>
                            </div>
                            <div className="rounded-sm w-80 mb-10 flex flex-col">
                                <div className="text-black font-semibold mb-2">Office Workplace</div>
                                <div className="text-black text-sm">NET30 Credit Account (Subject to approval), Credit Card, EFT, In-store payments, leasing via our preferred partner and more!</div>
                                <div className="cursor-pointer text-blue-600 text-sm py-2.5">Read More →</div>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-sm w-80 h-60 flex flex-col items-center">
                                <img src={meeting} className="w-80"/>
                            </div>
                            <div className="rounded-sm w-80 mb-10 flex flex-col">
                                <div className="text-black font-semibold mb-2">Meeting Spaces</div>
                                <div className="text-black text-sm">Let our dedicated Account Manager process your orders, answer your queries, and hear your personal requests for a smooth, worry-free experience.</div>
                                <div className="cursor-pointer text-blue-600 text-sm py-2.5">Read More →</div>
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

        </>
    );
}

export default EnterpriseSolutions;