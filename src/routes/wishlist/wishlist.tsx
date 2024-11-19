import { useEffect } from "react";
import Actions from "./actions";
import SidebarNav from "../sidebar-nav/sidebar-nav.tsx";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import ListItems from "./list-items.tsx";

function Wishlist() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    
    return (
        <div className="flex mb-20">
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
                    <div className="text-2xl">Wile's List 1</div>
                </div>
                <div className="flex flex-col gap-y-8 px-8 pt-8">
                    <ListItems />
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <div className="font-semibold">Apply to Selected Items:</div>
                            <Actions />
                        </div>
                        <Link to="/cart" className="text-white bg-blue-700 hover:bg-blue-800 rounded-md text-center text-sm font-medium py-1.5 px-4">Add List to Cart</Link>
                    </div>
                </div>
            </div>        
        </div>
    );
}

export default Wishlist;
