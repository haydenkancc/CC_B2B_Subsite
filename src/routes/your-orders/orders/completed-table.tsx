import samplePDF from "../../../assets/sample-pdf.pdf";
import OrdersTable from './orders-table';

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