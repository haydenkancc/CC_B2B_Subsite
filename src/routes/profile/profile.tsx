import SidebarNav from '../sidebar-nav/sidebar-nav.tsx';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useEffect } from 'react';
import Basic from './basic.tsx';
import { ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

function Profile() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="flex">
            <div className="">
                <SidebarNav />
            </div>
            <div className="grow">
                <div className="flex flex-row items-center">
                    <div className="sam-title-section grow">
                        <div className="sam-title">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <MagnifyingGlassIcon />
                            </div>
                            <div className="text-[#808080]">
                                Search for anything
                            </div>
                        </div>
                    </div>
                    <Link to="/cart" className="pr-8">
                        <ShoppingCart size={20} weight="light" />
                    </Link>
                </div>
                
                <div className="px-8 py-8">
                    <div className="text-2xl font-medium">Profile</div>
                </div>
                <div className="px-8">
                    <Basic />
                </div>
            </div>
        </div>
    )
}

export default Profile;