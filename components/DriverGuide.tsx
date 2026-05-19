"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { driverSteps } from "@/constants";

export interface DriverStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

export function DriverGuide() {
  const [selectedStep, setSelectedStep] = useState(0);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(driverSteps.length / itemsPerPage);

  const visibleSteps = driverSteps.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      setSelectedStep((currentPage + 1) * itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setSelectedStep((currentPage - 1) * itemsPerPage);
    }
  };

  return (
    <div className="space-y-8">
      {/* Main Display */}
      <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-100 text-[#4096FF] rounded-full text-sm">
              Step {selectedStep + 1} of {driverSteps.length}
            </div>
            <h3 className="text-gray-900">{driverSteps[selectedStep].title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {driverSteps[selectedStep].description}
            </p>
          </div>
          <div className="relative aspect-4/3 rounded-xl overflow-hidden">
            <img
              src={driverSteps[selectedStep].image}
              alt={driverSteps[selectedStep].title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Step Grid */}
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {visibleSteps.map((step, index) => {
            const actualIndex = currentPage * itemsPerPage + index;
            return (
              <button
                key={step.id}
                onClick={() => setSelectedStep(actualIndex)}
                className={`group relative p-4 rounded-xl border-2 transition-all ${
                  selectedStep === actualIndex
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 bg-white hover:border-blue-300"
                }`}
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-3">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div
                  className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    selectedStep === actualIndex
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {step.id}
                </div>
                <div className="text-sm text-gray-900 line-clamp-2">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        {totalPages > 1 && (
          <>
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 bg-white rounded-full border-2 border-gray-200 transition-all ${
                currentPage === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-blue-500 hover:bg-blue-50"
              }`}
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-white rounded-full border-2 border-gray-200 transition-all ${
                currentPage === totalPages - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-blue-500 hover:bg-blue-50"
              }`}
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}
      </div>

      {/* Page Indicators */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index);
                setSelectedStep(index * itemsPerPage);
              }}
              className={`h-2 rounded-full transition-all ${
                currentPage === index ? "w-8 bg-blue-500" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
