import React from 'react'
import ExpCarousel from '../UI/ExpCarousel'

const Experience = ({data}) => {
    return (
        <div className="container flex flex-col sm:flex-col justify-center items-center sm:mt-0 space-y-4 sm:space-y-0 sm:space-x-4">
            <div div className="container flex flex-col items-center sm:items-start justify-center text-left max-w-xl" >
                <h3 className="text-2xl sm:text-4xl font-bold mb-2">Passion about Computer Science</h3>
                <p className="text-base sm:text-lg">
                    Pariatur proident et dolor sit et laborum enim Lorem tempor nostrud. Exercitation qui pariatur eiusmod sint amet. Pariatur veniam magna est ipsum do cupidatat culpa laboris dolor in Lorem.
                    <br /><br />
                    Nostrud sit elit non aute laboris ut sint veniam fugiat velit esse aliqua incididunt. Duis duis ullamco magna exercitation excepteur commodo velit id incididunt consectetur elit nostrud. Mollit amet voluptate incididunt anim laboris duis enim nulla. Adipisicing aliqua nisi fugiat laborum elit aliquip veniam aliqua cillum. Cupidatat labore ipsum ut ex sint amet consectetur.
                    <br /><br />
                    Culpa excepteur sunt dolor amet voluptate ipsum id esse ea eiusmod cupidatat. Excepteur excepteur nostrud cupidatat exercitation quis. Ut do consequat exercitation non adipisicing velit ut consectetur pariatur ex irure qui eu. Ea tempor aliquip aute quis adipisicing est irure commodo consectetur est quis cillum aliquip aliqua. Proident in cupidatat eu reprehenderit ullamco esse proident laboris aliqua in do occaecat amet.
                </p>
            </div >
            <ExpCarousel kind={"Internship"} data={data} />
        </div >
    )
}

export default Experience