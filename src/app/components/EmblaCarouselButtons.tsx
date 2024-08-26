"use client";

import React, {
    ComponentPropsWithRef,
    useCallback,
    useEffect,
    useState
  } from 'react'
  import { EmblaCarouselType } from 'embla-carousel'
  import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
  
  type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
  }
  
  export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined,
    onButtonClick?: (emblaApi: EmblaCarouselType) => void
  ): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  
    const onPrevButtonClick = useCallback(() => {
      if (!emblaApi) return
      emblaApi.scrollPrev()
      if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])
  
    const onNextButtonClick = useCallback(() => {
      if (!emblaApi) return
      emblaApi.scrollNext()
      if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])
  
    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])
  
    useEffect(() => {
      if (!emblaApi) return
  
      onSelect(emblaApi)
      emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])
  
    return {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    }
  }
  
  type PropType = ComponentPropsWithRef<'button'>
  
  export const PrevButton: React.FC<PropType> = ({ children, ...restProps }) => {
    return (
      <button
        {...restProps}
        className={`flex items-center justify-center w-14 h-14 rounded-full bg-transparent 
                    duration-300 hover:bg-[#fff3da] disabled:text-gray-400 disabled:cursor-not-allowed
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        type="button"
        style={{
          boxShadow: 'inset 0 0 0 0.2rem var(--detail-medium-contrast)',
        }}
      >
        {/* SVG remains the same */}
        <FaArrowLeft />
        {children}
      </button>
    );
  };
  
  export const NextButton: React.FC<PropType> = ({ children, ...restProps }) => {
    return (
      <button
        {...restProps}
        className={`flex items-center justify-center w-14 h-14 rounded-full bg-transparent 
                    duration-300 hover:bg-[#fff3da] disabled:text-gray-400 disabled:cursor-not-allowed
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        type="button"
        style={{
          boxShadow: 'inset 0 0 0 0.2rem var(--detail-medium-contrast)',
        }}
      >
        {/* SVG remains the same */}
        <FaArrowRight />
        {children}
      </button>
    );
  };