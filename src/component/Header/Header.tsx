import React from 'react';

import StyledHeader from './StyledHeader';
import StyledHeaderCutter from './StyledHeaderCutter';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <StyledHeader className={styles.header}>
      <div className={styles.headerTextWrapper}>
        <p className={styles.headerTitle}>Travel App</p>
        <p className={styles.headerSlogan}>Открой. Исследуй. Восхищайся.</p>
      </div>
      <StyledHeaderCutter />
    </StyledHeader>
  )
}

export default Header;
