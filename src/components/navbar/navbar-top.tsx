// import './navbar-top.css'
// import Logo from '../../assets/Canada_Computers_(Icon).svg?react';
// import Mag from '../../assets/magnifying-glass-bold.svg?react';
// import Globe from '../../assets/globe.svg?react';
// import Cart from '../../assets/shopping-cart.svg?react';
// import User from '../../assets/user-circle.svg?react'
// import Question from '../../assets/question.svg?react'
// import {Button, Input, TextField} from 'react-aria-components';
// import { Link } from 'react-router-dom';

// function NavbarTop() {
//     return (
//         <div className="bg-oxford-blue text-ghost-white flex justify-center border-ghost-white/5 text-sm">
//             <div className="flex align-middle w-full pl-4 pr-4 pt-3 pb-3 box-border max-w-[1440px] items-center">
//                 <Link to={"/"}>
//                     <Logo className="h-full w-9"/>
//                 </Link>
//                 <div className="flex grow items-center justify-end pl-4">
//                     <div className="flex h-full bg-ghost-white shadow-[inset_0_0_4px_0_rgba(0,0,0,0.2)] rounded-sm">
//                         <TextField className="flex items-center justify-between h-full box-border min-w-96 pl-2 pr-2 pt-1 pb-1">
//                             <Input className="search--input" placeholder="What are you looking for?"/>
//                             <Mag className="fill-oxford-blue" width="1em" height="1em" />
//                         </TextField>
//                     </div>
//                 </div>
                <div className="flex items-center pl-8 gap-6">
                    <Button className="navbar-top-Button">
                        <Question className="fill-ghost-white" height="1.5em" width="1.5em" />
                    </Button>
                    <Button className="navbar-top-Button">
                        <Cart className="fill-ghost-white" height="1.5em" width="1.5em" />
                        Cart
                    </Button>
                    <Button className="navbar-top-Button">
                        <Link to={"/sign-in"} className="flex flex-row items-center gap-x-1.5">
                            <User className="fill-ghost-white" height="1.5em" width="1.5em" />
                            Sign In
                        </Link>
                    </Button>
                </div>
//             </div>
//         </div>
//     )
// }

// export default NavbarTop;

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

function NavbarTop() {
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
            if (notifsRef.current && !notifsRef.current.contains(event.target)) {
                setNotifsVisible(false);
            }
            if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
                setSolutionsVisible(false);
            }
            if (isSearchExpanded && !event.target.closest('.search-expanded-no')) {
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
                        <div className="flex flex-row items-center gap-x-1.5" onClick={toggleSolutions}>
                            <div className="text-base">Solutions</div>
                        </div>
                    </Button>
                    {isSolutionsVisible && (
                        <div className="absolute w-56 text-left bg-oxford-blue shadow-lg rounded-md z-50 flex flex-col mt-2.5">
                            <Link to="/enterprise-solutions" className="dropdown-item flex flex-row justify-between items-center gap-y-0.5 px-4 py-2.5 border-l-4 border-oxford-blue hover:border-school-bus-yellow mt-2">
                                <div className="text-sm">Enterprise Solutions</div>
                                <CaretRight size={14} />
                            </Link>
                            <Link to="/healthcare-solutions" className="dropdown-item flex flex-row justify-between items-center gap-y-0.5 px-4 py-2.5 border-l-4 border-oxford-blue hover:border-school-bus-yellow">
                                <div className="text-sm">Healthcare Solutions</div>
                                <CaretRight size={14} />
                            </Link>
                            <Link to="/education-solutions" className="dropdown-item flex flex-row justify-between items-center gap-y-0.5 px-4 py-2.5 border-l-4 border-oxford-blue hover:border-school-bus-yellow mb-2">
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
                    <Link to={"/"}>
                        <div className="text-base">About</div>
                    </Link>
                </Button>
                <div className="flex grow items-center justify-end pl-4">
                    <div className={`flex ${isSearchExpanded ? 'search-expanded-no' : 'search-collapsed'} bg-ghost-white shadow-[inset_0_0_4px_0_rgba(0,0,0,0.2)] rounded-sm transition-all duration-300`}>
                        <TextField className="flex items-center justify-between box-border min-w-64 px-2.5 py-2 text-black">
                            <Input className="search--input" placeholder="What are you looking for?" onFocus={toggleSearch} />
                            <Mag className="fill-oxford-blue" width="1em" height="1em" />
                        </TextField>
                    </div>
                </div>
                <div className="flex items-center pl-8 gap-6">
                    <Button className="navbar-top-Button">
                        <Question className="fill-ghost-white" height="1.5em" width="1.5em" />
                        Help
                    </Button>
                    <Button className="navbar-top-Button">
                        <Cart className="fill-ghost-white" height="1.5em" width="1.5em" />
                        Cart
                    </Button>
                    <Button className="navbar-top-Button">
                        <Link to={"/sign-in"} className="flex flex-row items-center gap-x-1.5">
                            <User className="fill-ghost-white" height="1.5em" width="1.5em" />
                            Sign In
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default NavbarTop;
