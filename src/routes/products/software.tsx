import React, { useState, useEffect } from "react";
import "./products.css";

import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import typen from '../../assets/typen.png';
import laptop from '../../assets/laptop.png';
import { CaretRight, CaretDown, CaretUp, Star, Check, X } from "@phosphor-icons/react";
import adspace1 from "../../assets/adspace1.png"
import adspace2 from "../../assets/adspace2.png"
import adspace3 from "../../assets/adspace3.png"
import adspace4 from "../../assets/adspace4.png"
import adspace5 from "../../assets/adspace5.png"
import ProductsCarousel from "./products-carousel.tsx";
import FooterTop from "../../components/footer/footer-top.tsx";
import FooterBottom from "../../components/footer/footer-bottom.tsx";

const pages = ['Partners', 'Industry', 'About'];

function Software() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

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
        {
            image: laptop,
            name: "PC Components",
            text1: "Graphic Cards",
            text2: "Memory",
            text3: "Motherboards",
            text4: "CPUs",
            text5: "Computer Cases",
            text6: "SSDs",
        },
    ];

    const featured = [
        {
            image: laptop,
            name: "Very Cool Accessory",
            text: "Power through the day with this device from Canada Computers. This is a placeholder.",
        },
        {
            image: laptop,
            name: "Very Cool Monitor",
            text: "Power through the day with this device from Canada Computers. This is a placeholder.",
        },
        {
            image: laptop,
            name: "Very Cool Laptop",
            text: "Power through the day with this device from Canada Computers. This is a placeholder.",
        },
        {
            image: laptop,
            name: "Very Cool Electronic",
            text: "Power through the day with this device from Canada Computers. This is a placeholder.",
        },
        {
            image: laptop,
            name: "Very Cool Desktop",
            text: "Power through the day with this device from Canada Computers. This is a placeholder.",
        },
    ];

    const items = [
        {
            image: laptop,
            name: "G2 Gaming Laptop Intel i9",
            price: "$2000.00",
            rating: "4.2",
            onlineIcon: <Check weight="bold" />,
            onlineText: "Available Online",
            storeIcon: <X weight="bold" />,
            storeText: "Unavailable In-Store",
        },
        {
            image: laptop,
            name: "G3 Gaming Laptop Intel i9",
            price: "$3000.00",
            rating: "4.3",
            onlineIcon: <Check weight="bold" />,
            onlineText: "Available Online",
            storeIcon: <X weight="bold" />,
            storeText: "Unavailable In-Store",
        },
        {
            image: laptop,
            name: "G4 Gaming Laptop Intel i9",
            price: "$4000.00",
            rating: "4.4",
            onlineIcon: <Check weight="bold" />,
            onlineText: "Available Online",
            storeIcon: <X weight="bold" />,
            storeText: "Unavailable In-Store",
        },
        {
            image: laptop,
            name: "G5 Gaming Laptop Intel i9",
            price: "$5000.00",
            rating: "4.5",onlineIcon: <Check weight="bold" />,
            onlineText: "Available Online",
            storeIcon: <X weight="bold" />,
            storeText: "Unavailable In-Store",
        },
    ]

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
        // {
        //     name: "Rating",
        //     filterValue: "rating",
        // },
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
                className="overflow-hidden h-116 w-full bg-center"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0) 0vw, rgba(0, 0, 0, 0.5) 0vw, rgba(0, 0, 0, 0.5) 50vw, rgba(0, 0, 0, 0) 70vw), url(${typen})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            >
                <div className="flex flex-col justify-center h-full max-w-[1440px] px-4 mx-auto py-16">
                    <div className="text-3xl text-ghost-white font-medium uppercase">Software</div>
                    <div className="text-5xl text-ghost-white font-bold uppercase mt-2.5">PRODUCTS</div>
                    <div className="text-2xl text-ghost-white font-medium mt-5">Revolutionize with IT software.</div>
                </div>
            </div>

            {/* Categories
            <div className="bg-ghost-white text-black flex flex-col max-w-[1440px] px-4 mx-auto">
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
            </div> */}

            {/* Featured Products
            <div className="bg-ghost-white text-black flex flex-col max-w-[1440px] px-4 mx-auto">
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
            </div> */}

            {/* Carousel
            <div className="bg-ghost-white w-full mt-10">
                <div>
                    <ProductsCarousel ads={ads} />
                </div> 
            </div> */}

            {/* Banner */}
            <div className="bg-slate-200 py-8">
                <div className="max-w-[1440px] px-4 mx-auto">
                    <div className="text-center text-black text-lg font-bold uppercase">Free 15-Day Returns Policy -- Exclusions Apply</div>
                </div>
            </div>

            {/* Catalogue */}
            <div className="flex bg-ghost-white text-black max-w-[1440px] px-4 mx-auto mt-14">
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
                                                                <Star size={18} weight="fill" className="ml-3" />
                                                                <Star size={18} weight="fill" />
                                                                <Star size={18} weight="fill" />
                                                                <Star size={18} weight="fill" />
                                                                <Star size={18} weight="fill" />
                                                            </div>
                                                            <div className="flex items-center mb-2">
                                                                <input type="radio" className="bg-gray-200 w-4 h-4" />
                                                                <Star size={18} weight="fill" className="ml-3" />
                                                                <Star size={18} weight="fill" />
                                                                <Star size={18} weight="fill" />
                                                                <Star size={18} weight="fill" />
                                                                <Star size={18} color="#9e9e9e" weight="light" />
                                                            </div>
                                                            <div className="flex items-center mb-2">
                                                                <input type="radio" className="bg-gray-200 w-4 h-4" />
                                                                <Star size={18} weight="fill" className="ml-3" />
                                                                <Star size={18} weight="fill" />
                                                                <Star size={18} weight="fill" />
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
                    <div className="flex flex-row justify-between gap-x-2.5">
                        {items.map((product, index) => (
                            <div key={index} className="flex flex-col w-full">
                                <img
                                    src={product.image}
                                    className="w-full h-32 rounded-sm object-cover bg-slate-300"
                                    alt={`Profile ${index}`}
                                />
                                <div className="text-sm w-full px-0.5 py-2.5 rounded-sm">
                                    <div className="flex flex-col gap-y-1.5">
                                        <div className="flex flex-row justify-between">
                                            <div className="font-medium">{product.name}</div>
                                            <div className="flex flex-row items-center">
                                                <Star weight="fill" className="ml-0.5" />
                                                <div className="ml-0.5">{product.rating}</div>
                                            </div>
                                        </div>
                                        <div className="text-slate-600">
                                            <div className="flex flex-row items-center gap-x-1">
                                                <div>{product.onlineIcon}</div>
                                                <div>{product.onlineText}</div>
                                            </div>
                                            <div className="flex flex-row items-center gap-x-1 mt-0.5">
                                                <div>{product.storeIcon}</div>
                                                <div>{product.storeText}</div>
                                            </div>
                                        </div>
                                        <div className="font-medium mt-1">{product.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row justify-between gap-x-2.5">
                        {items.map((product, index) => (
                            <div key={index} className="flex flex-col w-full">
                                <img
                                    src={product.image}
                                    className="w-full h-32 rounded-sm object-cover bg-slate-300"
                                    alt={`Profile ${index}`}
                                />
                                <div className="text-sm w-full px-0.5 py-2.5 rounded-sm">
                                    <div className="flex flex-col gap-y-1.5">
                                        <div className="flex flex-row justify-between">
                                            <div className="font-medium">{product.name}</div>
                                            <div className="flex flex-row items-center">
                                                <Star weight="fill" className="ml-0.5" />
                                                <div className="ml-0.5">{product.rating}</div>
                                            </div>
                                        </div>
                                        <div className="text-slate-600">
                                            <div className="flex flex-row items-center gap-x-1">
                                                <div>{product.onlineIcon}</div>
                                                <div>{product.onlineText}</div>
                                            </div>
                                            <div className="flex flex-row items-center gap-x-1 mt-0.5">
                                                <div>{product.storeIcon}</div>
                                                <div>{product.storeText}</div>
                                            </div>
                                        </div>
                                        <div className="font-medium mt-1">{product.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row justify-between gap-x-2.5">
                        {items.map((product, index) => (
                            <div key={index} className="flex flex-col w-full">
                                <img
                                    src={product.image}
                                    className="w-full h-32 rounded-sm object-cover bg-slate-300"
                                    alt={`Profile ${index}`}
                                />
                                <div className="text-sm w-full px-0.5 py-2.5 rounded-sm">
                                    <div className="flex flex-col gap-y-1.5">
                                        <div className="flex flex-row justify-between">
                                            <div className="font-medium">{product.name}</div>
                                            <div className="flex flex-row items-center">
                                                <Star weight="fill" className="ml-0.5" />
                                                <div className="ml-0.5">{product.rating}</div>
                                            </div>
                                        </div>
                                        <div className="text-slate-600">
                                            <div className="flex flex-row items-center gap-x-1">
                                                <div>{product.onlineIcon}</div>
                                                <div>{product.onlineText}</div>
                                            </div>
                                            <div className="flex flex-row items-center gap-x-1 mt-0.5">
                                                <div>{product.storeIcon}</div>
                                                <div>{product.storeText}</div>
                                            </div>
                                        </div>
                                        <div className="font-medium mt-1">{product.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row justify-between gap-x-2.5">
                        {items.map((product, index) => (
                            <div key={index} className="flex flex-col w-full">
                                <img
                                    src={product.image}
                                    className="w-full h-32 rounded-sm object-cover bg-slate-300"
                                    alt={`Profile ${index}`}
                                />
                                <div className="text-sm w-full px-0.5 py-2.5 rounded-sm">
                                    <div className="flex flex-col gap-y-1.5">
                                        <div className="flex flex-row justify-between">
                                            <div className="font-medium">{product.name}</div>
                                            <div className="flex flex-row items-center">
                                                <Star weight="fill" className="ml-0.5" />
                                                <div className="ml-0.5">{product.rating}</div>
                                            </div>
                                        </div>
                                        <div className="text-slate-600">
                                            <div className="flex flex-row items-center gap-x-1">
                                                <div>{product.onlineIcon}</div>
                                                <div>{product.onlineText}</div>
                                            </div>
                                            <div className="flex flex-row items-center gap-x-1 mt-0.5">
                                                <div>{product.storeIcon}</div>
                                                <div>{product.storeText}</div>
                                            </div>
                                        </div>
                                        <div className="font-medium mt-1">{product.price}</div>
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
            <FooterTop />
            <FooterBottom />
        </>
    );
}

export default Software;
