import React, { useState } from 'react';
import { X } from '@phosphor-icons/react';
import { Button, DialogTrigger } from 'react-aria-components';

const Actions = () => {
    return (
        <div className="flex flex-row items-center">
            <select
                className="bg-transparent text-oxford-blue font-semibold ml-6 border-b border-oxford-blue pr-7 focus:outline-none"
            >
                <option className="font-semibold" value="cart">Add to Cart</option>
                <option className="font-semibold" value="promo">Notify when on Promotion</option>
                <option className="font-semibold" value="remove">Remove Item</option>
            </select>
            <DialogTrigger>
                <Button className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold py-1.5 px-4 ml-4">
                    Apply
                </Button>
            </DialogTrigger>
        </div>
    );
};

export default Actions;
