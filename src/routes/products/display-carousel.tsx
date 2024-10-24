import { useState } from "react";
import { CaretLeft, CaretRight, Envelope, Phone } from '@phosphor-icons/react';

function DisplayCarousel({ slides }) {
    const [current, setCurrent] = useState(0);

    const prev = () => {
        if (current > 0) {
            setCurrent(curr => curr - 1);
        }
    };

    const next = () => {
        if (current < slides.length - 1) {
            setCurrent(curr => curr + 1);
        }
    };

    const isFirstSlide = current === 0;
    const isLastSlide = current === slides.length - 1;

    return (
        <div className="relative overflow-hidden w-full">
            <div
                className="flex transition-transform duration-500 ease-in-out w-128"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex gap-x-4 w-full h-full py-2 justify-center"
                    >
                        <img src={slide.image} className="w-24 rounded-sm border border-slate-400" />
                        <img src={slide.image} className="w-24 rounded-sm border border-slate-400" />
                        <img src={slide.image} className="w-24 rounded-sm border border-slate-400" />
                        <img src={slide.image} className="w-24 rounded-sm border border-slate-400" />
                    </div>
                    
                ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-1">
                <button
                    onClick={prev}
                    disabled={isFirstSlide}
                    className={`rounded-full ${isFirstSlide ? 'text-transparent' : 'text-black'}`}
                >
                    <CaretLeft size={20} weight="bold" />
                </button>
                <button
                    onClick={next}
                    disabled={isLastSlide}
                    className={`rounded-full ${isLastSlide ? 'text-transparent' : 'text-black'}`}
                >
                    <CaretRight size={20} weight="bold" />
                </button>
            </div>
        </div>
    );
}

export default DisplayCarousel;
