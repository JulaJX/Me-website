
//IMPORT REACT COMPONENTS
import { Link } from 'react-router-dom';
//IMPORT PHOTOS
import  maze  from '../../assets/maze.png';
import  quiz from '../../assets/quiz.png';
import  car from '../../assets/car.png';




const ProjectList = ({projects}) => {

    return ( 
        <>
        {projects.map(project =>(
            
           <Link to={`${project.id}`} key={project.id}>
           <div className="max-w-[300px] h-[300px] xl:h-[360px] bg-white rounded-lg shadow-shadow shadow-xl dark:bg-gray-800 hover:bg-secondary hover:translate-y-[-20px] ease-in-out duration-500 cursor-pointer">
                    <div>
                       {project.img == '1' && (<img className='h-[150px] w-[262px] xl:h-[160px] xl:w-[300px]' src={maze}></img>)}
                       {project.img == '2' && (<img className='h-[150px] w-[262px] xl:h-[160px] xl:w-[300px]' src={quiz}></img>)}
                       {project.img == '3' && (<img className='h-[150px] w-[262px] xl:h-[160px] xl:w-[300px]' src={car}></img>)}
                    </div>
                    <div className="p-5">
                        <div>
                                <h5 className="text-[18px] xl:text-[22px] mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                        </div>
                        <p className="text-[14px] xl:text-[16px] mb-3 font-normal text-gray-700 dark:text-gray-400">{project.desc2}</p>
                        <div className="xl:mt-[30px] text-[11px] xl:text-[12px] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-lg">
                                Click for more details
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                    </div>
            </div>
            </Link>
        )
        )}



        </>
     );
}
 
export default ProjectList;