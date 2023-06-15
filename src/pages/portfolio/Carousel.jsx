//IMPORT STYLES
import './Carousel.css';
//IMPORT REACT COMPONENTS
import { useState } from 'react';
//IMPORT ICONS
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


const Carousel = ({img}) => {
    
    const slides = [
        {
          url: '/maze1.png',
        },
        {
          url: '/maze4.png',
        },
        {
          url: '/maze3.png',
        },
    
        {
          url: '/maze2.png',
        },
        {
          url: '/maze5.png',
        },
      ];
    const slides2 = [
        {
          url: '/quiz1.png',
        },
        {
          url: '/quiz2.png',
        },
        {
          url: '/quiz3.png',
        },
    
        {
          url: '/quiz4.png',
        },
        {
          url: '/quiz5.png',
        },
        {
            url: '/quiz6.png',
        },
        {
            url: '/quiz7.png',
        },
        {
            url: '/quiz8.png',
        },
        {
            url: '/quiz9.png',
        },

      ];
      const slides3 = [
        {
          url: '/car1.png',
        },
        {
          url: '/car2.png',
        },
        {
          url: '/car3.png',
        },
    
        {
          url: '/car4.png',
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
        <div className='Carousel mt-[-40px] w-[340px] h-[170px] sm:w-[370px]  sm:h-[200px] md:w-[420px]  md:h-[250px] xl:w-[620px]  xl:h-[350px]  2xl:w-[800px] 2xl:h-[420px]  relative group'>
           
            {img == '1' && ( <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 shadowspec'></div>)}
            {img == '2' && ( <div style={{ backgroundImage: `url(${slides2[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 shadowspec'></div>)}
            {img == '3' && ( <div style={{ backgroundImage: `url(${slides3[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 shadowspec '></div>)}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft className='text-secondary' onClick={prevSlide} size={30} />
            </div>
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