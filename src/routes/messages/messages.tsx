import NavbarTopAccount from "../../components/navbar/navbar-top-account.tsx";
import NavbarBottom from "../../components/navbar/navbar-bottom.tsx";
import '../billing/billing.css'
import PortalHeading from "../../components/portal-page/portal-heading.tsx";
import PortalBody from "../../components/portal-page/portal-body.tsx";
import PageWrap from "../../components/portal-page/page-wrap.tsx";
import PageTabs from "../../components/portal-page/page-tabs.tsx";
import MessageTable from "./message-table.tsx";

const tabs = [
    { id: 1, title: 'All', content: <MessageTable/> },
    { id: 2, title: 'Sent', content: <MessageTable/> },
    { id: 3, title: 'Promotions', content: <MessageTable/> },
    { id: 4, title: 'System', content: <MessageTable/> },
]

const pages = ['Dashboard', 'Orders', 'Billing', 'Saved Lists', 'Tickets', 'Account']

function Messages() {
    return (
        <PortalBody>
            <NavbarTopAccount/>
            <NavbarBottom pages={pages} />
            <PageWrap>
                <PortalHeading heading="Message Center" subheading="View and send messages" />
                <PageTabs tabs={tabs} />
            </PageWrap>
        </PortalBody>
    )
}

export default Messages;