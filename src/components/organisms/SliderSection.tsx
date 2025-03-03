"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

type Props = {
	slides: {
		id: number;
		image: string;
		title: string;
	}[];
};

export const SliderSection = ({ slides }: Props) => {
	return (
		<section>
			<div className="slider mx-auto max-w-8xl py-10">
				<div className="relative">
					<div className="absolute left-0 top-0 z-10 h-full w-5 bg-gradient-to-r from-gray-100 to-transparent"></div>
					<Swiper
						spaceBetween={12}
						loop
						allowTouchMove={false}
						modules={[Autoplay]}
						speed={15000}
						autoplay={{
							delay: 0,
						}}
						freeMode
						slidesPerView={"auto"}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
						className="h-72"
					>
						{slides.map((slide) => (
							<SwiperSlide key={slide.id}>
								<Image src={slide.image} alt={slide.title} fill className="object-cover" />
							</SwiperSlide>
						))}
					</Swiper>
					<div className="absolute right-0 top-0 z-10 h-full w-5 bg-gradient-to-l from-gray-100 to-transparent"></div>
				</div>
			</div>
		</section>
	);
};
