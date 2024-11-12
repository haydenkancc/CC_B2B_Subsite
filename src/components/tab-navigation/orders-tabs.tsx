import {Collection, Input, Tab, TabList, TabPanel, Tabs, TextField} from 'react-aria-components';
import {ReactNode, useEffect, useRef, useState} from 'react';
import './tabs-navigation.css'
import { Calendar, MagnifyingGlass } from '@phosphor-icons/react';
import CalendarTo from '../calendar/calendar-to';
import samplePDF from "../../assets/sample-pdf.pdf"
import { Link } from 'react-router-dom';

type PageTab = {
    id: number;
    title: string;
    // number: string;
    content: ReactNode;
}
interface NavigationTabsProps {
    tabs: Array<PageTab>
}

const dates = [
    { time: "Last 30 Days" },
    { time: "Last 3 Months" },
    { time: "Within 2024" },
    { time: "Within 2023" },
    { time: "Within 2022" },
]

function OrdersTabs({ tabs } : NavigationTabsProps) {

    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [isSearchExpanded, setSearchExpanded] = useState(false);

    const toggleCalendar = () => {
        setCalendarVisible(prev => !prev);
    };

    const toggleSearch = () => {
        setSearchExpanded(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setCalendarVisible(false);
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
        <Tabs className="">
            <div className="flex flex-row justify-between">
                <TabList className="flex gap-x-1 rounded-lg" items={tabs}>
                    {item => <Tab className="list-Tab rounded-lg flex flex-row text-sm ">
                        {item.title}
                    </Tab>}
                </TabList>
                <div className="flex flex-row gap-x-1">
                    <div className={`flex border border-slate-300 rounded-lg flex flex-row gap-x-1.5 items-center px-1.5 cursor-pointer h-7` } onClick={toggleSearch}>
                        <TextField className="relative flex items-center justify-between text-black">
                            <Input className={`focus:outline-none text-xs ${isSearchExpanded ? 'w-48' : 'w-0 '}`} placeholder="Search" onFocus={toggleSearch} />
                            <MagnifyingGlass size={16} weight="light" />
                        </TextField>
                    </div>
                    {/* <div className="relative">
                        <div className="border border-slate-300 rounded-lg flex justify-center items-center px-1.5 h-7" onClick={toggleCalendar}>
                            <Calendar size={18} weight="light" className="cursor-pointer" />
                        </div>
                        {isCalendarVisible && (
                            <div className="absolute bg-white w-32 top-9 right-0 text-left bg-black rounded-lg z-50 flex flex-col border">
                                {dates.map(item => (
                                    <div className="hover:bg-tabs-gray px-4 py-2.5 cursor-pointer" onClick={toggleCalendar}>
                                        <div className="text-xs text-center">{item.time}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div> */}
                    <CalendarTo />
                    <Link to={samplePDF} target="_blank" className="border border-slate-300 rounded-lg text-xs px-1.5 h-7 hover:bg-tabs-gray">
                        <div className="flex flex-col min-h-full justify-center items-center">Export (.xls)</div>
                    </Link>
                </div>
            </div>
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

export default OrdersTabs;
