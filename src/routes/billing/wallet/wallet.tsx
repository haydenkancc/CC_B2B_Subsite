import PaymentMethods from "./payment-methods";
import BillingContacts from "../../account/contacts/billing-contacts";

function Wallet() {

    return (
        <div className="pb-32">
            <div className="pb-12">
                <PaymentMethods />
                <BillingContacts />
            </div>
        </div>
    )
}

export default Wallet;