import { Link } from "react-router-dom";
import WelcomeMessage from "./WelcomeMessage";
import SectionHeader from "../../components/UI/SectionHeader";
import TopHeadlinesPagination from "./TopHeadlinesPagination";
import Categories from "./Categories";

const Home = () => {
  return (
    <section>
      <WelcomeMessage />

      <div className="mt-8">
        <div className="container mx-auto flex items-center justify-between px-3 sm:px-0">
          <SectionHeader>top headlines</SectionHeader>
          <Link
            to="/headlines"
            className="hover:text-primary-400 transition-all duration-300"
          >
            Show All &rarr;
          </Link>
        </div>
        <TopHeadlinesPagination />
      </div>

      <Categories />
    </section>
  );
};

export default Home;
