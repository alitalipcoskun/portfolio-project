
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shadcn_ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import React from 'react'
import UICard from './Card'
const ExpCarousel = ({ data, kind }) => {
    console.log(data);
    return (
        <div className="relative flex justify-center items-center py-3 w-full px-6">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
                className="w-full max-w-screen-lg mx-auto"
            >
                <CarouselContent className="flex">
                    {data.map((card, index) => (
                        <CarouselItem
                            key={index}
                            className="flex-none w-full md:w-1/2 lg:w-1/3 p-6"
                        >
                            <UICard
                                title={card.title}
                                dates={card.dates}
                                description={card.displayed_description}
                                actual_description={card.description}
                                content_len={card.content_len}
                                kind={kind}
                                className={"shadow-lg h-full"}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext></CarouselNext>
                <CarouselPrevious></CarouselPrevious>

            </Carousel>
        </div>
    );
};

export default ExpCarousel;