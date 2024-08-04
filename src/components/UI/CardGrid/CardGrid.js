import React from 'react'
import UICard from '../Card/Card'


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
const CardGrid = () => {
    const renderedData = cards.map((element) => {
        if (element['content'].length > 100) {
            let displayedContent = "";
            for (let i = 0; i <= 100; i++) {
                displayedContent += element['content'][i];
            }
            return {
                ...element,
                displayed_content: displayedContent,
                content_len: element['content'].length
            }
        } else {
            return {
                ...element,
                content_len: element['content'].length,
                displayed_content: element['content']
            }
        }

    })

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl w-full">
                {renderedData.map((card, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <UICard
                            title={card.title}
                            description={card.description}
                            content={card.displayed_content}
                            actual_content={card.content}
                            content_len={card.content_len}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardGrid