import NavbarTop from "../../components/navbar/navbar-top";
import NavbarTopAccount from '../../components/navbar/navbar-top-account.tsx';
import NavbarBottom from "../../components/navbar/navbar-bottom";
import Bundle from "./bundle";
import Recent from "./recent.tsx";
import { CaretRight } from "@phosphor-icons/react";

const pages = ['Dashboard', 'Orders', 'Billing', 'Saved Lists', 'Tickets', 'Account'];

const portDevices = [
    { name: "Laptops" },
    { name: "iPads" },
]

const peripherals = [
    { name: "Keyboards" },
    { name: "Mice" },
    { name: "Monitors" },
]

const sets = [
    { name: "New Hire Set" },
    { name: "Office Set" },
]

const wishlists = [
    { name: "Bugs' Wishlist" },
    { name: "Daffy's Wishlist" },
    { name: "Porky's Wishlist" },
]

function Standards() {
    return (
        <div className="bg-lavender/10 text-oxford-blue border-lavender pb-10">
            <NavbarTopAccount />
            <NavbarBottom pages={pages} />
            <div className="max-w-[1440px] mx-auto pl-4 pt-12 pb-16">
                <div className="text-4xl pb-6">
                    Saved Lists
                </div>
                <div className="flex flex-row justify-between gap-x-4 mt-8">
                    <div className="flex flex-col w-1/5">
                        <div className="flex flex-row gap-x-2">
                            <button className="border border-oxford-blue hover:bg-oxford-blue hover:text-ghost-white font-medium w-32 px-2 py-1">New List</button>
                            <button className="border border-oxford-blue hover:bg-oxford-blue hover:text-ghost-white font-medium w-32 px-2 py-1">Edit Lists</button>
                        </div>

                        <div className="flex flex-col mt-4">
                            <div className="font-semibold">Portable Devices</div>
                            {portDevices.map(item => (
                                <div key={item.name} className="flex flex-row items-center">
                                    <button className="text-left">{item.name}</button>
                                    <CaretRight size={14} className="ml-2" />
                                </div>
                            ))}

                            <div className="font-semibold mt-6">Peripherals</div>
                            {peripherals.map(item => (
                                <div key={item.name} className="flex flex-row items-center">
                                    <button className="text-left">{item.name}</button>
                                    <CaretRight size={14} className="ml-2" />
                                </div>
                            ))}

                            <div className="font-semibold mt-6">Sets</div>
                            {sets.map(item => (
                                <div key={item.name} className="flex flex-row items-center">
                                    <button className="text-left">{item.name}</button>
                                    <CaretRight size={14} className="ml-2" />
                                </div>
                            ))}

                            <div className="font-semibold mt-6">Wishlists</div>
                            {wishlists.map(item => (
                                <div key={item.name} className="flex flex-row items-center">
                                    <button className="text-left">{item.name}</button>
                                    <CaretRight size={14} className="ml-2" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col border border-oxford-blue w-4/5 mr-4">
                        <Bundle />
                        <Recent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Standards;
