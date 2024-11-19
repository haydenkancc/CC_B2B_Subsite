import {Heading} from 'react-aria-components';
import MyTextField from '../../../components/form/my-text-field.tsx';
import MyDialogForm from '../../../components/form/my-dialog-form.tsx';

function NewCreditCardModal() {
    return (
        <MyDialogForm>
            <Heading slot="title" className="col-span-2 flex justify-left text-3xl pt-8 pb-8">Add Credit Card</Heading>
            <MyTextField className="col-span-2" label="Card Number" />
            <MyTextField className="col-span-2" label="Cardholder Name" />
            <MyTextField className="col-span-2" label="Expiry Date" />
        </MyDialogForm>
    )
}

export default NewCreditCardModal;