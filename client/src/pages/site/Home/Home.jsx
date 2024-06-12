import React from 'react'
import Slider from '../../../components/site/Section1/Slider'
import Section2 from '../../../components/site/Section2/Section2'
import Section3 from '../../../components/site/Section3/Section3'
 import { Helmet } from 'react-helmet'
const Home = () => {
  return (
    <div>
     <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider/>
      <Section2/>
      <Section3/>
    </div>
  )
}

export default Home
