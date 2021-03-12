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
    console.log(country);
    return (
        <main className={styles.countryWrapper}>
            <div className={styles.countryInfo}>
                <img src={country.photoUrl} alt={country.country} />
                <p>{country.country}</p>
                <p>{`Столица: ${country.capital}`}</p>
            </div>
            <div>
                <p>{country.info}</p>
            </div>
            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        country.attractions.map((item: any, i: number) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div>
                                        <img src={item.photoUrl} alt={item.name}></img>
                                        {/* <h4>{item.name}</h4>
                                        <p>{item.info}</p> */}
                                    </div>
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
        </main>
    );
}

export default CountryInformation;