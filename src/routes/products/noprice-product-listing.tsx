import { useState } from "react";
import "../products/products.css";
import laptop2 from '../../assets/laptop2.png';
import { CaretDown, CaretUp, Star, Check, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function NoPriceProductListing() {

    const [openFilters, setOpenFilters] = useState({});

    const handleSelectChange = (filterValue) => {
        setOpenFilters((prev) => ({
            ...prev,
            [filterValue]: !prev[filterValue],
        }));
    };

    const items = [
        {
            image: laptop2,
            name: "G2 Gaming Laptop Intel i9",
            price: "$2000.00",
            rating: "4.2",
            online: "Yes",
            store: "Yes",
        },
        {
            image: laptop2,
            name: "G3 Gaming Laptop Intel i9",
            price: "$3000.00",
            rating: "4.3",
            online: "No",
            store: "Yes",
        },
        {
            image: laptop2,
            name: "G4 Gaming Laptop Intel i9",
            price: "$4000.00",
            rating: "4.4",
            online: "Yes",
            store: "Yes",
        },
        {
            image: laptop2,
            name: "G5 Gaming Laptop Intel i9",
            price: "$5000.00",
            rating: "4.5",
            online: "Yes",
            store: "Yes",
        },
        {
            image: laptop2,
            name: "G2 Gaming Laptop Intel i9",
            price: "$2000.00",
            rating: "4.2",
            online: "Yes",
            store: "No",
        },
        {
            image: laptop2,
            name: "G3 Gaming Laptop Intel i9",
            price: "$3000.00",
            rating: "4.3",
            online: "No",
            store: "Yes",
        },
        {
            image: laptop2,
            name: "G4 Gaming Laptop Intel i9",
            price: "$4000.00",
            rating: "4.4",
            online: "Yes",
            store: "Yes",
        },
        {
            image: laptop2,
            name: "G5 Gaming Laptop Intel i9",
            price: "$5000.00",
            rating: "4.5",
            online: "Yes",
            store: "Yes",
        },
        {
            image: laptop2,
            name: "G2 Gaming Laptop Intel i9",
            price: "$2000.00",
            rating: "4.2",
            online: "Yes",
            store: "No",
        },
        {
            image: laptop2,
            name: "G3 Gaming Laptop Intel i9",
            price: "$3000.00",
            rating: "4.3",
            online: "No",
            store: "Yes",
        },
        {
            image: laptop2,
            name: "G4 Gaming Laptop Intel i9",
            price: "$4000.00",
            rating: "4.4",
            online: "Yes",
            store: "Yes",
        },
        {
            image: laptop2,
            name: "G5 Gaming Laptop Intel i9",
            price: "$5000.00",
            rating: "4.5",
            online: "Yes",
            store: "Yes",
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

    const [pricing, setPricing] = useState('pricing-locked');

    return (
        <>
            {/* Catalogue */}
            <div className="flex flex-row gap-x-5">
                {/* Sidebar */}
                <div className="text-lg flex flex-col">
                    <div className="border-b border-gray-300 py-4 font-medium uppercase">Filter & Sort</div>
                    {sidebar.map((item, index) => (
                        <div key={index} className={`py-4 ${index < sidebar.length ? 'border-b border-gray-300' : ''}`}>
                            <div className="flex justify-between font-medium uppercase">
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

                {/* Products */}
                <div className="flex flex-col">
                    <div className="flex flex-wrap gap-4 w-full">
                        {items.map((product, index) => (
                            <div key={index} className="flex flex-col rounded-md border grow p-2.5">
                                <Link to="/hardware-product" className="font-medium flex justify-center">
                                    <img
                                        src={product.image}
                                        className="w-56 rounded-sm object-cover"
                                    />
                                </Link>
                                <div className="text-sm w-full px-0.5 py-2.5 rounded-sm">
                                    <div className="flex flex-col gap-y-1.5">
                                        <div className="flex flex-row justify-between">
                                            <Link to="/hardware-product" className="font-medium">{product.name}</Link>
                                            <div className="flex flex-row items-center">
                                                <Star weight="fill" className="ml-0.5" color="#facc15" />
                                                <div className="ml-0.5">{product.rating}</div>
                                            </div>
                                        </div>
                                        <div className="text-slate-600">
                                            <div className="flex flex-col">
                                                {product.online === "Yes" &&
                                                    <div className="flex flex-row items-center gap-x-1">
                                                        <Check weight="bold" color="#16a34a" />
                                                        <div className="text-sm text-green-600">Available Online</div> 
                                                    </div>
                                                }
                                                {product.online === "No" &&
                                                    <div className="flex flex-row items-center gap-x-1">
                                                        <X weight="bold" color="#ef4444" />
                                                        <div className="text-sm text-red-500">Unavailable Online</div> 
                                                    </div>
                                                }
                                                {product.store === "Yes" &&
                                                    <div className="flex flex-row items-center gap-x-1">
                                                        <Check weight="bold" color="#16a34a" />
                                                        <div className="text-sm text-green-600">Available In-Store</div> 
                                                    </div>
                                                }
                                                {product.store === "No" &&
                                                    <div className="flex flex-row items-center gap-x-1">
                                                        <X weight="bold" color="#ef4444" />
                                                        <div className="text-sm text-red-500">Unavailable In-Store</div> 
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        {pricing === 'pricing-locked' && (
                                            <button className="hover:bg-slate-100 border border-slate-400 rounded-lg py-1.5 text-center mt-2" onClick={() => setPricing('pricing-unlocked')}>
                                                Sign In for Pricing
                                            </button>
                                        )}
                                        {pricing === 'pricing-unlocked' && (
                                            <button className="hover:bg-slate-100 border border-slate-400 rounded-lg py-1.5 text-center mt-2" onClick={() => setPricing('pricing-unlocked')}>
                                                {product.price}
                                            </button>
                                        )}
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

export default NoPriceProductListing;
