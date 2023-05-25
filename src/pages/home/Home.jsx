//IMPORT STYLES
import './home.css'
//IMPORT COMPONENTS
import Banner from '../../components/Banner';
import Skills from '../../components/Skills';
import About from '../../components/About';

const Home = () => {
    return ( 
        <div className="Home">
            <Banner/>
            <Skills/>
            <About/>
        </div>
     );
}
 
export default Home;