import type { NextPage } from 'next'
import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import PageContainer from '../components/PageContainer';
import Image, { ImageProps } from 'next/image';
import sushiImg from '../assets/sushi.jpg'
import sushi2Img from '../assets/sushi2.jpg'
import sushi3Img from '../assets/sushi3.jpeg'
import sushiPlate from '../assets/sushistockphoto.jpeg'

const Home: NextPage = () => {
  return (
    <PageContainer>
      <SushiCarousel />
      <div className='relative flex w-full flex-row'>
        <div className="flex-1 -translate-x-1/2">
          <Image alt="sushi" src={sushiPlate} />
        </div>
        <div className="flex-1" />
      </div>
      <SushiCarousel />
      <SushiCarousel />
    </PageContainer>

  )
}

export default Home
const SushiCarousel = () => {

  return (
    <div className="flex max-h-[50vh]">
      <Carousel autoscroll>
        <div className='w-full relative flex-shrink-0'>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <h2 className=' text-white p-6 text-2xl md:text-6xl'>¡Pedí tu sushi hoy!</h2>
          </div>
          <Image className="h-full object-cover max-h-[100%]" alt="sushi" src={sushi2Img} />
        </div>
        <SushiImage alt="Sushi 1" src={sushiImg} />
        <SushiImage alt="Sushi 3" src={sushi3Img} />
      </Carousel>
    </div>
  )
}


const SushiImage = (props: ImageProps) => {
  return (<Image {...props} className="h-full object-cover max-h-[100%]" />)
}