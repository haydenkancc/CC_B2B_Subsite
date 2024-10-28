import { Plus } from "@phosphor-icons/react";
import { Button, DialogTrigger, Input, TextField } from "react-aria-components";
import ash from "../../assets/ash.png"
import wile from "../../assets/wile.png"

const messages = [
    { id: 1, user: "Ash Ketchup", time: "4:34 PM", profile: ash, message: "That isn't a valid order number. Could you check the order number again?" },
    { id: 2, user: "Wile E. Coyote", time: "4:30 PM", profile: wile, message: "2que982uq94eu29qu349q" },
    { id: 3, user: "Ash Ketchup", time: "4:22 PM", profile: ash, message: "Of course, can I get the order number?" },
    { id: 4, user: "Wile E. Coyote", time: "4:18 PM", profile: wile, message: "My SUPERPC9000 never arrived, can I have some assistance?" },
]

function TicketContent() {

    return (
        <div className="px-8 mb-20">
            <div className="text-lg font-medium mb-10">My SUPERPC9000 never arrived, can I have some assistance?</div>
            <div className="flex flex-col">
                <div className="flex flex-row items-center mb-8">
                    <div className="bg-white w-full border rounded grow">
                        <TextField className="px-4 py-3 text-black border-b text-sm">
                            <Input className="focus:outline-none w-full" placeholder="Message" />
                        </TextField>
                        <div className="rounded flex flex-row items-center justify-between px-4 py-2.5">
                            <label for="file-upload" className="cursor-pointer">
                                <div className="flex flex-row items-center bg-slate-100 rounded-full p-1.5 border hover:bg-slate-200 border border-slate-400">
                                    <Plus />
                                </div>
                            </label>
                            <input id="file-upload" type="file" className="hidden" />
                            <DialogTrigger>
                                <Button className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold py-1.5 px-4">
                                    Send
                                </Button>
                            </DialogTrigger>
                        </div>
                    </div>
                </div>
                {messages.map(item => (
                    <div className="flex flex-row border-b gap-x-4 py-4">
                        <img src={item.profile} className=" rounded-full w-10 h-10" />
                        <div className="flex flex-col text-sm">
                            <div className="font-medium">{item.user}</div>
                            <div className="font-medium">{item.time}</div>
                            <div className="mt-3">{item.message}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TicketContent;