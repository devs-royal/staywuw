import { StarIcon } from "@heroicons/react/20/solid";

export function TotalStars({ stars, width = null, height = null }) {
  const ClassNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div className="flex items-center">
      {[0, 1, 2, 3, 4].map((rating) => (
        <StarIcon
          key={rating}
          className={ClassNames(
            stars > rating ? "text-yellow-400 w-3.5	" : "text-gray-200 w-3.5",
            `${width ? width : "w-5"} ${height ? height : "h-5"}  flex-shrink-0`
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
