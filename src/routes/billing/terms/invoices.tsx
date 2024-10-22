import { Star, CaretUp, CaretDown, Funnel, Eye, X } from '@phosphor-icons/react';
import { SearchField, Input } from 'react-aria-components';
import samplePDF from "../../../assets/sample-pdf.pdf";
import { Link } from 'react-router-dom';
import Calendar from '../../../components/calendar/calendar';

const titles = [
    { id: 1, name: "Number:" },
    { id: 2, name: "Status:" },
    { id: 3, name: "User:" },
    { id: 4, name: "Total:" },
    { id: 5, name: "Issued:" },
    { id: 6, name: "Due Date:" },
    { id: 7, name: "Payable:" },
]

const items = [
    { id: 1, number: "CCINV000001", status: "Paid", date: "2021-03-17", due: "2021-04-01", user: "Wile E. Coyote", total: "$15,200.00", payable: "$0.00", src: samplePDF  },
    { id: 2, number: "CCINV000002", status: "Overdue", date: "2021-03-18", due: "2021-04-02", user: "Wile E. Coyote", total: "$15,300.00", payable: "$15,300.00", src: samplePDF  },
    { id: 3, number: "CCINV000003", status: "Paid", date: "2021-03-17", due: "2021-04-03", user: "Wile E. Coyote", total: "$15,400.00", payable: "$0.00", src: samplePDF  },
    { id: 4, number: "CCINV000004", status: "Partial", date: "2021-03-18", due: "2021-04-04", user: "Wile E. Coyote", total: "$15,500.00", payable: "$7,640.00", src: samplePDF  },
    { id: 5, number: "CCINV000005", status: "Paid", date: "2021-03-17", due: "2021-04-05", user: "Wile E. Coyote", total: "$15,600.00", payable: "$0.00", src: samplePDF  },
    { id: 6, number: "CCINV000006", status: "Overdue", date: "2021-03-18", due: "2021-04-06", user: "Wile E. Coyote", total: "$15,700.00", payable: "$9,700.00", src: samplePDF  },
    { id: 7, number: "CCINV000007", status: "Partial", date: "2021-03-17", due: "2021-04-07", user: "Wile E. Coyote", total: "$15,800.00", payable: "$800.00", src: samplePDF  },
    { id: 8, number: "CCINV000008", status: "Overdue", date: "2021-03-18", due: "2021-04-08", user: "Wile E. Coyote", total: "$15,900.00", payable: "$7,900.00", src: samplePDF  },
    { id: 9, number: "CCINV000009", status: "Paid", date: "2021-03-17", due: "2021-04-09", user: "Wile E. Coyote", total: "$16,000.00", payable: "$0.00", src: samplePDF  },
    { id: 10, number: "CCINV000010", status: "Overdue", date: "2021-03-18", due: "2021-04-10", user: "Wile E. Coyote", total: "$16,100.00", payable: "$12,100.00", src: samplePDF  },
]

function Invoices() {

    return (
        <div className="mb-20">
            <div className="px-8">
                <Calendar />
            </div>
            <table className="w-full bg-transparent border-lavender">
                <thead>
                    <tr className="text-oxford-blue border-b border-slate-300">
                        <th></th>
                        {titles.map(title => (
                            <th key={title.id} className="py-2">
                                {title.name === "Number:" &&
                                    <div className="flex flex-row items-center">
                                        <div>{title.name}</div>
                                        <div className="flex flex-col ml-2.5">
                                            <CaretUp size={10} />
                                            <CaretDown size={10} />
                                        </div>
                                    </div>
                                }
                                {title.name !== "Number:" &&
                                    <div className="flex flex-row items-center">
                                        <div>{title.name}</div>
                                    </div>
                                }
                            </th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id} className="border-b border-slate-300 text-sm">
                            <td className="w-12">
                                <div className="px-4">
                                    <Star size={18} />
                                </div>
                            </td>
                            <td className="py-2 font-medium">{item.number}</td>
                            <td className="py-2 font-medium">
                                {item.status === "Paid" &&
                                    <span className="text-sm text-green-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-green-600 mr-1.5 ml-0.5"/>
                                        Paid
                                    </span>
                                }
                                {item.status === "Partial" &&
                                    <span className="text-sm text-yellow-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-yellow-600 mr-1.5 ml-0.5"/>
                                        Partial
                                    </span>
                                }
                                {item.status === "Overdue" &&
                                    <span className="text-sm text-red-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-red-600 mr-1.5 ml-0.5"/>
                                        Overdue
                                    </span>
                                }
                            </td>
                            <td className="py-6 font-medium">{item.user}</td>
                            <td className="py-6 font-medium">{item.total}</td>
                            <td className="py-6 font-medium">{item.date}</td>
                            <td className="py-6 font-medium">{item.due}</td>
                            <td className="py-6 font-medium">{item.payable}</td>
                            <td className="w-12">
                                <Link to={item.src} target="_blank">
                                    <Eye size={18} />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Invoices;