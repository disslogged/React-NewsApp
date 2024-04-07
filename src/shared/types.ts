export type Category = {
  name: string;
  slug: string;
  image: string;
};

export type Article = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type ApiResponse = {
  articles: Article[];
};
