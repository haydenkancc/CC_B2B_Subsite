import NavbarTop from "../../components/navbar/navbar-top";
import NavbarTopAccount from '../../components/navbar/navbar-top-account.tsx';
import NavbarBottom from "../../components/navbar/navbar-bottom";
import Bundle from "./bundle";
import Recent from "./recent.tsx";
import { CaretRight, Users } from "@phosphor-icons/react";
import SidebarNav from "../sidebar-nav/sidebar-nav.tsx";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import ListsOverview from "./lists-overview.tsx";

const pages = ['Dashboard', 'Orders', 'Billing', 'Saved Lists', 'Tickets', 'Account'];

const sets = [
    { name: "New Hire Wishlist" },
    { name: "Office Wishlist" },
]

const wishlists = [
    { name: "Wile's Wishlist 1" },
    { name: "Wile's Wishlist 2" },
]

const collaborative = [
    { name: "Company Wishlist" },
]

function Standards() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
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
                <div className="px-8 pt-5">
                    <div className="text-2xl">Saved Lists</div>
                </div>
                <div className="px-8 py-8">
                    <ListsOverview />
                </div>
                <div className="px-8 pb-20">
                    <div className="flex flex-col border border grow rounded-sm">
                        <Bundle />
                        <Recent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Standards;
