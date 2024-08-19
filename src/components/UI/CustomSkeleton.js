import React from 'react'


const CustomSkeleton = ({ className }) => {
  return (
    <div className={`bg-gray-200 animate-pulse ${className}`}></div>
  );
};

export default CustomSkeleton;
