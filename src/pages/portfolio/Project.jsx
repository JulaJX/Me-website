//IMPORT FIRESTORE
import { projectFirestore } from '../../firebase/config'; 
//IMPORT REACT COMPONENTS 
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//IMPORT COMPONENTS
import Carousel from './Carousel';





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
                    {project && <h1 className='text-center text-[25px] text-primary mt-[80px]'>{project.name}</h1>}
                    {project && <Carousel img={project.img}/>}
                    </>
                )}     
        </div>
     );
}
 
export default Project;