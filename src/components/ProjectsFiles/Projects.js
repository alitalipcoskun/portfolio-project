import React, { useState } from 'react'
import ProjectCardGrid from '../UI/ProjectCard'
import SectionContainer from '../UI/SectionContainer'
import { Button } from '@/shadcn_ui/button';



const Projects = ({ isLoading, items }) => {
    const [projectAmount, setProjectAmount] = useState(2);
    const heightCondition = projectAmount >= items.length

    const clickHandler = () => {
        setProjectAmount((prev) => {return prev + 2})
    }
    return (
        <SectionContainer className={""}>
            <div className="flex flex-col items-center sm:items-start justify-center text-left max-w-full mb-8" >
                <h3 className="text-2xl sm:text-4xl font-bold mb-2">Projects</h3>
                <p className="text-base sm:text-lg">
                    As a computer engineering student in Turkiye, I tried to improve myself in software development which includes Front-end web application technologies such as tailwind, react, next.js, and have knowledge about Java and C# programming languages. I also have passion to developing applications with Python programming language which I have strong foundation. Moreover, I gained experience in Software Development Lifecycle and DevOps in my long term internship experience. I also improved myself in Machine Learning and Data Science and seek for opportunities in this field. There are projects that I cannot share you in here. However, I will share the worthy projects and allowed to be published. Keep updated by this section to get knowledge in my self-learning journey.
                </p>
            </div >
            <ProjectCardGrid items={items} isLoading={isLoading} projectAmount={projectAmount}></ProjectCardGrid>
            {!heightCondition && <Button variant="outline" onClick={clickHandler}>More project</Button>}
        </SectionContainer>
    )
}

export default Projects