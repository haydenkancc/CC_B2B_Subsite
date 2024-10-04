import { useState, useRef, useEffect } from 'react';
import './navbar-top.css';
import Logo from '../../assets/Canada_Computers_(Icon).svg?react';
import Mag from '../../assets/magnifying-glass-bold.svg?react';
import Cart from '../../assets/shopping-cart.svg?react';
import User from '../../assets/user-circle.svg?react';
import Question from '../../assets/question.svg?react';
import { Button, Input, TextField } from 'react-aria-components';
import { Link } from 'react-router-dom';
import { UserGear, Gear, SignOut, BellRinging } from '@phosphor-icons/react';

function NavbarTopAccount() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownVisible(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-oxford-blue text-ghost-white flex justify-center border-ghost-white/5 text-sm">
            <div className="flex align-middle w-full pl-4 pr-4 pt-3 pb-3 box-border max-w-[1440px]">
                <Link to={"/"}>
                    <Logo className="h-full w-9"/>
                </Link>
                <div className="flex grow items-center justify-end pl-4">
                    <div className="flex h-full bg-ghost-white shadow-[inset_0_0_4px_0_rgba(0,0,0,0.2)] rounded-sm">
                        <TextField className="flex items-center justify-between h-full box-border min-w-96 pl-2 pr-2 pt-1 pb-1">
                            <Input className="search--input" placeholder="What are you looking for?"/>
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
                    <div className="relative" ref={dropdownRef}>
                        <Button className="navbar-top-Button" onClick={toggleDropdown}>
                            <User className="fill-ghost-white" height="1.5em" width="1.5em" />
                            Wile C.
                        </Button>
                        {isDropdownVisible && (
                            <div className="absolute right-0 top-12 w-40 text-left bg-oxford-blue shadow-lg rounded-md z-50 flex flex-col">
                                {/* <div className="triangle"></div> */}
                                <Link to="/account" className=" dropdown-item flex flex-row items-center px-4 py-3 mt-2 border-l-4 border-oxford-blue hover:border-school-bus-yellow">
                                    <UserGear size={18} />
                                    <div className="ml-4">Profile</div>
                                </Link>
                                <Link to="/account" className=" dropdown-item flex flex-row items-center px-4 py-3 border-l-4 border-oxford-blue hover:border-school-bus-yellow">
                                    <BellRinging size={18} />
                                    <div className="ml-4">Notifications</div>
                                </Link>
                                <Link to="/dashboard" className=" dropdown-item flex flex-row items-center px-4 py-3 border-l-4 border-oxford-blue hover:border-school-bus-yellow">
                                    <Gear size={18} />
                                    <div className="ml-4">Settings</div>
                                </Link>
                                <Link to="/sign-in" className=" dropdown-item flex flex-row items-center px-4 py-3 mb-2 border-l-4 border-oxford-blue hover:border-school-bus-yellow">
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
