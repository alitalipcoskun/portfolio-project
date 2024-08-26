import React from 'react';
import { Input } from '@/shadcn_ui/input';
import { Textarea } from '@/shadcn_ui/textarea';
import { Button } from '@/shadcn_ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shadcn_ui/card';
import SectionContainer from '../UI/SectionContainer';
import { Skeleton } from '@/shadcn_ui/skeleton';

const ContactPage = ({ isLoading }) => {
    return (
        <SectionContainer className="container flex flex-col my-10 justify-center items-center h-[100vh] w-[100vw]">
            <div>
                {isLoading ? (<div className="flex flex-col items-center sm:items-start justify-center text-left sm:text-left max-w-full mb-10">
                    <Skeleton className="w-72 sm:h-12 sm:w-80 mb-2" />
                    <Skeleton className="w-72 sm:h-12 sm:w-80 mb-2" />
                    <Skeleton className="h-12 w-[225px] mb-2" />
                </div>) : (<div div className="flex flex-col items-center sm:items-start justify-center text-left max-w-full mb-10" >
                    <h3 className="text-2xl sm:text-4xl font-bold mb-2">Work and Internship Experiences</h3>
                    <p className="text-base sm:text-lg">
                        Pariatur proident et dolor sit et laborum enim Lorem tempor nostrud. Exercitation qui pariatur eiusmod sint amet. Pariatur veniam magna est ipsum do cupidatat culpa laboris dolor in Lorem.
                        <br /><br />
                        Nostrud sit elit non aute laboris ut sint veniam fugiat velit esse aliqua incididunt. Duis duis ullamco magna exercitation excepteur commodo velit id incididunt consectetur elit nostrud. Mollit amet voluptate incididunt anim laboris duis enim nulla. Adipisicing aliqua nisi fugiat laborum elit aliquip veniam aliqua cillum. Cupidatat labore ipsum ut ex sint amet consectetur.
                        <br /><br />
                        Culpa excepteur sunt dolor amet voluptate ipsum id esse ea eiusmod cupidatat. Excepteur excepteur nostrud cupidatat exercitation quis. Ut do consequat exercitation non adipisicing velit ut consectetur pariatur ex irure qui eu. Ea tempor aliquip aute quis adipisicing est irure commodo consectetur est quis cillum aliquip aliqua. Proident in cupidatat eu reprehenderit ullamco esse proident laboris aliqua in do occaecat amet.
                    </p>
                </div >)}
            </div>
            <Card className="w-full p-6">
                <CardHeader>
                    <CardTitle>Contact Me</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name">Name</label>
                            <Input id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="surname">Surname</label>
                            <Input id="surname" placeholder="Enter your surname" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email">Email</label>
                            <Input id="email" type="email" placeholder="Enter your email" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="topic">Topic</label>
                            <Input id="topic" placeholder="Enter the topic" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="message">Message</label>
                            <Textarea id="message" placeholder="Enter your message" rows={6} required />
                        </div>
                        <Button type="submit" className="w-full max-w-40">Send</Button>
                    </form>
                </CardContent>
            </Card>
        </SectionContainer>
    );
}

export default ContactPage;
