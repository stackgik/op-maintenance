"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { tutorialSteps } from "@/constants";

export interface TutorialStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

function CustomPrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-100 rounded-full hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#4096FF] hidden md:block"
    >
      <ChevronLeft className="w-6 h-6 text-gray-800" />
    </button>
  );
}

function CustomNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-100 rounded-full hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#4096FF] hidden md:block"
    >
      <ChevronRight className="w-6 h-6 text-gray-800" />
    </button>
  );
}

export function AppTutorial() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex items-center justify-center gap-2 m-0 p-0">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300 hover:bg-gray-400"
        style={{
          margin: "0 4px",
        }}
      />
    ),
  };

  return (
    <div className="relative bg-gray-50 rounded-2xl shadow-inner">
      <Slider ref={sliderRef} {...settings}>
        {tutorialSteps.map(({ id, description, title, image }) => (
          <div key={id} className="outline-none">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              <div className="space-y-4 order-2 md:order-1">
                <div className="inline-block px-3 py-1 bg-blue-100 text-[#4096FF] rounded-full text-sm">
                  Step {id} of {tutorialSteps.length}
                </div>
                <h3 className="text-gray-900">{title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
