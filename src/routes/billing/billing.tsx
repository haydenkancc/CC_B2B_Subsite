import React, { useState, useEffect } from "react";
import NavbarTopAccount from '../../components/navbar/navbar-top-account.tsx';
import NavbarBottom from "../../components/navbar/navbar-bottom";
import './billing.css'
import PortalHeading from '../../components/portal-page/portal-heading.tsx';
import PortalBody from '../../components/portal-page/portal-body.tsx';
import PageWrap from '../../components/portal-page/page-wrap.tsx';
import PageTabs from '../../components/portal-page/page-tabs.tsx';
import Overview from "./overview.tsx";
import Contacts from './contacts/contacts.tsx';
import Invoices from "./invoices.tsx";

const tabs = [
    { id: 1, title: 'Overview', content: <Overview /> },
    { id: 2, title: 'Contacts', content: <Contacts /> },
    { id: 3, title: 'Invoices', content: <Invoices /> },
]

const pages = ['Dashboard', 'Orders', 'Billing', 'Standards', 'Tickets', 'Account']


function Account() {
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

export default Account;