//IMPORT STYLES
import './Skills.css';
//IMPORT ICONS
import { AiFillHtml5 } from 'react-icons/ai';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiSass } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiPhp } from 'react-icons/si';
import { TbBrandMysql } from 'react-icons/tb';








const Skills = () => {
    return ( 
        <div className="Skills mb-[1000px] xl:mt-[320px] flex flex-col items-left justify-center mx-[70px]">

           
                <div className="flex flex-col w-[50%]">
                    <h1 className='text-primary text-center text-[35px]  mb-[40px]'>Technology I use</h1>

                    <div className="flex flex-col md:flex-row gap-[80px] items-center justify-center flex-wrap">
                       
                        <div className="flex flex-col items-center justify-center bg-primary w-[145px] py-[28px] relative">
                            <AiFillHtml5 className='text-[40px] text-[#E44D26]'/> 
                            <h1 className='text-[#E44D26] tracking-wider mt-[5px] font-bold'>HTML5</h1>
                            <div className='bg-secondary absolute w-[145px] h-[118px] z-[-1] translate-y-[15px] translate-x-[-15px]'></div>
                        </div>

                        <div className="flex flex-col items-center justify-center bg-primary w-[145px] py-[28px] relative">
                            <SiCss3 className='text-[40px] text-[#33A9DC]'/> 
                            <h1 className='text-[#33A9DC] tracking-wider mt-[5px] font-bold'>CSS3</h1>
                            <div className='bg-secondary absolute w-[145px] h-[118px] z-[-1] translate-y-[15px] translate-x-[-15px]'></div>
                        </div>

                        <div className="flex flex-col items-center justify-center bg-primary w-[145px] py-[28px] relative">
                            <SiSass className='text-[40px] text-[#CD6799]'/> 
                            <h1 className='text-[#CD6799] text-[14px] tracking-wider mt-[5px] font-bold'>Sass</h1>
                            <div className='bg-secondary absolute w-[145px] h-[118px] z-[-1] translate-y-[15px] translate-x-[15px]'></div>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-primary w-[145px] py-[28px] relative">
                            <SiTailwindcss className='text-[40px] text-[#38BDF8]'/> 
                            <h1 className='text-[#38BDF8] text-[14px] tracking-wider mt-[5px] font-bold'>Tailwind</h1>
                            <div className='bg-secondary absolute w-[145px] h-[118px] z-[-1] translate-y-[15px] translate-x-[15px]'></div>
                        </div>
        
                        
                        <div className="flex flex-col items-center justify-center bg-primary w-[145px] py-[28px] relative">
                            <SiJavascript className='text-[40px] text-[F7DF1E]'/> 
                            <h1 className='text-[F7DF1E] text-[14px] tracking-wide mt-[5px] font-bold'>JavaScript </h1>
                            <div className='bg-secondary absolute w-[145px] h-[118px] z-[-1] translate-y-[15px] translate-x-[-15px]'></div>
                        </div>

                        <div className="flex flex-col items-center justify-center bg-primary w-[145px] py-[28px] relative">
                            <SiReact className='text-[40px] text-[#61DBFB]'/> 
                            <h1 className='text-[#61DBFB] text-[14px] tracking-wider mt-[5px] font-bold'>React</h1>
                            <div className='bg-secondary absolute w-[145px] h-[118px] z-[-1] translate-y-[15px] translate-x-[-15px]'></div>
                        </div>

                        <div className="flex flex-col items-center justify-center bg-primary w-[145px] py-[28px] relative">
                            <SiPhp className='text-[40px] text-[#787CB4]'/> 
                            <h1 className='text-[#787CB4] text-[14px] tracking-wider mt-[5px] font-bold'>PHP</h1>
                            <div className='bg-secondary absolute w-[145px] h-[118px] z-[-1] translate-y-[15px] translate-x-[15px]'></div>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-primary w-[145px] py-[28px] relative">
                            <TbBrandMysql className='text-[40px] text-[#E48E00]'/> 
                            <h1 className='text-[#E48E00] text-[14px] tracking-wider mt-[5px] font-bold'>mySQL</h1>
                            <div className='bg-secondary absolute w-[145px] h-[118px] z-[-1] translate-y-[15px] translate-x-[15px]'></div>
                        </div>
                    
                    </div>
                </div>
        
        </div>
     );
}
 
export default Skills;