import { useState, useRef, useEffect } from 'react';
import './navbar-top.css';
import Logo from '../../assets/Canada_Computers_(Icon).svg?react';
import Mag from '../../assets/magnifying-glass-bold.svg?react';
import Cart from '../../assets/shopping-cart.svg?react';
import User from '../../assets/user-circle.svg?react';
import Question from '../../assets/question.svg?react';
import { Button, Input, TextField } from 'react-aria-components';
import { Link } from 'react-router-dom';
import { CaretRight, CaretDown, CaretUp } from '@phosphor-icons/react';

function NavbarTop() {
    const [isProductsVisible, setProductsVisible] = useState(false);
    const productsRef = useRef(null);
    const [isSolutionsVisible, setSolutionsVisible] = useState(false);
    const solutionsRef = useRef(null);
    const [isSearchExpanded, setSearchExpanded] = useState(false);

    const toggleProducts = () => {
        setProductsVisible(prev => !prev);
        if (isSolutionsVisible) {
            setSolutionsVisible(false);
        }
    };

    const toggleSolutions = () => {
        setSolutionsVisible(prev => !prev);
        if (isProductsVisible) {
            setProductsVisible(false);
        }
    };

    const toggleSearch = () => {
        setSearchExpanded(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (productsRef.current && !productsRef.current.contains(event.target)) {
                setProductsVisible(false);
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
                <div className="relative" ref={productsRef}>
                    <Button className="navbar-top-Button ml-10">
                        <div className="flex flex-row items-center gap-x-1.5" onClick={toggleProducts}>
                           <div className="text-base">Products</div>
                           {isProductsVisible ? <CaretUp size={16} /> : <CaretDown size={16} />}
                        </div>
                    </Button>
                    {isProductsVisible && (
                        <div className="absolute w-40 top-12 text-left bg-black shadow-lg rounded-b-md z-50 flex flex-col mt-2 ml-8">
                            <Link to="/hardware" className="dropdown-item flex flex-row justify-between items-center gap-y-0.5 px-4 py-2.5 border-l-4 border-black hover:border-school-bus-yellow">
                                <div className="text-sm">Hardware</div>
                                <CaretRight size={14} />
                            </Link>
                            <Link to="/software" className="dropdown-item flex flex-row justify-between items-center gap-y-0.5 px-4 py-2.5 border-l-4 border-black hover:border-school-bus-yellow">
                                <div className="text-sm">Software</div>
                                <CaretRight size={14} />
                            </Link>
                        </div>
                    )}
                </div>
                <div className="relative" ref={solutionsRef}>
                    <Button className="navbar-top-Button ml-2.5">
                        <div className="flex flex-row items-center gap-x-1.5" onClick={toggleSolutions}>
                           <div className="text-base">Solutions</div>
                           {isSolutionsVisible ? <CaretUp size={16} /> : <CaretDown size={16} />}
                        </div>
                    </Button>
                    {isSolutionsVisible && (
                        <div className="absolute w-56 top-12 text-left bg-black shadow-lg rounded-b-md z-50 flex flex-col mt-2 ml-0.5">
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
                    <div className={`flex ${isSearchExpanded ? 'search-expanded-no' : 'search-collapsed'} bg-ghost-white shadow-[inset_0_0_4px_0_rgba(0,0,0,0.2)] rounded-sm transition-all duration-300`}>
                        <TextField className="relative flex items-center justify-between box-border min-w-64 px-2.5 py-2 text-black">
                            <Input className={`search--input ${isSearchExpanded ? 'w-screen' : 'w-64'}`} placeholder="What are you looking for?" onFocus={toggleSearch} />
                            <Mag className="fill-oxford-blue absolute right-2.5 cursor-pointer" width="1em" height="1em" />
                        </TextField>
                    </div>
                </div>
                <div className="flex items-center pl-8 gap-6">
                    <Button className="navbar-top-Button">
                        <Question className="fill-ghost-white" height="1.5em" width="1.5em" />
                        Help
                    </Button>
                    <Button className="navbar-top-Button">
                        <Link to={"/sign-in"} className="flex flex-row items-center gap-x-1.5">
                            <Cart className="fill-ghost-white" height="1.5em" width="1.5em" />
                            Cart
                        </Link>
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
