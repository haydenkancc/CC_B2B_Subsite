import React, { useState, useEffect } from "react";
import NavbarTop from "../../components/navbar/navbar-top";
import NavbarTopAccount from '../../components/navbar/navbar-top-account.tsx';
import NavbarBottom from "../../components/navbar/navbar-bottom";
import './billing.css'
import BillingContacts from "./billing-contacts.tsx";
import Wallet from "./wallet.tsx";

const pages = ['Dashboard', 'Orders', 'Billing', 'Standards', 'Tickets', 'Account'];

function Billing() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    
    return (
        <div className="bg-lavender/10 text-oxford-blue border-lavender pb-32">
            <NavbarTopAccount />
            <NavbarBottom pages={pages} />
            <div className="max-w-[1440px] px-4">
                <div className="pl-4 pt-12 pb-16 justify-between">
                    <div className="text-4xl pb-6">
                        Billing
                    </div>
                    <div className="flex flex-row justify-between">
                        <BillingContacts />
                        <Wallet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billing;
