//IMPORT STYLES
import './Skills.css';
//IMPORT REACT COMPONENTS
import { Link } from 'react-router-dom';
//IMPORT ICONS
import { SiHtml5,SiJavascript,SiTypescript,SiReact,SiSass,SiTailwindcss,SiPhp,SiVitess,SiFirebase,SiCss3  } from 'react-icons/si';
import { BiLeftArrow,BiRightArrow } from 'react-icons/bi';
import { RiCodeSSlashFill } from 'react-icons/ri';
import Skill from '../components/Skill';

const Skills = () => {
    
    return ( 
        <div className="Skills pb-[270px] xl:pb-[300px] pt-[220px] md:pt-[340px] xl:pt-[415px] flex flex-col items-left justify-center">
                        <div className="absolute z-[-2] w-[100%] h-[2500px] xl:h-[2200px] 2xl:h-[1900px] top-[0] bg-mbg"></div>
                        <div className="square h-[120px] w-[120px] absolute bg-secondary  xl:block hidden z-[-2]"></div>
                        <div className="square-m h-[90px] w-[90px] absolute bg-secondary  xl:block hidden z-[-2]"></div>
                        <div className="square-s h-[50px] w-[50px] absolute bg-secondary  xl:block hidden z-[-2]"></div>

                        <div className="square2 h-[120px] w-[120px] absolute bg-secondary xl:block hidden z-[-2]"></div>
                        <div className="square2-m h-[90px] w-[90px] absolute bg-secondary xl:block hidden z-[-2]"></div>
                        <div className="square2-s h-[50px] w-[50px] absolute bg-secondary  xl:block hidden z-[-2]"></div>
                        
                        <div className="flex flex-col mx-auto">

                            <div className="flex flex-row items-center justify-center mb-[80px]">
                                <RiCodeSSlashFill className=' text-[25px] sm:text-[35px] md:text-[46px] text-primary mr-[30px]'/>
                                <h1 className='text-primary text-center text-[15px] sm:text-[20px] md:text-[30px] z-[100]'>Tech Stack</h1>
                            </div>
                            
                            <div className=" flex items-center justify-center gap-[70px] md:gap-[100px] flex-wrap w-[60%] md:w-[50%] mx-auto">

                                <Skill lang="HTML5" color="text-[#E44D26]" img={<SiHtml5 className='text-[28px] sm:text-[35px] md:text-[40px] text-[#E44D26]'/>} link="https://en.wikipedia.org/wiki/HTML"/>
                                <Skill lang="CSS3" color="text-[#33A9DC]" img={<SiCss3 className='text-[28px] sm:text-[35px] md:text-[40px] text-[#33A9DC]'/>} link="https://en.wikipedia.org/wiki/CSS"/>
                                <Skill lang="Sass" color="text-[#CD6799]" img={ <SiSass className='text-[28px] sm:text-[35px] md:text-[40px] text-[#CD6799]'/>} link="https://en.wikipedia.org/wiki/Sass_(style_sheet_language)"/>
                                <Skill lang="Tailwind" color="text-[#38BDF8]" img={<SiTailwindcss className='text-[28px] sm:text-[35px] md:text-[40px] text-[#38BDF8]'/>} link="https://en.wikipedia.org/wiki/Tailwind_CSS"/>
                                <Skill lang="JavaScript" color="text-[#F7DF1E]" img={<SiJavascript className='text-[28px] sm:text-[35px] md:text-[40px] text-[#F7DF1E]'/>} link="https://en.wikipedia.org/wiki/JavaScript"/>
                                <Skill lang="TypeScript" color="text-[#3178C6]" img={<SiTypescript className='text-[28px] sm:text-[35px] md:text-[40px] text-[#3178C6]'/>} link="https://pl.wikipedia.org/wiki/TypeScript"/>
                                <Skill lang="React" color="text-[#61DBFB]" img={<SiReact className='text-[28px] sm:text-[35px] md:text-[40px] text-[#61DBFB]'/>} link="https://en.wikipedia.org/wiki/React_(software)"/>
                                <Skill lang="PHP" color="text-[#787CB4]" img={<SiPhp className='text-[28px] sm:text-[35px] md:text-[40px] text-[#787CB4]'/>} link="https://en.wikipedia.org/wiki/PHP"/>
                                <Skill lang="Firebase" color="text-[#F88C12]" img={<SiFirebase className='text-[28px] sm:text-[35px] md:text-[40px] text-[#F88C12]'/>} link="https://en.wikipedia.org/wiki/Firebase"/>
                                <Skill lang="Vite" color="text-[#B939FE]" img={<SiVitess className='text-[28px] sm:text-[35px] md:text-[40px] text-[#B939FE]'/>} link="https://en.wikipedia.org/wiki/Vite_(software)"/>
                        
                            </div>

                        </div>
              
        </div>
     );
}
 
export default Skills;