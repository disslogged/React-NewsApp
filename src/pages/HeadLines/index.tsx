import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  fetchHeadlines,
  fetchHeadlinesByCategory,
} from "../../api/fetchHeadlines";
import { categories } from "../../utils/constant";

import spinner from "../../assets/spinner.gif";

const Headlines = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [queryParams] = useSearchParams();
  const category = queryParams.get("category") || null;

  const { data: topHeadlines, status: topHeadlinesStatus } = useQuery({
    queryKey: ["headlines", currentPage, category],
    queryFn: () => fetchHeadlines(currentPage, category),
  });

  return (
    <div className="container mx-auto px-4 py-4 min-h-[70dvh]">
      <div className="flex items-center justify-between mb-10 gap-7 lg:gap-0">
        <h1 className="text-3xl font-semibold text-primary-900 min-w-max">
          Top Headlines
        </h1>
        <div className="flex items-center overflow-auto gap-4 justify-end">
          <div className="flex items-center gap-3 overflow-x-auto customScrollbar py-2">
            {categories.map(category => (
              <Link
                key={category.slug}
                to={`?category=${category.slug}`}
                className="p-2 border border-tertiary-400 hover:bg-tertiary-900 hover:text-tertiary-200 transition-all duration-300 ease-in"
              >
                <p>{category.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {topHeadlinesStatus === "pending" && (
          <div className="absolute left-1/2 mt-10 -translate-x-1/2">
            <img src={spinner} alt="loader" className="w-20 h-20" />
          </div>
        )}

        {topHeadlinesStatus === "error" && (
          <div className="absolute left-1/2 mt-10 border border-red-500 p-4 text-red-900 shadow-md shadow-red-300 -translate-x-1/2">
            <p>Something went wrong! please try again.</p>
          </div>
        )}
        {topHeadlines?.articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={article.urlToImage || "https://via.placeholder.com/300"}
              alt={article.title}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-primary-900 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-700">{article.description}</p>
              <Link
                to={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-primary-600 hover:text-primary-700"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headlines;
