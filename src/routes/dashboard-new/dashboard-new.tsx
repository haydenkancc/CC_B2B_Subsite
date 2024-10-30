import SidebarNav from '../sidebar-nav/sidebar-nav.tsx';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useEffect } from 'react';
import { ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import CardWidget from '../sam/card-widget.tsx';
import "../../routes/sam/sam.scss"

function DashboardNew() {

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
                    <Link to="/cart" className="pr-10">
                        <ShoppingCart size={20} />
                    </Link>
                </div>
                
                <div className="px-8 pt-5 pb-8">
                    <div className="text-2xl">Dashboard</div>
                </div>
                <div className="sam-content-section">
                    <div className="sam-main-panel">
                        <CardWidget title="Publishers out of compliance" value="36" up={true} good={true} change="2" />
                        <CardWidget title="Products out of compliance" value="106" up={true} good={true} change="2 (1.9%)" />
                        <CardWidget title="Over-licensed amount" value="$32M" up={false} good={false} change="-$3M" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardNew;