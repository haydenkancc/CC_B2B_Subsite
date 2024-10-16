// import MyTable from './my-table.tsx';

// const pages = ['Dashboard', 'Orders', 'Billing', 'Saved Lists', 'Tickets', 'Account']

// const items = [
//     { id: 1, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
//     { id: 2, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
//     { id: 3, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
//     { id: 4, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
//     { id: 5, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
//     { id: 6, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
//     { id: 7, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
//     { id: 8, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
//     { id: 9, order_no: "CC47563024", po_no: "123456", purchaser: "Bugs Bunny", ship_to: "Jason Bourne", date: "13/13/2022", total: "$13.4756", status: "In Progress" },
// ];

// function Orders() {
//     return (
//         <div>
//         <NavbarTopAccount />
//         <NavbarBottom pages={pages} />
//         <MyTable items={items}/>
//         </div>
//     )
// }

// export default Orders;

import NavbarTopAccount from "../../../components/navbar/navbar-top-account.tsx";
import NavbarBottom from "../../../components/navbar/navbar-bottom.tsx";
import '../../billing/billing.css'
import PortalHeading from "../../../components/portal-page/portal-heading.tsx";
import PortalBody from "../../../components/portal-page/portal-body.tsx";
import PageWrap from "../../../components/portal-page/page-wrap.tsx";
import PageTabs from "../../../components/portal-page/page-tabs.tsx";
import OrdersTable from "./orders-table.tsx";

const tabs = [
    { id: 1, title: 'Orders', content: <OrdersTable /> },
]

const pages = ['Dashboard', 'Orders', 'Billing', 'Saved Lists', 'Tickets', 'Account']

function Orders() {
    return (
        <PortalBody>
            <NavbarTopAccount/>
            <NavbarBottom pages={pages} />
            <PageWrap>
                <PortalHeading heading="Orders" subheading="View and modify your orders" />
                <PageTabs tabs={tabs} />
            </PageWrap>
        </PortalBody>
    )
}

export default Orders;