
import { Skeleton } from '@/shadcn_ui/skeleton';
import React from 'react'


const InfoText = ({ loadingState }) => {
    const containerClass = "flex flex-col items-center sm:items-start justify-center text-center sm:text-left max-w-[100vw] max-h-[100vh]";
    return (

        <>
            {loadingState ? (<div className={containerClass}>
                <Skeleton className="w-72 sm:h-12 sm:w-80 mb-2" />
                <Skeleton className="w-72 sm:h-12 sm:w-80 mb-2" />
                <Skeleton className="h-12 w-[225px] mb-2" />
                <Skeleton className="h-8 w-[200px] mb-2" />
                <Skeleton className="h-8 w-[200px]" />
            </div>): (<div className={containerClass} >
                <h1 className="text-4xl sm:text-7xl mb-6">Welcome to <br />my portfolio!</h1>
                <h2 className="text-3xl sm:text-6xl font-extrabold text-center sm:text-left inline-block">
                    Ali Talip Coşkun
                </h2>
                <h3 className="inline-block">Senior Computer Engineering Student</h3>
                <p className="block">Data Scientist Candidate</p>
            </div >)}
        </>
    )
};

export default InfoText;