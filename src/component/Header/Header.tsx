import React from 'react';
import { Link } from 'react-router-dom';

import SearchPannel from '../SearchPanel/SearchPanel';

import StyledHeader from './StyledHeader';
import StyledHeaderCutter from './StyledHeaderCutter';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <StyledHeader className={styles.header}>
      <div className={styles.headerTopMask}></div>
      <div className={styles.headerTop}>
        <Link to={"/"}>
          <svg className={styles.headerIcon} id="Capa_1" enable-background="new 0 0 512 512" height="60" viewBox="0 0 512 512" width="60" xmlns="http://www.w3.org/2000/svg">
            <g><path d="m505.953 107.294-63.813-63.813c-8.052-8.05-21.151-8.05-29.203 0-4.463 3.795-8.412 9.893-8.546 17.1 0 5.515 2.148 10.701 6.047 14.6l3.036 3.036-73.123 57.263c-5.523-4.251-11.971-7.045-18.923-8.151-19.144-3.045-38.773-1.396-57.03 4.57-11.161-15.823-23.972-29.72-38.261-41.561 23.085 3.208 45.435 10.712 65.707 22.199 3.627 2.054 8.234.782 10.291-2.847 2.056-3.628.782-8.236-2.847-10.291-29.96-16.978-64.102-25.951-98.737-25.951-110.585.001-200.551 89.967-200.551 200.551 0 110.532 89.882 200.464 200.394 200.549.052.001.103.008.156.008.051 0 .1-.007.15-.008 95.066-.07 176.666-66.607 196.088-159.029 4.917-1.521 9.047-4.847 11.607-9.455 13.096-23.572 17.964-51.293 13.708-78.058-1.106-6.952-3.9-13.4-8.151-18.923l57.263-73.123 3.035 3.036c4.026 4.025 9.313 6.037 14.601 6.037 5.122.229 12.781-3.246 17.099-8.537 3.9-3.899 6.048-9.085 6.048-14.6s-2.145-10.702-6.045-14.602zm-256.006 30.384c-2.221 1.059-4.421 2.163-6.576 3.361-5.583 3.102-9.292 8.505-10.177 14.825-.884 6.306 1.193 12.505 5.695 17.009l48.613 48.613c.429 1.928.834 3.866 1.217 5.817l-39.148 39.149h-41.469v-171.067c15.756 11.61 29.774 25.781 41.845 42.293zm82.521 128.774h-16.073l8.036-8.036zm-89.942 52.512c-7.268 7.269-14.947 14.304-22.824 20.911l-39.171 32.857c-1.085.912-2.662.845-3.667-.161-1.004-1.004-1.074-2.58-.161-3.667l29.657-35.357c.01-.012.02-.023.03-.035 6.931-8.417 15.698-18.238 24.082-26.603l71.226-71.227 12.056 12.056zm-49.526 133.753c-28.235-20.89-51.338-50.526-66.181-85.016 2.686-1.275 5.071-3.177 6.956-5.622 18.919-24.548 40.839-56.511 47.734-80.526h11.491v44.423l-27.868 33.223c-5.981 7.13-5.529 17.469 1.052 24.051 3.488 3.487 8.031 5.254 12.593 5.254 4.046 0 8.107-1.39 11.458-4.202l2.765-2.319zm0-186.265h-9.325c-.807-35.205-29.675-63.6-65.07-63.6-.024 0-.047.002-.07.002 13.76-44.42 39.784-81.953 74.465-107.478zm-74.394-48.499c27.575 0 50.007 22.433 50.007 50.006 0 15.14-17.495 46.879-46.798 84.902-1.06 1.375-2.466 1.581-3.209 1.581s-2.149-.205-3.209-1.581c-29.303-38.025-46.797-69.764-46.797-84.902-.001-27.573 22.432-50.006 50.006-50.006zm89.495 63.6h26.369l-14.677 14.677c-3.976 3.976-7.88 8.074-11.692 12.253zm-33.131-191.231c-14.18 11.756-26.923 25.569-38.05 41.27-15.576 21.981-27.244 46.649-34.734 73.36-27.509 7.174-47.972 31.934-48.65 61.499h-38.27c3.63-90.174 71.947-163.966 159.704-176.129zm-159.703 191.231h40.436c6.895 24.015 28.815 55.978 47.733 80.526 1.91 2.478 4.334 4.397 7.064 5.672 14.199 35.604 36.606 66.774 64.353 89.909-87.699-12.211-155.956-85.975-159.586-176.107zm211.011 176.114c40.912-33.94 69.101-84.121 78.585-141.164.684-4.113-2.096-8.003-6.209-8.687-4.119-.688-8.003 2.097-8.687 6.209-9.536 57.355-39.122 107.211-81.865 138.702v-83.412l21.305-17.871c8.213-6.888 16.22-14.224 23.798-21.803l48.089-48.089h46.274l28.993 28.993c1.512 1.512 3.221 2.738 5.055 3.683-16.789 76.116-79.306 132.872-155.338 143.439zm177.143-259.628-22.14-22.14c-2.948-2.948-7.729-2.949-10.678-.001s-2.949 7.729-.001 10.679l29.03 29.031c4.051 4.051 6.666 9.159 7.557 14.77 3.729 23.444-.531 47.72-11.993 68.352-.707 1.374-4.141 4.106-7.956 1.137l-137.673-137.673c-1.537-1.536-1.548-3.313-1.42-4.236.222-1.585 1.154-2.941 2.557-3.72 20.632-11.463 44.906-15.725 68.352-11.993 5.612.892 10.719 3.506 14.771 7.557l13.059 13.058c2.947 2.947 7.728 2.948 10.678-.001 2.948-2.948 2.948-7.729-.001-10.678l-6.168-6.168 72.835-57.038 36.227 36.228zm91.852-72.221c-2.328 2.879-5.927 5.656-10.343 2.499l-63.813-63.813c-1.047-1.047-1.624-2.44-1.624-3.922.308-3.97 6.611-10.85 11.969-6.422l63.812 63.812c.782 1.221 3.127 3.615-.001 7.846z" /><path d="m118.606 303.734c19.942 0 36.166-16.224 36.166-36.166s-16.224-36.166-36.166-36.166-36.166 16.224-36.166 36.166c0 19.941 16.224 36.166 36.166 36.166zm0-57.231c11.616 0 21.065 9.45 21.065 21.065 0 11.616-9.45 21.065-21.065 21.065s-21.065-9.45-21.065-21.065c-.001-11.616 9.449-21.065 21.065-21.065z" /></g>
          </svg>
        </Link>
        <SearchPannel />
        <select className={styles.headerLang} name="language">
          <option className={styles.opt} value="ru">ru</option>
          <option value="en">en</option>
          <option value="fr">fr</option>
        </select>
      </div>
      <div className={styles.headerTextWrapper}>
        <p className={styles.headerTitle}>Travel App</p>
        <p className={styles.headerSlogan}>Открой. Исследуй. Восхищайся.</p>
      </div>
      <StyledHeaderCutter />
    </StyledHeader>
  )
}

export default Header;
