import { useState, useRef, useEffect } from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";

interface ProductShippingProps {
  shippingInformation: string;
}

const ProductShippingAccordion = ({
  shippingInformation,
}: ProductShippingProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  const toggleAccordion = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  if (!shippingInformation) return null;

  return (
    <div className="border-b border-gray-300">
      {/* Accordion Header */}
      <div
        className="flex items-center justify-between px-4 py-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-2 font-semibold text-md text-gray-800">
          <TruckIcon className="h-4 w-4 text-gray-800" />
          Shipping
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
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="px-6 py-4">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>{shippingInformation}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShippingAccordion;
