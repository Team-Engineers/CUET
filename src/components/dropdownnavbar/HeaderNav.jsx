
import { useEffect, useState } from 'react'
// import logo from '../assets/indeed-logo.png'
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { Link } from 'react-router-dom';

export default function Header() {
    const [mobMenuToggle, setMobMenuToggle] = useState(false);
    const mobMenuToggleHandler = () => setMobMenuToggle(prev => !prev);

    useEffect(() => {
        function handleResize() {
            setMobMenuToggle(window.innerWidth < 1024);
        }

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="bg-white border-2">
            <div className="container py-4 flex items-center justify-between relative">

                {/* logo container */}
                {/* <Link to="/">
                    <img src={logo} alt="indeed logo" />
                </Link> */}

                {/* NavLink  */}
                <DesktopNav />

                <div className='lg:hidden'>
                    <i className="fas fa-bars text-primary-green text-l cursor-pointer" onClick={mobMenuToggleHandler}></i>
                </div>
            </div>

            {/* Mobile Navlink  */}
            <MobileNav mobMenuToggle={mobMenuToggle} />
        </header>
    )
}
