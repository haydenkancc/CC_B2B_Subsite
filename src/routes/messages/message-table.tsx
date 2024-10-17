import 'react-datepicker/dist/react-datepicker.css';
import { Star } from '@phosphor-icons/react';
import Calendar from '../../components/calendar/calendar';

const titles = [
    { id: 1, name: "From:" },
    { id: 2, name: "Message:" },
    { id: 3, name: "Time:" },
];

const msgs = [
    { id: 1, message: "Hello Team, we're pleased to inform that a new customer has registered! Please follow up promptly by contacting an administrator...", name: "Bugs Bunny", time: "3 Hours Ago" },
    { id: 2, message: "Hello Team, we're pleased to inform that a new customer has registered! Please follow up promptly by contacting an administrator...", name: "Bugs Bunny", time: "3 Hours Ago" },
    { id: 3, message: "Hello Team, we're pleased to inform that a new customer has registered! Please follow up promptly by contacting an administrator...", name: "Bugs Bunny", time: "3 Hours Ago" },
    { id: 4, message: "Hello Team, we're pleased to inform that a new customer has registered! Please follow up promptly by contacting an administrator...", name: "Bugs Bunny", time: "3 Hours Ago" },
    { id: 5, message: "Hello Team, we're pleased to inform that a new customer has registered! Please follow up promptly by contacting an administrator...", name: "Bugs Bunny", time: "3 Hours Ago" },
    { id: 6, message: "Hello Team, we're pleased to inform that a new customer has registered! Please follow up promptly by contacting an administrator...", name: "Bugs Bunny", time: "3 Hours Ago" },
    { id: 7, message: "Hello Team, we're pleased to inform that a new customer has registered! Please follow up promptly by contacting an administrator...", name: "Bugs Bunny", time: "3 Hours Ago" },
    { id: 8, message: "Hello Team, we're pleased to inform that a new customer has registered! Please follow up promptly by contacting an administrator...", name: "Bugs Bunny", time: "3 Hours Ago" },
    { id: 9, message: "Hello Team, we're pleased to inform that a new customer has registered! Please follow up promptly by contacting an administrator...", name: "Bugs Bunny", time: "3 Hours Ago" },
    { id: 10, message: "Hello Team, we're pleased to inform that a new customer has registered! Please follow up promptly by contacting an administrator...", name: "Bugs Bunny", time: "3 Hours Ago" },
];

function MessageTable() {

    return (
        <div>
            <Calendar />
            <table className="w-full bg-transparent border-lavender">
                <thead>
                    <tr className="text-oxford-blue border-b border-black">
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
                    {msgs.map(item => (
                        <tr key={item.id} className="border-b border-black text-sm">
                            <td className="w-12">
                                <div className="px-4">
                                    <Star size={18} />
                                </div>
                            </td>
                            <td className="py-4 font-medium">{item.name}</td>
                            <td className="px-20 py-4 font-medium">{item.message}</td>
                            <td className="py-4 font-medium">{item.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MessageTable;
