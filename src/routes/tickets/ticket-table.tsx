import { Star, CaretUp, CaretDown, Funnel, Eye, X, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { SearchField, Input } from 'react-aria-components';
import samplePDF from "../../assets/sample-pdf.pdf";
import { Link } from 'react-router-dom';
import { DialogTrigger, Button } from 'react-aria-components';
import PaymentMethodModal from '../billing/wallet/payment-method-modal';
import Calendar from '../../components/calendar/calendar';

const titles = [
    { id: 1, name: "Number:" },
    { id: 2, name: "Modified:" },
    { id: 3, name: "Status:" },
    { id: 4, name: "Subject:" },
    { id: 5, name: "Department:" },
]

const items = [
    { id: 1, number: "172934", status: "Open", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF  },
    { id: 2, number: "172933", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF },
    { id: 3, number: "172141", status: "Open", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF  },
    { id: 4, number: "123435", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF  },
    { id: 5, number: "172321", status: "Open", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF  },
    { id: 6, number: "128372", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF },
    { id: 7, number: "128353", status: "Closed", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF  },
    { id: 8, number: "128332", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF },
    { id: 9, number: "128356", status: "Open", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF  },
    { id: 10, number: "1285423", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support", src: samplePDF },
]

function TicketTable() {

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
                            <th key={title.id} className="px-4 py-2">
                                <div className="flex flex-row items-center">
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
                                </div>
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
                            <td className="px-4 py-2 font-medium">{item.number}</td>
                            <td className="px-4 py-6 font-medium">{item.date}</td>
                            <td className="py-2 font-medium">
                                {item.status === "Open" &&
                                    <span className="text-sm text-green-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-green-600 mr-1.5 ml-0.5"/>
                                        Open
                                    </span>
                                }
                                {item.status === "Closed" &&
                                    <span className="text-sm text-red-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-red-600 mr-1.5 ml-0.5"/>
                                        Closed
                                    </span>
                                }
                            </td>
                            <td className="px-4 py-6 font-medium">{item.subject}</td>
                            <td className="px-4 py-6 font-medium">{item.department}</td>
                            <td className="w-12">
                                <Link to={item.src} target="_blank">
                                    <Eye size={18} />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex flex-row justify-between items-center px-8">
                <DialogTrigger>
                    <Button className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold py-1.5 px-4 mt-4">
                        Open New Ticket
                    </Button>
                    <PaymentMethodModal />
                </DialogTrigger>
                <div className="flex flex-row">
                    <DialogTrigger>
                        <Button className="text-center text-sm font-semibold py-1.5 px-2 mt-4">
                            <CaretLeft />
                        </Button>
                    </DialogTrigger>
                    <DialogTrigger>
                        <Button className="text-center text-sm font-semibold py-1.5 px-2 mt-4">
                            <CaretRight />
                        </Button>
                    </DialogTrigger>
                </div>
            </div>
        </div>
    )
}

export default TicketTable;