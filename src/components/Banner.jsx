//IMPORT STYLES
import { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
    
    return ( 
        <div className="Banner">
            
            .
            <div className="flex flex-col xl:flex-row text-center  justify-center md:justify-around items-center">
                {/* <div className='absolute left-[200px] top-[260px] text-secondary text-[30px] font-bold tracking-wider hidden xl:block'>&lt;<span className='text-primary'> section </span>&gt;</div> */}
                
                <div className="">
                    <h1 className='mt-[60px] xl:mt-[200px] text-[30px] md:text-[40px] lg:text-[50px] m-w-[370px] md:w-[600px] text-primary text-left'>
                        <h1 className='text-center'>Hi,  i'm <span className='text-secondary'>Julek</span></h1>
                        <p class="line-1 anim-typewriter text-[20px] md:text-[30px]  2xl:text-left xl:text-[40px] ">I am Front-end/Web Developer </p>    
                    </h1>
                    <a href=""><button className='button mt-[-300px] py-[9px] px-[30px] md:py-[14px] md:px-[45px] bg-secondary text-primary  text-[14px] md:text-[20px] shadow-lg shadow-shadow'>About me</button></a>
                </div>
               
                <div className='relative bg-secondary relative h-[220px] w-[240px] md:h-[370px] md:w-[370px]  top-[110px] xl:top-[110px]  2xl:mt-[0]'>
                    <img src="../src/assets/port.png" alt="portait" className='h-[250px] md:h-[440px] absolute bottom-[0px] left-[44px]' /> 
                    <div className='z-[-1] h-[200px] w-[250px] md:h-[350px] md:w-[380px] bg-primary absolute bottom-[-50px] left-[50px] shadow-xl shadow-shadow'> </div>
                </div>
                {/* <div className='absolute right-[800px] bottom-[340px] text-secondary text-[30px] font-bold tracking-wider hidden xl:block'>&lt;<span className='text-primary'> section </span>/&gt;</div> */}
            </div>
        </div>
     );
}
 
export default Banner;