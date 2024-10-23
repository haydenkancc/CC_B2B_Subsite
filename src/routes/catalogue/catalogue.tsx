import React, { useState, useEffect } from "react";
import "../products/products.css";
import laptop from '../../assets/laptop.png';
import { CaretDown, CaretUp, Star, Check, X } from "@phosphor-icons/react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import SidebarNav from "../sidebar-nav/sidebar-nav";
import ProductListing from "./product-listing";

function Catalogue() {

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
            <div className="flex">
                <div className="">
                    <SidebarNav />
                </div>
                <div className="grow">
                    <div className="sam-title-section">
                        <div className="sam-title">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <MagnifyingGlassIcon />
                            </div>
                            <div className="text-[#808080]">
                                Search for anything
                            </div>
                        </div>
                    </div>
                    <div className="px-8 py-8">
                        <div className="text-2xl font-medium">Catalogue</div>
                    </div>
                    <div className="px-8">
                        <ProductListing />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Catalogue;
