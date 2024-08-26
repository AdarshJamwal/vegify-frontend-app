

import React from 'react'
import FeaturedImg from '../../assets/featured.webp'
const FeaturedSelection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center 
    my-4 md:gap-20 gap-12 px-5 lg:px-10 sm:my-20'>
        <div className='relative'>
            <div className='absolute top-4 left-5 bg-white text-secondary px-3 py-1 
             rounded-md uppercase tracking-wider'>Featured Recipe</div>
            <img src={FeaturedImg} alt="featured image" className='rounded-md' />

        </div>
        <div className='text-start sm:w-1/2'>
            <h2 className='text-3xl font-semibold text-secondary
             sm:text-5xl sm:leading-relaxed'>Pineapple + Smoked Jackfruit Pizza</h2>
             <p className='text-xl mt-4 text-[#5c5c5c]'>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Ad, ullam sapiente dolorem perspiciatis obcaecati quod iusto, 
              consequatur amet quidem veritatis omnis necessitatibus architecto maiores beatae 
              culpa consequuntur? Sequi, distinctio error?</p>
              <div className='lg:mt-0 lg:flex-shrink-0'>
                <div className='mt-12 inline-flex'>
                  <button className='py-4 px-8 hover:bg-btnColor text-secondary
                  w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none  rounded-lg
                  hover:text-white'>View Recipe</button>
                </div>
              </div>
        </div>
    </div>
  )
}

export default FeaturedSelection; 



