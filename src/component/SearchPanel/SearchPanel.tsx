import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import styles from './SearchPanel.module.css';
import StyledSearchPanel from './StyledSearchPanel';

import ActionCreator from '../../action-creator/action-creator';
import { AppState } from '../../interfaces';

import languages from "../../utils/languages";

interface SearchPanelProps {
  findCountry: (query: string) => void,
  language: string
}

const SearchPanel: React.FC<SearchPanelProps> = ({ findCountry, language }) => {
  const [query, setQuery] = useState<string>("");
  const removeImg = useRef<HTMLImageElement>(null);

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
        placeholder={languages.searchPlaceholder[language]}
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
    countries: state.countries,
    language: state.language
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  findCountry: (query: string) => {
    dispatch(ActionCreator.findCountry(query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);