//REACT COMPONENTS
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
//COMPONENT CSS
import './Navbar.css';
// REACT ICONS
import { GiHamburgerMenu } from 'react-icons/gi';



const Navbar = () => {

    const [menu ,setMenu] = useState(false)
    const activeLink = 'text-primary';
    const normalLink = 'text-black-600';

    // useEffect(()=>{
    //     LinkSlider('45px');
    // });
    
    
    const LinkSlider = (px) => {
        // px.preventDefault();
        const bar = document.querySelector('.animation');
        bar.style.left = `${px}`
     


    } 

    return ( 
        <div className='Navbar'>
            {/* NAV BIG SCREEN */}
                <nav className='flex justify-center items-center flex-col text-center lg:flex-row md:justify-around md:py-[23px] content-center tracking-wider' >
                    
                    <div className="flex justift-center items-center flex-row py-[15px]">
                        <div className='logo-box flex justify-center items-center flex-row text-[20px] sm:text-[25px] md:text-[34px]'>
                            <p>J</p>
                            <p className='logo'>J</p>
                        </div>
                        <h1 className='text-[17px]  ml-[20px] sm:text-[16px] sm:ml-[10px] md:text-[19px] md:ml-[20px]'>Juliusz Jakóbik</h1>
                    </div>

                    <div className="links className='flex justify-center items-center  flex-col text-center hidden py-[15px] md:flex md:flex-row">
                        <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink} onClick={(e) => LinkSlider('45px')}>home</NavLink>
                        <NavLink to="/portfolio" className={({ isActive }) => isActive ? activeLink : normalLink} onClick={(e) => LinkSlider('240px')} >portfolio</NavLink>
                        <NavLink to="/contactcv" className={({ isActive }) => isActive ? activeLink : normalLink} onClick={(e) => LinkSlider('435px')}>contact & cv</NavLink>
                        <div className="animation start-home"></div>
                    </div>

                </nav>


            {/* BURGER BUTTON */}
                <div className="burger"> 
                    <GiHamburgerMenu className='mx-auto text-[19px] md:hidden hover:rotate-x-[90deg]' onClick={(e) => {
                    setMenu(menu ? false : true);  
                        e.target.parentElement.classList.toggle('text-primary');
                    }}/>
                </div>


            {/* NAV SLIDING SMALL SCREEN */}
                <div className='mt-[20px]'>
                    <ul className={menu ? "translate-x-[0px] nav-slide md:hidden" : "translate-x-[-1000px] nav-slide md:hidden" } >
                    <Link to="/"><li className='hover:border-l-[5px] hover:border-primary hover:mr-[5px] py-[19px] cursor-pointer'>Home</li></Link>
                    <Link to="/portfolio"><li className='hover:border-l-[5px] hover:border-primary hover:mr-[5px] py-[19px] cursor-pointer'>Portfolio</li></Link>
                    <Link to="/contactcv"><li className='hover:border-l-[5px] hover:border-primary hover:mr-[5px] py-[19px] cursor-pointer'>Contact & CV</li></Link>
                    </ul>
                </div>
        </div>
     );
}

export default Navbar;
        
            