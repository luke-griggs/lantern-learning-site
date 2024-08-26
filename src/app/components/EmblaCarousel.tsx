"use client";

import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

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
  const autoplayOptions = { delay: 6000, stopOnInteraction: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);
  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;

    if (!autoplay) return;
    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;
    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="max-w-6xl mx-auto flex-col items-center mb-12">
      <div className="overflow-hidden justify-center" ref={emblaRef}>
        <div className="flex rounded-xl -mt-8 ">
          {slides.map((testimonial) => (
            <div
              className="flex-none w-full min-w-0 mt-10 transform-gpu rounded-xl py-16 px-3"
              key={testimonial.key}
            >
              <div className="flex items-center justify-center h-76 text-3xl font-medium font-serif user-select-none pl-3 text-center leading-tight">
                "{testimonial.review}"
              </div>
              <div className="pt-6 flex items-center justify-center h-76 text-2xl font-semibold user-select-none">
                - {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-auto-1fr gap-4">
        <div className="flex gap-24 items-center justify-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
