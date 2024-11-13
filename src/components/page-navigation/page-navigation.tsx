import { CaretLeft, CaretRight } from "@phosphor-icons/react";

function PageNavigation() {
    return (
        <div className="flex flex-row items-center justify-between">
            <CaretLeft className="cursor-pointer" />
            <div className="flex flex-row items-center gap-x-2 py-1">
                <div className="text-sm">Page</div>
                <input type="text" placeholder="1" className="text-sm text-black focus:outline-none w-12 text-center border rounded-lg py-0.5" />
                <div className="text-sm">of 1</div>
            </div>
            <CaretRight className="cursor-pointer" />
        </div>
    )
}

export default PageNavigation;