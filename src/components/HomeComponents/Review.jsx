import React, { use } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';

const Review = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise)

    return (
        <div className="py-16 px-10">
            <motion.h1 initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }} className="text-4xl text-center font-bold mb-10">What Our Clients Say</motion.h1>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={2.5}
                spaceBetween={40}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 150,
                    modifier: 1.4,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper max-w-6xl"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id} className="flex justify-center">

                        <motion.div className="review-card card shadow-xl rounded-xl p-7 bg-base-200 w-72" initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}>
                            <div className="flex items-center gap-4">
                                <div className="avatar">
                                    <div className="w-16 h-16 rounded-full">
                                        <img src={review.avatar} alt={review.name} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold ">{review.name}</h3>
                                    <p className="text-sm">{review.role}</p>
                                </div>
                            </div>

                            <div className="flex mt-3 text-yellow-400 text-xl">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                                    <span key={i} className="text-gray-300">★</span>
                                ))}
                            </div>

                            <p className="text-gray-400 mt-3 text-base leading-relaxed">
                                {review.review}
                            </p>

                            <p className="text-xs text-gray-400 mt-4">
                                {new Date(review.date).toLocaleDateString()}
                            </p>
                        </motion.div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Review;
