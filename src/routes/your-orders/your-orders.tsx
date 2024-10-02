import PortalBody from '../../components/portal-page/portal-body.tsx';
import NavbarTop from '../../components/navbar/navbar-top.tsx';
import NavbarBottom from '../../components/navbar/navbar-bottom.tsx';
import PortalHeading from '../../components/portal-page/portal-heading.tsx';
import PageWrap from '../../components/portal-page/page-wrap.tsx';
import PageTabs from '../../components/portal-page/page-tabs.tsx';
import Orders from './orders/orders.tsx';

const pages = ['Dashboard', 'Orders', 'Billing', 'Wishlists', 'Tickets', 'Account']

const tabs = [
    { id: 1, title: 'Quotes', content: <></> },
    { id: 2, title: 'Orders', content: <Orders /> },
    { id: 3, title: 'Requests', content: <></> },
]

function YourOrders() {
    return (
        <PortalBody>
            <NavbarTop />
            <NavbarBottom pages={pages} />
            <PageWrap>
                <PortalHeading heading="Your Orders" subheading="View and manage your previous orders" />
                <PageTabs tabs={tabs} />
            </PageWrap>
        </PortalBody>
    )
}

export default YourOrders;