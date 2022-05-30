import React, { useState, useEffect } from 'react'
import { Container, ReviewCard, SectionWrapper, Typography } from 'components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import API, { Review } from '../../../services/ReviewsService'

import "swiper/css";
import "swiper/css/pagination";

export const Reviews: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        (async () => {
            const data = await API.getReviews();
            setReviews(data);
        })();
    }, []);


    return (
        <SectionWrapper>
            <Container>
                <Typography type='h5' textAlign='center'>
                    Over 50,000 5-Star Reviews
                </Typography>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {reviews.map(({ id, review, name, bgColor }) =>
                        <SwiperSlide key={id}>
                            <ReviewCard
                                backgroundColor={bgColor}
                                review={review}
                                name={name}
                            />
                        </SwiperSlide>
                    )}
                </Swiper>
            </Container>
        </SectionWrapper>
    );
}

