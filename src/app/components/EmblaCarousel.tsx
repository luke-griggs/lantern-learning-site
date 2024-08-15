"use client";

import React, { useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselButtons';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

interface Testimonial {
    name: string;
    review: string;
    key: number;
}

type PropType = {
  slides: Testimonial[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
    const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;
    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="max-w-6xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex ml-[-1rem]">
          {slides.map((testimonial) => (
            <div className="flex-none w-full min-w-0 pl-4 transform-gpu" key={testimonial.key}>
              <div className="flex items-center justify-center h-76 text-8xl font-semibold user-select-none">{testimonial.name}</div>
                <div className="flex items-center justify-center h-76 text-8xl font-semibold user-select-none">{testimonial.review}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-auto-1fr gap-4 mt-7">
        <div className="flex gap-24 items-center justify-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;