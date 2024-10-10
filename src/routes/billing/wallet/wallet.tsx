import PaymentMethods from "./payment-methods";
import BillingContacts from "../../account/contacts/billing-contacts";

function Wallet() {

    return (
        <div>
            <PaymentMethods />
            <BillingContacts />
        </div>
    )
}

export default Wallet;