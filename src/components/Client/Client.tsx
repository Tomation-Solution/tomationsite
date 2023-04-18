import React from "react";
import { ClientContainer } from "./Client.styles";
import { GlobalHeader } from "../../global/glob-styles";
import ClientItem from "./ClientItem";

import Client1 from "../../assets/Client (1).png";
import Client2 from "../../assets/Client (2).png";
import Client3 from "../../assets/Client (3).png";
import Client4 from "../../assets/Client (4).png";
import Client5 from "../../assets/Client (5).png";
import Client6 from "../../assets/Client (6).png";
import Client7 from "../../assets/Client (7).png";
import Client8 from "../../assets/Client (8).png";
import Client9 from "../../assets/Client (9).png";
import Client10 from "../../assets/Client (10).png";
import Client11 from "../../assets/Client (11).png";
import Client12 from "../../assets/Client (12).png";
import Client13 from "../../assets/Client (13).png";
import Client14 from "../../assets/Client (14).png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Client = () => {
  return (
    <ClientContainer>
      <GlobalHeader style={{ textAlign: "center" }}>Our Clientele</GlobalHeader>
      <div className="client-items">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ClientItem image={Client1} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientItem image={Client2} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientItem image={Client3} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientItem image={Client4} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientItem image={Client5} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientItem image={Client6} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientItem image={Client7} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientItem image={Client8} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientItem image={Client9} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientItem image={Client10} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientItem image={Client11} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientItem image={Client12} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientItem image={Client3} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientItem image={Client14} />
          </SwiperSlide>
        </Swiper>
      </div>
    </ClientContainer>
  );
};

export default Client;
