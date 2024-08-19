
import { Skeleton } from '@/shadcn_ui/skeleton';
import CustomSkeleton from '../UI/CustomSkeleton';

const AboutMe = ({ isLoading }) => {
    return (
        <div className="container flex flex-col sm:flex-row justify-center items-center sm:mt-0 space-y-2 sm:space-y-0 sm:space-x-2 w-[100vw] h-[100vh]">
            {isLoading ? (<div className="flex flex-col items-center sm:items-start justify-center text-center sm:text-left max-w-full">
                <Skeleton className="w-72 sm:h-12 sm:w-80 mb-2" />
                <Skeleton className="w-72 sm:h-12 sm:w-80 mb-2" />
                <Skeleton className="h-12 w-[225px] mb-2" />
                <Skeleton className="h-8 w-[200px] mb-2" />
                <Skeleton className="h-8 w-[200px]" />
            </div>) : (<div className="flex flex-col items-center sm:items-start justify-center text-left max-w-full">
                <p className="text-lg font-medium">About Me</p>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">Passion about Computer Science</h3>
                <p className="text-base sm:text-lg">
                    Hi all! <br/> <br/>
                    My name is Ali Talip COSKUN. I am a Senior Computer Engineering Student at Ankara University which is located in Ankara/Turkiye. During my education, I tried to improve myself in software development and data science. I enjoy solving problems in Leetcode and stubborn personality to achieve my dreams.
                    <br/>
                    <br/>
                    During my time at university, I have volunteered for IEEE from my freshman year through my junior year. I experienced different kidns of responsibilities. One of them was being Branch Manager of Twin Students Project. I was responsible for communication between my university and our partner university which was Yeditepe University in that year. In addition, I organized social events including volleyball tournament.
                    <br/>
                    <br/>
                    In my sophomore year, I became the Chairperson of Computer Society. Our goal was to create an ecosystem which is conducted with peer-to-peer learning in our campus.  To inspire others, we formed a Teknofest team and proudly secured 3rd place in the Artificial Intelligence in Health Competition. We also organized social events, webinars, tea talk events to improve our community within the department and software world.
                    <br/>
                    <br/>
                    My junior year was also filled with exciting opportunities, including participating in AI research with my professors and joining the Turkcell DevOps team in the Digital Services & Solutions department for five months.
                    <br/>
                    As a senior student, I have embraced roles that allow me to experience team leadership and team work. I also recieved feedbacks from my co-workers about my energy and positive attitudes. My friends and co-workers appreciate my enthusiasm for learning new things and my positive attitude. These experiences have helped me improve my problem-solving skills and continue to grow both personally and professionally.
                    <br/>
                    <br/>
                    Thank you for reading! 
                </p>
            </div>)}
        </div>
    )
};

export default AboutMe;
