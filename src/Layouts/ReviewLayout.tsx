import ReviewCard from "../components/ReviewCard";

function ReviewLayout() {
  return (
    <div className="px-5 space-y-2 border-t bg-white py-10">
      <div className="text-lg font-bold text-black flex items-center space-x-3">
        <span>Reviews</span>
        <span className="p-1 rounded text-white font-semibold text-xs bg-blue-600">
          10
        </span>
      </div>
      <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <ReviewCard />
          ))}
      </div>
    </div>
  );
}

export default ReviewLayout;
