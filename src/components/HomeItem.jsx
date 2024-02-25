import React from 'react';

const FeatureItem = ({ order,imageUrl, description }) => {
  return (
    <div className="md:flex md:items-center md:justify-center my-8 p-6 bg-gray-200 rounded-lg">
      <img src={imageUrl} alt="" className="md:w-80 md:mr-4 md:rounded-full md:h-80 md:order-2 mb-4 md:mb-0 bg-pink-400" />
      <div className={"md:w-2/3 md:order-"+order}>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
