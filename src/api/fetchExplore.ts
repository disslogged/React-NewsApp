import { ApiResponse } from "../shared/types";

const API_KEY = "e7c429b89fdd4a12b4ddf6c3c6ff3def";

export type Sort = "relevancy" | "popularity" | "publishedAt";

export const fetchExplore = async (
  query: string = "Apple",
  sort: Sort = "relevancy"
): Promise<ApiResponse> => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&sortBy=${sort}&apiKey=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};
