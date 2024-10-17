import { Star, CaretUp, CaretDown } from '@phosphor-icons/react';
import samplePDF from "../../../assets/sample-pdf.pdf";
import { Link } from 'react-router-dom';
import Calendar from '../../../components/calendar/calendar';

const titles = [
    { id: 1, name: "Number:" },
    { id: 2, name: "Status:" },
    { id: 3, name: "User:" },
    { id: 4, name: "Total:" },
    { id: 5, name: "Ordered:" },
    { id: 7, name: "Tracking:" },
]

const items = [
    { id: 1, number: "CCORD000001", status: "Completed", date: "2021-03-17", user: "Wile E. Coyote", total: "$15,200.00", track: "CCTRK000001", src: samplePDF  },
    { id: 2, number: "CCORD000002", status: "Cancelled", date: "2021-03-18", user: "Wile E. Coyote", total: "$15,300.00", track: "CCTRK000002", src: samplePDF  },
    { id: 3, number: "CCORD000003", status: "Completed", date: "2021-03-17", user: "Wile E. Coyote", total: "$15,400.00", track: "CCTRK000003", src: samplePDF  },
    { id: 4, number: "CCORD000004", status: "Pending", date: "2021-03-18", user: "Wile E. Coyote", total: "$15,500.00", track: "CCTRK000004", src: samplePDF  },
    { id: 5, number: "CCORD000005", status: "Completed", date: "2021-03-17", user: "Wile E. Coyote", total: "$15,600.00", track: "CCTRK000005", src: samplePDF  },
    { id: 6, number: "CCORD000006", status: "Cancelled", date: "2021-03-18", user: "Wile E. Coyote", total: "$15,700.00", track:"CCTRK000006", src: samplePDF  },
    { id: 7, number: "CCORD000007", status: "Pending", date: "2021-03-17", user: "Wile E. Coyote", total: "$15,800.00", track: "CCTRK000007", src: samplePDF  },
    { id: 8, number: "CCORD000008", status: "Cancelled", date: "2021-03-18", user: "Wile E. Coyote", total: "$15,900.00", track: "CCTRK000008", src: samplePDF  },
    { id: 9, number: "CCORD000009", status: "Completed", date: "2021-03-17", user: "Wile E. Coyote", total: "$16,000.00", track: "CCTRK000009", src: samplePDF  },
    { id: 10, number: "CCORD000010", status: "Cancelled", date: "2021-03-18", user: "Wile E. Coyote", total: "$16,100.00", track: "CCTRK000010", src: samplePDF  },
]

function OrdersTable() {
    return (
        <div className="">
            <Calendar />
            <table className="w-full bg-transparent border-lavender">
                <thead>
                    <tr className="text-oxford-blue border-b border-black">
                        <th></th>
                        {titles.map(title => (
                            <th key={title.id} className="py-2">
                                <div className="flex flex-row items-center">
                                    <div>{title.name}</div>
                                    <div className="flex flex-col ml-2.5">
                                        <CaretUp size={10} />
                                        <CaretDown size={10} />
                                    </div>
                                </div>
                            </th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id} className="border-b border-black text-sm">
                            <td className="w-12">
                                <div className="px-4">
                                    <Star size={18} />
                                </div>
                            </td>
                            <td className="py-2 font-medium">{item.number}</td>
                            <td className="py-2 font-medium">
                                {item.status === "Completed" &&
                                    <div className="inline-flex pl-2 pr-2 pt-1 pb-1 bg-green-200 text-black rounded-sm">
                                        Completed
                                    </div>
                                }
                                {item.status === "Pending" &&
                                    <div className="inline-flex pl-2 pr-2 pt-1 pb-1 bg-yellow-200 text-black rounded-sm">
                                        Pending
                                    </div>
                                }
                                {item.status === "Cancelled" &&
                                    <div className="inline-flex pl-2 pr-2 pt-1 pb-1 bg-red-200 text-black rounded-sm">
                                        Cancelled
                                    </div>
                                }
                            </td>
                            <td className="py-6 font-medium">{item.user}</td>
                            <td className="py-6 font-medium">{item.total}</td>
                            <td className="py-6 font-medium">{item.date}</td>
                            <td className="py-6 font-medium">{item.track}</td>
                            <td className="flex flex-row py-6 font-medium hover:absolute">
                                <Link to={item.src} target="_blank" className="hover:border-b-2 hover:border-oxford-blue hover:border-rounded">
                                    View
                                </Link>
                                <div className="px-1">|</div>
                                <Link to={"/cart"} target="_blank" className="hover:border-b-2 hover:border-oxford-blue hover:border-rounded">Re-Order</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrdersTable;