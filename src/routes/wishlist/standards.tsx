import Recent from "./recent.tsx";
import SidebarNav from "../sidebar-nav/sidebar-nav.tsx";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import ListsOverview from "./lists-overview.tsx";
import Set from "./set.tsx";

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
                    <div className="text-2xl">Wishlists</div>
                </div>
                <div className="flex flex-row gap-x-5 px-8 pt-8 pb-20">
                    <div className="flex flex-col border-t pt-8 gap-y-16 grow rounded-sm">
                        <Set />
                        <Recent />
                    </div>
                    <ListsOverview />
                </div>
            </div>
        </div>
    );
}

export default Standards;
