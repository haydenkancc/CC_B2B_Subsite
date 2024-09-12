import MyTableHeader from '../../../components/table/my-table-header.tsx';
import MyColumn from '../../../components/table/my-column.tsx';
import {Button, Cell, Table, TableBody} from 'react-aria-components';
import MyRow from '../../../components/table/my-row.tsx';
import {Envelope, PencilSimple, Phone, Trash, UserCircle} from '@phosphor-icons/react';
import AnonymousProfile from '../../../assets/anonymous-profile.jpg';

function MyTable({items}) {
    return (
        <Table className="w-full border-separate border-spacing-0" aria-label="Files" selectionMode="multiple">
            <MyTableHeader>
                <MyColumn width={16} minWidth={0}/>
                <MyColumn isRowHeader>Location</MyColumn>
                <MyColumn>Address</MyColumn>
                <MyColumn></MyColumn>
                <MyColumn></MyColumn>
                <MyColumn></MyColumn>
            </MyTableHeader>
            <TableBody items={items}>
                {item => (
                    <MyRow onAction={() => (<div>hello!</div>)}>
                        <Cell className="pl-4"/>
                        <Cell>
                            <div className="flex gap-4 pt-4 pb-4">
                                <span className="flex flex-col">
                                    <span className="text-lg">{item.location}</span>
                                    <span className="text-sm text-oxford-blue/75">{item.first} {item.last}</span>
                                </span>
                            </div>
                        </Cell>
                        <Cell>
                            <div className="flex flex-col gap-2 text-sm text-oxford-blue/75">
                                <span className="flex items-center gap-2">{item.address1} {item.address2}</span>
                                <span className="flex items-center gap-2">{item.city} {item.province}, {item.postal}</span>
                            </div>
                        </Cell>
                        <Cell>
                            <div className="flex text-sm">
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
                            </div>
                        </Cell>
                        <Cell>
                            <div className="flex text-sm">
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
                        </Cell>
                        <Cell>
                            <div className="flex gap-4 items-center">
                                <Button><PencilSimple size={20} /></Button>
                                <Button><Trash size={20} /></Button>
                            </div>
                        </Cell>
                    </MyRow>

                )}
            </TableBody>
        </Table>
    )
}

export default MyTable;