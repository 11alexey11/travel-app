import React, {useState} from 'react';
import { connect } from 'react-redux';

import styles from './SearchPanel.module.css';

import ActionCreator from '../../action-creator/action-creator';
import { AppState } from '../../interfaces';

interface SearchPanelProps {
  findCountry: (query: string) => void
}

const SearchPanel: React.FC<SearchPanelProps> = ({ findCountry }) => {
  const [query, setQuery] = useState<string>("");
  
  const searchText : string = `Type here to search`

  const onSearchChange = (evt: React.FormEvent<HTMLInputElement>) => {
    setQuery(evt.currentTarget.value);
    findCountry(evt.currentTarget.value);
  }

  return <input 
          className={styles.searchPanel} 
          placeholder={searchText} 
          onChange={onSearchChange}
          value={query}
          />;
}

const mapStateToProps = (state: AppState) => {
  return {
    countries: state.countries
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  findCountry: (query: string) => {
    dispatch(ActionCreator.findCountry(query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);