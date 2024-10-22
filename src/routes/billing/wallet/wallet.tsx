import PaymentMethods from "./payment-methods";
import BillingContacts from "../../account/contacts/billing-contacts";
import Invoices from "../terms/invoices";

function Wallet() {

    return (
        <div>
            <PaymentMethods />
            <BillingContacts />
            <Invoices />
        </div>
    )
}

export default Wallet;