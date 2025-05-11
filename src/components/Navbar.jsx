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
        <div className='Navbar z-[4]'>
            {/* NAV BIG SCREEN */}
                <nav className='flex justify-center items-center  text-center z-40  lg:flex-row md:justify-around md:py-[7px] content-center tracking-wider' >
                    
                <Link to="/"><div className="flex justift-center items-center flex-row py-[15px] cursor-pointer">
                        <div className='logo-box bg-secondary py-[7px] px-[7px] flex justify-center items-center flex-row  shadow-md  shadow-shadow rounded-full duration-200 ease-in-out hover:rotate-45 text-primary hover:text-[#fff]'>
                            <p className='text-[16px] sm:text-[21px] md:text-[24px]'>J</p>
                            <p className='logo text-[16px] sm:text-[21px] md:text-[24px]'>J</p>
                        </div>
                        <h1 className='text-primary text-[15px]  ml-[20px] sm:text-[16px] sm:ml-[10px] md:text-[19px] md:ml-[20px] hover:text-secondary duration-200'>Juliusz Jakóbik</h1>
                    </div>
                </Link>
                    <div className="links text-primary flex justify-center items-center  flex-col text-center hidden py-[15px] lg:flex md:flex-row">
                        <NavLink aria-label="link to home" to="/" className={({ isActive }) => isActive ? activeLink : normalLink} onClick={(e) => LinkSlider('45px')}>home</NavLink>
                        <NavLink aria-label="link to portfolio" to="/portfolio" className={({ isActive }) => isActive ? activeLink : normalLink} onClick={(e) => LinkSlider('240px')} >portfolio</NavLink>
                        <NavLink aria-label="link to contact cv" to="/contactcv" className={({ isActive }) => isActive ? activeLink : normalLink} onClick={(e) => LinkSlider('435px')}>contact & cv</NavLink>
                        <div className="animation start-home"></div>
                    </div>

                </nav>


            {/* BURGER BUTTON */}
                <div className="burger text-primary pb-[15px] lg:pb-[0]"> 
                    <GiHamburgerMenu className='mx-auto text-[19px] lg:hidden hover:rotate-x-[90deg]' onClick={(e) => {
                    setMenu(menu ? false : true);
                            e.target.parentElement.classList.toggle('text-secondary');
                                          
                    }}/>
                </div>


            {/* NAV SLIDING SMALL SCREEN */}
                <div>
                    <ul className={menu ? "nav-slide translate-x-[0px] lg:hidden" : "nav-slide translate-x-[-1000px] lg:hidden" } >
                    <Link aria-label="link to home" to="/"><li className='         text-[12px] sm:text-[14px]  hover:border-l-[5px] hover:border-secondary text-primary hover:mr-[5px] py-[19px] cursor-pointer'>Home</li></Link>
                    <Link aria-label="link to portfolio" to="/portfolio"><li className='text-[12px] sm:text-[14px] hover:border-l-[5px] hover:border-secondary text-primary hover:mr-[5px] py-[19px] cursor-pointer'>Portfolio</li></Link>
                    <Link aria-label="link to contact" to="/contactcv"><li className='text-[12px] sm:text-[14px] hover:border-l-[5px] hover:border-secondary text-primary hover:mr-[5px] py-[19px] cursor-pointer'>Contact & CV</li></Link>
                    </ul>
                </div>

                 
             {/* NAV STICKY */}
             <div className="wrap ">
                <div className={ sticky ? 'sticky' : ' ' }>
                    
                    <ul className='py-4 w-[100%] justify-center items-center  flex-col text-center hidden md:flex md:flex-row '>
                        <Link aria-label="link to home" to="/"><li className='         px-[20px] py-[5px] mx-[30px] hover:border-b-[2px] hover:mt-[-2px] hover:border-secondary text-[#fff] text-[14px] cursor-pointer'>home</li></Link>
                        <Link aria-label="link to portfolio" to="/portfolio"><li className='px-[20px] py-[5px] mx-[30px] hover:border-b-[2px] hover:mt-[-2px] hover:border-secondary text-[#fff] text-[14px] cursor-pointer'>portfolio</li></Link>
                        <Link aria-label="link to contact" to="/contactcv"><li className='px-[20px] py-[5px] mx-[30px] hover:border-b-[2px] hover:mt-[-2px] hover:border-secondary text-[#fff] text-[14px] cursor-pointer'>contact & cv</li></Link>
                    </ul>
                </div> 
            </div>
            
           
    </div>
    
     );
}

export default Navbar;
        