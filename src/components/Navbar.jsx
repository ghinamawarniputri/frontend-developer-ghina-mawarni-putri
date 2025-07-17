import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Gunakan Link dan useLocation

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShow(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${show ? 'show' : 'hide'}`}>
      <div className="navbar-container">
        <div className="logo">
          <img 
            src="https://play-lh.googleusercontent.com/oWK_SN5VI1CaIkDC2F7UjNI7DA8Tfzpvk4NGGrYVkzDIbQ3F54cG6E0K6TpHsRs5ZyHq" 
            alt="Suitmedia Logo" 
            style={{ height: '90px', objectFit: 'contain' }} 
          />
        </div>
        <ul className="nav-links">
          <li><Link to="/" className={isActive('/') ? 'active' : ''}>Work</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
          <li><Link to="/services" className={isActive('/services') ? 'active' : ''}>Service</Link></li>
          <li><Link to="/ideas" className={isActive('/ideas') ? 'active' : ''}>Ideas</Link></li>
          <li><Link to="/career" className={isActive('/career') ? 'active' : ''}>Career</Link></li>
          <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
