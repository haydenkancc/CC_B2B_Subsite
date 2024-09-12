import {Button, ListBox, ListBoxItem} from 'react-aria-components';
import {Envelope, MapPin, PencilSimple, Phone, Trash, UserCircle} from '@phosphor-icons/react';
import AnonymousProfile from '../../../assets/anonymous-profile.jpg';

function MyGrid({ items }) {
    return (
        <ListBox items={items} className="grid grid-cols-3 gap-4">
            {item => (
                <ListBoxItem className="w-full pt-6 pb-4 pl-4 pr-4 bg-ghost-white rounded-sm flex border">
                    <div className="grow flex flex-col">
                        <div className="flex gap-4">
                            <img src={AnonymousProfile} className="h-12 w-12 rounded-full"/>
                            <div>
                                <div className="text-lg">
                                    {item.first} {item.last}
                                </div>
                                <div className="text-sm text-oxford-blue/75">
                                    {item.role}
                                </div>
                            </div>
                        </div>
                        <div className="pt-4 pb-4 text-oxford-blue/75 flex flex-col gap-1 text-sm">
                            <div className="flex items-center gap-2">
                                <Phone weight="bold"/>
                                {item.phone}
                            </div>
                            <div className="flex items-center gap-2">
                                <Envelope weight="bold"/>
                                {item.email}
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin weight="bold"/>
                                {item.address}
                            </div>

                        </div>
                        <div className="flex gap-4 text-sm">
                            {item.primary &&
                                <div className="flex pl-2 pr-2 pt-1 pb-1 bg-amber-200 text-amber-800 rounded-sm">
                                    Primary Contact
                                </div>
                            }
                            {item.billing &&
                                <div className="flex pl-2 pr-2 pt-1 pb-1 bg-blue-200 text-blue-800 rounded-sm">
                                    Billing Contact
                                </div>
                            }
                            {item.web ?
                                (<div className="flex pl-2 pr-2 pt-1 pb-1 bg-green-200 text-green-800 rounded-sm">
                                    {item.web}
                                </div>)
                                :
                                (<div className="flex pl-2 pr-2 pt-1 pb-1 bg-red-200 text-red-800 rounded-sm">
                                    Not Web-Enabled
                                </div>)
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