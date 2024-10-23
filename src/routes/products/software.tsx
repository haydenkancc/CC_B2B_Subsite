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
import NoPriceProductListing from "./noprice-product-listing.tsx";

const pages = ['Partners', 'Industry', 'About'];

function Software() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            {/* NavBar */}
            <div className="w-full">
                <NavbarTop />
            </div>

            {/* Homepage */}
            <div
                className="overflow-hidden h-120 w-full bg-center"
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

            {/* Banner */}
            <div className="bg-slate-200 py-8">
                <div className="max-w-[1440px] px-4 mx-auto">
                    <div className="text-center text-black text-lg font-bold uppercase">Free 15-Day Returns Policy -- Exclusions Apply</div>
                </div>
            </div>

            {/* Catalogue */}
            <div className="bg-ghost-white text-black pt-14">
                <div className="max-w-[1440px] px-4 mx-auto flex">
                    <NoPriceProductListing />
                </div>
            </div>
            <FooterTop />
            <FooterBottom />
        </>
    );
}

export default Software;
