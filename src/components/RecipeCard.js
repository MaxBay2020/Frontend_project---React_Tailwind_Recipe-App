import React from 'react';

const RecipeCard = ({src, name}) => {
    return (
            <div className='card hover:shadow-xl'>
                <img className='w-full h-32 sm:h-48 object-cover' src={src} alt="recipe"/>
                <div className='m-4'>
                    <span className='font-bold'>{name}</span>
                    <span className='block text-gray text-sm'>Recipe by Mario</span>
                </div>
                <div className='badge'>
                    <svg className='w-5 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>25 mins</span>
                </div>
            </div>
    );
};

export default RecipeCard;
