import React, { useEffect, useRef, useState } from 'react';
import 'swiper/swiper-bundle.min.css';
import styles from './CountryInformation.module.css';
import './swiper.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from 'react-player';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import key from '../../apiKey';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface CountryInformationProps {
    country: any
}

const CountryInformation: React.FC<CountryInformationProps> = ({ country }) => {
    const mapRef: any = useRef(null);
    const [weather, setWeather]: any = useState([]);

    useEffect(() => {
        console.log('Я тут');
        const weatherURL = `http://api.openweathermap.org/data/2.5/weather?id=${country.capitalIdWeather}&appid=${key}&units=metric`;
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => setWeather(data));
    }, [country]);

    const highlightCountry = (ymaps: any, country: any) => {
        const objectManager = new ymaps.ObjectManager();
        ymaps.borders.load('001', { lang: 'ru', quality: 1 })
            .then((result: any) => {
                const regions = result.features.reduce(function (acc: any, feature: any) {
                    if (feature.properties.iso3166 === country.countryISO) {
                        const iso = feature.properties.iso3166;
                        feature.id = iso;

                        feature.options = {
                            strokeColor: '#000',
                            strokeOpacity: 0.5,
                        };
                        acc[iso] = feature;
                        return acc;
                    }
                    return acc;
                }, {});
                result.features = [];
                for (var reg in regions) {
                    result.features.push(regions[reg]);
                }
                objectManager.add(result);
                mapRef.current.geoObjects.add(objectManager);
            });
    }


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
                <div className={styles.videoMapContainer}>
                    <div>
                        <ReactPlayer controls url={`${country.videoUrl}`} />
                    </div>
                    <div className={styles.mapContainer}>
                        <YMaps
                            query={{
                                lang: 'en_RU',
                                ns: 'use-load-option',
                                load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,control.GeolocationControl,control.TypeSelector,geoObject.addon.balloon',
                            }}
                        >
                            <Map
                                instanceRef={mapRef}
                                defaultState={{
                                    center: [3.731845, 8.755385],
                                    zoom: 1,
                                    controls: ['zoomControl', 'fullscreenControl', 'geolocationControl', 'typeSelector'],
                                }}
                                width='100%'
                                height='100%'
                                modules={["borders", "ObjectManager"]}
                                onLoad={(ymaps: any) => highlightCountry(ymaps, country)}
                            >
                                <Placemark
                                    defaultGeometry={country.capitalCoordinates}
                                    properties={{
                                        balloonContentBody: `${country.capital}`,
                                    }}
                                />
                            </Map>
                        </YMaps>
                    </div>
                </div>
                <div className={styles.widgetsContainer}>
                    <div className={styles.weatherContainer}>
                        <h4>{country.capital}</h4>
                        <div>{weather.weather ? weather.weather[0].description : null}</div>
                        <img src={weather.weather ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` : ''} alt='icon' />
                        <div>{weather.weather ? Math.round(weather.main.temp) : null}°C</div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </main>
    );
}

export default CountryInformation;