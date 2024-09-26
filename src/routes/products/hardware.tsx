import React, { useState, useEffect } from "react";
import "./hardware.css";

import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import typing from '../../assets/typing.png';
import laptop from '../../assets/laptop.png';
import { CaretRight, CaretDown, CaretUp, Star } from "@phosphor-icons/react";
import Logo from '../../assets/Canada_Computers_(Icon).svg?react';
import adspace1 from "../../assets/adspace1.png"
import adspace2 from "../../assets/adspace2.png"
import adspace3 from "../../assets/adspace3.png"
import adspace4 from "../../assets/adspace4.png"
import adspace5 from "../../assets/adspace5.png"
import ProductsCarousel from "./products-carousel.tsx";

const pages = ['Partners', 'Industry', 'About'];

function Hardware() {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [location]);

    const isLargeScreen = window.innerWidth >= 1536;

    const [openFilters, setOpenFilters] = useState({});

    const handleSelectChange = (filterValue) => {
        setOpenFilters((prev) => ({
            ...prev,
            [filterValue]: !prev[filterValue],
        }));
    };

    const row1 = [
        {
            image: laptop,
            name: "Accessories",
            text1: "Keyboards",
            text2: "Headsets",
            text3: "Mice",
            text4: "Webcams",
            text5: "Carrying Case",
            text6: "PC Components",
        },
        {
            image: laptop,
            name: "Monitors",
            text1: "Computer Displays",
            text2: "Large Displays",
            text3: "Televisions",
            text4: "Interactive Displays",
            text5: "Projectors",
            text6: "Medical Displays",
        },
        {
            image: laptop,
            name: "Laptops",
            text1: "Notebooks",
            text2: "MacBooks",
            text3: "Microsoft Surface",
            text4: "Ultrabooks",
            text5: "2-In-1s",
            text6: "Chromebooks",
        },
        {
            image: laptop,
            name: "Electronics",
            text1: "Audio & Video",
            text2: "Smart Phones",
            text3: "Microphones",
            text4: "Speakers",
            text5: "Cameras",
            text6: "Video Surveillance",
        },
        {
            image: laptop,
            name: "Desktops",
            text1: "Workstations",
            text2: "Small Form Factor",
            text3: "Mini Desktops",
            text4: "All-In-Ones",
            text5: "Desktop Towers",
            text6: "POS System",
        },
    ];

    const featured = [
        {
            image: laptop,
            name: "Very Cool Accessory",
            text: "Power through the day with this cool new device from Canada Computers. This is obv a placeholder btw.",
        },
        {
            image: laptop,
            name: "Very Cool Monitor",
            text: "Power through the day with this cool new device from Canada Computers. This is obv a placeholder btw.",
        },
        {
            image: laptop,
            name: "Very Cool Laptop",
            text: "Power through the day with this cool new device from Canada Computers. This is obv a placeholder btw.",
        },
        {
            image: laptop,
            name: "Very Cool Electronic",
            text: "Power through the day with this cool new device from Canada Computers. This is obv a placeholder btw.",
        },
    ];

    const sidebar = [
        {
            name: "Sort By",
            filterValue: "sort",
        },
        {
            name: "Category",
            filterValue: "category",
        },
        {
            name: "Price",
            filterValue: "price",
        },
        {
            name: "Brand",
            filterValue: "brand",
        },
        {
            name: "Rating",
            filterValue: "rating",
        },
    ];

    const ads = [
        {
            image: adspace1,
        },
        {
            image: adspace2,
        },
        {
            image: adspace3,
        },
        {
            image: adspace4,
        },
        {
            image: adspace5,
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
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0) ${isLargeScreen ? '20vw' : '10vw'}, rgba(0, 0, 0, 0.5) ${isLargeScreen ? '20vw' : '10vw'}, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0) 60%), url(${typing})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="contents absolute">
                    <div className="px-[15vw] 2xl:px-[25vw] py-16">
                        <div className="text-6xl text-ghost-white font-bold uppercase">Hardware</div>
                        <div className="text-xl text-ghost-white mt-6">Explore IT hardware and technology for your business.</div>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="bg-ghost-white text-black flex flex-col px-[10vw] 2xl:px-[20vw]">
                <div className="mt-20 text-center text-lg font-semibold">
                    Find Top-Rated Hardware for Business Applications
                </div>
                <div className="flex justify-between">
                    {row1.map((category, index) => (
                        <div key={index} className="py-10">
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
                                <div className="text-sm bg-slate-200 rounded-sm w-48 px-4 py-4">
                                    <div className="flex-col">
                                        {[category.text1, category.text2, category.text3, category.text4, category.text5, category.text6].map((text, index) => (
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
                <div className="mt-10 text-center text-lg font-semibold">
                    Shop Featured Products
                </div>
                <div className="flex justify-between">
                    {featured.map((product, index) => (
                        <div key={index} className="py-10">
                            <div className="flex flex-col items-center">
                                <img
                                    src={product.image}
                                    className="w-58 h-36 object-cover mb-2"
                                    alt={`Profile ${index}`}
                                />
                                <div className="bg-slate-200 text-sm w-58 px-4 py-4 rounded-sm">
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

            {/* Carousel */}
            <div className="bg-ghost-white w-full mt-10">
                <div>
                    <ProductsCarousel ads={ads} />
                </div> 
            </div>

            {/* Catalogue */}
            <div className="flex bg-ghost-white text-black px-[10vw] 2xl:px-[20vw] mt-20">
                {/* Sidebar */}
                <div className="flex">
                    <div className="pr-10">
                        <div className="text-lg flex flex-col">
                            <div className="border-b border-gray-300 py-4 font-semibold uppercase">Filter & Sort</div>
                            {sidebar.map((item, index) => (
                                <div key={index} className={`py-4 ${index < sidebar.length ? 'border-b border-gray-300' : ''}`}>
                                    <div className="flex justify-between font-semibold uppercase">
                                        <div>{item.name}</div>
                                        <button className="ml-12" onClick={() => handleSelectChange(item.filterValue)}>
                                            {openFilters[item.filterValue] ? (
                                                <CaretUp color="#656161" />
                                            ) : (
                                                <CaretDown color="#656161" />
                                            )}
                                        </button>
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openFilters[item.filterValue] ? 'max-h-40' : 'max-h-0'}`}
                                        style={{ transitionProperty: 'max-height' }}
                                    >
                                        {openFilters[item.filterValue] && (
                                            <div className="flex flex-row py-4">
                                                <div className="flex flex-col">
                                                    {item.filterValue === 'sort' && (
                                                        <>
                                                            <div className="flex items-center mb-2">
                                                                <input type="radio" className="bg-gray-200 w-4 h-4" />
                                                                <label className="text-sm ml-3">Relevancy</label>
                                                            </div>
                                                            <div className="flex items-center mb-2">
                                                                <input type="radio" className="bg-gray-200 w-4 h-4" />
                                                                <label className="text-sm ml-3">Deals</label>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <input type="radio" className="bg-gray-200 w-4 h-4" />
                                                                <label className="text-sm ml-3">Newest</label>
                                                            </div>
                                                        </>
                                                    )}
                                                    {item.filterValue === 'category' && (
                                                        <>
                                                            <div className="flex items-center mb-2">
                                                                <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                                                <label className="text-sm ml-3">Accessories</label>
                                                            </div>
                                                            <div className="flex items-center mb-2">
                                                                <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                                                <label className="text-sm ml-3">Monitors</label>
                                                            </div>
                                                            <div className="flex items-center mb-2">
                                                                <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                                                <label className="text-sm ml-3">Laptops</label>
                                                            </div>
                                                            <div className="flex items-center mb-2">
                                                                <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                                                <label className="text-sm ml-3">Electronics</label>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                                                <label className="text-sm ml-3">Desktops</label>
                                                            </div>
                                                        </>
                                                    )}
                                                    {item.filterValue === 'price' && (
                                                        <>
                                                            <div className="flex items-center mb-2">
                                                                <input type="radio" className="bg-gray-200 w-4 h-4" />
                                                                <label className="text-sm ml-3">Low to High</label>
                                                            </div>
                                                            <div className="flex items-center mb-4">
                                                                <input type="radio" className="bg-gray-200 w-4 h-4" />
                                                                <label className="text-sm ml-3">High to Low</label>
                                                            </div>
                                                            <div className="flex flex-row items-center">
                                                                <div className="flex items-center">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="$"
                                                                        className="border border-gray-300 rounded-sm text-sm p-2 bg-white w-18 h-8"
                                                                    />
                                                                </div>
                                                                <div className="text-sm text-gray-500 text-center px-1">-</div>
                                                                <div className="flex items-center">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="$"
                                                                        className="border border-gray-300 rounded-sm text-sm p-2 bg-white w-18 h-8"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <button className="bg-slate-200 rounded-sm text-sm h-8 hover:bg-slate-300 mt-2">Search</button>
                                                        </>
                                                    )}
                                                    {item.filterValue === 'brand' && (
                                                        <>
                                                            <div className="flex items-center mb-2">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Acer"
                                                                    className="border border-gray-300 rounded-sm text-sm p-2 bg-white w-39 h-8"
                                                                />
                                                            </div>
                                                            <button className="bg-slate-200 rounded-sm text-sm h-8 hover:bg-slate-300">Search</button>
                                                        </>
                                                    )}
                                                    {item.filterValue === 'rating' && (
                                                        <>
                                                            <div className="flex items-center mb-2">
                                                                <input type="radio" className="bg-gray-200 w-4 h-4" />
                                                                <Star size={18} color="#ffdd00" weight="fill" className="ml-3" />
                                                                <Star size={18} color="#ffdd00" weight="fill" />
                                                                <Star size={18} color="#ffdd00" weight="fill" />
                                                                <Star size={18} color="#ffdd00" weight="fill" />
                                                                <Star size={18} color="#ffdd00" weight="fill" />
                                                            </div>
                                                            <div className="flex items-center mb-2">
                                                                <input type="radio" className="bg-gray-200 w-4 h-4" />
                                                                <Star size={18} color="#ffdd00" weight="fill" className="ml-3" />
                                                                <Star size={18} color="#ffdd00" weight="fill" />
                                                                <Star size={18} color="#ffdd00" weight="fill" />
                                                                <Star size={18} color="#ffdd00" weight="fill" />
                                                                <Star size={18} color="#9e9e9e" weight="light" />
                                                            </div>
                                                            <div className="flex items-center mb-2">
                                                                <input type="radio" className="bg-gray-200 w-4 h-4" />
                                                                <Star size={18} color="#ffdd00" weight="fill" className="ml-3" />
                                                                <Star size={18} color="#ffdd00" weight="fill" />
                                                                <Star size={18} color="#ffdd00" weight="fill" />
                                                                <Star size={18} color="#9e9e9e" weight="light" />
                                                                <Star size={18} color="#9e9e9e" weight="light" />
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <button className="mt-6 py-2 uppercase bg-slate-200 rounded-sm text-base hover:bg-slate-300 flex items-center font-semibold justify-center">Clear Filters</button>
                        </div>
                    </div>
                </div>

                {/* Products */}
                <div className="flex flex-col gap-y-8 w-full">
                    <div className="flex flex-row justify-between">
                        {featured.map((product, index) => (
                            <div key={index} className="flex flex-col">
                                <img
                                    src={product.image}
                                    className="w-48 h-32 rounded-sm object-cover bg-slate-200"
                                    alt={`Profile ${index}`}
                                />
                                <div className="text-sm w-48 px-4 py-4 rounded-sm">
                                    <div className="flex-col">
                                        <div className="font-medium">{product.name}</div>
                                        <div className="mt-1">{product.text}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row justify-between">
                        {featured.map((product, index) => (
                            <div key={index} className="flex flex-col">
                                <img
                                    src={product.image}
                                    className="w-48 h-32 rounded-sm object-cover bg-slate-200"
                                    alt={`Profile ${index}`}
                                />
                                <div className="text-sm w-48 px-4 py-4 rounded-sm">
                                    <div className="flex-col">
                                        <div className="font-medium">{product.name}</div>
                                        <div className="mt-1">{product.text}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row justify-between">
                        {featured.map((product, index) => (
                            <div key={index} className="flex flex-col">
                                <img
                                    src={product.image}
                                    className="w-48 h-32 rounded-sm object-cover bg-slate-200"
                                    alt={`Profile ${index}`}
                                />
                                <div className="text-sm w-48 px-4 py-4 rounded-sm">
                                    <div className="flex-col">
                                        <div className="font-medium">{product.name}</div>
                                        <div className="mt-1">{product.text}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row justify-between">
                        {featured.map((product, index) => (
                            <div key={index} className="flex flex-col">
                                <img
                                    src={product.image}
                                    className="w-48 h-32 rounded-sm object-cover bg-slate-200"
                                    alt={`Profile ${index}`}
                                />
                                <div className="text-sm w-48 px-4 py-4 rounded-sm">
                                    <div className="flex-col">
                                        <div className="font-medium">{product.name}</div>
                                        <div className="mt-1">{product.text}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button className="py-2 w-32 uppercase bg-slate-200 rounded-sm hover:bg-slate-300 mb-20">Load More</button>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Hardware;
