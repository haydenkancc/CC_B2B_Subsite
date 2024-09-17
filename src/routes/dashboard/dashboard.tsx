import CaretRight from '../../assets/caret-right-bold.svg?react';
import profile from '../../assets/l60Hf.png';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';

const items = [
    {
        id: 1,
        title: 'Hardware',
        children: [
            {
                id: 1,
                title: 'Cables & Adapters',
                children: [
                    {
                        id: 1,
                        title: 'Power Cables & Adapters',
                        children: [
                            {
                                id: 1,
                                title: 'PC Internal Power Cables',
                            },
                            {
                                id: 2,
                                title: 'PC External Power Cables',
                            }
                        ],
                    },
                    {
                        id: 2,
                        title: 'Data Cables & Adapters',
                        children: [
                            {
                                id: 1,
                                title: 'SATA Cables',
                            }
                        ]
                    },
                    {
                        id: 3,
                        title: 'Lightning / USB Cables & Adapters',
                    },
                ],
            },
            {
                id: 2,
                title: 'Cell Phones & Accessories',
            },
            {
                id: 3,
                title: 'Laptops, Tablets, & Accessories',
            },
            {
                id: 4,
                title: 'Desktop Computers & Servers',
            }
        ]
    },
    {
        id: 2,
        title: 'Software',
    },
    {
        id: 3,
        title: 'Brands',
    },
    {
        id: 4,
        title: 'Industry',
    },
    {
        id: 5,
        title: 'About',
    },
    {
        id: 6,
        title: 'Tools',
    },
]

const actions = [
    {title: 'Dashboard', subtitle: 'hello', current: true},
    {title: 'Account Information', subtitle: 'hello', current: false},
    {title: 'Your Orders', subtitle: 'hello', current: false},
    {title: 'Wish List', subtitle: 'hello', current: false},
    {title: 'Address Book', subtitle: 'hello', current: false},
    {title: 'Billing Information', subtitle: 'hello', current: false},
    {title: 'Tickets', subtitle: 'hello', current: false},
    {title: 'Message Center', subtitle: 'hello', current: false},
    {title: 'Documents', subtitle: 'hello', current: false},
    {title: 'Account History', subtitle: 'hello', current: false},
]
function Dashboard() {
   return (
       <div className="bg-ghost-white text-oxford-blue">
           <div className="bg-ghost-white text-oxford-blue border-lavender">
               <NavbarTop/>
               {/* Remove NavbarBottom Line to make work */}
               <NavbarBottom />
           </div>
           {<div className="bg-glaucous/10 border-b w-full flex flex-col align-middle pl-8 pt-16 pr-8 pb-16">
               <div className="uppercase font-light">
                   Acme Corporation
               </div>
               <div className="font-display font-semibold text-4xl">
                   Welcome, Wile
               </div>
               <div className="">
                   Account #314159
               </div>
           </div>}
           <div className="flex">
               <div className="flex flex-col border-r">
                   <div className="rounded-md">
                       {actions.map((action) => (
                           <>
                            <div className={`pl-8 pt-2 pb-2 pr-4 flex justify-between items-center gap-8 hover:bg-lavender/50 ${action.current ? 'border-l-4 border-school-bus-yellow bg-lavender/25' : '/'}`}>
                                <div className="text-md">
                                    {action.title}
                                </div>
                                <CaretRight width="1em" />
                            </div>
                           <div className="border-t" />
                           </>
                       ))}
                       <div className="mt-2 p-4 flex flex-col items-center gap-4">
                           My Account Manager
                           <img className="object-cover w-16 h-16 rounded-full" src={profile} />
                           <span>John Doe</span>
                           <span>john.doe@cc.ca</span>
                           <span>(416) 123-4567</span>
                       </div>
                   </div>
               </div>
               <div className="flex-grow m-4">
                   <div className="font-display text-2xl pl-4 border-b">
                       Action Items
                   </div>
                   <div className="flex">
                       <div className="mt-4 flex flex-col">
                           <span className="font-semibold">Order Approval Request</span>
                           <span className="">Review pending order</span>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   )
}

export default Dashboard;