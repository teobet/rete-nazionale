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
        {props.pages?.map((p) => (
          <SwiperSlide key={p.date.toString()}>
            <img src={p.image} alt="" />
            <div className="title">{p.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
