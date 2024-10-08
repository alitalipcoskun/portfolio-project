import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shadcn_ui/card';
import Photo from './Photo';
import { Badge } from '@/shadcn_ui/badge';
import Link from 'next/link';
import { Skeleton } from '@/shadcn_ui/skeleton';

const ProjectCard = ({ item, isLoading }) => {
    const { title, description, src, badges, github_link } = item;

    return (
        <Card className="transition hover:scale-105 rounded-md shadow-lg duration-200 justify-center">
            <CardHeader>
                {isLoading ? <Skeleton className="h-6 w-1/2 mb-2"/> : <CardTitle>{title}</CardTitle>}
                {isLoading ? (
                    <Skeleton className="h-4 w-3/4 mb-4" />
                ) : (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <div className="mb-4 flex flex-wrap gap-2 justify-left">
                    {isLoading ? (
                        <Skeleton className="h-4 w-full mb-2" />
                    ) : (
                        badges["badges"].map((skill, idx) => (
                            <Badge key={idx} className="px-2 py-1 text-center">{skill}</Badge>
                        ))
                    )}
                </div>
                <div className="flex justify-center mb-4">
                    {isLoading ? (
                        <Skeleton className="h-32 w-32 mb-4" />
                    ) : (
                        <Photo
                            className="rounded-md object-contain w-32 h-32"
                            src={src}
                            alt="Project image"
                        />
                    )}
                </div>
                {isLoading ? (
                    <Skeleton className="h-8 w-24" />
                ) : (
                    <Link className="bg-white text-black border-black py-1 px-2 rounded-md border" href={`${github_link}`} rel="noopener noreferrer" target="_blank">Repo</Link>
                )}
            </CardContent>
        </Card>
    );
}

const ProjectCardGrid = ({ items, isLoading, projectAmount }) => {
    const renderedItems = items.slice(0, projectAmount);
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {renderedItems.map((item, index) => (
                <ProjectCard key={index} item={item} isLoading={isLoading}/>
            ))}
        </div>
    );
}

export default ProjectCardGrid;
