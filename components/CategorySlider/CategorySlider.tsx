import ArrowLongRightIcon from "@heroicons/react/24/solid/ArrowLongRightIcon";
import { useMemo } from "react";
import useMobile from "../../hooks/useMobile";
import Slider from "../Slider/Slider";


interface CategorySliderProps {
    category: string;
    events: any[];
}

const CategorySlider = ({ category, events }: CategorySliderProps) => {

    return (
        <section className={"mt-4 py-4"}>
            <h2>
                <a className={'group hover:cursor-pointer ml-8 flex flex-row items-center'}>
                    <span className="text-2xl group-hover:mr-6 mr-1 duration-200 transition-all">{category}</span>
                    <ArrowLongRightIcon width={32} height={32} className={'ml-1'} />
                </a>
            </h2>

            <Slider>
                {events.map((ev, eventIndex) => (
                    <Event
                        key={eventIndex}
                        event={ev}
                    />
                )
                )}
            </Slider>
        </section>
    )
}

export default CategorySlider;

interface EventProps {
    event: Partial<any>;
}

const Event = ({ event }: EventProps) => {

    const randomImageId = useMemo(() => Math.random(), []);

    return (
        <div className="flex-1">
            <img alt={event.title!} src={`https://picsum.photos/500?r=${randomImageId}`} />
            <div className="p-2 flex flex-col">
                <h3 className="text-1xl">
                    {event.title}
                </h3>
                <span className="mt-2 flex justify-end flex-col w-full text-right">
                    $20
                </span>
            </div>
        </div>
    )

}