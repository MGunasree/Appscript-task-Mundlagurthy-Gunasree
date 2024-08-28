import styles from '../styles/downside.module.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="#">SHOP</a>
      <a href="#">SKILLS</a>
      <a href="#">STORIES</a>
      <a href="#">ABOUT</a>
      <a href="#">CONTACT US</a>
    </nav>
  );
};

export default Navbar;

