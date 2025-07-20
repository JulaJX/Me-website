//IMPORT STYLES
import './contactcv.css';
//IMPORT ICONS
import { SiMinutemailer,SiLinkedin,SiGithub } from 'react-icons/si';
import { FaPhone } from 'react-icons/fa';
//IMPORT REACT COMPONENTS
import { Link } from 'react-router-dom';

const Contactcv = () => {
    return ( 
        <div className="Contactcv flex items-center xl:items-start  flex-col xl:flex-row justify-center gap-[100px] xl:gap-[200px]  2xl:gap-[400px] px-[50px] xl:px-[300px] py-[90px] xl:py-[200px] xl:pb-[529px]">
            
            <div className="flex items-center xl:items-start justify-start flex-col">
                <h1 className='text-[21px] sm:text-[22px] md:text-[23px] xl:text-[27px]'>Get in touch</h1>
                <br></br>
                <h2 className='text-[14px] sm:text-[15px] md:text-[16px] xl:text-[17px]'>Here are my contact information:</h2>
                <br></br>
                <div className="flex items-start justify-center flex-col gap-[30px]">
                    <div className="flex gap-[20px] items-center justify-center text-[14px] sm:text-[15px] md:text-[16px] xl:text-[17px]"><SiMinutemailer className="text-secondary text-[35px] xl:text-[40px]"/>julekjakobik.jj@gmail.com</div>
                    <div className="flex gap-[26px] items-center justify-center text-[14px] sm:text-[15px] md:text-[16px] xl:text-[17px]"><FaPhone className="text-secondary text-[25px] xl:text-[30px]"/>+48 698 386 024</div>
                </div>
                <br></br>
                <br></br>
                <div className="flex items-center justify-center flex-row gap-[30px]">
                    <h2 className='text-[14px] sm:text-[15px] md:text-[16px] xl:text-[17px]'>Here are my socials:</h2>
                    <Link target="_blank" to="https://www.linkedin.com/in/juliusz-jak%C3%B3bik-532a0427b/" className='hover:translate-y-[-4px] ease-in-out duration-200'><SiLinkedin className='text-[#0e76a8] text-[30px]'/></Link>
                    <Link target="_blank" to="https://github.com/JulaJX" className='hover:translate-y-[-4px] ease-in-out duration-200'><SiGithub className='text-[#171515] text-[30px]'/></Link>
                </div>
            </div>

            <div className="flex items-center xl:items-start justify-start flex-col">
                <h1 className='text-[21px] sm:text-[22px] md:text-[23px] xl:text-[27px]'>Curriculum vitae</h1>
                <br></br>
                <h2 className='text-[14px] sm:text-[15px] md:text-[16px] xl:text-[17px]'>Here you can take a look at my CV</h2>
                <br></br>
                <div className="flex items-center justify-start flex-row gap-[30px] text-[13px]">
                <Link target="_blank" to="/CV.pdf" download="/CV.pdf"><button className='w-[120px] xl:w-[170px] py-[8px] xl:py-[10px] bg-secondary border-secondary border-[3px] rounded-xl text-[#fff] hover:text-primary hover:bg-[#F0EEEE] ease-in-out duration-200'>Download</button></Link>
                <Link target="_blank" to="/CV.pdf"><button className='w-[120px] xl:w-[170px] py-[8px] xl:py-[10px] bg-secondary border-secondary border-[3px] rounded-xl text-[#fff] hover:text-primary hover:bg-[#F0EEEE] ease-in-out duration-200'>Overview</button></Link>
                </div>
            </div>
        
        </div>
     );
}
 
export default Contactcv;