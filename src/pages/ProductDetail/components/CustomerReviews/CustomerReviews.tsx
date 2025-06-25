import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/solid";
import type { Review } from "../../../../components/common/ProductCard/types";

interface CustomerReviewsProps {
  reviews: Review[];
}

const CustomerReviews = ({ reviews }: CustomerReviewsProps) => {
  console.log("rev", reviews);
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        {" "}
        Customer Reviews ({reviews?.length})
      </h2>
      <div className="space-y-6">
        {/* Feedback 1 */}
        <div>
          {reviews?.map((review) => {
            return (
              <div className="max-w-2xl border-b border-gray-200 py-5 bg-white">
                {/* Header: Star Rating + Title */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-green-600 text-white rounded flex items-center justify-center px-2 py-1 text-xs font-bold">
                    {review.rating}
                    <StarIcon className="w-3 h-3 ml-1 fill-white stroke-white" />
                  </div>
                  <h2 className="text-md font-semibold">
                    {" "}
                    {review.reviewerName}{" "}
                  </h2>
                </div>

                {/* Review Body */}
                <p className="text-gray-800 mb-2 text-sm">{review.comment}</p>

                {/* Footer: Reviewer info */}
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircleIcon className="w-4 h-4 text-gray-500 mr-1" />
                  <span className="font-semibold tex-xs text-gray-500 mr-1">
                    {review.reviewerEmail}
                  </span>

                  <span className="ml-auto text-gray-500"> {review.date} </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
