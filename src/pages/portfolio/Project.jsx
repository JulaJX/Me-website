//FIRESTORE
import { projectFirestore } from '../../firebase/config'; 

//REACT COMPONENTS 
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
                {isPending && <p className='loading'>Loading...</p>}
                {project && (
                    <>
                    {project.name}
                    <br/>                    
                    {project.desc}
                    <br/>
                    </>
                )}

        </div>
     );
}
 
export default Project;