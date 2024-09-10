import { useState, useEffect } from "react";

function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 7000); //1000ms = 1 second

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative overflow-hidden w-screen h-64">
            <div
                className={`flex transition-transform duration-1000 ease-in-out`}
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((s, index) => (
                    <div key={index} className="relative flex-shrink-0 w-screen h-full opacity-0 transition-opacity duration-1000 ease-in-out"
                         style={{ opacity: index === current ? 1 : 0 }}
                    >
                        <img
                            src={s.image}
                            className="w-full h-full object-cover blur-sm"
                            alt={`Slide ${index}`}
                        />
                        <div className="absolute inset-0 flex flex-col justify-center p-10">
                            <div className="text-white text-xl font-bold mb-2">
                                <span>{s.text}</span>
                            </div>
                            <div className="text-white text-md font-mono mb-4">
                                <span>{s.body}</span>
                            </div>
                            <button className="text-sm bg-white hover:bg-ghost-white text-oxford-blue font-bold py-1.5 rounded-sm">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                {slides.map((s, i) => (
                    <div
                        onClick={() => setCurrent(i)}
                        key={"circle" + i}
                        className={`rounded-full w-3 h-3 cursor-pointer hover:bg-ghost-white ${i === current ? "bg-ghost-white" : "bg-slate-300"}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
