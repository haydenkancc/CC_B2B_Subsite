import { Heading } from 'react-aria-components';
import MyTextField from '../../../components/form/my-text-field.tsx';
import MyPaymentMethodForm from '../../../components/form/my-payment-method-form.tsx';

function PaymentMethodModal() {
    return (
        <MyPaymentMethodForm>
            <Heading slot="title" className="col-span-2 justify-left text-3xl pt-8 pb-8">Add a Credit or Debit Card</Heading>
            <div className="flex flex-col gap-y-2.5">
                <MyTextField label="Card Number" />
                <div className="flex flex-row gap-x-2.5">
                    <MyTextField label="Expiry Date" />
                    <MyTextField label="Security Code" />
                </div>
                <MyTextField label="Name on Card" />
            </div>
        </MyPaymentMethodForm>
    )
}

export default PaymentMethodModal;