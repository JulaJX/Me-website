//REACT COMPONENTS
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
//COMPONENT CSS
import './Navbar.css';
// REACT ICONS
import { GiHamburgerMenu } from 'react-icons/gi';



const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [menu ,setMenu] = useState(false);
    const activeLink = 'text-primary';
    const normalLink = 'text-black-600';

    useEffect(()=>{
        const handleScroll = () =>{
            setSticky(window.scrollY > 100);
        };
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    })
    
    
    const LinkSlider = (px) => {
        // px.preventDefault();
        const bar = document.querySelector('.animation');
        bar.style.left = `${px}`
    } 

    return ( 
        <div className='Navbar '>
            {/* NAV BIG SCREEN */}
                <nav className='flex justify-center items-center  text-center z-40  lg:flex-row md:justify-around md:py-[7px] content-center tracking-wider' >
                    
                    <div className="flex justift-center items-center flex-row py-[15px]">
                        <div className='logo-box bg-secondary py-[2px] px-[3px] flex justify-center items-center flex-row text-[20px] sm:text-[25px] md:text-[34px]'>
                            <p className='text-primary'>J</p>
                            <p className='logo text-primary'>J</p>
                        </div>
                        <h1 className='text-primary text-[17px]  ml-[20px] sm:text-[16px] sm:ml-[10px] md:text-[19px] md:ml-[20px]'>Juliusz Jakóbik</h1>
                    </div>

                    <div className="links text-primary className='flex justify-center items-center  flex-col text-center hidden py-[15px] md:flex md:flex-row">
                        <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink} onClick={(e) => LinkSlider('45px')}>home</NavLink>
                        <NavLink to="/portfolio" className={({ isActive }) => isActive ? activeLink : normalLink} onClick={(e) => LinkSlider('240px')} >portfolio</NavLink>
                        <NavLink to="/contactcv" className={({ isActive }) => isActive ? activeLink : normalLink} onClick={(e) => LinkSlider('435px')}>contact & cv</NavLink>
                        <div className="animation start-home"></div>
                    </div>

                </nav>


            {/* BURGER BUTTON */}
                <div className="burger text-primary pb-[15px] md:pb-[0]"> 
                    <GiHamburgerMenu className='mx-auto text-[19px] md:hidden hover:rotate-x-[90deg]' onClick={(e) => {
                    setMenu(menu ? false : true);
                            e.target.parentElement.classList.toggle('text-secondary');
                                          
                     
                    }}/>
                </div>


            {/* NAV SLIDING SMALL SCREEN */}
                <div>
                    <ul className={menu ? "nav-slide translate-x-[0px] md:hidden" : "nav-slide translate-x-[-1000px] md:hidden" } >
                    <Link to="/"><li className='         hover:border-l-[5px] hover:border-secondary text-primary hover:mr-[5px] py-[19px] cursor-pointer'>Home</li></Link>
                    <Link to="/portfolio"><li className='hover:border-l-[5px] hover:border-secondary text-primary hover:mr-[5px] py-[19px] cursor-pointer'>Portfolio</li></Link>
                    <Link to="/contactcv"><li className='hover:border-l-[5px] hover:border-secondary text-primary hover:mr-[5px] py-[19px] cursor-pointer'>Contact & CV</li></Link>
                    </ul>
                </div>

                 
             {/* NAV STICKY */}
             <div className="wrap bg-primary">
                <div className={ sticky ? 'sticky' : ' ' }>
                    <div className="flex justift-center items-center flex-row py-[15px]">
                        <div className='logo-box flex justify-center items-center flex-row text-[20px] sm:text-[25px] md:text-[34px]'>
                            <p>J</p>
                            <p className='logo'>J</p>
                        </div>
                        <h1 className='text-[17px]  ml-[20px] sm:text-[16px] sm:ml-[10px] md:text-[19px] md:ml-[20px]'>Juliusz Jakóbik</h1>
                    </div>
                    <ul className='py-4 w-[100%] justify-center items-center  flex-col text-center hidden md:flex md:flex-row '>
                        <Link to="/"><li className='         px-[20px] py-[5px] mx-[30px] hover:border-b-[2px] hover:mb-[-2px] hover:border-secondary text-primary cursor-pointer'>home</li></Link>
                        <Link to="/portfolio"><li className='px-[20px] py-[5px] mx-[30px] hover:border-b-[2px] hover:mb-[-2px] hover:border-secondary text-primary cursor-pointer'>portfolio</li></Link>
                        <Link to="/contactcv"><li className='px-[20px] py-[5px] mx-[30px] hover:border-b-[2px] hover:mb-[-2px] hover:border-secondary text-primary cursor-pointer'>contact & cv</li></Link>
                    </ul>
                </div> 
            </div>

          
    </div>
    
     );
}

export default Navbar;
        