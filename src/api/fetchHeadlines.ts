import { ApiResponse } from "../shared/types";
const API_KEY = "e7c429b89fdd4a12b4ddf6c3c6ff3def";

export const fetchHeadlines = async (
  page: number = 1,
  category?: string | null
): Promise<ApiResponse> => {
  const response = await fetch(
    category
      ? `https://newsapi.org/v2/top-headlines?country=us&pageSize=50&page=${page}&category=${category}&apiKey=${API_KEY}`
      : `https://newsapi.org/v2/top-headlines?country=us&pageSize=50&page=${page}&apiKey=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};

export const fetchTopHeadlines = async (
  pageSize: number
): Promise<ApiResponse> => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&apiKey=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
