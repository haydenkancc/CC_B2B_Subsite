import { useState, useRef, useEffect } from 'react';
import './navbar-top.css';
import Logo from '../../assets/Canada_Computers_(Icon).svg?react';
import Mag from '../../assets/magnifying-glass-bold.svg?react';
import Cart from '../../assets/shopping-cart.svg?react';
import User from '../../assets/user-circle.svg?react';
import Question from '../../assets/question.svg?react';
import { Button, Input, TextField } from 'react-aria-components';
import { Link } from 'react-router-dom';
import { UserGear, Gear, SignOut, BellRinging, ListBullets, List, File, Bell, CaretRight } from '@phosphor-icons/react';

function NavbarTopAccount() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const [isNotifsVisible, setNotifsVisible] = useState(false);
    const notifsRef = useRef(null);
    const [isSolutionsVisible, setSolutionsVisible] = useState(false);
    const solutionsRef = useRef(null);
    const [isSearchExpanded, setSearchExpanded] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(prev => !prev);
    };

    const toggleNotifs = () => {
        setNotifsVisible(prev => !prev);
    };

    const toggleSolutions = () => {
        setSolutionsVisible(prev => !prev);
    };

    const toggleSearch = () => {
        setSearchExpanded(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
            if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
                setSolutionsVisible(false);
            }
            if (isSearchExpanded && !event.target.closest('.search-expanded')) {
                setSearchExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSearchExpanded]);

    return (
        <div className="bg-black text-ghost-white flex justify-center border-ghost-white/5 text-sm">
            <div className="flex align-middle w-full px-4 py-6 box-border items-center">
                <Link to={"/"}>
                    <Logo className="h-full w-9 py-1"/>
                </Link>
                <Button className="navbar-top-Button ml-10">
                    <Link to={"/hardware"}>
                        <div className="text-base">Hardware</div>
                    </Link>
                </Button>
                <Button className="navbar-top-Button ml-2.5">
                    <Link to={"/software"}>
                        <div className="text-base">Software</div>
                    </Link>
                </Button>
                <div className="relative" ref={solutionsRef}>
                    <Button className="navbar-top-Button ml-2.5">
                        <div className="text-base" onClick={toggleSolutions}>Solutions</div>
                    </Button>
                    {isSolutionsVisible && (
                        <div className="absolute w-56 top-12 text-left bg-black shadow-lg rounded-b-md z-50 flex flex-col mt-2">
                            <Link to="/enterprise-solutions" className="dropdown-item flex flex-row justify-between items-center gap-y-0.5 px-4 py-2.5 border-l-4 border-black hover:border-school-bus-yellow">
                                <div className="text-sm">Enterprise Solutions</div>
                                <CaretRight size={14} />
                            </Link>
                            <Link to="/healthcare-solutions" className="dropdown-item flex flex-row justify-between items-center gap-y-0.5 px-4 py-2.5 border-l-4 border-black hover:border-school-bus-yellow">
                                <div className="text-sm">Healthcare Solutions</div>
                                <CaretRight size={14} />
                            </Link>
                            <Link to="/education-solutions" className="dropdown-item flex flex-row justify-between items-center gap-y-0.5 px-4 py-2.5 border-l-4 border-black hover:border-school-bus-yellow mb-2">
                                <div className="text-sm">Education Solutions</div>
                                <CaretRight size={14} />
                            </Link>
                        </div>
                    )}
                </div>
                <Button className="navbar-top-Button ml-2.5">
                    <Link to={"/procurement"}>
                        <div className="text-base">Procurement</div>
                    </Link>
                </Button>
                <Button className="navbar-top-Button ml-2.5">
                    <Link to={"/about"}>
                        <div className="text-base">About</div>
                    </Link>
                </Button>
                <div className="flex grow items-center justify-end pl-4">
                    <div className={`flex ${isSearchExpanded ? 'search-expanded' : 'search-collapsed'} bg-ghost-white shadow-[inset_0_0_4px_0_rgba(0,0,0,0.2)] rounded-sm transition-all duration-300`}>
                        <TextField className="relative flex items-center justify-between box-border min-w-64 px-2.5 py-2 text-black">
                            <Input className="search--input" placeholder="What are you looking for?" onFocus={toggleSearch} />
                            <Mag className="fill-oxford-blue absolute right-2.5" width="1em" height="1em" />
                        </TextField>
                    </div>
                </div>
                <div className="flex items-center pl-8 gap-5">
                    <Button className="navbar-top-Button">
                        <Question className="fill-ghost-white" height="1.5em" width="1.5em" />
                    </Button>
                    <div className="relative" ref={notifsRef}>
                        <Button className="navbar-top-Button">
                            <div className="flex flex-row items-center gap-x-1.5" onClick={toggleNotifs}>
                                <Bell className="fill-ghost-white" height="1.5em" width="1.5em" />
                            </div>
                        </Button>
                        {isNotifsVisible && (
                            <div className="absolute left-1/2 top-16 w-60 text-left bg-black shadow-lg rounded-md z-50 flex flex-col transform -translate-x-1/2">
                                <Link to="/hardware" className="dropdown-item flex flex-col gap-y-0.5 px-4 py-2.5 mt-2 border-l-4 border-black hover:border-school-bus-yellow">
                                    <div className="text-xs">2 hours ago</div>
                                    <div className="text-sm">GX4900X has an ongoing promotion!</div>
                                </Link>
                                <Link to="/account" className="dropdown-item flex flex-col gap-y-0.5 px-4 py-2.5 border-l-4 border-black hover:border-school-bus-yellow">
                                    <div className="text-xs">2021-10-01</div>
                                    <div className="text-sm">Your ticket has received a response!</div>
                                </Link>
                                <Link to="/orders" className="dropdown-item flex flex-col gap-y-0.5 px-4 py-2.5 mb-2 border-l-4 border-black hover:border-school-bus-yellow">
                                <div className="text-xs">2021-09-01</div>
                                <div className="text-sm">Your order has been placed!</div>
                                </Link>
                            </div>
                        )}
                    </div>
                    <Button className="navbar-top-Button">
                        <Link to={"/cart"} className="flex flex-row items-center gap-x-1.5">
                            <Cart className="fill-ghost-white" height="1.5em" width="1.5em" />
                            Cart
                        </Link>
                    </Button>
                    <div className="relative" ref={dropdownRef}>
                        <Button className="navbar-top-Button">
                            <div className="flex flex-row items-center gap-x-1.5" onClick={toggleDropdown}>
                                <User className="fill-ghost-white" height="1.5em" width="1.5em" />
                                Wile C.
                            </div>
                        </Button>
                        {isDropdownVisible && (
                            <div className="absolute right-0 top-16 w-40 text-left bg-black shadow-lg rounded-md z-50 flex flex-col">
                                <Link to="/account" className="dropdown-item flex flex-row items-center px-4 py-2.5 mt-2 border-l-4 border-black hover:border-school-bus-yellow">
                                    <UserGear size={18} />
                                    <div className="ml-4">Account</div>
                                </Link>
                                <Link to="/message-center" className="dropdown-item flex flex-row items-center px-4 py-2.5 border-l-4 border-black hover:border-school-bus-yellow">
                                    <BellRinging size={18} />
                                    <div className="ml-4">Notifications</div>
                                </Link>
                                <Link to="/orders" className="dropdown-item flex flex-row items-center px-4 py-2.5 border-l-4 border-black hover:border-school-bus-yellow">
                                    <File size={18} />
                                    <div className="ml-4">Orders</div>
                                </Link>
                                <Link to="/saved-lists" className="dropdown-item flex flex-row items-center px-4 py-2.5 border-l-4 border-black hover:border-school-bus-yellow">
                                    <List size={18} />
                                    <div className="ml-4">Saved Lists</div>
                                </Link>
                                <Link to="/sign-in" className="dropdown-item flex flex-row items-center px-4 py-2.5 mb-2 border-l-4 border-black hover:border-school-bus-yellow">
                                    <SignOut size={18} />
                                    <div className="ml-4">Sign Out</div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarTopAccount;
