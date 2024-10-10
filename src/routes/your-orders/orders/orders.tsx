import MyTable from './my-table.tsx';
import NavbarTopAccount from '../../../components/navbar/navbar-top-account.tsx';
import NavbarBottom from '../../../components/navbar/navbar-bottom.tsx';

const pages = ['Dashboard', 'Orders', 'Billing', 'Saved Lists', 'Tickets', 'Account']

const items = [
    { id: 1, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
    { id: 2, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
    { id: 3, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
    { id: 4, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
    { id: 5, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
    { id: 6, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
    { id: 7, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
    { id: 8, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
    { id: 9, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
];

function Orders() {
    return (
        <div>
        <NavbarTopAccount />
        <NavbarBottom pages={pages} />
        <MyTable items={items}/>
        </div>
    )
}

export default Orders;