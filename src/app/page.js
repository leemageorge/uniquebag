import React from 'react'
import HeroSection from './components/HeroSection'
import FeatureData from './components/FeatureData'
import ShopByCategory from './components/ShopByCategory'
import CategorySection from './components/CategorySection'
import Announcement from './components/Announcement'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureData />
      <ShopByCategory />
      <CategorySection />
      <Announcement />
    </div>
  )
}

export default Home