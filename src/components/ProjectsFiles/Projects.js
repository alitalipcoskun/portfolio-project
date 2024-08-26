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
    console.log(items);
    return (
        <SectionContainer className={""}>
            <div className="flex flex-col items-center sm:items-start justify-center text-left max-w-full mb-8" >
                <h3 className="text-2xl sm:text-4xl font-bold mb-2">Projects</h3>
                <p className="text-base sm:text-lg">
                    Pariatur proident et dolor sit et laborum enim Lorem tempor nostrud. Exercitation qui pariatur eiusmod sint amet. Pariatur veniam magna est ipsum do cupidatat culpa laboris dolor in Lorem.
                    <br /><br />
                    Nostrud sit elit non aute laboris ut sint veniam fugiat velit esse aliqua incididunt. Duis duis ullamco magna exercitation excepteur commodo velit id incididunt consectetur elit nostrud. Mollit amet voluptate incididunt anim laboris duis enim nulla. Adipisicing aliqua nisi fugiat laborum elit aliquip veniam aliqua cillum. Cupidatat labore ipsum ut ex sint amet consectetur.
                    <br /><br />
                    Culpa excepteur sunt dolor amet voluptate ipsum id esse ea eiusmod cupidatat. Excepteur excepteur nostrud cupidatat exercitation quis. Ut do consequat exercitation non adipisicing velit ut consectetur pariatur ex irure qui eu. Ea tempor aliquip aute quis adipisicing est irure commodo consectetur est quis cillum aliquip aliqua. Proident in cupidatat eu reprehenderit ullamco esse proident laboris aliqua in do occaecat amet.
                </p>
            </div >
            <ProjectCardGrid items={items} isLoading={isLoading} projectAmount={projectAmount}></ProjectCardGrid>
            {!heightCondition && <Button variant="outline" onClick={clickHandler}>More project</Button>}
        </SectionContainer>
    )
}

export default Projects