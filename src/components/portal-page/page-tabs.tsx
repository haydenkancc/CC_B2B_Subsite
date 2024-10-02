import {Collection, Tab, TabList, TabPanel, Tabs} from 'react-aria-components';
import {ReactNode} from 'react';

type PageTab = {
    id: number;
    title: string;
    content: ReactNode;
}
interface PageTabsProps {
    tabs: Array<PageTab>
}

function PageTabs({ tabs } : PageTabsProps) {
    return (
        <Tabs className="">
            <TabList className="flex text-lg border-b gap-1" items={tabs}>
                {item => <Tab className="account-Tab">{item.title}</Tab>}
            </TabList>
            <Collection items={tabs}>
                {item => (
                    <TabPanel className="pt-16">
                        {item.content}
                    </TabPanel>
                )}
            </Collection>
        </Tabs>
    )
}

export default PageTabs;
