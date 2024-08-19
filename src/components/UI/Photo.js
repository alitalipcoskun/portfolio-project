
import { Skeleton } from '@/shadcn_ui/skeleton';
import Image from 'next/image'

const Photo = ({ size, src, loadingState }) => {
    const sizeClasses = size === 'large' ? 'h-80 w-80 sm:h-120 sm:w-120' : 'h-64 w-64 sm:h-96 sm:w-96';
    
    return (
        <div className={`relative ${sizeClasses} rounded-full overflow-hidden`}> 
            {loadingState ? (<Skeleton className={`${sizeClasses}`}>
            </Skeleton>):
            (
                <Image
                src= {src}
                alt="Picture"
                layout="fill"
                objectFit="cover"
            />
            )}
        </div>
    )
}

export default Photo;