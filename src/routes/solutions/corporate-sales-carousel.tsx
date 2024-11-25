import { useState } from "react";
import { CaretLeft, CaretRight, Envelope, Phone } from '@phosphor-icons/react';

function CorporateSalesCarousel({ slides }) {
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
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full h-full flex"
                    >
                        <div className="flex flex-1 items-center justify-center ml-24 py-6">
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={slide.image}
                                    className="w-24 h-24 rounded-full object-cover mb-4"
                                    alt={`Profile ${index}`}
                                />
                                <div className="font-semibold mb-2">
                                    {slide.text}
                                </div>
                                <div className="text-sm">
                                    {slide.body}
                                </div>
                                <div className="flex flex-row items-center mt-2">
                                    <Envelope size={20} weight="light" className="mr-2" />
                                    <div className="text-sm">
                                        {slide.mail}
                                    </div>
                                </div>
                                <div className="flex flex-row items-center mt-2">
                                    <Phone size={20} weight="light" className="mr-2" />
                                    <div className="text-sm">
                                        {slide.phone}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 items-center justify-center px-6 py-6">
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={slide.image}
                                    className="w-24 h-24 rounded-full object-cover mb-4"
                                    alt={`Profile ${index}`}
                                />
                                <div className="font-semibold mb-2">
                                    {slide.text}
                                </div>
                                <div className="text-sm">
                                    {slide.body}
                                </div>
                                <div className="flex flex-row items-center mt-2">
                                    <Envelope size={20} weight="light" className="mr-2" />
                                    <div className="text-sm">
                                        {slide.mail}
                                    </div>
                                </div>
                                <div className="flex flex-row items-center mt-2">
                                    <Phone size={20} weight="light" className="mr-2" />
                                    <div className="text-sm">
                                        {slide.phone}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 items-center justify-center py-6">
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={slide.image}
                                    className="w-24 h-24 rounded-full object-cover mb-4"
                                    alt={`Profile ${index}`}
                                />
                                <div className="font-semibold mb-2">
                                    {slide.text}
                                </div>
                                <div className="text-sm">
                                    {slide.body}
                                </div>
                                <div className="flex flex-row items-center mt-2">
                                    <Envelope size={20} weight="light" className="mr-2" />
                                    <div className="text-sm">
                                        {slide.mail}
                                    </div>
                                </div>
                                <div className="flex flex-row items-center mt-2">
                                    <Phone size={20} weight="light" className="mr-2" />
                                    <div className="text-sm">
                                        {slide.phone}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 items-center justify-center px-6 mr-14 py-6">
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={slide.image}
                                    className="w-24 h-24 rounded-full object-cover mb-4"
                                    alt={`Profile ${index}`}
                                />
                                <div className="font-semibold mb-2">
                                    {slide.text}
                                </div>
                                <div className="text-sm">
                                    {slide.body}
                                </div>
                                <div className="flex flex-row items-center mt-2">
                                    <Envelope size={20} weight="light" className="mr-2" />
                                    <div className="text-sm">
                                        {slide.mail}
                                    </div>
                                </div>
                                <div className="flex flex-row items-center mt-2">
                                    <Phone size={20} weight="light" className="mr-2" />
                                    <div className="text-sm">
                                        {slide.phone}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-8">
                <button
                    onClick={prev}
                    disabled={isFirstSlide}
                    className={`p-2 rounded-full ${isFirstSlide ? 'text-ghost-white' : 'text-gray-800'}`}
                >
                    <CaretLeft size={32} weight="bold" />
                </button>
                <button
                    onClick={next}
                    disabled={isLastSlide}
                    className={`p-2 rounded-full ${isLastSlide ? 'text-ghost-white' : 'text-gray-800'}`}
                >
                    <CaretRight size={32} weight="bold" />
                </button>
            </div>
        </div>
    );
}

export default CorporateSalesCarousel;
