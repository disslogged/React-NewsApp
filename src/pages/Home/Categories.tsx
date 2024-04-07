import SectionHeader from "../../components/UI/SectionHeader";
import { categories } from "../../utils/constant";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div className="container mx-auto px-3 sm:px-0 pt-5 pb-10">
      <SectionHeader>Categories</SectionHeader>

      <div className="flex gap-7 overflow-x-auto md:overflow-x-hidden md:grid grid-cols-2 md:gap-y-10 md:gap-x-7 lg:grid-cols-3 xl:grid-cols-4 mt-14">
        {categories.map(category => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
