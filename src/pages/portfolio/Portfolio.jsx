//IMPORT STYLES
import './Portfolio.css';
//IMPORT PHOTO
import  maze  from '../../assets/maze.png';



const Portfolio = () => {

    return ( 
        <div className="Portfolio mt-[120px]">

            <h1 className='text-[30px] text-primary  text-center mb-[100px]'>Few of my projects</h1>

            <div className="flex items-center justify-center gap-[100px]">

                <div class="max-w-[300px] bg-white border-[2px] border-primary border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img src={maze} alt="The Maze Game Card" className='rounded-t-md' />
                    </a>
                    <div class="p-5">
                        <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Maze Game</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Escape the maze!</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black  bg-blue-700 rounded-lg">
                                More details
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div class="max-w-[300px] bg-white border-[2px] border-primary border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img src={maze} alt="The Maze Game Card" className='rounded-t-md' />
                    </a>
                    <div class="p-5">
                        <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Maze Game</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Escape the maze!</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black  bg-blue-700 rounded-lg">
                                More details
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div class="max-w-[300px] bg-white border-[2px] border-primary border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img src={maze} alt="The Maze Game Card" className='rounded-t-md' />
                    </a>
                    <div class="p-5">
                        <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Maze Game</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Escape the maze!</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black  bg-blue-700 rounded-lg">
                                More details
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>


            </div>
               




        </div>
     );
}
 
export default Portfolio;