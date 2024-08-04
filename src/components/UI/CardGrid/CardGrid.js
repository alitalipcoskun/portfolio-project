import React from 'react'
import UICard from '../Card/Card'


const CardGrid = () => {
    const cards = [
        {
            title: 'Deneme 1',
            description: '24.11.1999-24.11.2024',
            content: "Tempor cillum ipsum reprehenderit voluptate velit esse. Do non cupidatat in amet. Aliqua occaecat amet laborum excepteur adipisicing labore eiusmod sint magna veniam ad. Laboris veniam qui consequat sint exercitation velit consequat eiusmod culpa. In ex non veniam occaecat."
        },
        {
            title: 'Deneme 2',
            description: '01.01.2000-01.01.2025',
            content: 'Qui aliquip mollit duis proident duis incididunt nulla nulla officia elit commodo anim minim est. Dolore pariatur ea ut sint elit. Lorem anim enim elit velit minim est ex ullamco labore ex ad Lorem incididunt consectetur. Cillum ea enim amet est deserunt irure commodo quis magna aute adipisicing consequat.'
        },
        {
            title: 'Deneme 3',
            description: '10.10.2000-10.10.2025',
            content: 'Elit aute eiusmod duis mollit magna deserunt non amet. Nisi do ullamco Lorem dolor tempor exercitation ad aute reprehenderit. Mollit ipsum excepteur incididunt quis consequat nisi duis ipsum. Tempor consequat laboris duis nulla officia veniam aute.'
        },
        {
            title: 'Deneme 4',
            description: '15.05.2001-15.05.2026',
            content: 'Exercitation sin'
        }
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center sm:items-center mt-2 sm:mt-0 space-y-4 sm:space-y-0 sm:space-x-4">
            {cards.map((card, index) => (
                <UICard
                    key={index}
                    title={card.title}
                    description={card.description}
                    content={card.content}
                />
            ))}
        </div>
    )
}

export default CardGrid