import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import styles from './SearchPanel.module.css';
import StyledSearchPanel from './StyledSearchPanel';

import ActionCreator from '../../action-creator/action-creator';
import { AppState } from '../../interfaces';

interface SearchPanelProps {
  findCountry: (query: string) => void
}

const SearchPanel: React.FC<SearchPanelProps> = ({ findCountry }) => {
  const [query, setQuery] = useState<string>("");
  const removeImg = useRef<HTMLImageElement>(null);

  const searchText: string = `Type here to search`

  const onSearchChange = (evt: React.FormEvent<HTMLInputElement>): void => {
    if (evt.currentTarget.value.length !== 0 && removeImg.current && removeImg.current.style.display !== "block") {
      removeImg.current.style.display = "block";
    }

    if (evt.currentTarget.value.length === 0 && removeImg.current) {
      removeImg.current.style.display = "none";
    }

    setQuery(evt.currentTarget.value);
    findCountry(evt.currentTarget.value);
  }

  const scrollToCountiesList = (evt: any): void => {
    evt.preventDefault();

    if (evt.key === "Enter" || evt.type === "click") {
      document.getElementById("cardsTitleWrapper")?.scrollIntoView();
    }
  }

  const removeQuery = (): void => {
    setQuery("");
    findCountry("");

    if (removeImg.current) {
      removeImg.current.style.display = "none";
    }
  }

  return (
    <div className={styles.searchWrapper}>
      <StyledSearchPanel
        placeholder={searchText}
        value={query}
        autoFocus={true}
        onChange={onSearchChange}
        onKeyUp={scrollToCountiesList}
      />
      <img className={styles.searchImg} src="./img/search.png" alt="search" onClick={scrollToCountiesList} />
      <img className={styles.removeImg} src="./img/remove-query.png" alt="search" onClick={removeQuery} ref={removeImg} />
    </div>
  )
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