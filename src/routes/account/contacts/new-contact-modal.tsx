import {Button, Dialog, Heading, Input, Label, Modal, ModalOverlay, TextField} from 'react-aria-components';
import MyTextField from '../../../components/form/my-text-field.tsx';
import './new-contact-modal.css';
import MyDialogForm from '../../../components/form/my-dialog-form.tsx';

function NewContactModal() {
    return (
        <MyDialogForm>
            <Heading slot="title" className="col-span-2 flex justify-left text-3xl pt-8 pb-8">Add New Contact</Heading>
            <MyTextField label="Name" />
            <MyTextField className="" label="Role" />
            <MyTextField label="Phone" />
            <MyTextField label="Email" />
            <MyTextField className="col-span-2" label="Address Line 1" />
            <MyTextField className="col-span-2" label="Address Line 2" />
            <MyTextField label="City" />
            <MyTextField label="Province" />
        </MyDialogForm>
    )
}

export default NewContactModal;