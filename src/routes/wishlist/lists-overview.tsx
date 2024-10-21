import { CaretRight, Users } from "@phosphor-icons/react";
import { Button, DialogTrigger } from "react-aria-components";
import ListModal from "./list-modal";

const sets = [
    { name: "New Hire List" },
    { name: "Office List" },
]

const lists = [
    { name: "Wile's List 1" },
    { name: "Wile's List 2" },
]

const collaborative = [
    { name: "Company List" },
]

function ListsOverview () {
    return (
        <div className="flex flex-row border rounded-sm p-4 ">
            <div className="flex flex-col grow">
                <div className="font-semibold">Sets</div>
                {sets.map(item => (
                    <div key={item.name} className="flex flex-row items-center">
                        <button className="text-left">{item.name}</button>
                    </div>
                ))}
            </div>
            <div className="flex flex-col grow">
                <div className="font-semibold">Personal</div>
                {lists.map(item => (
                    <div key={item.name} className="flex flex-row items-center">
                        <button className="text-left">{item.name}</button>
                    </div>
                ))}
            </div>
            <div className="flex flex-col grow">
                <div className="flex flex-row items-center">
                    <div className="font-semibold">Collaborative</div>
                    <div className="ml-2.5">
                        <Users size={20} />
                    </div>
                </div>
                {collaborative.map(item => (
                    <div key={item.name} className="flex flex-row items-center">
                        <button className="text-left">{item.name}</button>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-y-1">
                <DialogTrigger>
                    <Button className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold py-1.5 px-4">
                        New List
                    </Button>
                    <ListModal />
                </DialogTrigger>
                <DialogTrigger>
                    <Button className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold py-1.5 px-4">
                        Edit Lists
                    </Button>
                </DialogTrigger>
            </div>
        </div>
    )
}

export default ListsOverview;