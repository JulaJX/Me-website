import { Link } from 'react-router-dom';

const Skill = ({linkdescription,lang,img,color,link}) => {
    return ( 
        <div className="Skill">
            <Link target="_blank" to={`${link}`} aria-label={`${linkdescription}`}>
                <div className='hover:translate-y-[-12px] translate-y-[-8px] ease-in-out duration-200 cursor-pointer'>
                    <div className="flex flex-col items-center justify-center bg-primary  w-[73px] sm:w-[90px] py-[7px]  md:w-[95px] md:py-[12px] relative rounded-xl">
                        {img}
                        <h1 className={`text-[8px] sm:text-[12px]  tracking-wider mt-[5px] font-bold ${color}`}>{lang}</h1>
                        <div className='bg-secondary absolute h-[56px] w-[75px] sm:w-[90px] sm:h-[70px] md:w-[95px] md:h-[80px] z-[-1]  rounded-xl shd'></div>
                    </div>
                </div>
            </Link>
        </div>
     );
}
 
export default Skill;