import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import { useCallback, useRef, useState } from "react";
import useHoverDirty from "react-use/lib/useHoverDirty";
import useScroll from "react-use/lib/useScroll";
import useMobile from "../../hooks/useMobile";
import styles from './Slider.module.css';

const SHOW_ARROWS_THRESHOLD = 52
const SCROLL_BY = 256;

interface SliderProps {
  children: React.ReactNode[];
}

const Slider = ({ children }: SliderProps) => {
  const [hoveredEventIndex, setHoveredEventIndex] = useState(-1);
  const scrollableContentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useMobile();
  const { x } = useScroll(scrollableContentRef);
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(false);
  const isHovering = useHoverDirty(containerRef);

  useEffect(() => {
    if (scrollableContentRef.current === null) return;
    const { scrollWidth, offsetWidth } = scrollableContentRef.current;
    if (isHovering && !isMobile) {
      if (x > SHOW_ARROWS_THRESHOLD) {
        setShowArrowLeft(true);
      } else {
        setShowArrowLeft(false);
      }
      if (x + offsetWidth + SHOW_ARROWS_THRESHOLD <= scrollWidth) {
        setShowArrowRight(true)
      } else {
        setShowArrowRight(false)
      }
    } else {
      setShowArrowRight(false)
      setShowArrowLeft(false);
    }

  }, [x, isHovering])

  const handleHoverEvent = (eventIndex: number) => (hovered: boolean) => {
    if (isMobile) { return }
    if (hovered) {
      setHoveredEventIndex(eventIndex);
    } else {
      setHoveredEventIndex(-1);
    }
  }

  const buildClassName = useCallback((i: number) => {
    if (hoveredEventIndex !== -1) {
      if (i < hoveredEventIndex) {
        return styles['slider-item--before-hovered']
      } else if (i > hoveredEventIndex) {
        return styles['slider-item--after-hovered']
      }
    }

    return '';

  }, [hoveredEventIndex]);

  const handleLeftArrowClick = () => {
    scrollableContentRef.current?.scrollBy({ left: -SCROLL_BY })
  }

  const handleRightArrowClick = () => {
    scrollableContentRef.current?.scrollBy({ left: SCROLL_BY })
  }

  const arrowBaseClassNames = "hover:bg-gray-800 hover:cursor-pointer z-10 top-1/2 transform flex items-center justify-center rounded-full p-4 absolute bg-black";

  return (
    <div ref={containerRef} className="relative w-full">
      <div ref={scrollableContentRef} className="pl-4 pr-4 w-full scroll-smooth flex flex-no-wrap overflow-x-auto scrollbar-hide">
        {React.Children.map(children, (child, childIndex) =>
          <SliderItem injectedClassName={buildClassName(childIndex)} onHoverChange={handleHoverEvent(childIndex)}>{child}</SliderItem>
        )}
      </div>
      {showArrowLeft ? <div onClick={handleLeftArrowClick} className={`ml-4 left-0 ${arrowBaseClassNames}`}>
        <ChevronLeftIcon className="w-6 h-6 fill-current text-white" />
      </div> : null}
      {showArrowRight ? <div onClick={handleRightArrowClick} className={`mr-4 right-0 ${arrowBaseClassNames}`}>
        <ChevronRightIcon className="w-6 h-6 fill-current text-white" />
      </div> : null}
    </div>
  )
}

export default Slider;

interface SliderItemProps {
  children: React.ReactNode;
  onHoverChange: (h: boolean) => void;
  injectedClassName: string;
}


const SliderItem: React.FC<SliderItemProps> = ({ children, onHoverChange, injectedClassName }) => {
  const handleMouseEnter = useCallback(() => {
    onHoverChange && onHoverChange(true);
  }, [])

  const handleMouseLeave = useCallback(() => {
    onHoverChange && onHoverChange(false);
  }, [])

  return (
    <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${injectedClassName} hover:cursor-pointer mt-6 mr-2 mb-6 transition hover:-translate-y-1 hover:scale-110 duration-300 shrink-0 flex flex-col w-64 rounded-xl border overflow-hidden`}>
      {children}
    </a>
  )
}


