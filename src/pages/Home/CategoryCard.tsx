import { Link } from "react-router-dom";
import { Category } from "../../shared/types";

type CategoryProps = {
  category: Category;
};

const CategoryCard = ({ category }: CategoryProps) => {
  return (
    <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg min-w-[300px]">
      <img
        className="w-full h-[300px] object-cover"
        src={
          category.image === null
            ? "https://placehold.co/600x400/EEE/31343C?font=lora&text=ImageNotFound"
            : category.image
        }
        alt={category.name}
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-primary-800">
          {category.name}
        </div>
        <Link
          to={`/headlines?category=entertainment`}
          onClick={() => window.scrollTo(0, 0)}
          className="text-tertiary-500 hover:underline"
        >
          View {category.name} News
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
