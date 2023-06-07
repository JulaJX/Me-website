// IMPORT STYLES
import './Footer.css';
//IMPORT REACT COMPONENTS
import { Link } from 'react-router-dom';
//IMPORT ICONS
import { SiReact,SiFirebase,SiTailwindcss } from 'react-icons/si';



const Footer = () => {
    return ( 
        <div className="Footer text-center flex items-center justify-between min-h-[190px] bg-primary text-bg 2xl:gap-[160px] leading-9 py-[14px] px-[50px] 2xl:px-[100px] cursor-pointer 2xl:flex-row flex-col">
             
             
             
            <div className="flex gap-[20px] sm:gap-[0] justify-center items-center flex-col sm:flex-row py-[15px] cursor-pointer mx-auto order-last 2xl:order-first">
                <h2 className='text-bg text-center text-[12px]  sm:ml-[20px] sm:text-[13px] sm:ml-[10px] md:text-[15px] md:ml-[16px] tracking-wide'>Designed and Created by</h2>
                <div className="flex items-center justify-center">
                    <div className='logo-box bg-secondary py-[0px] px-[8px] sm:py-[2px] sm:px-[2px] flex justify-center items-center ml-[20px] flex-row text-[15px] sm:text-[25px] md:text-[29px] shadow-md  shadow-secondary'>
                        <span className='text-primary'>J</span>
                        <span className='logo text-primary'>J</span>
                    </div>
                    <h1 className='text-bg text-[14px]  ml-[20px] sm:text-[16px] sm:ml-[10px] md:text-[15px] 2xl:text-[19px] md:ml-[20px] tracking-wide'>Juliusz Jakóbik</h1>
                </div>
            </div> 

                <div className="flex flex-col gap-[30px] sm:gap-[100px] 2xl:gap-[200px] sm:flex-row py-[20px] 2xl:py-[0px] items-center justify-center">
                    
                    <div className="flex items-center sm:items-start justify-center flex-col text-[12px] mx-auto sm:border-l-[3px] sm:border-secondary sm:pl-[10px]">
                    <Link to="/" className='hover:text-shadow'>Home</Link> 
                    <Link to="/portfolio" className='hover:text-shadow'>Portfolio</Link> 
                    <Link to="/contactcv" className='hover:text-shadow'>Contact & CV</Link> 
                    </div> 

                    <div className="flex items-start justify-center flex-col ">
                        <div className="flex text-center items-center justify-center flex-col sm:flex-row gap-[20px] text-[12px] sm:text-[13px] md:text-[15px] 2xl:text-[16px]">
                            Created with
                            <div className="flex wrap gap-[30px]">
                                <Link target="_blank" to="https://en.wikipedia.org/wiki/React_(software)"><SiReact className='text-[25px] sm:text-[30px] text-[#61DBFB] hover:translate-y-[-4px] ease-in-out duration-200'/></Link>
                                <Link target="_blank" to="https://en.wikipedia.org/wiki/Firebase"><SiFirebase className='text-[25px] sm:text-[30px] text-[#F88C12] hover:translate-y-[-4px] ease-in-out duration-200'/></Link>
                                <Link target="_blank" to="https://en.wikipedia.org/wiki/Tailwind_CSS"><SiTailwindcss className='text-[25px] sm:text-[30px] text-[#38BDF8] hover:translate-y-[-4px] ease-in-out duration-200'/></Link>
                            </div>
                        </div>

                    </div> 
                </div>

        </div>

     );
}
 
export default Footer;