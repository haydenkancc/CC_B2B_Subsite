import TicketTable from "./ticket-table";

const items = [
    { id: 1, number: "172933", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support" },
    { id: 2, number: "123435", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support"  },
    { id: 3, number: "128372", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support" },
    { id: 4, number: "128353", status: "Closed", date: "2021-03-17", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support"  },
    { id: 5, number: "128332", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support" },
    { id: 6, number: "1285423", status: "Closed", date: "2021-03-18", user: "Wile E. Coyote", subject: "TESTING", department: "Customer Support" },
]

function ClosedTable() {
    return (
        <div className="">
            <TicketTable items={items} />
        </div>
    )
}

export default ClosedTable;