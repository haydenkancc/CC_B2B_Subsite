import { Star, CaretUp, CaretDown } from '@phosphor-icons/react';
import samplePDF from "../../../assets/sample-pdf.pdf";
import { Link } from 'react-router-dom';
import Calendar from '../../../components/calendar/calendar';
import OrdersTable from './orders-table';

const titles = [
    { id: 1, name: "Number:" },
    { id: 2, name: "Status:" },
    { id: 3, name: "User:" },
    { id: 4, name: "Total:" },
    { id: 5, name: "Ordered:" },
    { id: 7, name: "Tracking:" },
]

const items = [
    { id: 1, number: "CCORD000004", status: "Pending", date: "2021-03-18", user: "Wile E. Coyote", total: "$15,500.00", track: "CCTRK000004", src: samplePDF  },
    { id: 2, number: "CCORD000007", status: "Pending", date: "2021-03-17", user: "Wile E. Coyote", total: "$15,800.00", track: "CCTRK000007", src: samplePDF  },
]

function PendingTable() {
    return (
        <div className="mb-20">
            <OrdersTable items={items} />
        </div>
    )
}

export default PendingTable;