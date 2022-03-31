import React from 'react';
import RecipeCard from "./RecipeCard";

const Main = () => {
    return (
        <main className='px-16 py-6 bg-gray-light-100 md:col-span-2'>
            <div className='flex justify-center md:justify-end'>
                <a href="#" className='btn text-orange border-orange md:border-2 hover:bg-orange hover:text-white transition ease-out duration-500'>Log in</a>
                <a href="#" className='btn text-orange ml-2 border-orange md:border-2 hover:bg-orange hover:text-white transition ease-out duration-500'>Sign up</a>
            </div>

            <header>
                <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
                <h3 className='text-2xl font-semibold'>For Ninjas</h3>
            </header>

            <div>
                <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
                <div className="mt-8 grid lg:grid-cols-3 gap-10">
                    <RecipeCard src={'assets/images/stew.jpeg'} name={'5 Bean Chilli Stew'} />
                    <RecipeCard src={'assets/images/noodles.jpeg'} name={'Veg Noodles'} />
                    <RecipeCard src={'assets/images/curry.jpeg'} name={'Tofu Curry'} />

                </div>
                <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>
                {/*<RecipeCard />*/}

                <footer className='flex justify-center mt-8'>
                    <div className='bg-gray-light-300 btn hover:shadow-inner transition ease-out duration-500 transform hover:scale-125 hover:bg-opacity-50'>Load more</div>
                </footer>

            </div>
        </main>


    )
}

export default Main;
