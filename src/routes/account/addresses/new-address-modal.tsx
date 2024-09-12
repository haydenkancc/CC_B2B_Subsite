import './new-address-modal.css';
import {Heading, Text} from 'react-aria-components';
import MyTextField from '../../../components/form/my-text-field.tsx';
import MySelect from '../../../components/form/my-select.tsx';
import MySelectItem from '../../../components/form/my-select-item.tsx';
import MyCheckbox from '../../../components/form/my-checkbox.tsx';
import MyDialogForm from '../../../components/form/my-dialog-form.tsx';

function NewAddressModal() {
    return (
        <MyDialogForm>
            <Heading slot="title" className="col-span-2 flex justify-left text-3xl pt-8 pb-8">Add New Address</Heading>
            <MyTextField label="First Name" />
            <MyTextField label="Last Name" />
            <MyTextField className="col-span-2" label="Address Line 1" />
            <MyTextField className="col-span-2" label="Address Line 2" />
            <MyTextField className="col-span-2" label="City" />
            <MyTextField label="Province" />
            <MyTextField label="Postal Code" />

            <div className="flex flex-col pt-2">
                <MyCheckbox>
                    Set as billing address
                </MyCheckbox>
                <MyCheckbox>
                    Set as shipping address
                </MyCheckbox>
            </div>
        </MyDialogForm>
    )
}

export default NewAddressModal;