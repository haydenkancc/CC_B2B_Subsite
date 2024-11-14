import MessageTable from "./message-table";

const items = [
    { id: 1, message: "Your order of ADIAW9000 has been placed.", name: "Canada Computers & Electronics", time: "8 Hours Ago", type: "System" },
    { id: 2, message: "Jerry is requesting the purchase of JWIDA9000.", name: "Canada Computers & Electronics", time: "9 Hours Ago", type: "System" },
    { id: 3, message: "Your order of ADIAW9000 has been placed.", name: "Canada Computers & Electronics", time: "11 Hours Ago", type: "System" },
    { id: 4, message: "Jerry is requesting the purchase of JWIDA9000.", name: "Canada Computers & Electronics", time: "12 Hours Ago", type: "System" },
    { id: 5, message: "Ash Ketchup has replied to your ticket \"My SUPERPC9000 never arrived, can I have some assistance?\"", name: "Canada Computers & Electronics", time: "12 Hours Ago", type: "System" },
];

function SystemTable() {
    return (
        <div className="">
            <MessageTable items={items} />
        </div>
    )
}

export default SystemTable;