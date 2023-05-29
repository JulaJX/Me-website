import { projectFirestore } from '../../firebase/config';
//IMPORT REACT COMPONENTS
import { useEffect,useState } from 'react';
//IMPORT COMPONENTS
import  ProjectList  from './ProjectList';
//IMPORT STYLES
import './Portfolio.css';
//IMPORT PHOTO
import  maze  from '../../assets/maze.png';




const Portfolio = () => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)


    useEffect(()=>{
        setIsPending(true)

        projectFirestore.collection('projects').get().then((snapshot) =>{
            if(snapshot.empty){
                setError('No projects to load')
                setIsPending(false)
            }else{
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({id:doc.id, ...doc.data()})
                })
                setData(results)
                setIsPending(false)
            }
        }).catch(err => {
            setError(err.message)
            setIsPending(false)
        })

    },[])


    return ( 
        <div className="Portfolio mt-[140px]">

                <div className="flex flex-row w-[70%] xl:w-[60%] items-center justify-center mx-auto xl:items-center xl:justify-center mb-[100px]">
                    <div className="w-[300px] bg-secondary h-[4px] xl:h-[4px] self-center"></div>
                    <h1 className='text-center text-primary self-center text-[16px] sm:text-[26px] xl:text-[25px] mx-[60px]'>My Projects </h1>
                    
                    <div className="block w-[300px] bg-secondary  h-[4px] xl:h-[4px]  self-center"></div>
                    
                </div>

            <div className="flex items-center flex-col justify-center gap-[100px] xl:flex-row">

                {error && <p className='error'>{error}</p>}
                {isPending && <p className='loading'>Loading...</p>}
                {data && <ProjectList projects={data} />}
                
            </div>
               




        </div>
     );
}
 
export default Portfolio;