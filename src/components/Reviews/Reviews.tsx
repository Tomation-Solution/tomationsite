import React from "react";
import { ReviewsContainer } from "./Reviews.styles";
import { GlobalHeader } from "../../global/glob-styles";
import ReviewItem from "./ReviewItem";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Reviews = () => {
  return (
    <ReviewsContainer>
      <GlobalHeader style={{ textAlign: "center" }}>Reviews</GlobalHeader>

      <Swiper
        className="mySwiper"
        pagination={true}
        modules={[Pagination]}
        spaceBetween={60}
        grabCursor={true}
      >
        <SwiperSlide>
          <ReviewItem
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
            name={"John Andy"}
            title={"College Student"}
            starNo={0}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewItem
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
            name={"John Andy"}
            title={"College Student"}
            starNo={0}
          />
        </SwiperSlide>
      </Swiper>
    </ReviewsContainer>
  );
};

export default Reviews;
