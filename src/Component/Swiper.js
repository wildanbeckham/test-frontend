import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../assets/css/swiper.css";

import { Autoplay, Pagination } from "swiper";

export default function App() {
  const icon = ["1", "2", "3", "4", "5", "1", "2"];
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {window.innerWidth > 900 ? (
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              rewind={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {icon.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={"/images/swiper/" + item + ".svg"} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              rewind={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {icon.map((item) => (
                <SwiperSlide key={item.swiper}>
                  <img src={"/images/swiper/" + item + ".svg"} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}
