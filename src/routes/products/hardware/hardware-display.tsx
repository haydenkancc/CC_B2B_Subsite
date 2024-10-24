import { CaretRight, Check, Info, Minus, Plus, Star, X } from "@phosphor-icons/react";
import laptop from "../../../assets/laptop.png"
import DisplayCarousel from "../display-carousel";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import HardwareSpecifications from "./details/hardware-specifications";
import HardwareOverview from "./details/hardware-overview";
import HardwareWarranty from "./details/hardware-warranty";
import HardwareReviews from "./details/hardware-reviews";
import HardwareTabs from "../../../components/tab-navigation/hardware-tabs";

const product = [
    { 
        id: 1, 
        image: laptop, 
        name: "Gigabyte G5 Gaming Laptop 15.6\" FHD Intel i7-13620H GeForce RTX 4050 16GB 1TB SSD Windows 11 Home, G5 MF5-H2US354KH", 
        rating: "4.0/5", 
        code: "LPGIG00188", 
        part: "G5 MF5-H2US354KH", 
        onlineIcon: <Check weight="bold" />,
        onlineText: "Available Online",
        storeIcon: <X weight="bold" />,
        storeText: "Unavailable In-Store",
        features: "GeForce RTX 4050 - 1920 x 1080 - Windows 11 Home - 1TB - Bluetooth 5.2 - Wi-Fi 6E (802.11ax 2x2) - 1x HDMI 2.1 - 144Hz - Gaming Laptop - 14.2 x 9.4 x 0.89' - SSD - 2.08 kg" 
    },
]

const tabs = [
    { id: 1, title: 'Overview', content: <HardwareOverview /> },
    { id: 2, title: 'Specifications',  content: <HardwareSpecifications /> },
    { id: 3, title: 'Warranty & Returns',  content: <HardwareWarranty /> },
    { id: 4, title: 'Reviews',  content: <HardwareReviews /> },
]

function HardwareDisplay() {

    let slides = [
        {
            image: laptop,
        },
        {
            image: laptop,
        },
        {
            image: laptop,
        },
    ];

    // Initialize item quantities
    const [itemQuantities, setItemQuantities] = useState(
        product.reduce((acc, item) => {
            acc[item.id] = 1; // Start each item quantity at 1
            return acc;
        }, {})
    );

    const handleIncrease = (id) => {
        setItemQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + 1,
        }));
    };

    const handleDecrease = (id) => {
        setItemQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max(prevQuantities[id] - 1, 1), // Ensure quantity doesn't go below 1
        }));
    };

    const specificationRef = useRef(null);

    return (
        <div className="flex flex-col max-w-[1440px] px-4 mx-auto">
            {product.map(item => (
                <div className="flex flex-col  gap-y-8">
                    <div className="flex flex-row gap-x-8">
                        <div className="flex flex-col">
                            <img src={item.image} className="w-128 bg-slate-100 rounded-sm border border-slate-200" />
                            <DisplayCarousel slides={slides} />
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <div className="flex flex-row justify-between items-center gap-x-1.5 text-black">
                                <div className="flex flex-row items-center gap-x-1.5 text-black">
                                    <Star size={20} weight="fill" />
                                    <Star size={20} weight="fill" />
                                    <Star size={20} weight="fill" />
                                    <Star size={20} weight="fill" />
                                    <Star size={20} />
                                    <div className="text-sm ml-2.5">{item.rating} Star Rating</div>
                                </div>
                                <div className="text-sm flex flex-row gap-x-8">
                                    <div className="flex flex-row">
                                        <div>Part #:</div>
                                        <div className="ml-1.5">{item.part}</div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div>Item Code:</div>
                                        <div className="ml-1.5">{item.code}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="font-medium text-2xl">{item.name}</div>
                            <div className="flex flex-row gap-x-6">
                                <div className="flex justify-center text-black">
                                    <button onClick={() => handleDecrease(item.id)} className="p-4 bg-slate-100 border border-slate-300 hover:bg-slate-200 rounded-sm">
                                        <Minus size={10} weight="bold" />
                                    </button>
                                    <input
                                        type="number"
                                        value={itemQuantities[item.id]} // Display the quantity
                                        readOnly
                                        className="w-full pl-3 mx-2 border border-gray-300 focus:outline-none text-center rounded-sm"
                                    />
                                    <button onClick={() => handleIncrease(item.id)} className="p-4 bg-slate-100 border border-slate-300 hover:bg-slate-200 rounded-sm">
                                        <Plus size={10} weight="bold" />
                                    </button>
                                </div>
                                <Link to="/sign-in" className="border bg-slate-100 hover:bg-slate-200 p-2.5 rounded-sm border border-slate-300 text-center w-80 font-medium grow">Sign In to Purchase</Link>
                            </div>
                            <div className="flex flex-col gap-y-5">
                                <div className="flex flex-row items-center gap-x-5">
                                    <button className="bg-white hover:bg-slate-100 border border-slate-200 px-4 py-2.5 text-sm">
                                        <div className="flex flex-row items-center">
                                            <div>Add Tech Care Repair</div>
                                        </div>
                                    </button>
                                    <button onClick={() => {
                                        specificationRef.current.scrollIntoView({ behavior: 'smooth' });
                                    }}className="bg-white hover:bg-slate-100 border border-slate-200 px-4 py-2.5 text-sm grow">
                                        <div className="flex flex-row justify-between items-center">
                                            <div>Free 15-Day Returns Policy -- Exclusions Apply</div>
                                            <div className="flex flex-row items-center">
                                                <div>Read More</div>
                                                <div><CaretRight className="ml-1.5" /></div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex flex-row justify-between text-sm font-medium">
                                    <div className="flex flex-row gap-x-8">
                                        <div className="flex flex-row items-center gap-x-1.5">
                                            <div>{item.onlineIcon}</div>
                                            <div>{item.onlineText}</div>
                                        </div>
                                        <div className="flex flex-row items-center gap-x-1.5">
                                            <div>{item.storeIcon}</div>
                                            <div>{item.storeText}</div>
                                        </div>
                                    </div>
                                    <div>Free Setup, Tutorial, and Data Transfer on Purchase</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-4">
                                <div className="text-base">{item.features}</div>
                                <button 
                                    onClick={() => {
                                        specificationRef.current.scrollIntoView({ behavior: 'smooth' });
                                    }} className="text-sm text-left">
                                    <div>View Full Product Details</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div ref={specificationRef} className="mt-10 pt-10 pb-20">
                <HardwareTabs tabs={tabs} />
            </div>

        </div>
    )
}

export default HardwareDisplay;