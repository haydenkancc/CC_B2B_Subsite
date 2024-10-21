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
    { id: 1, number: "CCORD000002", status: "Cancelled", date: "2021-03-18", user: "Wile E. Coyote", total: "$15,300.00", track: "CCTRK000002", src: samplePDF  },
    { id: 2, number: "CCORD000006", status: "Cancelled", date: "2021-03-18", user: "Wile E. Coyote", total: "$15,700.00", track:"CCTRK000006", src: samplePDF  },
    { id: 3, number: "CCORD000008", status: "Cancelled", date: "2021-03-18", user: "Wile E. Coyote", total: "$15,900.00", track: "CCTRK000008", src: samplePDF  },
    { id: 4, number: "CCORD000010", status: "Cancelled", date: "2021-03-18", user: "Wile E. Coyote", total: "$16,100.00", track: "CCTRK000010", src: samplePDF  },
]

function CancelledTable() {
    return (
        <div className="mb-20">
            <OrdersTable items={items} />
        </div>
    )
}

export default CancelledTable;