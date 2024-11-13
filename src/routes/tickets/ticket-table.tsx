import { Eye } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';

const titles = [
    { id: 1, name: "Ticket Number:" },
    { id: 2, name: "Date Modified:" },
    { id: 3, name: "Ticket Status:" },
    { id: 4, name: "Ticket Subject:" },
    { id: 5, name: "Department:" },
]

function TicketTable({ items=[
    { id: 1, number: "172934", status: "Open", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support"  },
    { id: 2, number: "172933", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support" },
    { id: 3, number: "172141", status: "Open", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support"  },
    { id: 4, number: "123435", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support"  },
    { id: 5, number: "172321", status: "Open", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support"  },
    { id: 6, number: "128372", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support" },
    { id: 7, number: "128353", status: "Closed", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support"  },
    { id: 8, number: "128332", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support" },
    { id: 9, number: "128356", status: "Open", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support"  },
    { id: 10, number: "1285423", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support" },
] })  {
    return (
        <div className="">
            <table className="w-full bg-transparent border">
                <thead>
                    <tr className="text-oxford-blue border border-slate-300 bg-tabs-gray">
                        <th></th>
                        {titles.map(title => (
                            <th key={title.id} className="py-4 text-xs">
                                <div className="flex flex-row items-center">
                                    <div className="flex flex-row items-center">
                                        <div>{title.name}</div>
                                    </div>
                                </div>
                            </th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id} className="border-b border-slate-300 text-xs">
                            <div className="pr-2.5" />
                            <td className="font-medium">{item.number}</td>
                            <td className="font-medium">{item.date}</td>
                            <td className="py-6 font-medium">
                                {item.status === "Open" &&
                                    <span className="text-xs text-green-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-green-600 mr-1.5 ml-0.5"/>
                                        Open
                                    </span>
                                }
                                {item.status === "Closed" &&
                                    <span className="text-xs text-red-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-red-600 mr-1.5 ml-0.5"/>
                                        Closed
                                    </span>
                                }    
                            </td>
                            <td className="py-6 font-medium">{item.subject}</td>
                            <td className="py-6 font-medium">{item.department}</td>
                            <td className="w-12">
                                {item.status === "Open" &&
                                    <Link to="/ticket-open">
                                        <Eye size={18} />
                                    </Link>
                                }
                                {item.status === "Closed" &&
                                    <Link to="/ticket-closed">
                                        <Eye size={18} />
                                    </Link>
                                }
                            </td>     
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TicketTable;