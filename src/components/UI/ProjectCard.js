import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shadcn_ui/card'
import React from 'react'
import Photo from './Photo'
import Image from 'next/image';
import { Badge } from '@/shadcn_ui/badge';
import Link from 'next/link';

const ProjectCard = ({ item }) => {
    const { title, description, src, badges } = item;
    return (
        <Card className="rounded-md w-auto">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription className>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="mb-4">
                {badges.map((skill, idx) => {
                    return <Badge key={idx} className={"mr-1"}>{skill}</Badge>
                })}
                </div>
                
                <Photo
                    className="round-md w-6 mb-2"
                    src={src}
                    alt="Picture"
                    layout="fill"
                    objectFit="cover"
                />
                <Link className= "bg-white text-black border-black py-1 px-2 rounded-md border" href="https://www.github.com" rel="noopener noreferrer" target="_blank">Repo</Link>

            </CardContent>
        </Card>
    )
}

export default ProjectCard