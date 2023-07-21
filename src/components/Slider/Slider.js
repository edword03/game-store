'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export const SliderScreens = ({ slides, altTitle }) => {
	return (
		<Swiper
			spaceBetween={20}
			slidesPerView={3}
			loop
			modules={[Navigation]}
			navigation
			draggable
			breakpoints={{
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			}}
		>
			{slides.results.map((slide) => (
				<SwiperSlide key={slide.id}>
					<Image
						src={slide.image}
						width={500}
						height={0}
						sizes="100vw"
						style={{ width: '100%', height: 'auto' }}
						alt={`${altTitle} screenshot`}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
