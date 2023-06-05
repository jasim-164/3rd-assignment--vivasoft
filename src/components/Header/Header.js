import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    title: 'Home',
    link: '#',
  },
  {
    title: 'About',
    link: '#',
  },
  {
    title: 'Courses',
    link: '#',
  },
  {
    title: 'Projects',
    link: '#',
  },
];

const Header = () => {
  return (
    <header className='p-5 shadow-lg'>
      <div className='flex flex-row gap-x-96'>
        <img
          width={140}
          height={40}
          src='https://www.vivasoftltd.com/wp-content/uploads/2022/09/Logo-5.svg'
          alt='logo'
        />

        <ul className='flex flex-row gap-x-36' >
          {navLinks?.map((navlink, index) => {
            return (
              <li key={index}>

                <Link
                  class='hover:underline underline-offset-2 transition-all duration-150'
                  href={navlink?.link}>
                  {navlink?.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
