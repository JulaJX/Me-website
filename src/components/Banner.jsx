//IMPORT STYLES
import './Banner.css';
//IMPORT REACT COMPONENTS
import { useEffect, useState } from 'react';
//IMPORT PICTURE
import portait from '../assets/port2.webp';
//REACT ICONS
import { FaChevronCircleDown } from "react-icons/fa";


const Banner = () => {

    const [arrow, setArrow] = useState(true);
    const [movement, setMovement] = useState(true);


    useEffect(()=>{
        const handleScroll = () =>{
            setArrow(window.scrollY < 150);
            setMovement(window.scrollY < 50);
        };
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    })

    return ( 
        <div className="Banner">
            { arrow ? <a href="#anchor" aria-label="link to skills section"><FaChevronCircleDown className={movement ? "text-[40px] fixed bottom-[30px] left-[50%] text-primary hover:text-secondary ease-in-out duration-300 translate-y-[0px]" : "text-[30px] fixed bottom-[20px] left-[50%] text-primary hover:text-secondary ease-in-out duration-[400ms] translate-y-[1000px]" }/></a> : null }
            
            <div className="flex flex-col xl:flex-row text-center  justify-center md:justify-around items-center">

                <div className="flex items-center justify-center flex-col">
                    <div className='mt-[60px] xl:mt-[170px] text-[25px] wrap sm:text-[30px] md:text-[40px] lg:text-[50px] m-w-[370px] md:w-[600px] text-primary text-left scale-[0.9]'>
                        <h1 className='text-center'>Hi,  i'm <span className='text-secondary'>Julek</span></h1>
                        <p className="line-1 anim-typewriter text-[16px] sm:text-[20px] md:text-[30px]  2xl:text-left xl:text-[37px] ">I am Front-end/Web Developer </p>    
                    </div>
                    <a href="#about"><button className='mt-[-100px] py-[9px] px-[30px] md:py-[14px] md:px-[45px] bg-secondary text-[#fff]  text-[14px] md:text-[17px] shadow-lg shadow-shadow hover:bg-[#dcedfa] hover:text-primary duration-200 border-[1px] border-secondary hover:border-primary ease-in'>About me</button></a>
                </div>

                <div className='relative h-[170px] w-[190px] sm:h-[220px] sm:w-[240px] md:h-[370px] md:w-[370px]  top-[100px] md:top-[160px] xl:top-[110px] bx hover scale-[0.9]'>
                    <img src={portait} alt="portait" className='h-[240px] sm:h-[300px] md:h-[450px] absolute bottom-[0px] left-[10px] sm:left-[20px] bx z-[2] spread3'/> 
                    <div className='z-[-1] h-[150px] w-[200px] sm:h-[200px] sm:w-[250px] md:h-[369px] md:w-[380px] bg-primary absolute bottom-[-20px] sm:bottom-[-50px] left-[30px] sm:left-[50px] shadow-xl shadow-shadow spread bx flex items-center justify-center'><h1 className='text-left text-[#ffffff] text-[30px] hidden xl:block'>Nice<br/>to<br/>meet<br/>You.</h1> </div>
                    <div className='z-[-1] h-[170px] w-[200px] sm:h-[220px] sm:w-[250px] md:h-[370px] md:w-[380px] bg-secondary absolute spread2 z-[1] bx add-shadow'> </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default Banner;