import React from 'react';
import { ProductCard } from 'components';
import { Swiper, SwiperSlide } from "swiper/react";
import { PRODUCTS } from 'constants/Products';
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export const ProductCardsSlider: React.FC = () => (
  <>
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {PRODUCTS.map(({ id, img, title, size }) =>
        <SwiperSlide key={id}>
            <ProductCard
              img={img}
              title={title}
              size={size}
            />
        </SwiperSlide>
      )}
    </Swiper>
  </>
);
