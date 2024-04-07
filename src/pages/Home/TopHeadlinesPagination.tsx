import { useQuery } from "@tanstack/react-query";
import { fetchTopHeadlines } from "../../api/fetchHeadlines";
import { Virtual, Navigation, Pagination, Autoplay } from "swiper/modules";
import { UserIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import spinner from "../../assets/spinner.gif";

//  Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import formatDate from "../../utils/formatDate";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TopHeadlinesPagination = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["topNews"],
    queryFn: () => fetchTopHeadlines(15),
  });

  return (
    <Swiper
      modules={[Virtual, Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      centeredSlides={true}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      pagination={{
        type: "progressbar",
        clickable: true,
      }}
      navigation={true}
      virtual
      breakpoints={{
        800: {
          slidesPerView: 2,
        },

        1280: {
          slidesPerView: 3,
        },
      }}
      className="relative min-h-[400px] mb-5"
    >
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <img src={spinner} alt="loading" className="w-20 h-20" />
        </div>
      )}

      {data &&
        data.articles.map((article, i: number) => (
          <SwiperSlide className="min-w-[400px]" key={i}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden group"
            >
              <img
                src={
                  article.urlToImage === null
                    ? "https://placehold.co/600x400/EEE/31343C?font=lora&text=ImageNotFound"
                    : article.urlToImage
                }
                alt=""
                className="min-w-[427px] min-h-[425px] object-cover group-hover:blur-sm transition-all duration-300"
              />

              <div className="absolute inset-0 bg-secondary-100/50 hidden group-hover:block text-secondary-900">
                <div className="w-full h-full flex flex-col items-start justify-center px-7 text-justify">
                  <h2 className="text-xl ">{article.title}</h2>
                  <div className="flex items-center gap-3 mt-4 mb-2  text-secondary-700 font-bold">
                    <UserIcon className="w-9" />
                    <p>{article.author}</p>
                  </div>
                  <div className="flex items-center gap-3 text-secondary-700 font-bold">
                    <CalendarDaysIcon className="w-9 " />
                    <p>{formatDate(article.publishedAt)}</p>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}

      {error && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-red-300 border-2 border-double p-3 text-red-600">
          <p>Sorry Something Went Wrong! please Try Again.</p>
        </div>
      )}
    </Swiper>
  );
};

export default TopHeadlinesPagination;
