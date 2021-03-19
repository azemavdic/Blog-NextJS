import Link from 'next/link';

import Logo from './Logo';

const MainNavigation = () => {
    return (
        <header className='w-full h-24 bg-gray-900 flex justify-between items-center py-0 sm:px-40'>
            <Link href='/'>
                <a className='text-gray-100 text-base hover:text-gray-200 ml-5 sm:ml-0'>
                    <Logo />
                </a>
            </Link>
            <nav>
                <ul className='flex items-baseline m-0 p-0'>
                    <li className='space-x-8 text-lg my-0 mx-4 text-gray-400'>
                        <Link href='/posts'>Postovi</Link>
                        <Link href='/contact'>Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
