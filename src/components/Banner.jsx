//IMPORT STYLES
import './Banner.css';
//IMPORT REACT COMPONENTS
import { useEffect, useState } from 'react';
//IMPORT PICTURE
import portait from '../assets/port.png';



const Banner = () => {
    
    return ( 
        <div className="Banner">
            
            .
            <div className="flex flex-col xl:flex-row text-center  justify-center md:justify-around items-center">

                <div className="flex items-center justify-center flex-col">
                    <div className='mt-[60px] xl:mt-[170px] text-[25px] wrap sm:text-[30px] md:text-[40px] lg:text-[50px] m-w-[370px] md:w-[600px] text-primary text-left scale-[0.9]'>
                        <h1 className='text-center'>Hi,  i'm <span className='text-secondary'>Julek</span></h1>
                        <p className="line-1 anim-typewriter text-[16px] sm:text-[20px] md:text-[30px]  2xl:text-left xl:text-[37px] ">I am Front-end/Web Developer </p>    
                    </div>
                    <a href="#about"><button className='button mt-[-100px] py-[9px] px-[30px] md:py-[14px] md:px-[45px] bg-secondary text-primary  text-[14px] md:text-[17px] shadow-lg shadow-shadow'>About me</button></a>
                </div>
               
                <div className='relative h-[170px] w-[190px] sm:h-[220px] sm:w-[240px] md:h-[370px] md:w-[370px]  top-[100px] md:top-[160px] xl:top-[110px] bx hover scale-[0.9]'>
                    <img src={portait} alt="portait" className='h-[200px] sm:h-[250px] md:h-[440px] absolute bottom-[0px] left-[44px] bx z-[2] spread3'/> 
                    <div className='z-[-1] h-[150px] w-[200px] sm:h-[200px] sm:w-[250px] md:h-[369px] md:w-[380px] bg-primary absolute bottom-[-20px] sm:bottom-[-50px] left-[30px] sm:left-[50px] shadow-xl shadow-shadow spread bx flex items-center justify-center'><h1 className='text-left text-[#ffffff] text-[30px] hidden xl:block'>Nice<br/>to<br/>meet<br/>You.</h1> </div>
                    <div className='z-[-1] h-[170px] w-[200px] sm:h-[220px] sm:w-[250px] md:h-[370px] md:w-[380px] bg-secondary absolute spread2 z-[1] bx add-shadow'> </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default Banner;