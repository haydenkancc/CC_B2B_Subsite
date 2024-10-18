import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import CaretRight from '../../assets/caret-right-bold.svg?react';
import CaretDown from '../../assets/caret-down-bold.svg?react';
import {Collection, ListBox, ListBoxItem, Tab, TabList, TabPanel, Tabs} from 'react-aria-components';
import './navbar-bottom.css';


const hwchild = [
    {id: 1, title: 'Cables & Adapters'},
    {id: 2, title: 'Cell Phones & Accessories'},
    {id: 3, title: 'Laptops, Tablets & Accessories'},
    {id: 4, title: 'Desktop Computers & Servers'},
    {id: 5, title: 'PC & Server Components'},
    {id: 6, title: 'Computer Peripherals'},
    {id: 8, title: 'Home Electronics'},
    {id: 9, title: 'Cameras and Drones'},
    {id: 10, title: 'Video Games & Toys'},
    {id: 11, title: 'Home Security & Smart Home'},
]

const swchild = [
    {id: 1, title: 'Desktop Operating Systems'},
    {id: 2, title: 'Business & Home Office'},
    {id: 3, title: 'Antivirus & Security'},
]

const bchild = [
    {id: 1, title: 'Adobe'},
    {id: 2, title: 'AMD'},
    {id: 3, title: 'APC'},
    {id: 4, title: 'Apple'},
    {id: 5, title: 'AWS'},
    {id: 6, title: 'Cisco'},
    {id: 7, title: 'Dell Technologies'},
    {id: 8, title: 'Google'},
    {id: 9, title: 'HP'},
    {id: 10, title: 'HPE'},
    {id: 11, title: 'IBM'},
    {id: 12, title: 'Intel'},
    {id: 13, title: 'Lenovo'},
    {id: 14, title: 'Microsoft'},
    {id: 15, title: 'NetApp'},
    {id: 16, title: 'Palo Alto Networks'},
    {id: 17, title: 'Pure Storage'},
    {id: 18, title: 'Samsung'},
    {id: 19, title: 'Snapdragon'},
    {id: 20, title: 'VMware'},
]

const items = [
    { id: 1, title: 'Shop Hardware', children: hwchild},
    { id: 2, title: 'Shop Sam', children: swchild},
    { id: 3, title: 'Shop By Brand', children: bchild},
]
function NavbarBottom({ pages }) {
    return (

        <NavigationMenu.Root delayDuration={1000} onValueChange={(value) => {
            if (value) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }}>
            <div className="flex justify-center shadow-sm relative z-20 bg-ghost-white">
                <div className="flex w-full align-middle max-w-[1440px]">
                    <NavigationMenu.List className="flex">
                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className="NavigationMenuTrigger">
                                Catalogue
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="max-w-[1440px] w-full pl-4 pr-4 flex">
                                <div className="absolute top-0 left-0 right-0 h-[100vh] z-0 bg-black/50 pointer-events-none"></div>
                                <Tabs className="bg-ghost-white flex grow z-10 shadow-sm rounded-b-md">
                                    <TabList className="rounded-bl-md bg-lavender pl-6 pr-6 pt-10 pb-14 flex flex-col gap-2" items={items}>
                                        {item => (
                                            <Tab className="navbar-bottom-Tab">
                                                {item.title}
                                            </Tab>
                                        )}
                                    </TabList>
                                    <Collection items={items}>
                                        {item => (
                                            <TabPanel className="grow pl-4 pr-4 pt-10 pb-20 ">
                                                <div className="pl-3 pb-12 font-semibold text-2xl">{item.title}</div>
                                                <ListBox items={item.children} layout="grid" orientation="vertical" className="grid grid-cols-3 gap-y-6">
                                                    {item => (
                                                        <ListBoxItem className="flex items-center gap-1">
                                                            <div className="navbar-bottom-Category">
                                                                {item.title}
                                                                <CaretRight height="1em" width="1em" />
                                                            </div>

                                                        </ListBoxItem>
                                                    )}
                                                </ListBox>
                                            </TabPanel>
                                        )}
                                    </Collection>
                                </Tabs>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                        {pages.map((page) => (
                            <NavigationMenu.Item>
                                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                                    {page}
                                </NavigationMenu.Trigger>
                            </NavigationMenu.Item>
                            ))}
                    </NavigationMenu.List>
                </div>
            </div>
            <div className="absolute flex justify-center left-0 right-0">
                <NavigationMenu.Viewport className="w-full flex justify-center max-w-[1440px]" />
            </div>
        </NavigationMenu.Root>
)
}

export default NavbarBottom;