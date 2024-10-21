import {Collection, Tab, TabList, TabPanel, Tabs} from 'react-aria-components';
import {ReactNode} from 'react';
import './tabs-navigation.css'

type PageTab = {
    id: number;
    title: string;
    number: string;
    content: ReactNode;
}
interface NavigationTabsProps {
    tabs: Array<PageTab>
}

function OrderTabs({ tabs } : NavigationTabsProps) {
    return (
        <Tabs className="">
            <TabList className="pl-8 flex border-b gap-x-2.5" items={tabs}>
                {item => <Tab className="navigation-Tab flex flex-row items-end">
                    {item.title}
                    <div className="font-medium border bg-slate-200 rounded text-sm px-2 py-1 ml-2.5">
                        {item.number}
                    </div>
                </Tab>}
            </TabList>
            <Collection items={tabs}>
                {item => (
                    <TabPanel className="pt-8">
                        {item.content}
                    </TabPanel>
                )}
            </Collection>
        </Tabs>
    )
}

export default OrderTabs;
