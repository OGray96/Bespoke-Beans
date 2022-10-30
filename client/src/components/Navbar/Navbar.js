import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import './Navbar.css';
import logo from '../../images/logo.PNG';
import Auth from '../../utils/auth'

const Navbar = () => {
  // Handle responsive navigation state
  const [isResponsiveNavOpen, setIsResponsiveNavOpen] = useState(false);

  // Navbar menu css classes
  const navbarMenuCSS = {
    active: 'active',
    inactive: '',
  };

  const toggleNavbar = () => {
    setIsResponsiveNavOpen(!isResponsiveNavOpen);
  };


if(Auth.loggedIn()){
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-brand'>
          <NavLink to='/'>
            <img src={logo} alt='' />
          </NavLink>
        </div>

        {/* Button for Responsive Navbar */}
        <motion.button
          type='button'
          className={`navbar-responsive btn${
            isResponsiveNavOpen ? ' open' : ''
          }`}
          onClick={() => toggleNavbar()}
          whileHover={{
            scale: 1.05,
            backgroundColor: '#fafafa',
            color: '#000',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
        >
          ☰
        </motion.button>

        <div className={`navbar-menu${isResponsiveNavOpen ? ' open' : ''}`}>
          <ul className='navbar-menu-items'>
            <motion.li className='navbar-menu-item' whileHover={{ y: -5 }}>
              <NavLink
                to='/Order'
                className={({ isActive }) =>
                  isActive ? navbarMenuCSS.active : navbarMenuCSS.inactive
                }
              >
                Order
              </NavLink>
            </motion.li>

            <motion.li className='navbar-menu-item' whileHover={{ y: -5 }}>
              <NavLink
                to='/products'
                className={({ isActive }) =>
                  isActive ? navbarMenuCSS.active : navbarMenuCSS.inactive
                }
              >
                Products
              </NavLink>
            </motion.li>

            <motion.li className='navbar-menu-item' whileHover={{ y: -5 }}>
              <NavLink
                to='/info'
                className={({ isActive }) =>
                  isActive ? navbarMenuCSS.active : navbarMenuCSS.inactive
                }
              >
                Info
              </NavLink>
            </motion.li>

            <motion.li className='navbar-menu-item' whileHover={{ y: -5 }}>
              <NavLink
                to='/account'
                className={({ isActive }) =>
                  isActive ? navbarMenuCSS.active : navbarMenuCSS.inactive
                }
              >
                Account
              </NavLink>
            </motion.li>

            <motion.li className='navbar-menu-item' whileHover={{ y: -5 }}>
              <NavLink
                to='/logout'
                className={({ isActive }) =>
                  isActive ? navbarMenuCSS.active : navbarMenuCSS.inactive
                }
                onClick={Auth.logout}
              >
                Logout
              </NavLink>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
  } else{
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-brand'>
          <NavLink to='/'>
            <img src={logo} alt='' />
          </NavLink>
        </div>

        {/* Button for Responsive Navbar */}
        <motion.button
          type='button'
          className={`navbar-responsive btn${
            isResponsiveNavOpen ? ' open' : ''
          }`}
          onClick={() => toggleNavbar()}
          whileHover={{
            scale: 1.05,
            backgroundColor: '#fafafa',
            color: '#000',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
        >
          ☰
        </motion.button>

        <div className={`navbar-menu${isResponsiveNavOpen ? ' open' : ''}`}>
          <ul className='navbar-menu-items'>
            <motion.li className='navbar-menu-item' whileHover={{ y: -5 }}>
              <NavLink
                to='order'
                className={({ isActive }) =>
                  isActive ? navbarMenuCSS.active : navbarMenuCSS.inactive
                }
              >
                Order
              </NavLink>
            </motion.li>

            <motion.li className='navbar-menu-item' whileHover={{ y: -5 }}>
              <NavLink
                to='/products'
                className={({ isActive }) =>
                  isActive ? navbarMenuCSS.active : navbarMenuCSS.inactive
                }
              >
                Products
              </NavLink>
            </motion.li>

            <motion.li className='navbar-menu-item' whileHover={{ y: -5 }}>
              <NavLink
                to='/info'
                className={({ isActive }) =>
                  isActive ? navbarMenuCSS.active : navbarMenuCSS.inactive
                }
              >
                Info
              </NavLink>
            </motion.li>

            <motion.li className='navbar-menu-item' whileHover={{ y: -5 }}>
              <NavLink
                to='/login'
                className={({ isActive }) =>
                  isActive ? navbarMenuCSS.active : navbarMenuCSS.inactive
                }
              >
                Login
              </NavLink>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
  }            
};

export default Navbar;
