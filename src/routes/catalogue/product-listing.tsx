import React, { useState, useEffect } from "react";
import "../products/products.css";
import laptop from '../../assets/laptop.png';
import { CaretDown, CaretUp, Star, Check, X } from "@phosphor-icons/react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import SidebarNav from "../sidebar-nav/sidebar-nav";

function ProductListing() {

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
        {
            image: laptop,
            name: "G5 Gaming Laptop Intel i9",
            price: "$5000.00",
            rating: "4.5",onlineIcon: <Check weight="bold" />,
            onlineText: "Available Online",
            storeIcon: <X weight="bold" />,
            storeText: "Unavailable In-Store",
        },
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

    return (
        <>
            {/* Catalogue */}
            <div className="flex">
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
                <div className="flex flex-col">
                    <div className="flex flex-wrap gap-4 w-full">
                        {items.map((product, index) => (
                            <div key={index} className="flex flex-col">
                                <img
                                    src={product.image}
                                    className="w-full h-38 rounded-sm object-cover bg-slate-200"
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
                        <button className="py-2 w-32 uppercase bg-slate-200 rounded-sm hover:bg-slate-300 mt-8 mb-20">Load More</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductListing;
