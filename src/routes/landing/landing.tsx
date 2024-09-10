import { useState } from 'react';
import placeholder from "../../assets/placeholder.png"
import rand from "../../assets/rand.png"
import header from "../../assets/header.png"
import working from "../../assets/working.png"


function Landing() {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const cardData = [
        { icon: rand, title: 'Working from Home', content: 'Info on Section 1' },
        { icon: placeholder, title: 'Office Workspace', content: 'Info on Section 2' },
        { icon: rand, title: 'Remote Learning', content: 'Info on Section 3' },
    ];

    return (
        <>

            {/* Homepage */}
            <div>
                <div className="overflow-hidden bg-cover h-128" style={{backgroundImage:`url(${header})`}}>
                    <div className="contents absolute">
                        <div className="px-32 py-16">
                            <h1 className="text-5xl font-bold text-ghost-white mt-10">
                                Welcome to Better<br></br>Business Buying
                            </h1>
                            <p className="text-xl text-ghost-white font-mono mt-6">Elevate your business to the next level</p>
                            <button className="text-lg bg-ghost-white hover:bg-slate-300 text-oxford-blue font-bold py-2 px-8 my-8 rounded-sm">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us */}
            <div className="bg-gradient-to-b from-slate-300 to-ghost-white">
                <div className="flex px-32 py-20">
                    <div className="contents text-black">
                        <div>
                            <div className="text-2xl">We are Canada Computers</div>
                            <p className="mt-4 text-md">Over its 32-year history, Canada Computers & Electronics has continued to provide customers with the best products at the best value. Its first location established itself in the heart of Kingston, Ontario, with an initial vision of providing high-quality products for university students, at a student-friendly price. Striving to serve the great minds of our future, there was no better place to start than a location near Kingston's Queens University.</p>
                            <button className="bg-slate-300 hover:bg-slate-400 text-oxford-blue rounded-sm px-3 py-2 hover:text-oxford-blue mt-4">
                                Learn More About Us
                            </button>
                        </div>
                        <img src={ working } className="ml-20 h-72"></img>
                    </div>
                </div>
            </div>

            {/* Solutions */}
            <div className="bg-ghost-white">
                <h1 className="text-2xl text-oxford-blue font-bold text-center py-6">
                    SOLUTIONS
                </h1>
                <h1 className="text-base text-oxford-blue text-lg font-mono text-center">
                    Productivity and Efficiency Supercharged with the proper Equipment and Technology
                </h1>

                <div className="text-black mt-10">
                    <div className="flex">
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col space-y-4">
                                {cardData.map((_, index) => (
                                    <img
                                    key={index}
                                    src={cardData[index].icon}
                                    alt={`Icon ${index + 1}`}
                                    className={`ml-48 mt-2 border w-20 h-20 px-4 py-4 bg-white hover:border-blue-800 rounded-xl cursor-pointer ${
                                        selectedIndex === index ? 'border-oxford-blue' : ''}`}onClick={() => setSelectedIndex(index)}/>))}
                            </div>
                        </div>
                        <div className="ml-6 flex-1 mb-20">
                            <div className=" border px-24 py-16 w-192 h-72 bg-white rounded-md">
                                <h2 className="text-xl font-bold">{cardData[selectedIndex].title}</h2>
                                <p className="mt-4">{cardData[selectedIndex].content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            
            {/* INDUSTRIES */}
            <div className="bg-oxford-blue">
                <h1 className="text-2xl text-white font-bold text-center py-8">
                    WORK
                    <span className="text-2xl text-blue-400 font-bold py-10 ml-2">WITH US</span>
                </h1>
                <p className="text-base text-white pb-5 text-center">Canada Computers very cool thumbs up</p>
                <p className="text-base text-white pb-5 text-center">Include Partners (who we work with) in this section too.</p>
            </div>

            {/* Products */}
            <div className="bg-white flex">
                <div className="grid grid-cols-1 divide-y text-black">
                    <div className="text-xl text-black font-bold py-2 mt-5 mb-5 ml-14">Bestselling Products
                        <div className="flex">
                            <div className="contents">
                                <img src = {placeholder} className="w-40 h-48 mt-8 rounded"></img>
                                <img src = {placeholder} className="w-40 h-48 ml-10 mt-8 rounded"></img>
                                <img src = {placeholder} className="w-40 h-48 ml-10 mt-8 rounded"></img>
                                <img src = {placeholder} className="w-40 h-48 ml-10 mt-8 rounded"></img>
                                <img src = {placeholder} className="w-40 h-48 ml-10 mt-8 rounded"></img>
                                <img src = {placeholder} className="w-40 h-48 ml-10 mt-8 rounded"></img>
                            </div>
                        </div>
                    </div>
                    <div className="text-xl text-black font-bold py-2 mb-5 ml-14">New Arrivals
                        <div className="flex">
                            <div className="contents">
                                <img src = {placeholder} className="w-40 h-48 mt-8 rounded"></img>
                                <img src = {placeholder} className="w-40 h-48 ml-10 mt-8 rounded"></img>
                                <img src = {placeholder} className="w-40 h-48 ml-10 mt-8 rounded"></img>
                                <img src = {placeholder} className="w-40 h-48 ml-10 mt-8 rounded"></img>
                                <img src = {placeholder} className="w-40 h-48 ml-10 mt-8 rounded"></img>
                                <img src = {placeholder} className="w-40 h-48 ml-10 mt-8 rounded"></img>
                            </div>
                        </div>
                    </div>
                    <div className="text-xl text-black font-bold py-2 mb-8 ml-14">Shop by Categories
                        <div className="flex">
                            <div className="contents">
                                <img src = {placeholder} className="w-40 h-48 mt-8 rounded"></img>
                                <img src = {placeholder} className="w-40 h-48 ml-10 mt-8 rounded"></img>
                                <img src = {placeholder} className="w-40 h-48 ml-10 mt-8 rounded"></img>
                                <img src = {placeholder} className="w-40 h-48 ml-10 mt-8 rounded"></img>
                                <img src = {placeholder} className="w-40 h-48 ml-10 mt-8 rounded"></img>
                                <img src = {placeholder} className="w-40 h-48 ml-10 mt-8 rounded"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-ghost-white">
                <div className="flex">
                    <div className="contents">
                        {/* Leftside */}
                        <div className="text-oxford-blue ml-24 py-8">
                            <div className="text-2xl font-bold mt-8">CONTACT US</div>
                            <p className="mt-6">We help businesses</p>
                            <p className="mt-4">Get more than a business partner</p>
                            <p className="mt-4">Start by contacting us today</p>
                            <img src={rand} className="mt-10 w-96 h-128 rounded-full"></img>
                        </div>

                        {/* Rightside */}
                        <form className="w-full max-w-md ml-48">
                            <div className="flex flex-wrap mb-6 mt-24">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        First Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Last Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
                                </div>
                            </div>
                            <div className="flex flex-wrap px-3 mb-6">
                                <div className="w-full">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Company Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Business Email
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Phone Number
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
                                </div>
                            </div>
                            <div className="flex flex-wrap px-3 mb-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    What is your current working relationship with us?
                                </label>
                                <div className="relative w-full">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option value="" disabled selected>Please Select</option>
                                    <option>I'm am currently working with Canada Computers</option>
                                    <option>I'm not currently working with Canada Computers</option>
                                    <option>I want to work with Canada Computers</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6">
                                    Where should we route your inquiry?
                                </label>
                                <div className="relative w-full">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option value="" disabled selected>Please Select</option>
                                    <option>General Questions/Comments</option>
                                    <option>Human Resources</option>
                                    <option>Product, Service, or Business Solution</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap px-3 mb-4">
                                <div className="w-full">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        How can we help you?
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
                                </div>
                            </div>
                            <div className="px-3">
                                <button className=" px-3 mb-28 w-full shadow bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 rounded">
                                    Get in Touch
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                
        </>        
    )
}

export default Landing;