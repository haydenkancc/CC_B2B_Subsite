import {Button, ListBox, ListBoxItem} from 'react-aria-components';
import {Envelope, MapPin, PencilSimple, Phone, Trash, UserCircle} from '@phosphor-icons/react';
import AnonymousProfile from '../../../assets/anonymous-profile.jpg';

function MyGrid({ items }) {
    return (
        <ListBox items={items} className="grid grid-cols-3 gap-4">
            {item => (
                <ListBoxItem className="w-full pt-6 pb-4 pl-4 pr-4 bg-ghost-white rounded-sm flex border">
                    <div className="grow flex flex-col">
                        <div className="flex ">
                            <div className="text-lg">
                                {item.location}
                            </div>
                        </div>
                        <div className="pt-2 pb-6 text-oxford-blue/75 flex flex-col gap-1 text-sm">
                            <div>
                                {item.first} {item.last}
                            </div>
                            <div>
                                {item.address1} {item.address2}
                            </div>
                            <div>
                                {item.city} {item.province}
                            </div>
                            <div>
                                {item.postal}
                            </div>

                        </div>
                        <div className="flex gap-4 text-sm">
                            {item.shipping ?
                                (<div className="flex pl-2 pr-2 pt-1 pb-1 bg-amber-200 text-amber-800 rounded-sm">
                                    Default Shipping Address
                                </div>)
                                :
                                (
                                    <Button className="flex pl-2 pr-2 pt-1 pb-1 bg-lavender text-oxford-blue rounded-sm shadow-md">
                                        Set as Shipping Address
                                    </Button>
                                )
                            }
                            {item.billing ?
                                (<div className="flex pl-2 pr-2 pt-1 pb-1 bg-blue-200 text-blue-800 rounded-sm">
                                    Default Billing Address
                                </div>)
                                :
                                (
                                    <Button className="flex pl-2 pr-2 pt-1 pb-1 bg-lavender text-oxford-blue rounded-sm shadow-md">
                                        Set as Billing Address
                                    </Button>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-4 text-oxford-blue/50">
                        <Button className="flex items-center gap-2">
                            <PencilSimple size={20} />
                        </Button>
                        <Button className="flex items-center gap-2">
                            <Trash size={20} />
                        </Button>
                    </div>
                </ListBoxItem>
            )}
        </ListBox>
    )
}

export default MyGrid;