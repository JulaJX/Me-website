import './Carousel.css';

import { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Carousel = ({img}) => {
    

    const slides = [
        {
          url: '/src/assets/maze1.png',
        },
        {
          url: '/src/assets/maze4.png',
        },
        {
          url: '/src/assets/maze3.png',
        },
    
        {
          url: '/src/assets/maze2.png',
        },
        {
          url: '/src/assets/maze5.png',
        },
      ];
      const slides2 = [
        {
          url: '/src/assets/quiz1.png',
        },
        {
          url: '/src/assets/quiz2.png',
        },
        {
          url: '/src/assets/quiz3.png',
        },
    
        {
          url: '/src/assets/quiz4.png',
        },
        {
          url: '/src/assets/quiz5.png',
        },
        {
            url: '/src/assets/quiz6.png',
        },
        {
            url: '/src/assets/quiz7.png',
        },
        {
            url: '/src/assets/quiz8.png',
        },
        {
            url: '/src/assets/quiz9.png',
        },

      ];
      const slides3 = [
        {
          url: '/src/assets/car1.png',
        },
        {
          url: '/src/assets/car2.png',
        },
        {
          url: '/src/assets/car3.png',
        },
    
        {
          url: '/src/assets/car4.png',
        },
     
      ];
      let sLenght = 5;
      let slide = slides
      if(img == '2'){sLenght+=4}
      if(img == '3'){sLenght-=1}
      const [currentIndex, setCurrentIndex] = useState(0);

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? sLenght - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === sLenght - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };

    return ( 
        <div className='Carousel  h-[350px] xl:w-[800px] xl:h-[420px]  relative group'>
           

            {img == '1' && ( <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 shadowspec'></div>)}
            {img == '2' && ( <div style={{ backgroundImage: `url(${slides2[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 shadowspec'></div>)}
            {img == '3' && ( <div style={{ backgroundImage: `url(${slides3[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 shadowspec '></div>)}
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft className='text-secondary' onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight className='text-secondary' onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2 mt-[25px]'>
                {slides.map((slides, slideIndex) => (
                <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className='text-2xl cursor-pointer'
                >
                    <RxDotFilled className='text-primary'/>
                </div>
                ))}
            </div>
        </div>
     );
}
 
export default Carousel;