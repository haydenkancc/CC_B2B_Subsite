import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDots } from '@phosphor-icons/react';
import { SearchField, Input } from 'react-aria-components';

function Calendar() {

    const DateRangeSelector = () => {

        const today = new Date();
        const lastMonth = new Date(today);
        lastMonth.setMonth(today.getMonth() - 1);

        const [startDate, setStartDate] = useState(new Date(lastMonth));
        const [endDate, setEndDate] = useState(today);
        const [isStartDatePickerOpen, setStartDatePickerOpen] = useState(false);
        const [isEndDatePickerOpen, setEndDatePickerOpen] = useState(false);

        return (
            <div className="">
                <div className="flex flex-row justify-between items-center mb-10">
                    <div className="flex flex-row items-center">
                        <div className="w-60 flex flex-row justify-between border border-slate-400 rounded-sm px-4 py-2 items-center">
                            <div className="font font-bold w-10">From:</div>
                            <div>{startDate.toLocaleDateString()}</div>
                            <button onClick={() => setStartDatePickerOpen(!isStartDatePickerOpen)}>
                                <CalendarDots size={24} weight="light" className="ml-2.5" />
                            </button>
                            {isStartDatePickerOpen && (
                                <div className="absolute mt-80 left-72">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => {
                                            setStartDate(date);
                                            setStartDatePickerOpen(false);
                                        }}
                                        inline
                                    />
                                </div>
                            )}
                        </div>
                        <div className="w-60 flex flex-row justify-between border border-slate-400 rounded-sm px-4 py-2 ml-4 items-center">
                            <div className="font font-bold w-10">To:</div>
                            <div>{endDate.toLocaleDateString()}</div>
                            <button onClick={() => setEndDatePickerOpen(!isEndDatePickerOpen)}>
                                <CalendarDots size={24} weight="light" className="ml-2.5" />
                            </button>
                            {isEndDatePickerOpen && (
                                <div className="absolute mt-80 left-136">
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => {
                                            setEndDate(date);
                                            setEndDatePickerOpen(false);
                                        }}
                                        inline
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <SearchField>
                        <Input className="pl-3 pr-3 pt-2 pb-2 bg-white text-oxford-blue border border-1 border-slate-400 rounded-sm focus:outline-none" placeholder="Search" />
                    </SearchField>
                </div>
            </div>
        );
    };

    return <DateRangeSelector />;
}

export default Calendar;
