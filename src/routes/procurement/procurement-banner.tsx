import { useEffect, useRef, useState } from "react";

function ProcurementBanner() {

    const leftRefs = useRef([]);
    const rightRefs = useRef([]);
    const bannerRef = useRef(null);

    const [revenue, setRevenue] = useState(0);
    const [marketShare, setMarketShare] = useState(0);
    const [satisfaction, setSatisfaction] = useState(0);
    const [startProcessAnimation, setStartProcessAnimation] = useState(false);
    const [startBannerAnimation, setStartBannerAnimation] = useState(false);

    // Animation for revenue, market share, and satisfaction
    useEffect(() => {
        const revenueTarget = 5;
        const marketShareTarget = 30;
        const satisfactionTarget = 97;

        const startAnimationWithDelay = setTimeout(() => {
            const revenueInterval = setInterval(() => {
                if (startBannerAnimation) {
                    setRevenue(prev => {
                        if (prev < revenueTarget) return Math.min(prev + 1, revenueTarget);
                        clearInterval(revenueInterval);
                        return revenueTarget;
                    });
                }
            }, 400);

            const marketShareInterval = setInterval(() => {
                if (startBannerAnimation) {
                    setMarketShare(prev => {
                        if (prev < marketShareTarget) return Math.min(prev + 1, marketShareTarget);
                        clearInterval(marketShareInterval);
                        return marketShareTarget;
                    });
                }
            }, 66.67);

            const satisfactionInterval = setInterval(() => {
                if (startBannerAnimation) {
                    setSatisfaction(prev => {
                        if (prev < satisfactionTarget) return Math.min(prev + 1, satisfactionTarget);
                        clearInterval(satisfactionInterval);
                        return satisfactionTarget;
                    });
                }
            }, 20.62);

            return () => {
                clearInterval(revenueInterval);
                clearInterval(marketShareInterval);
                clearInterval(satisfactionInterval);
            };
        }, 500); // 1000 = Delay of 1 second

        return () => {
            clearTimeout(startAnimationWithDelay);
        };
    }, [startBannerAnimation]);

    // Observer for the process section
    useEffect(() => {
        const options = {
            root: null,
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setStartProcessAnimation(true);
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop lookin once it's in view
                }
            });
        }, options);

        // Observe left-side process elements
        leftRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        // Observe right-side process elements
        rightRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            leftRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
            rightRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    // Observer for the banner
    useEffect(() => {
        const options = {
            root: null,
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setStartBannerAnimation(true);
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once it's in view
                }
            });
        }, options);

        // Observe the banner only
        if (bannerRef.current) {
            observer.observe(bannerRef.current);
        }

        return () => {
            if (bannerRef.current) {
                observer.unobserve(bannerRef.current);
            }
        };
    }, []);


    return (
        <div ref={bannerRef} className={`bg-oxford-blue text-ghost-white flex flex-col w-full overflow-hidden ${startBannerAnimation ? 'animate' : ''}`}>
            <div className="max-w-[1440px] px-4 mx-auto">
                <div className="flex flex-row py-8 gap-x-20">
                    {/* Leftside */}
                    <div className="w-88 flex flex-col items-center">
                        <div className="font-bold text-4xl">${revenue}M</div>
                        <div className="mt-4 font-medium" ref={el => rightRefs.current.push(el)}>Additional Revenue</div>
                    </div>
                    {/* Center */}
                    <div className="w-88 flex flex-col items-center">
                        <div className="font-bold text-4xl">{marketShare}%</div>
                        <div className="mt-4 font-medium" ref={el => rightRefs.current.push(el)}>Increased Growth in Client Market Share</div>
                    </div>
                    {/* Rightside */}
                    <div className="w-88 flex flex-col items-center">
                        <div className="font-bold text-4xl">{satisfaction}%</div>
                        <div className="mt-4 font-medium" ref={el => rightRefs.current.push(el)}>Client Satisfaction Rate</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcurementBanner;