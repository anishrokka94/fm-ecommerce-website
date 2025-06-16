import React from "react";

const CustomerReviews = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        {" "}
        Customer Reviews (876)
      </h2>
      <div className="space-y-6">
        {/* Feedback 1 */}
        <div>
          <p className="text-green-600 font-semibold text-sm">
            + i***j (998) ・ Past 6 months
          </p>
          <p className="text-gray-800 mt-1">
            Fast shipping. Well packaged. Better than described. Awesome
            transaction and amazing value.
          </p>
          <p className="text-sm text-gray-600 mt-1">
            OluKai Nanea Li Men’s Black Shoes - Men’s Size 11 (#126882082673)
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
