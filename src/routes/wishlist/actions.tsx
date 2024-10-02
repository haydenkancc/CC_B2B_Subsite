import React, { useState } from 'react';
import { X } from '@phosphor-icons/react';

const Actions = () => {
    const [selectedAction, setSelectedAction] = useState('cart');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [note, setNote] = useState('');

    const handleActionChange = (event) => {
        const action = event.target.value;
        setSelectedAction(action);

        if (action === 'cart') {
            setIsModalOpen(false);
        }
        if (action === 'note') {
            setIsModalOpen(true);
        }
        if (action === 'promo') {
            setIsModalOpen(false);
        }
        if (action === 'remove') {
            setIsModalOpen(false);
        }
    };

    const handleApplyClick = () => {
        switch (selectedAction) {
            case 'cart':
                addToCart();
                break;
            case 'note':
                break;
            case 'promo':
                notifyOnPromotion();
                break;
            case 'remove':
                removeItem();
                break;
            default:
                break;
        }
    };

    const addToCart = () => {
        console.log("Adding to cart...");
    };

    const notifyOnPromotion = () => {
        console.log("Setting up notification for promotion...");
    };

    const removeItem = () => {
        console.log("Removing item...");
    };

    return (
        <div>
            <select
                className="bg-transparent text-oxford-blue font-semibold uppercase ml-6 border-b border-oxford-blue pr-7 focus:outline-none"
                value={selectedAction}
                onChange={handleActionChange}
            >
                <option className="font-semibold" value="cart">Add to cart</option>
                {/* <option className="font-semibold" value="note">Add note</option> */}
                <option className="font-semibold" value="promo">Notify when on promotion</option>
                <option className="font-semibold" value="remove">Remove item</option>
            </select>
            <button
                className="uppercase border-2 border-oxford-blue px-5 py-1 ml-6 rounded-sm font-semibold"
                onClick={handleApplyClick}
                // onClick={() => setIsModalOpen(false)}
            >
                Apply
            </button>

            {isModalOpen && (
                <div className="modal absolute mt-2 w-80">
                    <div className="absolute top-2 right-2 cursor-pointer" onClick={() => setIsModalOpen(false)}>
                        <X />
                    </div>
                    <div className="modal-content flex flex-col ml-6">
                        <textarea
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Add a note..."
                            className="p-2 focus:outline-none"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Actions;
