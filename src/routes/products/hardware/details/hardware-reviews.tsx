import { Star, ThumbsDown, ThumbsUp } from "@phosphor-icons/react";

const reviews = [
    { id: 1, name: "Bob Joebobjoebob", date: "2024-10-10", title: "Good Product.", text: "I am like using product this one." },
    { id: 2, name: "Joe Bobjoebobjoe", date: "2024-10-10", title: "Product Good.", text: "I am the enjoy using this product for the work." },
]

function HardwareReviews() {
    return (
        <div>
            <div className="flex flex-row items-center justify-between border border-black gap-x-5 rounded-sm mt-5">
                <div className="flex flex-row items-center p-8 gap-x-5">
                    <div className="text-lg font-medium">Average Rating</div>
                    <div className="flex flex-row gap-x-1.5">
                        <div className="flex flex-row items-center gap-x-1 text-black">
                            <Star size={18} weight="fill" />
                            <Star size={18} weight="fill" />
                            <Star size={18} weight="fill" />
                            <Star size={18} weight="fill" />
                            <Star size={18} />
                        </div>
                        <div className="text-lg pl-5">4.0/5 Rating</div>
                    </div>
                </div>
                <div className="border bg-slate-100 hover:bg-slate-200 px-5 py-2.5 rounded-sm border border-slate-300 text-center font-medium mr-8">Leave a Review</div>
            </div>
            {reviews.map(item => (
                <div className="flex flex-row justify-between py-10 border-b">
                    <div className="flex flex-row">
                        <div className="flex flex-col gap-y-2.5">
                            <div className="flex flex-row gap-x-1.5">
                                <div className="flex flex-row items-center gap-x-1 text-black">
                                    <Star size={16} weight="fill" />
                                    <Star size={16} weight="fill" />
                                    <Star size={16} weight="fill" />
                                    <Star size={16} weight="fill" />
                                    <Star size={16} />
                                </div>
                            </div>
                            <div>{item.name}</div>
                            <div>{item.date}</div>
                        </div>
                        <div className="flex flex-col gap-y-2.5 ml-48">
                            <div className="text-lg font-medium">{item.title}</div>
                            <div>{item.text}</div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row border rounded-sm">
                            <div className="flex flex-row items-center gap-x-1.5 p-4">
                                <ThumbsUp size={20} />
                                <div>1</div>
                            </div>
                            <div className="flex flex-row items-center gap-x-1.5 p-4 border-l">
                                <ThumbsDown size={20} />
                                <div>0</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HardwareReviews;