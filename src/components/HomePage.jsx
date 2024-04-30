import React from 'react'
import MenCollection from './MenCollection'
import WomenCollection from './WomenCollection'
import HeroBanner from './HeroBanner'

const HomePage = () => {
  return (
    <div>
        <HeroBanner/>
        <MenCollection/>
        <WomenCollection/>
    </div>
  )
}

export default HomePage