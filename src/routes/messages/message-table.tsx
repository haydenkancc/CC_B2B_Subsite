import 'react-datepicker/dist/react-datepicker.css';
import { Star } from '@phosphor-icons/react';
import Calendar from '../../components/calendar/calendar';

const titles = [
    { id: 1, name: "From:" },
    { id: 2, name: "Message:" },
    { id: 3, name: "Time:" },
];

function MessageTable({ items=[
    { id: 1, message: "AWDIAHDI9000 is having a promotion sale from 2024-10-25 to 2024-11-25.", name: "Canada Computers & Electronics", time: "3 Hours Ago", type: "Promotion" },
    { id: 2, message: "Your order of ADIAW9000 has been placed.", name: "Canada Computers & Electronics", time: "8 Hours Ago", type: "System" },
    { id: 3, message: "Jerry is requesting the purchase of JWIDA9000.", name: "Canada Computers & Electronics", time: "9 Hours Ago", type: "System" },
    { id: 4, message: "AWDIAHDI9000 is having a promotion sale from 2024-10-25 to 2024-11-25.", name: "Canada Computers & Electronics", time: "10 Hours Ago", type: "Promotion" },
    { id: 5, message: "Your order of ADIAW9000 has been placed.", name: "Canada Computers & Electronics", time: "11 Hours Ago", type: "System" },
    { id: 6, message: "Jerry is requesting the purchase of JWIDA9000.", name: "Canada Computers & Electronics", time: "12 Hours Ago", type: "System" },
    { id: 7, message: "Ash Ketchup has replied to your ticket \"My SUPERPC9000 never arrived, can I have some assistance?\"", name: "Canada Computers & Electronics", time: "12 Hours Ago", type: "System" },
] })  {
    return (
        <div className="mb-20">
            <div className="px-8">
                <Calendar />
            </div>
            <table className="w-full bg-transparent border-lavender">
                <thead>
                    <tr className="text-oxford-blue border-b">
                        <th></th>
                        {titles.map(title => (
                            <th key={title.id}>
                                <div className="flex flex-row items-center">
                                    <div></div>
                                </div>
                            </th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id} className="border-b text-sm">
                            <td className="w-12">
                                <div className="px-4">
                                    <Star size={18} />
                                </div>
                            </td>
                            <td className="py-5 w-56">{item.name}</td>
                            <td className="px-10 py-5">{item.message}</td>
                            <td className="py-5 w-32">{item.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MessageTable;
