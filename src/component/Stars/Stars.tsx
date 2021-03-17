import React, { useRef } from 'react';

import styles from './Stars.module.css';

interface StarsProps {
  getRating?: (evt: any) => void,
  rating?: string
}

const Stars: React.FC<StarsProps> = ({ getRating, rating }) => {
  const value1 = useRef<HTMLInputElement>(null);
  const value2 = useRef<HTMLInputElement>(null);
  const value3 = useRef<HTMLInputElement>(null);
  const value4 = useRef<HTMLInputElement>(null);
  const value5 = useRef<HTMLInputElement>(null);

  // разметка для звездочек - https://snipp.ru/html-css/rating-css
  if (getRating) {
    return (
      <form className={styles.ratingArea} onChange={(evt) => getRating(evt)}>
        <input type="radio" id="star-5" name="rating" value="5" />
        <label htmlFor="star-5" title="Оценка «5»"></label>
        <input type="radio" id="star-4" name="rating" value="4" />
        <label htmlFor="star-4" title="Оценка «4»"></label>
        <input type="radio" id="star-3" name="rating" value="3" />
        <label htmlFor="star-3" title="Оценка «3»"></label>
        <input type="radio" id="star-2" name="rating" value="2" />
        <label htmlFor="star-2" title="Оценка «2»"></label>
        <input type="radio" id="star-1" name="rating" value="1" />
        <label htmlFor="star-1" title="Оценка «1»"></label>
      </form>
    )
  }

  return (
    <form className={`${styles.ratingArea} ${styles.noRating}`}>
      <input type="radio" id="star-5" name="rating" value="5" ref={value5} checked={rating === "5" ? true : false} />
      <label htmlFor="star-5" title="Оценка «5»"></label>
      <input type="radio" id="star-4" name="rating" value="4" ref={value4} checked={rating === "4" ? true : false} />
      <label htmlFor="star-4" title="Оценка «4»"></label>
      <input type="radio" id="star-3" name="rating" value="3" ref={value3} checked={rating === "3" ? true : false} />
      <label htmlFor="star-3" title="Оценка «3»"></label>
      <input type="radio" id="star-2" name="rating" value="2" ref={value2} checked={rating === "2" ? true : false} />
      <label htmlFor="star-2" title="Оценка «2»"></label>
      <input type="radio" id="star-1" name="rating" value="1" ref={value1} checked={rating === "1" ? true : false} />
      <label htmlFor="star-1" title="Оценка «1»"></label>
    </form>
  )
}

export default Stars;
