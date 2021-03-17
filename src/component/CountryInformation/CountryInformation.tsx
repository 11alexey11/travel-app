import React, { useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import 'swiper/swiper-bundle.min.css';
import styles from './CountryInformation.module.css';
import './swiper.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from 'react-player';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import { keyWeather, keyСurrency } from '../../apiKey';

import RatingForm from '../RatingForm/RatingForm';

import { AppState } from '../../interfaces';
import languages from "../../utils/languages";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);

interface CountryInformationProps {
  country: any,
  language: string,
}

interface options {
  [key: string]: string
}

const getTime = (timezone: number, language: string) => {
  const today = new Date();
  const localoffset = -(today.getTimezoneOffset() / 60);
  const offset = timezone - localoffset;
  const d = new Date(new Date().getTime() + offset * 3600 * 1000);
  const options: options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  return [d.toLocaleDateString(language, options), d.getHours(), d.getMinutes(), d.getSeconds()];
}

const CountryInformation: React.FC<CountryInformationProps> = ({ country, language }) => {
  const mapRef: any = useRef(null);
  const swiperRef = useRef<HTMLDivElement>(null);
  const [weather, setWeather]: any = useState([]);
  const [currency, setCurrency]: any = useState(0);
  const [hours, setHours]: any = useState(getTime(country.timezone, language)[1]);
  const [minutes, setMinutes]: any = useState(getTime(country.timezone, language)[2]);
  const [seconds, setSeconds]: any = useState(getTime(country.timezone, language)[3]);
  const [thumbsSwiper, setThumbsSwiper]: any = useState(null);

  useEffect(() => {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?id=${country.capitalIdWeather}&appid=${keyWeather}&units=metric&lang=${country.lang}`;
    const currencyURL = `https://openexchangerates.org/api/latest.json?app_id=${keyСurrency}`;
    fetch(weatherURL)
      .then(res => res.json())
      .then(data => setWeather(data));

    // fetch(currencyURL)
    //   .then(res => res.json())
    //   .then(data => setCurrency(data.rates[country.currencyCode]));
  }, [country]);

  useEffect(() => {
    const interval = setInterval(() => {
      // setTime(time + 1);
      setHours(getTime(country.timezone, language)[1]);
      setMinutes(getTime(country.timezone, language)[2]);
      setSeconds(getTime(country.timezone, language)[3]);
    }, 1000);
    return () => clearInterval(interval);
  }, [country, language]);

  const highlightCountry = useCallback((ymaps: any, country: any) => {
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
  }, []);

  const thumbs: Array<SwiperSlide> = country.attractions.map((item: any, i: number) => {
    return (
      <SwiperSlide tag="li" key={i}>
        <img className={styles.photoThumb} src={item.photoUrl} alt={item.name} width={210} height={130}></img>
      </SwiperSlide>
    )
  });

  return (
    <main className={styles.countryWrapper}>
      <div className={styles.content} >
        <h1 className={styles.title}>{country.country}</h1>
        <div className={styles.countryInfoContainer}>
          <div>
            <div className={styles.card}>
              <div className={styles.cardMask}></div>
              <img className={styles.photo} src={country.photoUrl} alt={country.country} />
              <div className={styles.infoContainer}>
                <p>{country.country}</p>
                <p>{languages.capital[language]}: {country.capital}</p>
              </div>
            </div>
          </div>
          <div className={styles.countryContainer}>
            <p>{country.info}</p>
          </div>

        </div>
        <div>
          <h2 className={styles.aboutCountryTitle}>{languages.attractions[language]}</h2>
          <div className={styles.swiperWrapper} ref={swiperRef}>
            <img
              className={styles.swiperFullScreen}
              src="./img/full_screen.svg"
              alt="full screen"
              width="30px"
              onClick={() => {
                if (swiperRef.current !== null) {
                  swiperRef.current.requestFullscreen();
                }
              }} />

            <Swiper
              tag="section"
              thumbs={{ swiper: thumbsSwiper }}
              wrapperTag="ul"
              loop={true}
              speed={500}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {
                country.attractions.map((item: any, i: number) => {
                  return (
                    <SwiperSlide tag="li" key={i}>
                      <img className={styles.photo} src={item.photoUrl} alt={item.name} width={600} height={400}></img>
                      <h4>{item.name}</h4>
                      <p >{item.info}</p>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>

            <Swiper
              id="thumbs"
              onSwiper={setThumbsSwiper}
              loop={true}
              slidesPerView={4}
              spaceBetween={5}
            >
              {
                thumbs
              }
            </Swiper>

          </div>

          <RatingForm />

        </div>
        <div>
          <h2 className={styles.aboutCountryTitle}>{languages.learnMore[language]}</h2>
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
                    center: country.capitalCoordinates,
                    zoom: 3,
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
        </div>
        <div className={styles.widgetsContainer}>
          <div className={styles.weatherContainer}>
            <h4 className={styles.countryCapital}>{country.capital}</h4>
            <div className={styles.weatherText}>{weather.weather ? weather.weather[0].description : null}</div>
            <img src={weather.weather ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` : ''} alt='icon' />
            <div>{weather.weather ? Math.round(weather.main.temp) : null}°C</div>
          </div>

          <div>
            <h4 className={styles.timeTittle}>{languages.timeTittle[language]}:</h4>
            <div className={styles.timeContainer}>
              <div className={styles.date}>{getTime(country.timezone, language)[0]}</div>
              <div className={styles.watch}>{hours}:{Math.trunc(minutes / 10) === 0 ? `0${minutes}` : minutes}:{Math.trunc(seconds / 10) === 0 ? `0${seconds}` : seconds}</div>
            </div>
          </div>

          <div className={styles.currencyContainer}>
            <h4 className={styles.currencyTittle}>{country.currencyDescription}:</h4>
            <div>{currency.toFixed(2)} $</div>
          </div>
        </div>

      </div>
    </main>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    language: state.language,
  };
};

export default connect(mapStateToProps)(CountryInformation);