import { Heading } from 'react-aria-components';
import MyTextField from '../../../components/form/my-text-field.tsx';
import MyCreditForm from '../../../components/form/my-credit-form.tsx';

function CreditModal() {
    return (
        <MyCreditForm>
            <Heading slot="title" className="col-span-2 justify-left text-3xl pt-8 pb-8">Credit Adjustment</Heading>
            <div className="flex flex-col gap-y-2.5">
                <MyTextField label="Reason for Adjustment" />
                <MyTextField label="Specify Desired Credit" />
                <div className="mt-2.5">Your request will be submitted for review upon confirmation.</div>
                <div>You may be contacted for further information.</div>
            </div>
        </MyCreditForm>
    )
}

export default CreditModal;