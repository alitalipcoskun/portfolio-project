"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shadcn_ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import React from 'react'
import UICard from '../Card/Card'
const PhotoCarousel = ({ kind, data }) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-screen-lg px-4">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                    className="relative"
                >
                    <CarouselContent className="flex">
                        {data.map((card, index) => (
                            <CarouselItem
                                key={index}
                                className="flex-none w-full md:w-1/2 px-2"
                            >
                                <UICard
                                    title={card.title}
                                    description={card.description}
                                    content={card.displayed_content}
                                    actual_content={card.actual_content}
                                    content_len={card.content_len}
                                    kind={kind}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
                    <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
                </Carousel>
            </div>
        </div>
    );
};

export default PhotoCarousel;