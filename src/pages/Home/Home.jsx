import  Slider from '../../components/Slider/Slider';
import React from 'react';
import './Home.scss';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts/>
    </div>
  )
}

export default Home