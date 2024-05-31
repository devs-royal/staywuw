"use client";

export function PersonsButtonTour(props) {
  const { categories, setCategories } = props;


  const handleAddPerson = (categoryId) => {
    const newCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return { ...category, count: (category.count || 0) + 1 };
      }
      return category;
    });
    setCategories(newCategories);
  };

  const handleRemovePerson = (categoryId) => {
    const newCategories = categories.map((category) => {
      if (category.id === categoryId && (category.count || 0) > 0) {
        return { ...category, count: category.count - 1 };
      }
      return category;
    });
    setCategories(newCategories);
  };

  return categories.map((category, index) => (
    <div className="flex flex-col items-end w-full" key={index}>
      <div className="flex w-full justify-between items-center">
        <span className="m-s-b text-fs-12 text-white">
          {category.text.split(" ")[0]}
        </span>

        <div className="flex h-[32px] justify-between items-center lg:w-[64%] xl:w-[56%] w-[56%] rounded bg-white">
          <button
            disabled={category.count === 0}
            onClick={() => handleRemovePerson(category.id)}
            className={`${
              category.count === 0
                ? "cursor-not-allowed"
                : "hover:bg-gry-30 rounded-l"
            } flex justify-center items-center h-full w-8`}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_URL}icons/remove/remove-100.svg`}
              alt="Remove adults"
              width="9.3px"
              height="1.3px"
            />
          </button>

          <span className="text-fs-12 m-s-b w-max text-black">
            {category.count || 0}
          </span>

          <button
            className={`cursor-pointer w-[32px] flex justify-center items-center h-full hover:bg-gry-30 rounded-r`}
            onClick={() => handleAddPerson(category.id)}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_URL}icons/add/add-or.svg`}
              width="9.3px"
              height="9.3px"
              alt="Add adults"
            />
          </button>
        </div>
      </div>

      <span className="w-max text-white m-s-b text-fs-10 h-[20px]">
        {category.text}
      </span>
    </div>
  ));
}
