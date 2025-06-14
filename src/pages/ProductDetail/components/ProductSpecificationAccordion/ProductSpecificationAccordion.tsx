import React, { useState, useRef, useEffect } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

interface ProductSpecificationProps {
  productSpecification: {
    width: string;
    depth: string;
    height: string;
    seatingHeight: string;
  };
}

const ProductSpecificationAccordion = ({
  productSpecification,
}: ProductSpecificationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  const toggleAccordion = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  if (!productSpecification) return null;

  return (
    <div className="rounded-md shadow-sm">
      {/* Accordion Header */}
      <div
        className="flex items-center justify-between px-4 py-3 cursor-pointer bg-gray-100"
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-2 font-semibold text-lg">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m2 0a8 8 0 11-16 0 8 8 0 0116 0z"
            />
          </svg>
          Specification
        </div>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
        )}
      </div>

      {/* Accordion Body with animation */}
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="px-6 py-4">
          <h4 className="text-md font-semibold mb-3">Dimensions</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Width</span>
              <span>{productSpecification.width}</span>
            </div>
            <div className="flex justify-between">
              <span>Depth</span>
              <span>{productSpecification.depth}</span>
            </div>
            <div className="flex justify-between">
              <span>Height</span>
              <span>{productSpecification.height}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecificationAccordion;
