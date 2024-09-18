import { useEffect } from "react";
import "./hardware.css"

import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import typing from '../../assets/typing.png';
import { CaretRight } from "@phosphor-icons/react";

const pages = ['Partners', 'Industry', 'About'];

function Hardware() {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [location]);

    const isLargeScreen = window.innerWidth >= 1536; // 2xl breakpoint

    let row1 = [
        {
            image: typing,
            name: "Accessories",
            text1: "Keyboards",
            text2: "Headsets",
            text3: "Mice",
            text4: "Webcams",
            text5: "Carrying Case",
            text6: "PC Components",
        },
        {
            image: typing,
            name: "Monitors",
            text1: "Computer Displays",
            text2: "Large Displays",
            text3: "Televisions",
            text4: "Interactive Displays",
            text5: "Projectors",
            text6: "Medical Displays",
        },
        {
            image: typing,
            name: "Laptops",
            text1: "Notebooks",
            text2: "MacBooks",
            text3: "Microsoft Surface",
            text4: "Ultrabooks",
            text5: "2-In-1s",
            text6: "Chromebooks",
        },
        {
            image: typing,
            name: "Electronics",
            text1: "Audio & Video",
            text2: "Smart Phones",
            text3: "Microphones",
            text4: "Speakers",
            text5: "Cameras",
            text6: "Video Suirveillance",
        },
        {
            image: typing,
            name: "Desktops",
            text1: "Workstations",
            text2: "Small Form Factor",
            text3: "Mini Desktops",
            text4: "All-In-Ones",
            text5: "Desktop Towers",
            text6: "POS System",
        },
    ]

    let featured = [
        {
            image: typing,
            name: "Very Cool Accessory",
            text: "Power through the day with this cool new device from Canada Computers. This is obv a placeholder btw.",
        },
        {
            image: typing,
            name: "Very Cool Monitor",
            text: "Power through the day with this cool new device from Canada Computers. This is obv a placeholder btw.",
        },
        {
            image: typing,
            name: "Very Cool Laptop",
            text: "Power through the day with this cool new device from Canada Computers. This is obv a placeholder btw.",
        },
        {
            image: typing,
            name: "Very Cool Electronic",
            text: "Power through the day with this cool new device from Canada Computers. This is obv a placeholder btw.",
        },
    ]

    return (
        <>
            {/* NavBar */}
            <div className="w-full overflow-hidden">
                <NavbarTop />
                <NavbarBottom pages={pages} />
            </div>

            {/* Homepage */}
            <div
                className="overflow-hidden h-64 w-full bg-center"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0) ${isLargeScreen ? '20%' : '10%'}, rgba(0, 0, 0, 0.5) ${isLargeScreen ? '20%' : '10%'}, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0) 60%), url(${typing})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="contents absolute">
                    <div className="px-[15vw] 2xl:px-[25vw] py-16">
                        <div className="text-6xl text-ghost-white font-bold">HARDWARE</div>
                        <div className="text-xl text-ghost-white mt-6">Explore IT hardware and technology for your business.</div>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="bg-ghost-white text-black flex flex-col px-[10vw] 2xl:px-[20vw]">
                <div className="mt-10 text-center text-lg">
                    Find Top-Rated Hardware for Business Applications
                </div>
                <div className="flex flex-row justify-between">
                    {row1.map((category, index) => (
                        <div key={index} className="flex-1 flex justify-center py-10">
                            <div className="flex flex-col items-center">
                                <img
                                    src={category.image}
                                    className="w-48 h-32 rounded-sm object-cover mb-2"
                                    alt={`Profile ${index}`}
                                />
                                <div className="font-semibold mb-4 relative group">
                                    {category.name}
                                    <span className="absolute left-0 bottom-[-5px] h-[2px] w-full bg-black transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                                </div>
                                <div className="text-sm bg-slate-200 rounded-sm w-48 h-46 px-4 py-4">
                                    <div className="flex-col">
                                        {[
                                            category.text1,
                                            category.text2,
                                            category.text3,
                                            category.text4,
                                            category.text5,
                                            category.text6,
                                        ].map((text, index) => (
                                            <div className="flex flex-row items-center mb-1.5 group" key={index}>
                                                <span>{text}</span>
                                                <CaretRight className="ml-1 transition-transform duration-100 group-hover:translate-x-1" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Products */}
            <div className="bg-ghost-white text-black flex flex-col px-[10vw] 2xl:px-[20vw]">
                <div className="mt-10 text-center text-lg">
                    Our Featured Products
                </div>
                <div className="flex flex-row gap-x-4">
                    {featured.map((product, index) => (
                        <div key={index} className="flex-1 flex justify-center py-10">
                            <div className="flex flex-col items-center bg-slate-200 rounded-sm">
                                <img
                                    src={product.image}
                                    className="w-58 h-32 rounded-t-sm object-cover"
                                    alt={`Profile ${index}`}
                                />
                                <div className="text-sm w-58 h-46 px-4 py-4">
                                    <div className="flex-col">
                                        <div className="font-medium">{product.name}</div>
                                        <div className="mt-1">{product.text}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Catalogue */}
            <div className="flex bg-ghost-white text-black px-[10vw] 2xl:px-[20vw] mt-10">
                {/* Sidebar */}
                <div className="bg-slate-200 p-4 pr-20">
                    <h2 className="text-lg font-semibold mb-4">Categories</h2>
                    <div className="mb-4">
                        <label className="mr-2">In Stock:</label>
                        <input type="checkbox" />
                    </div>
                    <h3 className="font-medium">Categories</h3>
                    <div className="flex flex-col mt-2 mb-4">
                        <button className="text-left py-2 hover:bg-gray-300">Price</button>
                        <button className="text-left py-2 hover:bg-gray-300">Brand</button>
                        <button className="text-left py-2 hover:bg-gray-300">Category</button>
                        <button className="text-left py-2 hover:bg-gray-300">Rating</button>
                    </div>
                </div>

                {/* Products */}
                <div className="flex-1 p-4">
                    {/* Categories */}
                    <div className="bg-slate-200 rounded-sm text-lg flex-1 flex justify-center">
                        Find Top-Rated Hardware for Business Applications
                    </div>
                    <div className="flex flex-row justify-between">
                        {row1.map((category, index) => (
                            <div key={index} className="flex-1 flex justify-center py-10">
                                <div className="flex flex-col items-center">
                                    <img src={category.image} className="w-48 h-32 rounded-sm object-cover mb-2" alt={`Profile ${index}`} />
                                    <div className="font-semibold mb-4 relative group">
                                        {category.name}
                                        <span className="absolute left-0 bottom-[-5px] h-[2px] w-full bg-black transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                                    </div>
                                    <div className="text-sm bg-slate-200 rounded-sm w-48 h-46 px-4 py-4">
                                        <div className="flex-col">
                                            {[
                                                category.text1,
                                                category.text2,
                                                category.text3,
                                                category.text4,
                                                category.text5,
                                                category.text6,
                                            ].map((text, index) => (
                                                <div className="flex flex-row items-center mb-1.5 group" key={index}>
                                                    <span>{text}</span>
                                                    <CaretRight className="ml-1 transition-transform duration-100 group-hover:translate-x-1" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Featured Products */}
                    <div className="flex flex-row gap-x-4 mb-10">
                        {featured.map((product, index) => (
                            <div key={index} className="flex-1 flex justify-center py-10">
                                <div className="flex flex-col items-center bg-slate-200 rounded-sm">
                                    <img src={product.image} className="w-58 h-32 rounded-t-sm object-cover" alt={`Profile ${index}`} />
                                    <div className="text-sm w-58 h-46 px-4 py-4">
                                        <div className="flex-col">
                                            <div className="font-medium">{product.name}</div>
                                            <div className="mt-1">{product.text}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Products */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {featured.map((product, index) => (
                            <div key={index} className="flex flex-col items-center bg-slate-200 rounded-sm p-4">
                                <img src={product.image} className="w-32 h-32 rounded-t-sm object-cover" alt={`Product ${index}`} />
                                <div className="text-sm mt-2 font-medium">{product.name}</div>
                                <div className="text-xs">{product.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Hardware;
