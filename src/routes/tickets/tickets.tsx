import NavbarTopAccount from '../../components/navbar/navbar-top-account.tsx';
import NavbarBottom from "../../components/navbar/navbar-bottom";
import PortalHeading from '../../components/portal-page/portal-heading.tsx';
import PortalBody from '../../components/portal-page/portal-body.tsx';
import PageWrap from '../../components/portal-page/page-wrap.tsx';
import PageTabs from '../../components/portal-page/page-tabs.tsx';
import Terms from '../billing/terms/terms.tsx';
import Wallet from '../billing/wallet/wallet.tsx';
import TicketTable from './ticket-table.tsx';

const tabs = [
    { id: 1, title: 'Wallet', content: <Wallet /> },
    { id: 2, title: 'Terms', content: <Terms /> },
    { id: 3, title: 'Tickets', content: <TicketTable /> },
]

const pages = ['Dashboard', 'Orders', 'Billing', 'Saved Lists', 'Tickets', 'Account']

function Tickets() {
    return (
        <PortalBody>
            <NavbarTopAccount/>
            <NavbarBottom pages={pages} />
            <PageWrap>
                <PortalHeading heading="Tickets" subheading="View and modify your tickets" />
                <PageTabs tabs={tabs} />
            </PageWrap>
        </PortalBody>
    )
}

export default Tickets;