import React from 'react'
import MainPage from '../../components/MainPage';
import CategoryWrapper from './category/CategoryWrapper';
import FeaturedSelection from './FeaturedSelection';
import LatestRecipe from './LatestRecipe';
import NewsLetter from './NewsLetter';
import AboutSection from './AboutSection';
import CompanyLogo from './CompanyLogo';
import Subscription from './Subscription';

const Home = () => {
  return (
    <div className='container mx-auto '>
      <div className='flex flex-col justify-center items-center w-full py-20'>
       <MainPage />
       <CategoryWrapper />
      </div>

      {/* others components */}
      <FeaturedSelection />
      <LatestRecipe />
      <NewsLetter />
      <AboutSection/>
      <CompanyLogo />
      <Subscription />
      
    </div>
  )
}

export default Home; 






