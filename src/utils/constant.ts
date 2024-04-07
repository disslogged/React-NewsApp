import { Category } from "../shared/types";

import general from "../assets/categories/general.png";
import business from "../assets/categories/business.png";
import entertainment from "../assets/categories/Entertainment.png";
import health from "../assets/categories/health.png";
import science from "../assets/categories/science.png";
import sports from "../assets/categories/sports.png";
import technology from "../assets/categories/technology.png";

export const navLinksInfo = [
  { name: "Home", slug: "/" },
  { name: "Explore", slug: "/explore" },
  { name: "Headlines", slug: "/headlines" },
  { name: "About", slug: "/about" },
];

export const categories: Category[] = [
  {
    name: "Business",
    slug: "business",
    image: business,
  },
  {
    name: "General",
    slug: "general",
    image: general,
  },
  {
    name: "Entertainment",
    slug: "entertainment",
    image: entertainment,
  },
  {
    name: "Health",
    slug: "health",
    image: health,
  },
  {
    name: "Science",
    slug: "science",
    image: science,
  },
  {
    name: "Sports",
    slug: "sports",
    image: sports,
  },
  {
    name: "Technology",
    slug: "technology",
    image: technology,
  },
];
