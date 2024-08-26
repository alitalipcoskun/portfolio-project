
import { Skeleton } from '@/shadcn_ui/skeleton';


const AboutMe = ({ isLoading, data }) => {
    return (
        <div className="container flex flex-col sm:flex-row justify-center items-center sm:mt-0 space-y-2 sm:space-y-0 sm:space-x-2 w-full h-full sm:h-[100vh]">
            {isLoading ? (<div className="flex flex-col items-center sm:items-start justify-center text-left sm:text-left max-w-full">
                <Skeleton className="w-72 sm:h-12 sm:w-80 mb-2" />
                <Skeleton className="w-72 sm:h-12 sm:w-80 mb-2" />
                <Skeleton className="h-12 w-[225px] mb-2" />
                <Skeleton className="h-8 w-[200px] mb-2" />
                <Skeleton className="h-8 w-[200px]" />
            </div>) : (<div className="flex flex-col items-center sm:items-start justify-center text-left max-w-full">
                <h3 className="text-3xl align-middle text-center font-bold mb-6">About Me</h3>
                {data.map(({paragraph}, idx) => {
                    return <p key={idx} className="text-base sm:text-lg mb-4">{paragraph.trim()}</p>
                })}
            </div>)}
        </div>
    )
};

export default AboutMe;
