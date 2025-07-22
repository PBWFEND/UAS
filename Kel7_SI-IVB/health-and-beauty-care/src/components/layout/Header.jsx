import React from 'react';
import styles from './Header.module.css';
import appLogo from '../../assets/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={appLogo} alt="Health and Beauty Care Logo" className={styles.appLogo} />
        <span className={styles.logoText}>Health and Beauty Care</span>
      </div>
    </header>
  );
}

export default Header;