interface SellerInfoProps {
  brand: string;
}

const SellerInfo = ({ brand }: SellerInfoProps) => {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        About this seller
      </h2>
      <div className="flex items-center gap-4 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{brand}</h3>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="bg-[#cc3131] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#cc3131]transition cursor-pointer">
          Visit store
        </button>
        <button className="bg-white border-[#cc3131] text-[#cc3131] px-6 py-2 rounded-full font-semibold transition cursor-pointer">
          Contact
        </button>
      </div>
    </div>
  );
};

export default SellerInfo;
