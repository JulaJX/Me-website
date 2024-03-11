//IMPORT STYLES
import './About.css'
//IMPORT REACT COMPONENTS
import { Link } from 'react-router-dom';
//IMPORT ICONS
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
//IMPORT PHOTO
import cv from '../assets/cv2.png'

const About = () => {
    return ( 
        <div className="About" id="about">
            
            <div className="flex lg:pt-[290px] pt-[120px] flex-col items-center justify-center xl:items-center md:justify-center  h-[500px] pb-[350px] md:pb-[410px] sm:pb-[300px] bg-mbg z-[-3]">
                
                <div className="flex flex-row w-[70%] xl:w-[50%] items-center justify-center mx-auto xl:mx-[0px] xl:items-center xl:justify-center bg-mbg">
                    <div className="w-[700px] bg-secondary h-[5px] xl:h-[6px] self-center"></div>
                    <h1 className='text-center text-primary self-center text-[17px] sm:text-[19px] md:text-[26px]  xl:text-[28px] mx-[60px]'>ABOUT ME </h1>
                    <div className="block w-[700px] bg-secondary  h-[5px] xl:h-[6px]  self-center"></div>
                </div>
                
                <div className="flex flex-col xl:flex-row item-center justify-center text-primary w-[80%] xl:w-[60%]  mt-[40px] xl:mt-[70px] tracking-wider leading-10">
                    <img src={cv} alt="about photo" className='h-[150px] xl:h-[230px] xl:pt-[10px] rounded-full bg-secondary mx-[100px] self-center shadow-xl shadow-shadow' />
                    <p className='text-center text-[12px] sm:text-[13px] md:text-[15px] xl:text-[19px] mt-[50px] xl:mt-[0px] xl:text-left mx-auto self-center max-w-[600px]'>
                    Hi there, I'm young and ambitious Web Developer based in Poland.
                     Currently I'm studying on Polish-Japanese Academy of information technology in Warsaw.  
                     I'm passionate about learning new skills & aquiring knowledge.<br/>
                    <Link to="/contactcv" className='text-[13px] sm:text-[14px] md:text-[15px] xl:text-[18px] text-primary'>
                        <span className="max-w-[370px] mx-auto xl:mx-[0] translate-y-[20px] flex items-center justify-center ">
                            More information in my CV  
                            <BsFillArrowRightCircleFill className='relative text-[20px] text-primary ml-[20px] hover:text-secondary shadow-xl shadow-shadow'/>
                        </span>
                    </Link>
                    </p>
                </div>
                
            </div>

          
        





        </div>
     );
}
 
export default About;