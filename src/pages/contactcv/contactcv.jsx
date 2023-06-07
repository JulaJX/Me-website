//IMPORT STYLES
import './contactcv.css';
//IMPORT ICONS
import { SiMinutemailer,SiLinkedin,SiGithub } from 'react-icons/si';
import { FaPhone } from 'react-icons/fa';
//IMPORT REACT COMPONENTS
import { Link } from 'react-router-dom';

const Contactcv = () => {
    return ( 
        <div className="Contactcv flex bg-contact items-start flex-row justify-start gap-[400px] px-[300px] py-[200px] ">
            
            <div className="flex items-start justify-start flex-col">
                <h1 className='text-[27px]'>Get in touch</h1>
                <br></br>
                <h2 className='text-[17px]'>Here are my contact information:</h2>
                <br></br>
                <div className="flex items-start justify-center flex-col gap-[30px]">
                    <div className="flex gap-[20px] items-center justify-center"><SiMinutemailer className="text-secondary text-[40px]"/>julekjakobik.jj@gmail.com</div>
                    <div className="flex gap-[26px] items-center justify-center"><FaPhone className="text-secondary text-[30px]"/>+48 698 386 024</div>
                </div>
                <br></br>
                <br></br>
                <div className="flex items-center justify-center flex-row gap-[30px]">
                    <h2 className='text-[17px]'>Here are my socials:</h2>
                    <Link target="_blank" to="https://pl.linkedin.com" className='hover:translate-y-[-4px] ease-in-out duration-200'><SiLinkedin className='text-[#0e76a8] text-[30px]'/></Link>
                    <Link target="_blank" to="https://pl.linkedin.com" className='hover:translate-y-[-4px] ease-in-out duration-200'><SiGithub className='text-[#171515] text-[30px]'/></Link>
                </div>
            </div>

            <div className="flex items-start justify-start flex-col">
                <h1 className='text-[27px]'>Curriculum vitae</h1>
                <br></br>
                <h2 className='text-[17px]'>Here you can take a look at my CV</h2>
                <br></br>
                <div className="flex items-center justify-start flex-row gap-[30px] text-[13px]">
                    <button className='w-[170px] py-[10px] bg-secondary border-secondary border-[3px] rounded-xl hover:bg-bg ease-in-out duration-200'>Download</button>
                    <button className='w-[170px] py-[10px] bg-secondary border-secondary border-[3px] rounded-xl hover:bg-bg ease-in-out duration-200'>Overview</button>
                </div>
            </div>
                 
                 
       



        </div>
     );
}
 
export default Contactcv;