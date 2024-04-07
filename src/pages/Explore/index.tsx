import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchExplore } from "../../api/fetchExplore";
import spinner from "../../assets/spinner.gif";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("united");
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, status } = useQuery({
    queryKey: ["explore", searchQuery],
    queryFn: () =>
      searchQuery.length > 2
        ? fetchExplore(searchQuery)
        : Promise.resolve(null),
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <div className="container mx-auto px-4 py-4 relative min-h-[80dvh]">
      <h1 className="text-3xl font-semibold text-primary-900 mb-6">
        Explore News
      </h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          ref={inputRef}
          value={searchQuery}
          onChange={handleSearch}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-primary-500"
        />
      </div>

      {searchQuery.length <= 2 && (
        <div className="text-xl text-tertiary-500">
          <p>please search for everything now ...</p>
        </div>
      )}

      {status === "pending" && (
        <div className="absolute left-1/2 mt-10 -translate-x-1/2">
          <img src={spinner} alt="loader" className="w-20 h-20" />
        </div>
      )}

      {status === "error" && (
        <div className="absolute left-1/2 mt-10 border border-red-500 p-4 text-red-900 shadow-md shadow-red-300 -translate-x-1/2">
          <p>Something went wrong! please try again.</p>
        </div>
      )}

      {status === "success" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.articles.map((article, i: number) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={article.urlToImage || "https://via.placeholder.com/300"}
                alt={article.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-primary-800 mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-700">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-primary-600 hover:text-primary-700"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;
