//IMPORT FIRESTORE
import { projectFirestore } from '../../firebase/config'; 
//IMPORT REACT COMPONENTS 
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
//IMPORT COMPONENTS
import Carousel from './Carousel';
//IMPORT ICONS
import { MdOutlineDescription } from 'react-icons/md'
import { GrTechnology } from 'react-icons/gr'
import { SiJavascript,SiHtml5,SiSass,SiPhp,SiCss3,SiGithub  } from 'react-icons/si';
import { TbBrandMysql } from 'react-icons/tb';
import { RiCodeSSlashFill } from 'react-icons/ri';
//IMPORT STYLES
import './Project.css';



const Project = () => {
    
    const { id } = useParams()
    const [project, setProject] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)
    
    useEffect(()=>{
        setIsPending(true)
        projectFirestore.collection('projects').doc(id).get().then((doc)=>{
            if(doc.exists){
                setIsPending(false)
                setProject(doc.data())

            }else{
                setIsPending(false)
                setError("Could not find project")
            }
        })

    },[id])


 

    return ( 
        <div className="Project text-primary mb-[100px] cursor-pointer">
          
                {error && <p className='error'>{error}</p>}
                {isPending && <p className='text-[30px] text-center mt-[200px]'>Loading...</p>}
                {project && (
                    <>
                    
                            <div className="flex flex-row w-[90%] xl:w-[80%] mt-[80px] items-center justify-center mx-auto xl:items-center xl:justify-center">
                                <div className="w-[50%] md:w-[70%] xl:w-[800px] bg-secondary h-[2px] xl:h-[4px] self-center"></div>
                                <h1 className='text-center text-primary self-center w-[600px] text-[18px] sm:text-[22px] xl:text-[27px] mx-[60px]'>{project.name}</h1>
                                <div className="w-[50%] md:w-[70%] xl:w-[800px] bg-secondary  h-[2px] xl:h-[4px]  self-center"></div>
                            </div>
                            
                    
                            <div className="flex flex-col xl:flex-row items-center justify-center mt-[100px] mx-auto gap-[0px] 2xl:gap-[150px]">
                                <div className="flex items-center justify-center flex-col">
                            
                                    {project && <Carousel img={project.img}/>}

                                    <div className="flex items-center justify-start my-[100px] w-[70%] md:w-[85%] mx-auto flex-col md:flex-row">
                                        
                                        <div className="flex items-center justify-center gap-[30px]">
                                           <RiCodeSSlashFill className=' text-[23px] md:text-[25px] text-primary'/>
                                           <h1 className='xl:mr-[30px] text-[16px]'>Created with:</h1>  
                                       </div>
                                                <div className="flex items-center gap-[20px] md:gap-[0px] justify-center mt-[30px] md:mt-[0px] flex-wrap md:flex-nowrap">
                                                    {project.html && <div className="flex flex-col items-center justify-center w-[90px] py-[7px]  md:w-[95px] md:py-[12px]">
                                                        <SiHtml5 className=' text-[28px] md:text-[30px] text-[#E44D26]'/> 
                                                        <h1 className='text-[10px] text-[#E44D26] tracking-wider mt-[5px] font-bold'>HTML5</h1>
                                                    </div> } 

                                                    {project.css && <div className="flex flex-col items-center justify-center w-[90px] py-[7px]  md:w-[95px] md:py-[12px]">
                                                        <SiCss3 className='text-[28px] md:text-[30px] text-[#33A9DC]'/>      
                                                        <h1 className='text-[10px] text-[#33A9DC] tracking-wider mt-[5px] font-bold'>CSS3</h1>
                                                    </div>}  

                                                    {project.scss && <div className="flex flex-col items-center justify-center w-[90px] py-[7px]  md:w-[95px] md:py-[12px]">
                                                    <SiSass className='text-[28px] md:text-[30px] text-[#CD6799]'/> 
                                                        <h1 className='text-[10px] text-[#CD6799] tracking-wider mt-[5px] font-bold'>Sass</h1>
                                                    </div>  } 

                                                    {project.js && <div className="flex flex-col items-center justify-center w-[90px] py-[7px]  md:w-[95px] md:py-[12px]">
                                                    <SiJavascript className='text-[28px] md:text-[30px] text-[#F7DF1E]'/> 
                                                        <h1 className='text-[10px] text-[#F7DF1E] tracking-wider mt-[5px] font-bold'>JavaScript</h1>
                                                    </div>}
                                                    {project.php && <div className="flex flex-col items-center justify-center w-[90px] py-[7px]  md:w-[95px] md:py-[12px]">
                                                    <SiPhp className='text-[28px] md:text-[30px] text-[#787CB4]'/> 
                                                        <h1 className='text-[10px] text-[#787CB4] tracking-wider mt-[5px] font-bold'>PHP</h1>
                                                    </div>  }
                                                    {project.sql && <div className="flex flex-col items-center justify-center w-[90px] py-[7px]  md:w-[95px] md:py-[12px]">
                                                    <TbBrandMysql className='text-[28px] md:text-[30px] text-[#E48E00]'/> 
                                                        <h1 className='text-[10px] text-[#E48E00] tracking-wider mt-[5px] font-bold'>SQL</h1>
                                                    </div>  }
                                                </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[60px] mt-[0px] xl:mt-[-130px]">
                                    <div className="text-center flex flex-col items-center justify-center tracking-wider leading-7">
                                        <div className="flex">
                                            <MdOutlineDescription className='text-center text-[28px]'/>
                                            <h1 className='text-center text-[15px] xl:text-[18px] 2xl:text-[19px] ml-[30px]'>Description</h1>
                                        </div>
                                        <p className='xl:ml-[100px] max-w-[340px] xl:w-[450px] mt-[30px] text-[13px] text-center xl:text-left  md:text-[14px] 2xl:text-[15px]'>
                                            {project.descp}
                                        </p>   
                                    </div>
                                    <div className="text-center flex flex-col items-center justify-center tracking-wider leading-7">
                                        <div className="flex items-center justify-center">
                                            <GrTechnology className='text-center text-[28px]'/>
                                            <h1 className='text-center text-[15px] xl:text-[18px] 2xl:text-[19px] ml-[30px]'>Features</h1>
                                        </div>
                                        <ul className='mt-[20px] xl:ml-[100px]  text-left max-w-[340px] xl:w-[450px] flex flex-col items-start justify-start text-[13px] md:text-[14px] 2xl:text-[15px]'>
                                            {project.features.map(feat=>(
                                                    <li className='my-[6px]'>{feat}.</li>
                                            ))}
                                        </ul> 
                                    </div>
                                    <Link target="_blank" to={`${project.sourcelink}`}>
                                    <div className="flex items-center justify-center gap-[20px] bg-secondary w-[300px] md:w-[350px] mx-auto py-[10px] rounded-full cursor-pointer border-[2px] border-secondary hover:bg-bg ease-in-out duration-200">
                                        <h1 className='text-[12px] xl:text-[15px]'>Click to see source code</h1>
                                        <SiGithub className='text-[24px] xl:text-[30px]'/>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                            
                       

                    </>
                )}     
        </div>
     );
}
 
export default Project;