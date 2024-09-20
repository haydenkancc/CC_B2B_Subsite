import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HardwareCarousel({ ads }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % ads.length);
        }, 10000); //1000ms = 1 second

        return () => clearInterval(interval);
    }, [ads.length]);


    return (
        <div className="relative overflow-hidden w-full">
            <div
                className={`flex transition-transform duration-1000 ease-in-out`}
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {ads.map((s, index) => (
                    <div
                        key={index}
                        className="relative flex-shrink-0 w-full h-80 2xl:h-116 opacity-0 transition-opacity duration-1000 ease-in-out"
                        style={{ opacity: index === current ? 1 : 0 }}
                    >
                        <img
                            src={s.image}
                            className="w-full h-full object-cover object-bottom"
                            alt={`Slide ${index}`}
                        />
                    </div>
                ))}
            </div>

            <div className="absolute bottom-4 2xl:bottom-6 left-0 right-0 flex justify-center gap-3">
                {ads.map((s, i) => (
                    <div
                        onClick={() => setCurrent(i)}
                        key={"circle" + i}
                        className={`rounded-full w-2 h-2 cursor-pointer hover:bg-ghost-white ${i === current ? "bg-white" : "bg-gray-400"}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default HardwareCarousel;
