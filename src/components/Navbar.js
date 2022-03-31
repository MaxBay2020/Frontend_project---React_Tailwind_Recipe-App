import {useState} from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu,] = useState(false)


    return (
        <nav className='md:col-span-1 md:flex md:justify-end  border-b border-gray-light-300'>

            <ul className='text-right'>
                <li className='mb-3 flex justify-between items-center md:border-b border-gray-light-300 '>
                    <h1 className='font-bold uppercase p-4 border-gray-100'>
                        <a href="/" className='hover:text-gray-dark'>Food Ninja</a>
                    </h1>
                    <div onClick={()=>setShowMenu(!showMenu)} className='px-4 cursor-pointer md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </div>
                </li>

                <li className={`${showMenu&&'sm:block'} text-gray-700 font-bold  text-sm mt-6 hidden md:block hidden`}>
                    <a href="#" className='px-4 flex justify-end border-r-4 border-orange'>
                        <span>Home</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 ml-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                        </svg>
                    </a>
                </li>

                <li className={`${showMenu&&'sm:block'} text-sm mt-6 hidden md:block hidden`}>
                    <a href="#" className='px-4 flex justify-end border-r-4 border-white'>
                        <span>About</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 ml-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </a>

                </li>

                <li className={`${showMenu&&'sm:block'} text-sm mt-6 hidden md:block hidden`}>
                    <a href="#" className='px-4 flex justify-end border-r-4 border-white'>
                        <span>Contact</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 ml-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
