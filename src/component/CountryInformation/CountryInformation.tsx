import React from 'react';
import 'swiper/swiper-bundle.min.css';
import styles from './CountryInformation.module.css';
import './swiper.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface CountryInformationProps {
    country: any
}

const CountryInformation: React.FC<CountryInformationProps> = ({ country }) => {

    return (
        <main className={styles.countryWrapper}>
            <div className={styles.content} >
                <div className={styles.countryInfoContainer}>
                    <div className={styles.card}>
                        <img className={styles.photo} src={country.photoUrl} alt={country.country} />
                        <div className={styles.infoContainer}>
                            <p>{country.country}</p>
                            <p>{`Столица: ${country.capital}`}</p>
                        </div>
                    </div>
                    <div className={styles.countryContainer}>
                        <p>{country.info}</p>
                    </div>
                </div>
                <div>
                    <Swiper
                        loop={true}
                        speed={500}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        {
                            country.attractions.map((item: any, i: number) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <img className={styles.photo} src={item.photoUrl} alt={item.name}></img>
                                        <h4>{item.name}</h4>
                                        <p >{item.info}</p>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </main>
    );
}

export default CountryInformation;