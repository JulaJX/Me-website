//IMPORT STYLES
import './Portfolio.css';
//IMPORT PHOTO
import  maze  from '../../assets/maze.png';



const Portfolio = () => {

    return ( 
        <div className="Portfolio w-[80%] mx-auto  mt-[200px] flex items-center justify-center">
            <div className="h-[400px] w-[280px] ">
            <img src={maze} alt="maze card" className='' />

            </div>
            
        </div>
     );
}
 
export default Portfolio;