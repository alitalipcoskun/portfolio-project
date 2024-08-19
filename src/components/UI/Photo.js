
import { Skeleton } from '@/shadcn_ui/skeleton';
import Image from 'next/image'

const Photo = ({ size, src, loadingState, isHeroImage, className }) => {
    const sizeClasses = size === 'large' ? 'h-80 w-80 sm:h-120 sm:w-120' : 'h-64 w-64 sm:h-96 sm:w-96';

    const heroClasses = isHeroImage ?  "rounded-full" : "";
    
    return (
        <div className={`relative ${sizeClasses} ${heroClasses} overflow-hidden ${className}`}> 
            {loadingState ? (<Skeleton className={`${sizeClasses} ${className}`}>
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