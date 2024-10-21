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
    { id: 1, number: "CCORD000001", status: "Completed", date: "2021-03-17", user: "Wile E. Coyote", total: "$15,200.00", track: "CCTRK000001", src: samplePDF  },
    { id: 2, number: "CCORD000003", status: "Completed", date: "2021-03-17", user: "Wile E. Coyote", total: "$15,400.00", track: "CCTRK000003", src: samplePDF  },
    { id: 3, number: "CCORD000005", status: "Completed", date: "2021-03-17", user: "Wile E. Coyote", total: "$15,600.00", track: "CCTRK000005", src: samplePDF  },
    { id: 4, number: "CCORD000009", status: "Completed", date: "2021-03-17", user: "Wile E. Coyote", total: "$16,000.00", track: "CCTRK000009", src: samplePDF  },
]

function CompletedTable() {
    return (
        <div className="mb-20">
            <OrdersTable items={items} />
        </div>
    )
}

export default CompletedTable;