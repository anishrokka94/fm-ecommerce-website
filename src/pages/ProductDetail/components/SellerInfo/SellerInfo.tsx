const SellerInfo = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        About this seller
      </h2>
      <div className="flex items-center gap-4 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">ZYX SOLES</h3>
          <p className="text-sm text-gray-600">
            97.8% positive feedback ・ 2.5K items sold
          </p>
        </div>
      </div>
      <div className="flex items-center text-gray-600 text-sm mb-4">
        <span className="material-icons mr-2">Joined Sep 2017</span>
      </div>
      <p className="text-sm text-gray-700 mb-6">
        We sell pre-owned shoes from your favorite brands at discounted prices.
        The official eBay store of ZYX SOLES.
      </p>
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
