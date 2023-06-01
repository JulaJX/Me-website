//IMPORT STYLES
import './Skills.css';
//IMPORT REACT COMPONENTS
import { Link } from 'react-router-dom';
//IMPORT ICONS
import { SiHtml5,SiJavascript,SiReact,SiSass,SiTailwindcss,SiPhp,SiVitess,SiFirebase,SiCss3  } from 'react-icons/si';
import { TbBrandMysql } from 'react-icons/tb';
import { BiLeftArrow,BiRightArrow } from 'react-icons/bi';
import { RiCodeSSlashFill } from 'react-icons/ri';

const Skills = () => {
    
    return ( 
        <div className="Skills mb-[120px] xl:mb-[280px] mt-[270px] xl:mt-[300px] flex flex-col items-left justify-center py-[100px]">

                        <div className="square h-[120px] w-[120px] absolute bg-secondary  xl:block hidden"></div>
                        <div className="square-m h-[90px] w-[90px] absolute bg-secondary  xl:block hidden"></div>
                        <div className="square-s h-[50px] w-[50px] absolute bg-secondary  xl:block hidden"></div>

                        <div className="square2 h-[120px] w-[120px] absolute bg-secondary xl:block hidden"></div>
                        <div className="square2-m h-[90px] w-[90px] absolute bg-secondary xl:block hidden"></div>
                        <div className="square2-s h-[50px] w-[50px] absolute bg-secondary  xl:block hidden"></div>
                        
                        <div className="flex flex-col mx-auto">

                            <div className="flex flex-row items-center justify-center mb-[80px]">
                                <RiCodeSSlashFill className=' text-[35px] md:text-[46px] text-primary mr-[30px]'/>
                                <h1 className='text-primary text-center text-[20px] md:text-[30px]'>Technology I use</h1>
                            </div>
                            
                            <div className=" flex items-center justify-center gap-[70px] md:gap-[100px] flex-wrap w-[60%] md:w-[50%] mx-auto">
                                
                                <Link target="_blank" to="https://en.wikipedia.org/wiki/HTML">
                                    <div className='hover:translate-y-[-8px] ease-in-out duration-200 cursor-pointer'>
                                        <div className="flex flex-col items-center justify-center bg-primary w-[90px] py-[7px]  md:w-[95px] md:py-[12px] relative rounded-xl">
                                            <SiHtml5 className=' text-[35px] md:text-[40px] text-[#E44D26]'/> 
                                            <h1 className='text-[12px] text-[#E44D26] tracking-wider mt-[5px] font-bold'>HTML5</h1>
                                            <div className='bg-secondary absolute w-[90px] h-[70px] md:w-[95px] md:h-[80px] z-[-1] translate-y-[10px] translate-x-[-10px] rounded-xl shd '></div>
                                        </div>
                                    </div>
                                </Link>
                                
                                <Link target="_blank" to="https://en.wikipedia.org/wiki/CSS">
                                    <div className='hover:translate-y-[-8px] ease-in-out duration-200 cursor-pointer'>
                                        <div className="flex flex-col items-center justify-center bg-primary w-[90px] py-[7px]  md:w-[95px] md:py-[12px] relative rounded-xl">
                                            <SiCss3 className='text-[35px] md:text-[40px] text-[#33A9DC]'/> 
                                            <h1 className='text-[12px] text-[#33A9DC] tracking-wider mt-[5px] font-bold'>CSS3</h1>
                                            <div className='bg-secondary absolute w-[90px] h-[70px] md:w-[95px] md:h-[80px] z-[-1] translate-y-[10px] translate-x-[-10px] rounded-xl shd '></div>
                                        </div>
                                    </div>
                                </Link>
                                
                                <Link target="_blank" to="https://en.wikipedia.org/wiki/Sass_(style_sheet_language)">
                                    <div className='hover:translate-y-[-8px] ease-in-out duration-200 cursor-pointer'>
                                        <div className="flex flex-col items-center justify-center bg-primary w-[90px] py-[7px]  md:w-[95px] md:py-[12px] relative rounded-xl">
                                            <SiSass className='text-[35px] md:text-[40px] text-[#CD6799]'/> 
                                            <h1 className='text-[12px] text-[#CD6799] md:text-[14px] tracking-wider mt-[5px] font-bold'>Sass</h1>
                                            <div className='bg-secondary absolute w-[90px] h-[70px] md:w-[95px] md:h-[80px] z-[-1] translate-y-[10px] translate-x-[-10px] rounded-xl shd '></div>
                                        </div>
                                    </div>
                                </Link>


                                <Link target="_blank" to="https://en.wikipedia.org/wiki/Tailwind_CSS">
                                    <div className='hover:translate-y-[-8px] ease-in-out duration-200 cursor-pointer'>                                
                                        <div className="flex flex-col items-center justify-center bg-primary w-[90px] py-[7px]  md:w-[95px] md:py-[12px] relative rounded-xl">
                                            <SiTailwindcss className='text-[35px] md:text-[40px] text-[#38BDF8]'/> 
                                            <h1 className='text-[12px] text-[#38BDF8] md:text-[14px] tracking-wider mt-[5px] font-bold'>Tailwind</h1>
                                            <div className='bg-secondary absolute w-[90px] h-[70px] md:w-[95px] md:h-[80px] z-[-1] translate-y-[10px] translate-x-[-10px] rounded-xl shd '></div>
                                        </div>
                                    </div>
                                </Link>
                                
                                <Link target="_blank" to="https://en.wikipedia.org/wiki/JavaScript">
                                <div className='hover:translate-y-[-8px] ease-in-out duration-200 cursor-pointer'>
                                    <div className="flex flex-col items-center justify-center bg-primary w-[90px] py-[7px]  md:w-[95px] md:py-[13px] relative rounded-xl">
                                        <SiJavascript className='text-[35px] md:text-[40px] text-[#F7DF1E]'/> 
                                        <h1 className='text-[10px] md:text-[13px] text-[#F7DF1E] mt-[5px] font-bold'>JavaScript</h1>
                                        <div className='bg-secondary absolute w-[90px] h-[70px] md:w-[95px] md:h-[80px] z-[-1] translate-y-[10px] translate-x-[-10px] rounded-xl shd '></div>
                                    </div>
                                </div>
                                </Link>
                                
                                <Link target="_blank" to="https://en.wikipedia.org/wiki/React_(software)">
                                    <div className='hover:translate-y-[-8px] ease-in-out duration-200 cursor-pointer'>
                                        <div className="flex flex-col items-center justify-center bg-primary w-[90px] py-[7px]  md:w-[95px] md:py-[12px] relative rounded-xl">
                                            <SiReact className='text-[35px] md:text-[40px] text-[#61DBFB]'/> 
                                            <h1 className='text-[12px] text-[#61DBFB] md:text-[14px] tracking-wider mt-[5px] font-bold'>React</h1>
                                            <div className='bg-secondary absolute w-[90px] h-[70px] md:w-[95px] md:h-[80px] z-[-1] translate-y-[10px] translate-x-[-10px] rounded-xl shd '></div>
                                        </div>
                                    </div>
                                </Link>


                                <Link target="_blank" to="https://en.wikipedia.org/wiki/PHP">
                                    <div className='hover:translate-y-[-8px] ease-in-out duration-200 cursor-pointer'>
                                        <div className="flex flex-col items-center justify-center bg-primary w-[90px] py-[7px]  md:w-[95px] md:py-[12px] relative rounded-xl">
                                            <SiPhp className='text-[35px] md:text-[40px] text-[#787CB4]'/> 
                                            <h1 className='text-[12px] text-[#787CB4] md:text-[14px] tracking-wider mt-[5px] font-bold'>PHP</h1>
                                            <div className='bg-secondary absolute w-[90px] h-[70px] md:w-[95px] md:h-[80px] z-[-1] translate-y-[10px] translate-x-[-10px] rounded-xl shd '></div>
                                        </div>
                                    </div>
                                </Link>

                                <Link target="_blank" to="https://en.wikipedia.org/wiki/MySQL">
                                    <div className='hover:translate-y-[-8px] ease-in-out duration-200 cursor-pointer'>
                                        <div className="flex flex-col items-center justify-center bg-primary w-[90px] py-[7px]  md:w-[95px] md:py-[12px] relative rounded-xl">
                                            <TbBrandMysql className='text-[35px] md:text-[40px] text-[#E48E00]'/> 
                                            <h1 className='text-[12px] text-[#E48E00] md:text-[14px] tracking-wider mt-[5px] font-bold'>mySQL</h1>
                                            <div className='bg-secondary absolute w-[90px] h-[70px] md:w-[95px] md:h-[80px] z-[-1] translate-y-[10px] translate-x-[-10px] rounded-xl shd '></div>
                                        </div>
                                    </div>
                                </Link>
                                
                                <Link target="_blank" to="https://en.wikipedia.org/wiki/Firebase">
                                    <div className='hover:translate-y-[-8px] ease-in-out duration-200 cursor-pointer'>
                                        <div className="flex flex-col items-center justify-center bg-primary w-[90px] py-[7px]  md:w-[95px] md:py-[12px] relative rounded-xl">
                                            <SiFirebase className='text-[35px] md:text-[40px] text-[#F88C12]'/> 
                                            <h1 className='text-[12px] text-[#F88C12] md:text-[14px] tracking-wider mt-[5px] font-bold'>Firebase</h1>
                                            <div className='bg-secondary absolute w-[90px] h-[70px] md:w-[95px] md:h-[80px] z-[-1] translate-y-[10px] translate-x-[-10px] rounded-xl shd '></div>
                                        </div>
                                    </div>
                                </Link>

                                <Link target="_blank" to="https://en.wikipedia.org/wiki/Vite_(software)">
                                    <div className='hover:translate-y-[-8px] ease-in-out duration-200 cursor-pointer'>
                                        <div className="flex flex-col items-center justify-center bg-primary w-[90px] py-[7px]  md:w-[95px] md:py-[12px] relative rounded-xl">
                                            <SiVitess className='text-[35px] md:text-[40px] text-[#B939FE]'/> 
                                            <h1 className='text-[12px] text-[#B939FE] md:text-[14px] tracking-wider mt-[5px] font-bold'>Vite</h1>
                                            <div className='bg-secondary absolute w-[90px] h-[70px] md:w-[95px] md:h-[80px] z-[-1] translate-y-[10px] translate-x-[-10px] rounded-xl shd '></div>
                                        </div>
                                    </div>
                                </Link>
                        
                            </div>

                        </div>
              
        </div>
     );
}
 
export default Skills;