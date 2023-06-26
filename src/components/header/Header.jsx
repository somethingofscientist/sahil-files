import React, { useState } from 'react';
import styles from './Header.module.css'
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header >
      <h1>Welcome to My Website</h1>
      <nav className={styles.header}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li onClick={handleDropdownToggle}>
            Services
            {isDropdownOpen && (
              <ul className="dropdown">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            )}
          </li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
