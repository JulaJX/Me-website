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
            console.log(window.scrollY);
        };
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    })
    
    
    const LinkSlider = (px) => {
        // px.preventDefault();
        const bar = document.querySelector('.animation');
        bar.style.left = `${px}`
    } 

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


    return ( 
        <div className='Navbar h-[400px] lg:h-[700px] bg-bg'>
            {/* NAV BIG SCREEN */}
                <nav className='flex justify-center items-center flex-col text-center z-40  lg:flex-row md:justify-around md:py-[7px] content-center tracking-wider' >
                    
                    <div className="flex justift-center items-center flex-row py-[15px]">
                        <div className='logo-box flex justify-center items-center flex-row text-[20px] sm:text-[25px] md:text-[34px]'>
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
                <div className="burger text-primary"> 
                    <GiHamburgerMenu className='mx-auto text-[19px] md:hidden hover:rotate-x-[90deg]' onClick={(e) => {
                    setMenu(menu ? false : true);
                            e.target.parentElement.classList.toggle('text-secondary');
                                          
                     
                    }}/>
                </div>


            {/* NAV SLIDING SMALL SCREEN */}
                <div className='mt-[20px]'>
                    <ul className={menu ? "nav-slide translate-x-[0px] md:hidden" : "nav-slide translate-x-[-1000px] md:hidden" } >
                    <Link to="/"><li className='         hover:border-l-[5px] hover:border-secondary text-primary hover:mr-[5px] py-[19px] cursor-pointer'>Home</li></Link>
                    <Link to="/portfolio"><li className='hover:border-l-[5px] hover:border-secondary text-primary hover:mr-[5px] py-[19px] cursor-pointer'>Portfolio</li></Link>
                    <Link to="/contactcv"><li className='hover:border-l-[5px] hover:border-secondary text-primary hover:mr-[5px] py-[19px] cursor-pointer'>Contact & CV</li></Link>
                    </ul>
                </div>

                 
             {/* NAV STICKY */}
             <div className="wrap bg-primary z-40">
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

            <div className="banner flex flex-col md:flex-row text-center  justify-center md:justify-around items-center">
                <h1 className=' text w-[900px]'>
                    <a href="" className="typewrite" data-period="2000" data-type='[ "Hi there !", "My name is Julek", "Im Front-end Dev."]'>
                    <span class="wrap"></span>
                    </a>
                </h1>
                <img src="../src/assets/port.png" alt="portait" className='h-[500px] relative mt-[85px] hidden lg:block' />

            </div>
    </div>
    
     );
}

export default Navbar;
        