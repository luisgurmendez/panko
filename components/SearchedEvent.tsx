import { useMemo, useRef } from "react";
import { useHoverDirty } from "react-use";

interface SearchedEventProps {
    event: any;
}

const SearchedEvent = ({ event }: SearchedEventProps) => {
    const randomImageId = useMemo(() => Math.random(), []);
    const eventRef = useRef(null);
    const isHovered = useHoverDirty(eventRef);

    const hoveredStyles = !isHovered ? { background: 'linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(6,35,44,.64) 100%)' } : { background: 'rgba(255,255,255,.4)' };

    return (
        <div ref={eventRef} className="md:hover:scale-105 transition-all duration-300 ease-in-out hover:cursor-pointer lg:w-1/4 md:first-of-type:mt-6 first-of-type:ml-1 first-of-type:mr-1 w-full md:first-of-type:mr-0 md:first-of-type:ml-6 md:w-1/3  relative">
            <img className={"w-full"} alt={event.title!} src={`https://picsum.photos/500?r=${randomImageId}`} />
            <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out" style={hoveredStyles}>
                <h2 className={"text-2xl px-6 absolute bottom-4 w-full text-white"}>
                    {event.title}
                </h2>

            </div>

        </div>
    )
}

export default SearchedEvent;
