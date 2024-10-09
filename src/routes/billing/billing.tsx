import NavbarTopAccount from '../../components/navbar/navbar-top-account.tsx';
import NavbarBottom from "../../components/navbar/navbar-bottom";
import './billing.css'
import PortalHeading from '../../components/portal-page/portal-heading.tsx';
import PortalBody from '../../components/portal-page/portal-body.tsx';
import PageWrap from '../../components/portal-page/page-wrap.tsx';
import PageTabs from '../../components/portal-page/page-tabs.tsx';
import Terms from "./terms/terms.tsx";
import Wallet from './wallet/wallet.tsx';

const tabs = [
    { id: 1, title: 'Wallet', content: <Wallet /> },
    { id: 2, title: 'Terms', content: <Terms /> },
]

const pages = ['Dashboard', 'Orders', 'Billing', 'Saved Lists', 'Tickets', 'Account']

function Billing() {
    return (
        <PortalBody>
            <NavbarTopAccount/>
            <NavbarBottom pages={pages} />
            <PageWrap>
                <PortalHeading heading="Billing" subheading="View and modify your billing information" />
                <PageTabs tabs={tabs} />
            </PageWrap>
        </PortalBody>
    )
}

export default Billing;