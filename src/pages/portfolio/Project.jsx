//IMPORT FIRESTORE
import { projectFirestore } from '../../firebase/config'; 
//IMPORT REACT COMPONENTS 
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//IMPORT COMPONENTS
import Carousel from './Carousel';

//IMPORT PHOTOS
import About from '../../assets/about.png';
import Account from '../../assets/Account.png';


const Project = () => {
    
    const slides = [
        {
          url: '/src/assets/about.png',
        },
        {
          url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },
    
        {
          url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
      ];




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
                    <Carousel slides={slides}/>
                    </>
                )} 

 

                
            
        </div>
     );
}
 
export default Project;