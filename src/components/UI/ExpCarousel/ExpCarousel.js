
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shadcn_ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import React from 'react'
import UICard from '../Card/Card'
const ExpCarousel= ({data, kind}) => {
    return (
        <div className="flex justify-center items-center h-screen w-full px-4">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
                className="relative w-full max-w-screen-lg mx-auto"
            >
                <CarouselContent className="flex">
                    {data.map((card, index) => (
                        <CarouselItem
                            key={index}
                            className="flex-none w-full md:w-1/2 lg:w-1/3 p-6"
                        >
                            <UICard
                                title={card.title}
                                date={card.date}
                                description={card.displayed_description}
                                actual_description={card.description}
                                content_len={card.content_len}
                                kind={kind}
                                className={"shadow-lg h-full"}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default ExpCarousel;