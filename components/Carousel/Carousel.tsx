import React, { ForwardedRef, forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";

export interface CarouselImperativeApi {
    next: () => void;
    prev: () => void;
    goTo: (i: number) => void;
}

interface CarouselProps {
    children: React.ReactNode[];
    autoscroll?: boolean;
    autoscrollInterval?: number;
}

const Carousel: React.ForwardRefRenderFunction<CarouselImperativeApi, CarouselProps> = ({ autoscroll = false, autoscrollInterval = 4000, children }, carouselRef) => {

    const scrollableContentRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const numOfChildren = useMemo(() => React.Children.count(children), [children]);
    const [autoscrollPaused, setAutoscrollPaused] = useState(!autoscroll);

    const getOffsetMovement = useCallback((toIndex: number) => {
        if (scrollableContentRef.current !== null) {
            const width = scrollableContentRef.current.offsetWidth;
            const newIndex = (numOfChildren + toIndex) % numOfChildren;
            const offsetMovement = (newIndex * width) - (currentIndex * width);
            return { offsetMovement, newIndex };
        }
        return { offsetMovement: 0, newIndex: 0 };

    }, [numOfChildren, currentIndex, scrollableContentRef.current])

    const goTo = useCallback((i: number, pauseScrolling: boolean = false) => {
        if (scrollableContentRef.current !== null) {
            const { offsetMovement, newIndex } = getOffsetMovement(i);
            scrollableContentRef.current.scrollBy({ left: offsetMovement })
            // TODO(lg): Change to something more declarative with useEffect?
            setCurrentIndex(newIndex);
        }
        if (pauseScrolling) {
            setAutoscrollPaused(true);
        }
    }, [setCurrentIndex, scrollableContentRef.current, getOffsetMovement])

    const next = useCallback((pauseScrolling: boolean = false) => {
        goTo(currentIndex + 1, pauseScrolling);
    }, [goTo, currentIndex]);

    const prev = useCallback((pauseScrolling: boolean = false) => {
        goTo(currentIndex - 1, pauseScrolling);
    }, [goTo, currentIndex]);


    useImperativeHandle(carouselRef, () => ({ next, prev, goTo }), [next, prev, goTo]);

    useAutoscroll(next, autoscrollPaused, autoscrollInterval);

    return (
        <div className="relative flex-grow flex flex-row">
            <div ref={scrollableContentRef} className="scroll-smooth relative flex-grow flex flex-row overflow-hidden">
                {React.Children.map(children, child => (
                    <div className="w-full flex-shrink-0 relative">
                        {React.cloneElement((child as any), { className: "h-full max-h-[100%]" })}
                    </div>
                ))}
            </div>

            <Controls onNext={next} onPrev={prev} />
            <Indicator currentIndex={currentIndex} indicators={numOfChildren} onIndicatorClick={goTo} />
        </div>
    )
}


export default forwardRef(Carousel);


function useAutoscroll(next: () => void, isPaused: boolean, ms: number = 4000) {

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(next, ms)
            return () => { clearInterval(interval) }
        }

    }, [next, isPaused])
}

interface ControlsProps {
    onNext: (pause?: boolean) => void;
    onPrev: (pause?: boolean) => void;
}

const Controls = ({ onNext, onPrev }: ControlsProps) => {

    return (
        <>
            <button onClick={() => onPrev(true)} type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button onClick={() => onNext(true)} type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </>

    )
}

interface IndicatorProps {
    onIndicatorClick: (i: number, pause?: boolean) => void;
    indicators: number;
    currentIndex: number;
}

const Indicator = ({ currentIndex, indicators, onIndicatorClick }: IndicatorProps) => {
    return (
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            {range(indicators).map((i) => (
                <button key={i} onClick={() => onIndicatorClick(i, true)} type="button" className={`hover:opacity-100 ${currentIndex !== i ? 'opacity-60' : ''} bg-white w-3 h-3 rounded-full`} aria-current="false" aria-label={`Slide ${i + 1}`} data-carousel-slide-to={i} />
            ))}
        </div>
    )
}



function range(n: number) {
    return [...(new Array(n).keys())];
}


