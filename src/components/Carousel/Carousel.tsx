import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PageT } from "../../types/Pages";
import "./carousel.scss";

export default function Carousel(props: { pages?: PageT[] }) {
  return (
    <div className="carousel">
      <Swiper
        className="swiper"
      >
        {props.pages?.map((page) => (
          <SwiperSlide key={page.date.toString()}>
            <img src={page.image} alt="" />
            <div className="title">{page.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
