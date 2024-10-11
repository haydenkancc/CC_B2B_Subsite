import './navbar-top.css'
import Logo from '../../assets/Canada_Computers_(Icon).svg?react';
import Mag from '../../assets/magnifying-glass-bold.svg?react';
import Globe from '../../assets/globe.svg?react';
import Cart from '../../assets/shopping-cart.svg?react';
import User from '../../assets/user-circle.svg?react'
import Question from '../../assets/question.svg?react'
import {Button, Input, TextField} from 'react-aria-components';
import { Link } from 'react-router-dom';

function NavbarTop() {
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
    )
}

export default NavbarTop;