//IMPORT STYLES
import './About.css'
//IMPORT REACT COMPONENTS
import { Link } from 'react-router-dom';

//IMPORT ICONS
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

//IMPORT PHOTO
import cv from '../assets/cv.png'

const About = () => {
    return ( 
        <div className="About" id="about">
            
            <div className="flex flex-col items-center justify-center xl:items-center md:justify-center  h-[500px] mb-[300px]">
                
                <div className="flex flex-row w-[70%] xl:w-[50%] items-center justify-center mx-auto xl:mx-[0px] xl:items-center xl:justify-center">
                    <div className="w-[700px] bg-secondary h-[5px] xl:h-[6px] self-center"></div>
                    <h1 className='text-center text-primary self-center text-[20px] sm:text-[26px] xl:text-[28px] mx-[60px]'>ABOUT ME </h1>
                    {/* <BsFillPersonFill className='text-[50px] text-primary text-center self-center'/> */}
                    <div className="block w-[700px] bg-secondary  h-[5px] xl:h-[6px]  self-center"></div>
                    
                </div>
                
                <div className="flex flex-col xl:flex-row item-center justify-center text-primary w-[80%] xl:w-[60%]  mt-[40px] xl:mt-[70px] tracking-wider leading-10">
                    
                    <img src={cv} alt="about photo" className='h-[150px] xl:h-[230px] rounded-full bg-secondary mx-[100px] self-center shadow-xl shadow-shadow' />

                    <p className='text-center text-[15px] xl:text-[19px] mt-[50px] xl:mt-[0px] xl:text-left mx-auto self-center max-w-[600px]'>
                    Hi there, I'm young and ambitious Web Developer based in Poland.
                     I graduated Technical School of Electronics 
                    in the field of information technology in Warsaw. 
                     I'm passionate about learning new skills & aquiring knowledge.<br/>
                    <Link to="/portfolio" className='text-[15px] xl:text-[18px] text-primary'>
                        <div className="translate-x-[43px] xl:translate-x-[0px] w-[370px] mx-auto xl:mx-[0] translate-y-[20px] flex items-center justif-center ">
                            More information in my CV  
                            <BsFillArrowRightCircleFill className='relative text-[20px] text-primary ml-[20px] hover:text-secondary shadow-xl shadow-shadow'/>
                        </div>
                    </Link>
                    </p>
            
                </div>
            </div>

          
        





        </div>
     );
}
 
export default About;