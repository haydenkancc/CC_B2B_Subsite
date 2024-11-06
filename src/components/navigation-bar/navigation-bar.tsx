"use client";

import { CaretDown, CaretUp, ShoppingCart, Storefront, User } from '@phosphor-icons/react/dist/ssr';
import './navigation-bar.css';
import solutionsblue from "../../assets/solutionsblue.png";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const shopProductItems = [
    {id: 1, title: 'Cables & Adapters'},
    {id: 2, title: 'Cell Phones & Accessories'},
    {id: 3, title: 'Laptops, Tablets & Accessories'},
    {id: 4, title: 'Desktop Computers & Servers'},
    {id: 5, title: 'PC & Server Components'},
    {id: 6, title: 'Computer Peripherals'},
    {id: 8, title: 'Home Electronics'},
    {id: 9, title: 'Cameras and Drones'},
    {id: 10, title: 'Furniture and Home Products'},
    {id: 11, title: 'See More Categories'},
]

const dealsItems = [
    {id: 1, title: 'Promotion Flyer'},
    {id: 2, title: 'New Arrivals'},
    {id: 3, title: 'Bundle & Save'},
    {id: 4, title: 'Open Box Products'},
    {id: 5, title: 'Clearance'},
]

const productFindersItems = [
    {id: 1, title: 'Cable Finder'},
    {id: 2, title: 'Router Finder'},
]

const cables = [
    {id: 1, title: 'Power Cables & Adapters'},
    {id: 2, title: 'Data Cables & Adapters'},
    {id: 3, title: 'USB / Lightning Cables'},
    {id: 4, title: 'Networking Cables & Adapters'},
    {id: 5, title: 'DisplayPort / Mini DisplayPort Cables & Adapters'},
    {id: 6, title: 'HDMI Cables'},
    {id: 7, title: 'Video Cables & ADapters'},
    {id: 8, title: 'Audio Cables & Adapters'},
    {id: 9, title: 'Pro Audio Cables & Plugs'},
    {id: 10, title: 'Audio Video Distribution'},
    {id: 11, title: 'Networking Installation Accessories'},
    {id: 12, title: 'Wall Plates & Keystones'},
    {id: 13, title: 'Tools & Testers'},
    {id: 14, title: 'Cables Management'},
]

const power = [
    {id: 1, title: 'PC Internal Power Cables'},
    {id: 2, title: 'PC External Power Cables'},
    {id: 3, title: 'Power Plug Adapters'},
]

export function NavigationBar() {

    const [shopProducts, setShopProducts] = useState(false);
    const [deals, setDeals] = useState(false);
    const [productFinders, setProductFinders] = useState(false);

    const [showCables, setShowCables] = useState(false);

    const [showPower, setShowPower] = useState(false);

    return (
        <div className="bg-black">
            <div className="max-w-[1440px] justify-center mx-auto px-4 pt-4">
                <div className="flex flex-row justify-between items-center text-white">
                    <img src={solutionsblue} className="w-40" />
                    <input type="text" placeholder="Search..." className="searchBar" />
                    <div className="button">
                        <div>Francais</div>
                    </div>
                    <div className="button">
                        <Storefront size={18} />
                        <div>Store</div>
                    </div>
                    <Link to="/sign-in" className="button">
                        <User size={18} />
                        <div>Sign In</div>
                    </Link>
                    <div className="button">
                        <ShoppingCart size={18} />
                        <div>Cart</div>
                    </div>
                </div>
                <div className="flex flex-row gap-x-10 items-center pt-2 text-white">
                    <div className="dropdown text-sm"
                        onMouseEnter={() => setShopProducts(true)}
                        onMouseLeave={() => setShopProducts(false)}>
                        <div>Shop Products</div>
                        {shopProducts ? <CaretUp /> : <CaretDown />}
                        {shopProducts && (
                            <div className="dropdownContent">
                                {shopProductItems.map(item => (
                                    <div key={item.id} className="dropdownItem text-xs"
                                        onMouseEnter={() => item.title === "Cables & Adapters" && setShowCables(true)}
                                        onMouseLeave={() => item.title === "Cables & Adapters" && setShowCables(false)}>
                                        {item.title}
                                        {item.title === "Cables & Adapters" && showCables && (
                                            <div className="dropdownSecond">
                                                {cables.map(itemTwo => (
                                                    <div key={itemTwo.id} className="dropdownItem text-xs"
                                                        onMouseEnter={() => itemTwo.title === "Power Cables & Adapters" && setShowPower(true)}
                                                        onMouseLeave={() => itemTwo.title === "Power Cables & Adapters" && setShowPower(false)}>
                                                        {itemTwo.title}
                                                        {itemTwo.title === "Power Cables & Adapters" && showPower && (
                                                            <div className="dropdownThird">
                                                                {power.map(itemThree => (
                                                                    <div key={itemThree.id} className="dropdownItem text-xs">
                                                                        {itemThree.title}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="dropdown text-sm">Shop Brands</div>
                    <div className="dropdown text-sm"
                        onMouseEnter={() => setDeals(true)}
                        onMouseLeave={() => setDeals(false)}>
                        <div>Deals</div>
                        {deals ? <CaretUp /> : <CaretDown />}
                        {deals && (
                            <div className="dropdownContent">
                                {dealsItems.map(item => (
                                    <div key={item.id} className="dropdownItem text-xs">
                                        {item.title}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="dropdown text-sm">Services</div>
                    <div className="dropdown text-sm">For Business</div>
                    <div className="dropdown text-sm"
                        onMouseEnter={() => setProductFinders(true)}
                        onMouseLeave={() => setProductFinders(false)}>
                        <div>Product Finders</div>
                        {productFinders ? <CaretUp /> : <CaretDown />}
                        {productFinders && (
                            <div className="dropdownContent">
                                {productFindersItems.map(item => (
                                    <div key={item.id} className="dropdownItem text-xs">
                                        {item.title}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}