import React from 'react';

import styles from './SearchPanel.module.css';

const SearchPanel: React.FC = () => {
  const searchText = `Type here to search`

  return <input 
          className={styles.searchPanel} 
          placeholder={searchText} 
          // onChange={onSearchChange}
          // value={term}
          />;
}

export default SearchPanel;