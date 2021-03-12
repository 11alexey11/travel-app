import React from 'react';
import styles from './CountryInformation.module.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
// import './swiper.css';

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
                        country.attractions.map((item: any) => {
                            return (
                                <SwiperSlide >
                                    <div>
                                        <img src={item.photoUrl} alt={item.name}></img>
                                        <h4>{item.name}</h4>
                                        <p>{item.info}</p>
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