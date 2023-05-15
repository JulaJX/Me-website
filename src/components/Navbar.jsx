//REACT COMPONENTS
import { useState } from 'react';
//COMPONENT CSS
import './Navbar.css';
// REACT ICONS
import { GiHamburgerMenu } from 'react-icons/gi';



const Navbar = () => {

    const [menu ,setMenu] = useState(false)

    return ( 
        <>
            {/* NAV BIG SCREEN */}
            <nav className='flex justify-center items-center flex-col text-center md:flex-row md:justify-around md:py-[23px] content-center' >
                <h1 className='md:bg-red-600'>Juliusz Jakóbik</h1>

                
                <ul className='flex justify-center items-center  flex-col text-center hidden md:flex md:flex-row md:bg-red-600 '>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Contact & CV</li>
                </ul>
            </nav>


            {/* BURGER BUTTON */}
                  
                <GiHamburgerMenu className='mx-auto md:hidden' onClick={(e) => {
                setMenu(menu ? false : true);                        
                }}/>


            {/* NAV SLIDING SMALL SCREEN */}
                <div>
                    <ul className={menu ? "translate-x-[0px] nav-slide md:hidden" : "translate-x-[-1000px] nav-slide md:hidden" } >
                        <li>Home</li>
                        <li>Portfolio</li>
                        <li>Contact & CV</li>
                    </ul>
                </div>
        </>
     );
}

export default Navbar;