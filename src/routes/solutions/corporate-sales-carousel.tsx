import { useState, useEffect } from "react";

function CorporateSalesCarousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const slidesPerPage = 4;
    const totalChunks = Math.ceil(slides.length / slidesPerPage);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrent(prev => (prev + 1) % totalChunks);
    //     }, 10000); //10000ms = 10 seconds

    //     return () => clearInterval(interval);
    // }, [totalChunks]);

    const chunkedSlides = [];

    for (let i = 0; i < totalChunks; i++) {
        chunkedSlides.push(slides.slice(i, i + slidesPerPage));
    }

    return (
        <div className="relative overflow-hidden w-screen h-96 bg-blue-300">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {chunkedSlides.map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className="flex flex-wrap w-screen">
                        {chunk.map((s, index) => (
                            <div key={index} className="flex-shrink-0 w-1/4 p-2">
                                <div className="relative w-full h-40">
                                    <img
                                        src={s.image}
                                        className="w-full h-full object-cover"
                                        alt={`Slide ${index}`}
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-900">{s.text}</h3>
                                    <p className="text-gray-700">{s.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                {chunkedSlides.map((_, i) => (
                    <div
                        onClick={() => setCurrent(i)}
                        key={"circle" + i}
                        className={`rounded-full w-2 h-2 cursor-pointer hover:bg-ghost-white ${i === current ? "bg-ghost-white" : "bg-slate-300"}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default CorporateSalesCarousel;
