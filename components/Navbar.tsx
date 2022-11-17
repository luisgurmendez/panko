import { useRouter } from "next/router";
import { useState } from "react";
import useMobile from "../hooks/useMobile";
import Searchbar from "./Searchbar";

const Navbar = () => {

    const isMobile = useMobile();
    const [showNavbarItems, setShowNavbarItems] = useState(false);
    const router = useRouter();

    const handleGoToHome = () => {
        router.push('/');
    }

    const buildNavbarClassName = (nav: string) => {
        let color = "text-gray-700";
        if (router.pathname.includes(nav)) {
            color = "text-blue-500";
        }
        return `block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 ${color}`;
    }

    const handleToggleMobileNavbar = () => {
        setShowNavbarItems((s) => !s);
    }

    const navbarItems = (
        <div className={`${showNavbarItems ? '' : 'hidden'} md:block`} id="navbar-default">
            <ul className="pt-4 flex items-center flex-col mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <Searchbar />
                </li>
                <li>
                    <a href="/about" className={buildNavbarClassName('/about')}>About</a>
                </li>
                <li>
                    <a href="/contact" className={buildNavbarClassName('/contact')}>Contacto</a>
                </li>
            </ul>
        </div>
    )

    return (
        <nav className="bg-white z-20 top-0 left-0 w-full border-gray-200 px-2 sm:px-4 py-2.5 fixed rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <h1 onClick={handleGoToHome} className="hover:cursor-pointer hover:animate-shake text-4xl font-bold">
                    Panko.
                </h1>
                <button onClick={handleToggleMobileNavbar} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    </svg>
                </button>
                {!isMobile && navbarItems}
            </div>
            {isMobile && navbarItems}
        </nav>
    )
}

export default Navbar
