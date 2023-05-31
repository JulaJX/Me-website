//IMPORT FIRESTORE
import { projectFirestore } from '../../firebase/config'; 
//IMPORT REACT COMPONENTS 
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//IMPORT COMPONENTS
import Carousel from './Carousel';
//IMPORT ICONS
import { MdOutlineDescription } from 'react-icons/md'
import { GrTechnology } from 'react-icons/gr'
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
        <div className="Project">
          
                {error && <p className='error'>{error}</p>}
                
                {project && (
                    <>
                    {isPending && <p className='text-[30px] text-center mt-[200px]'>Loading...</p>}
                    {project && 
                        <div className="w-[900px] mx-auto flex items-center justify-center">
                            <div className="w-[30%] h-[5px] self-center bg-secondary "></div>
                            <h1 className='text-center text-[35px] mt-[80px] text-primary'>{project.name}</h1>   
                            <div className="w-[30%] h-[5px] self-center bg-secondary "></div>
                        </div>}
                    
                    
                    <div className="flex flex-col xl:flex-row items-center justify-center mt-[100px] mx-auto gap-[200px]">
                        
                
                            {project && <Carousel img={project.img}/>}
                       
                        <div className="flex flex-col gap-[60px]">
                            <div className="text-center flex flex-col items-center justify-center tracking-wider leading-7">
                                <div className="flex">
                                    <MdOutlineDescription className='text-center text-[30px]'/>
                                    <h1 className='text-center text-[27px] ml-[30px]'>Description</h1>
                                </div>
                                <p className='text-left w-[400px] mt-[30px] '>
                                    {project.descp}
                                </p>   
                            </div>
                            <div className="text-center flex flex-col items-center justify-center tracking-wider leading-7">
                                <div className="flex">
                                    <GrTechnology className='text-center text-[30px]'/>
                                    <h1 className='text-center text-[27px] ml-[30px]'>Features</h1>
                                </div>
                                <ul className='mt-[20px] text-left'>
                                    {project.features.map(feat=>(
                                            <li className='my-[10px]'>{feat}.</li>
                                    ))}
                                </ul> 
                            </div>
                        </div>

                    </div>
                    </>
                )}     
        </div>
     );
}
 
export default Project;