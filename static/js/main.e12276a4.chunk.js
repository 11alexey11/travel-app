(this["webpackJsonptravel-app"]=this["webpackJsonptravel-app"]||[]).push([[0],{21:function(e,t,n){e.exports={footerYear:"Footer_footerYear__22yJB",footerBottom:"Footer_footerBottom__3DvsH",footerRsSchool:"Footer_footerRsSchool__Az42Z",footerMask:"Footer_footerMask__27rsm",authorsWrapper:"Footer_authorsWrapper__2i0wC",authorsTitle:"Footer_authorsTitle__1wY_J",authors:"Footer_authors__3MGGF",author:"Footer_author__bVLo9"}},22:function(e,t,n){e.exports={formContainer:"RegistrationForm_formContainer__G04sd",form:"RegistrationForm_form__1-T4_",formElement:"RegistrationForm_formElement__2VKtt",labelElement:"RegistrationForm_labelElement__tiGLZ",fileLoad:"RegistrationForm_fileLoad__3mrEy",submitBtn:"RegistrationForm_submitBtn__1mSDC"}},23:function(e,t,n){e.exports={header:"Header_header__3qqum",headerTop:"Header_headerTop__uUAvE",headerTopMask:"Header_headerTopMask__2X9cA",headerIcon:"Header_headerIcon__13X5A",headerTextWrapper:"Header_headerTextWrapper__u5ZVM",headerRightWrapper:"Header_headerRightWrapper__18aoq",headerTitle:"Header_headerTitle__3G8Yw",headerSlogan:"Header_headerSlogan__21-uc"}},29:function(e,t,n){e.exports={countryCard:"CountryCard_countryCard__2bWDh",cardTitle:"CountryCard_cardTitle__1IV4c",cardInfoWrapper:"CountryCard_cardInfoWrapper__1XEip",cardImg:"CountryCard_cardImg__1cffF",zoom:"CountryCard_zoom__F_imC",cardMask:"CountryCard_cardMask__3ZUJ8",opacity:"CountryCard_opacity__2YOKW"}},31:function(e,t,n){e.exports={countriesList:"CountriesList_countriesList__N7MjH",cardsTitleWrapper:"CountriesList_cardsTitleWrapper__3Bp_k",cardsTitle:"CountriesList_cardsTitle__3cqIA",cardsDescription:"CountriesList_cardsDescription__2RruR",cardsWrapper:"CountriesList_cardsWrapper__2ceTY"}},32:function(e,t,n){e.exports={headerLang:"LanguagePanel_headerLang__1vAMQ",option:"LanguagePanel_option__2TXY_"}},33:function(e,t,n){e.exports={registrationContainer:"RegistrationPanel_registrationContainer__2fQZn",registrationElement:"RegistrationPanel_registrationElement__3zzWv"}},39:function(e,t,n){e.exports={searchWrapper:"SearchPanel_searchWrapper__1hal-",searchImg:"SearchPanel_searchImg__3yBVe",removeImg:"SearchPanel_removeImg__ZAVmJ"}},57:function(e,t,n){e.exports={userContainer:"UserPanel_userContainer__zl6qN"}},6:function(e,t,n){e.exports={countryWrapper:"CountryInformation_countryWrapper__2H4nC",content:"CountryInformation_content__3oNcB",title:"CountryInformation_title__1ldW6",countryInfoContainer:"CountryInformation_countryInfoContainer__sgAnD",cardMask:"CountryInformation_cardMask__3kriX",card:"CountryInformation_card__2gBKH",infoContainer:"CountryInformation_infoContainer__gcAoC",countryContainer:"CountryInformation_countryContainer__2GpNo",aboutCountryTitle:"CountryInformation_aboutCountryTitle__2CB5L",swiperSlideContainer:"CountryInformation_swiperSlideContainer__3nVjs",swiperWrapper:"CountryInformation_swiperWrapper__2K5No",swiperFullScreen:"CountryInformation_swiperFullScreen__29Owl",videoMapContainer:"CountryInformation_videoMapContainer__1bAiw",videoContainer:"CountryInformation_videoContainer__3FKqM",mapContainer:"CountryInformation_mapContainer__2auzB",widgetsContainer:"CountryInformation_widgetsContainer__3dPL5",weatherContainer:"CountryInformation_weatherContainer__pn5Nr",weatherText:"CountryInformation_weatherText__1PhyG",timeTittle:"CountryInformation_timeTittle__A0y--",countryCapital:"CountryInformation_countryCapital__2FcW6",currencyTittle:"CountryInformation_currencyTittle__1F26c",timeContainer:"CountryInformation_timeContainer__2rH09",currencyContainer:"CountryInformation_currencyContainer__3-mZ_"}},68:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(35),r=n.n(a),c=n(30),o=n(8),s=n(10),i={data:[],countries:[],isLogin:!1,isSignIn:!1,user:{},userName:"",language:null,errorType:""},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LANGUAGE":return Object(s.a)(Object(s.a)({},e),{},{language:t.payload});case"GET_DATA":return Object(s.a)(Object(s.a)({},e),{},{data:t.payload});case"GET_LOGIN":var n=t.payload.user;return Object(s.a)(Object(s.a)({},e),{},{user:n});case"SEND_REGISTRATION":var a=t.payload.user;return Object(s.a)(Object(s.a)({},e),{},{user:a});case"SET_COUNTRIES":return Object(s.a)(Object(s.a)({},e),{},{countries:t.payload});case"FIND_COUNTRY":var r=e.data.filter((function(e){return e.capital.toLowerCase().includes(t.payload.toLowerCase())||e.country.toLowerCase().includes(t.payload.toLowerCase())}));return Object(s.a)(Object(s.a)({},e),{},{countries:r});case"CHANGE_IS_LOGIN":return Object(s.a)(Object(s.a)({},e),{},{isLogin:t.payload});case"CHANGE_IS_SIGN_IN":return Object(s.a)(Object(s.a)({},e),{},{isSignIn:t.payload});case"SET_USER_NAME":return Object(s.a)(Object(s.a)({},e),{},{userName:t.payload});case"SET_ERROR":return Object(s.a)(Object(s.a)({},e),{},{errorType:t.payload});default:return e}},u=n(51),d=n(28),p=n.n(d),h=n(37),g=function(){var e=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"ru"===t&&(n="https://travel-application-backend.herokuapp.com/countries/ru"),"en"===t&&(n="https://travel-application-backend.herokuapp.com/countries/en"),"fr"===t&&(n="https://travel-application-backend.herokuapp.com/countries/fr"),e.next=5,fetch("".concat(n));case 5:if((a=e.sent).ok){e.next=8;break}throw new Error("Could not fetch ".concat(n,", received ").concat(a.status));case 8:return e.next=10,a.json();case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(h.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://intense-shelf-09539.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(h.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://intense-shelf-09539.herokuapp.com/register",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b={changeLanguage:function(e){return localStorage.travelAppLang=JSON.stringify(e),{type:"CHANGE_LANGUAGE",payload:e}},findCountry:function(e){return{type:"FIND_COUNTRY",payload:e}},getData:function(e){return function(t){g(e).then((function(n){t({type:"GET_DATA",payload:n}),t({type:"SET_COUNTRIES",payload:n}),t({type:"CHANGE_LANGUAGE",payload:e})}))}},getLogin:function(e,t){return function(n){j(e).then((function(e){e.user?(localStorage.user=JSON.stringify({email:e.user.email,name:e.user.name}),n({type:"SET_USER_NAME",payload:e.user.name}),n({type:"GET_LOGIN",payload:e}),n({type:"CHANGE_IS_LOGIN",payload:t}),n({type:"SET_ERROR",payload:"Success"})):n({type:"SET_ERROR",payload:"Not found"})}))}},sendRegistration:function(e,t){return function(n){m(e).then((function(e){console.log(e),localStorage.user=JSON.stringify({email:e.email,name:e.name}),n({type:"SET_USER_NAME",payload:e.name}),n({type:"SEND_REGISTRATION",payload:e}),n({type:"CHANGE_IS_LOGIN",payload:t})}))}},setCountries:function(e){return{type:"SET_COUNTRIES",payload:e}},changeIsLogin:function(e){return{type:"CHANGE_IS_LOGIN",payload:e}},changeSignIn:function(e){return{type:"CHANGE_IS_SIGN_IN",payload:e}},setUserName:function(e){return{type:"SET_USER_NAME",payload:e}},setError:function(e){return{type:"SET_ERROR",payload:e}}},f=n(0),O=n(16),y=n(9),A=n(19),_=(n(67),n(6)),x=n.n(_),C=(n(68),n(99)),v=n(93),N=n(94),E=n(95),S=n(96),w=n(97),T=n(98),I=n(100),R=n(52),L=n.n(R),k=n(38),U={authors:{ru:"\u0410\u0432\u0442\u043e\u0440\u044b",en:"Authors",fr:"Auteurs"},cardsDescription:{ru:"\u041d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u044b \u0432",en:"The most popular countries in",fr:"Pays les plus populaires en"},cardsTitle:{ru:"\u041b\u0443\u0447\u0448\u0438\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",en:"Top Destinations",fr:"Destinations principales"},capital:{ru:"\u0421\u0442\u043e\u043b\u0438\u0446\u0430",en:"Capital",fr:"Capitale"},headerSlogan:{ru:"\u041e\u0442\u043a\u0440\u043e\u0439. \u0418\u0441\u0441\u043b\u0435\u0434\u0443\u0439. \u0412\u043e\u0441\u0445\u0438\u0449\u0430\u0439\u0441\u044f.",en:"Discover. Explore. Admire.",fr:"Ouvrez-le. Explorez. Admirez."},searchPlaceholder:{ru:"\u041a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044c, \u0447\u0442\u043e\u0431\u044b \u0438\u0441\u043a\u0430\u0442\u044c",en:"Type here to search",fr:"Tapez ici pour rechercher"},errorSpanEmpty:{ru:"\u041f\u0443\u0441\u0442\u044b\u0435 \u043f\u043e\u043b\u044f",en:"Empty fields",fr:"Champs vides"},errorSpanFound:{ru:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d",en:"User not found",fr:"L'utilisateur est introuvable"},attractions:{ru:"\u0414\u043e\u0441\u0442\u043e\u043f\u0440\u0438\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",en:"Attractions",fr:"Attractions"},learnMore:{ru:"\u0423\u0437\u043d\u0430\u0439 \u043e \u0441\u0442\u0440\u0430\u043d\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0431\u043e\u043b\u044c\u0448\u0435",en:"Learn a little more about the country",fr:"En savoir un peu plus sur le pays"},timeTittle:{ru:"\u041c\u0435\u0441\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",en:"Local time",fr:"Heure locale"}},W=n(1);C.a.use([v.a,N.a,E.a,S.a,w.a]);var D,B,M,G,H,z,F=function(e,t){var n=e- -(new Date).getTimezoneOffset()/60,a=new Date((new Date).getTime()+3600*n*1e3);return[a.toLocaleDateString(t,{weekday:"long",month:"long",day:"numeric"}),a.getHours(),a.getMinutes(),a.getSeconds()]},V=Object(o.b)((function(e){return{language:e.language}}))((function(e){var t=e.country,n=e.language,a=Object(f.useRef)(null),r=Object(f.useRef)(null),c=Object(f.useState)([]),o=Object(A.a)(c,2),s=o[0],i=o[1],l=Object(f.useState)(0),u=Object(A.a)(l,2),d=u[0],p=(u[1],Object(f.useState)(F(t.timezone,n)[1])),h=Object(A.a)(p,2),g=h[0],j=h[1],m=Object(f.useState)(F(t.timezone,n)[2]),b=Object(A.a)(m,2),O=b[0],y=b[1],_=Object(f.useState)(F(t.timezone,n)[3]),C=Object(A.a)(_,2),v=C[0],N=C[1],E=Object(f.useState)(null),S=Object(A.a)(E,2),w=S[0],R=S[1];Object(f.useEffect)((function(){var e="https://api.openweathermap.org/data/2.5/weather?id=".concat(t.capitalIdWeather,"&appid=").concat("351d2714b99a8b9522929c7b8ea79b2f","&units=metric&lang=").concat(t.lang);"https://openexchangerates.org/api/latest.json?app_id=".concat("5bca3cf01e974582b14f601e7af836ca");fetch(e).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[t]),Object(f.useEffect)((function(){var e=setInterval((function(){j(F(t.timezone,n)[1]),y(F(t.timezone,n)[2]),N(F(t.timezone,n)[3])}),1e3);return function(){return clearInterval(e)}}),[t,n]);var D=Object(f.useCallback)((function(e,t){var n=new e.ObjectManager;e.borders.load("001",{lang:"ru",quality:1}).then((function(e){var r=e.features.reduce((function(e,n){if(n.properties.iso3166===t.countryISO){var a=n.properties.iso3166;return n.id=a,n.options={strokeColor:"#000",strokeOpacity:.5},e[a]=n,e}return e}),{});for(var c in e.features=[],r)e.features.push(r[c]);n.add(e),a.current.geoObjects.add(n)}))}),[]),B=t.attractions.map((function(e,t){return Object(W.jsx)(T.a,{tag:"li",children:Object(W.jsx)("img",{className:x.a.photoThumb,src:e.photoUrl,alt:e.name,width:210,height:130})},t)}));return Object(W.jsx)("main",{className:x.a.countryWrapper,children:Object(W.jsxs)("div",{className:x.a.content,children:[Object(W.jsx)("h1",{className:x.a.title,children:t.country}),Object(W.jsxs)("div",{className:x.a.countryInfoContainer,children:[Object(W.jsx)("div",{children:Object(W.jsxs)("div",{className:x.a.card,children:[Object(W.jsx)("div",{className:x.a.cardMask}),Object(W.jsx)("img",{className:x.a.photo,src:t.photoUrl,alt:t.country}),Object(W.jsxs)("div",{className:x.a.infoContainer,children:[Object(W.jsx)("p",{children:t.country}),Object(W.jsxs)("p",{children:[U.capital[n],": ",t.capital]})]})]})}),Object(W.jsx)("div",{className:x.a.countryContainer,children:Object(W.jsx)("p",{children:t.info})})]}),Object(W.jsxs)("div",{children:[Object(W.jsx)("h2",{className:x.a.aboutCountryTitle,children:U.attractions[n]}),Object(W.jsxs)("div",{className:x.a.swiperWrapper,ref:r,children:[Object(W.jsx)("img",{className:x.a.swiperFullScreen,src:"./img/full_screen.svg",alt:"full screen",width:"30px",onClick:function(){null!==r.current&&r.current.requestFullscreen()}}),Object(W.jsx)(I.a,{tag:"section",thumbs:{swiper:w},wrapperTag:"ul",loop:!0,speed:500,spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},scrollbar:{draggable:!0},children:t.attractions.map((function(e,t){return Object(W.jsxs)(T.a,{tag:"li",children:[Object(W.jsx)("img",{className:x.a.photo,src:e.photoUrl,alt:e.name,width:600,height:400}),Object(W.jsx)("h4",{children:e.name}),Object(W.jsx)("p",{children:e.info})]},t)}))}),Object(W.jsx)(I.a,{id:"thumbs",onSwiper:R,loop:!0,slidesPerView:4,spaceBetween:5,children:B})]})]}),Object(W.jsxs)("div",{children:[Object(W.jsx)("h2",{className:x.a.aboutCountryTitle,children:U.learnMore[n]}),Object(W.jsxs)("div",{className:x.a.videoMapContainer,children:[Object(W.jsx)("div",{children:Object(W.jsx)(L.a,{config:{youtube:{playerVars:{origin:window.location.origin}}},controls:!0,url:"".concat(t.videoUrl)})}),Object(W.jsx)("div",{className:x.a.mapContainer,children:Object(W.jsx)(k.c,{query:{lang:"en_RU",ns:"use-load-option",load:"Map,Placemark,control.ZoomControl,control.FullscreenControl,control.GeolocationControl,control.TypeSelector,geoObject.addon.balloon"},children:Object(W.jsx)(k.a,{instanceRef:a,defaultState:{center:t.capitalCoordinates,zoom:3,controls:["zoomControl","fullscreenControl","geolocationControl","typeSelector"]},width:"100%",height:"100%",modules:["borders","ObjectManager"],onLoad:function(e){return D(e,t)},children:Object(W.jsx)(k.b,{defaultGeometry:t.capitalCoordinates,properties:{balloonContentBody:"".concat(t.capital)}})})})})]})]}),Object(W.jsxs)("div",{className:x.a.widgetsContainer,children:[Object(W.jsxs)("div",{className:x.a.weatherContainer,children:[Object(W.jsx)("h4",{className:x.a.countryCapital,children:t.capital}),Object(W.jsx)("div",{className:x.a.weatherText,children:s.weather?s.weather[0].description:null}),Object(W.jsx)("img",{src:s.weather?"https://openweathermap.org/img/wn/".concat(s.weather[0].icon,"@2x.png"):"",alt:"icon"}),Object(W.jsxs)("div",{children:[s.weather?Math.round(s.main.temp):null,"\xb0C"]})]}),Object(W.jsxs)("div",{children:[Object(W.jsxs)("h4",{className:x.a.timeTittle,children:[U.timeTittle[n],":"]}),Object(W.jsxs)("div",{className:x.a.timeContainer,children:[Object(W.jsx)("div",{className:x.a.date,children:F(t.timezone,n)[0]}),Object(W.jsxs)("div",{className:x.a.watch,children:[g,":",0===Math.trunc(O/10)?"0".concat(O):O,":",0===Math.trunc(v/10)?"0".concat(v):v]})]})]}),Object(W.jsxs)("div",{className:x.a.currencyContainer,children:[Object(W.jsxs)("h4",{className:x.a.currencyTittle,children:[t.currencyDescription,":"]}),Object(W.jsxs)("div",{children:[d.toFixed(2)," ",t.symbolCurrency]})]})]})]})})})),K=n(31),P=n.n(K),J=n(29),Y=n.n(J),q=Object(o.b)((function(e){return{language:e.language}}))((function(e){var t=e.capital,n=e.index,a=e.imgUrl,r=e.language,c=e.name;return Object(W.jsxs)(O.b,{to:(n+1).toString(),className:Y.a.countryCard,tabIndex:0,children:[Object(W.jsx)("div",{className:Y.a.cardMask}),Object(W.jsx)("img",{className:Y.a.cardImg,src:a,alt:"Photo of "+c,width:"100%"}),Object(W.jsxs)("div",{className:Y.a.cardInfoWrapper,children:[Object(W.jsx)("p",{className:Y.a.cardTitle,children:c}),Object(W.jsxs)("p",{className:Y.a.cardCapital,children:[U.capital[r],": ",t]})]})]})})),Q=Object(y.e)(Object(o.b)((function(e){return{countries:e.countries,language:e.language}}))((function(e){var t=e.countries,n=(e.history,e.language);return Object(W.jsxs)("div",{className:P.a.countriesList,children:[Object(W.jsxs)("div",{id:"cardsTitleWrapper",className:P.a.cardsTitleWrapper,children:[Object(W.jsx)("h1",{className:P.a.cardsTitle,children:U.cardsTitle[n]}),Object(W.jsxs)("p",{className:P.a.cardsDescription,children:[U.cardsDescription[n]," ",function(){var e=[],t=new Date;return"ru"===n&&(e=["\u042f\u043d\u0432\u0430\u0440\u0435","\u0424\u0435\u0432\u0440\u0430\u043b\u0435","\u041c\u0430\u0440\u0442\u0435","\u0410\u043f\u0440\u0435\u043b\u0435","\u041c\u0430\u0435","\u0418\u044e\u043d\u0435","\u0418\u044e\u043b\u0435","\u0410\u0432\u0433\u0443\u0441\u0442\u0435","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u0435","\u041e\u043a\u0442\u044f\u0431\u0440\u0435","\u041d\u043e\u044f\u0431\u0440\u0435","\u0414\u0435\u043a\u0430\u0431\u0440\u0435"]),"en"===n&&(e=["January","February","March","April","May","June","July","August","September","October","November","December"]),"fr"===n&&(e=["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xfbt","Septembre","Octobre","Novembre","D\xe9cembre"]),e[t.getMonth()]}()]})]}),Object(W.jsx)("div",{className:P.a.cardsWrapper,children:t.map((function(e,t){return Object(W.jsx)(q,{capital:e.capital,imgUrl:e.photoUrl,index:t,name:e.country},e.id)}))})]})}))),Z=n(17),X=n(18),$=n.p+"static/media/background.0cfd6be8.jpg",ee=X.b.footer(D||(D=Object(Z.a)(["\n  {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    min-height: 300px;\n    position: relative;\n    background: url('","') center no-repeat; \n    background-color: #00695c;\n  }\n"])),$),te=X.b.div(B||(B=Object(Z.a)(["\n  {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100px;\n    background: url('","') center no-repeat;\n  }\n"])),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAABkBAMAAACV/jDvAAAAKlBMVEUAAADt8PDt7/Ht7fLs7/Ht7e3r7/Hs7/Hs7/Hs7/Hs7/Hr7vHt7vDs7/EHnEOIAAAADXRSTlMAVXE57ByO1bPMvaqabV5bPQAAA2JJREFUeNrs3D1qG1EUhuFpZgGyyQLsQlUKWyY7CAQEAcPgBSRVAilTmCzAKdIasgWDuhTaQnAvUDV7iZRAFAcba/x7zr3Ps4cB6eV8tzkaf33bA/lMz0bNWns4/u4rhjyW3/ZeNFecTD597oHgFrN3u80Nup2PvmIIanH6fve4uUXb7V++7oFIpj9Gx83WWnELgnhztvequYN28vLcVwzPZzlbxap76SYf/C2GJ7e4WMWqgcQtCOB0/Yf3gbXd+Kcf1PC4pvPRQfMY3HzA/0LEKnELhosVq8QteGqb64zn4eYDgsWqodojcQvuMCU6aMIQt2Bby3WsCsigCbaYEoXW7YhbECtWiVtwD18CxKo/DJpg4HVGoFg1VDsRt6jV73dvCiBuUZvFRfRYZdAE2WPV8EHTpR/UlGs6j3SdsSFuQYwpUQwGTZRjOSsjVhk0UZvyYpW4RSUiTIli8FoPudQQqwyaKFFdsWqoE3GLsBaVxipxi+wKvs74l0ET5ck4JYrBzQfDlfvuTU7iFtszJYrJoInb1PTuTU5uPriGWJWKuMWGWJWSuEXfu87IzaAJsSq7TtzClCg5cYvBxKpYDJowJcquPRS3EKtyE7fw7k12Bk1cuc4QqxLq9sWt6nn3Jjdxq16mRKUwaKqNWFWe1aDpvKd4pkQlE7dKZkpUB4OmApkS1cWgqRxiVa3ErexMifBaT05iFQZNOYlVXH/zIW6FN52LVYhbGbnOwKApJ1Mi3Hzk5N0bxK2kTIkwaMrJuzc0bj5SEqv4S9z61c4dnCAMRFEUdZMGLMEO1FJShXt7tR1jNkGIghLCvD/nVDFc5v0oYhUrxK0AfmfwnUFTs8Qq9jdcxS1TIrKJW/97iFU0waDJlIh041HcEqvIJm65e0M4g6YPvzPEKmIMF3HL3RuyiVumRKTrddAkVlHG61pPTw9qUyLq6SNumRJRWeVBkykRfag3aBKr6E2ZuGVKRK/Sr/WIVZA5aBKr4O3PR0zcmqZEYhUExi2/MyB00GRKBJl/Pty9gcy4ZUoEmYMmd28g88+HWAWHzLglVsEiKW75nQGrmh80iVWwn3GKW6ZEkGyDuCVWwa/aGDSZEkEbhvMUt8QqCDbHLXdvINgyaFr9nSFWQfPG0+3u7g0Em+OWKVF1T07xrdyO1NFUAAAAAElFTkSuQmCC"),ne=n(21),ae=n.n(ne),re=n.p+"static/media/rs_school.ad178c0d.svg",ce=Object(o.b)((function(e){return{language:e.language}}))((function(e){var t=e.language;return Object(W.jsxs)(ee,{children:[Object(W.jsx)("div",{className:ae.a.footerMask}),Object(W.jsx)(te,{}),Object(W.jsxs)("div",{className:ae.a.authorsWrapper,children:[Object(W.jsxs)("h2",{className:ae.a.authorsTitle,children:[U.authors[t],":"]}),Object(W.jsxs)("ul",{className:ae.a.authors,children:[Object(W.jsx)("li",{children:Object(W.jsx)("a",{className:ae.a.author,href:"https://github.com/11alexey11",children:"11alexey11"})}),Object(W.jsx)("li",{children:Object(W.jsx)("a",{className:ae.a.author,href:"https://github.com/alekseishkel",children:"alekseishkel"})}),Object(W.jsx)("li",{children:Object(W.jsx)("a",{className:ae.a.author,href:"https://github.com/danila-cmd",children:"danila-cmd"})}),Object(W.jsx)("li",{children:Object(W.jsx)("a",{className:ae.a.author,href:"https://github.com/urazof",children:"urazof"})})]})]}),Object(W.jsxs)("div",{className:ae.a.footerBottom,children:[Object(W.jsx)("p",{className:ae.a.footerYear,children:"\xa9 2021 Travel App"}),Object(W.jsx)("a",{className:ae.a.footerRsSchool,href:"https://rs.school/js/",children:Object(W.jsx)("img",{src:re,alt:"RS School",width:"80px"})})]})]})})),oe=Object(X.a)(M||(M=Object(Z.a)(["\n  html {\n    font-family: 'Cuprum', sans-serif;\n    font-size: 16px;\n  }\n\n  body, p {\n    margin: 0;\n  }\n\n  ul {\n    padding: 0;\n  }\n  \n  li {\n    list-style: none;\n  }\n\n  *:focus {\n    outline: 1px solid #fff;\n  }\n\n  .swiper-slide {\n    padding-top: 20px;\n    padding-bottom: 50px;\n  }\n\n  .CountryInformation_watch__2_J_h {\n    width: auto;\n    text-align: center;\n  }\n"]))),se=n(56),ie=n(22),le=n.n(ie),ue=Object(o.b)((function(e){return{language:e.language,isSignIn:e.isSignIn,user:e.user,errorType:e.errorType}}),(function(e){return{onLoginGet:function(t,n){e(b.getLogin(t,n))},onRegistrationSend:function(t,n){e(b.sendRegistration(t,n))},onErrorSet:function(t){e(b.setError(t))}}}))((function(e){var t=e.history,n=e.language,a=e.isSignIn,r=e.errorType,c=e.onLoginGet,o=e.onRegistrationSend,s=e.onErrorSet,i=Object(f.useState)(""),l=Object(A.a)(i,2),u=l[0],d=l[1],p=Object(f.useState)(""),h=Object(A.a)(p,2),g=h[0],j=h[1],m=Object(f.useCallback)((function(e){var t=e.target;if(console.log(t.tagName),"INPUT"===t.tagName){var n=t.files[0].name;d(n)}}),[]),b=Object(f.useCallback)((function(e){e.preventDefault();var t,n=e.target,r=new FormData(n),i=!1,l={},u=Object(se.a)(r.entries());try{for(u.s();!(t=u.n()).done;){var d=t.value;if(""===d[1]&&"file"!==d[0]){i=!0;break}"file"!==d[0]&&("email"===d[0]?l.email=d[1]:"password"===d[0]?l.password=d[1]:"name"===d[0]&&(l.name=d[1]))}}catch(p){u.e(p)}finally{u.f()}i?s("Empty"):a?o(l,!0):c(l,!0)}),[c,o,s,a]);return Object(f.useEffect)((function(){"Not found"===r?j(U.errorSpanFound[n]):"Empty"===r?j(U.errorSpanEmpty[n]):"Success"===r&&(s(""),t.push("/"))}),[n,s,t,r]),Object(W.jsx)("div",{className:le.a.formContainer,children:Object(W.jsxs)("form",{className:le.a.form,onSubmit:b,method:"POST",children:[Object(W.jsx)("input",{className:le.a.formElement,type:"email",name:"email",placeholder:"ru"===n?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043f\u043e\u0447\u0442\u0443":"en"===n?"Enter your email":"Entrer votre email"}),Object(W.jsx)("input",{className:le.a.formElement,type:"password",name:"password",placeholder:"ru"===n?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c":"en"===n?"Enter your password":"Tapez votre mot de passe"}),a?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("input",{className:le.a.formElement,type:"text",name:"name",placeholder:"ru"===n?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f":"en"===n?"Enter your name":"Entrez votre nom"}),Object(W.jsxs)("label",{onChange:m,className:le.a.labelElement,children:[Object(W.jsx)("span",{className:le.a.fileLoad,children:"ru"===n?"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u043e\u0442\u043e":"en"===n?"Upload a photo":"T\xe9l\xe9charger une photo"}),Object(W.jsx)("span",{children:u}),Object(W.jsx)("input",{style:{display:"none",outline:"none",userSelect:"none"},name:"file",type:"file",accept:"image/jpeg,image/png"})]})]}):null,Object(W.jsx)("span",{children:g}),Object(W.jsx)("input",{className:le.a.submitBtn,type:"submit",value:"ru"===n?"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c":"en"===n?"Send":"Envoyer"})]})})})),de=n(32),pe=n.n(de),he=Object(o.b)((function(e){return{countries:e.countries,language:e.language}}),(function(e){return{onLanguageChange:function(t){e(b.changeLanguage(t)),e(b.getData(t))}}}))((function(e){var t=e.language,n=e.onLanguageChange,a=Object(f.useRef)(null);return Object(W.jsxs)("select",{className:pe.a.headerLang,name:"language",value:t,onChange:function(e){n(e.currentTarget.value)},ref:a,children:[Object(W.jsx)("option",{className:pe.a.option,value:"ru",children:"ru"}),Object(W.jsx)("option",{className:pe.a.option,value:"en",children:"en"}),Object(W.jsx)("option",{className:pe.a.option,value:"fr",children:"fr"})]})})),ge=n(39),je=n.n(ge),me=X.b.input(G||(G=Object(Z.a)(["\n  {\n    width: 360px;\n    height: 50px;\n    padding: 0 20px;\n    padding-right: 60px;\n    background-color: transparent;\n    color: #fff;\n    font-size: 1rem;  \n    border: 2px solid #fff;\n    border-radius: 30px;\n    outline: none;\n\n    &::placeholder {\n      color: #fff;\n    }\n  }\n"]))),be=Object(y.e)(Object(o.b)((function(e){return{countries:e.countries,language:e.language}}),(function(e){return{findCountry:function(t){e(b.findCountry(t))}}}))((function(e){var t=e.findCountry,n=e.language,a=e.history,r=Object(f.useState)(""),c=Object(A.a)(r,2),o=c[0],s=c[1],i=Object(f.useRef)(null),l=function(e){var t;(e.preventDefault(),"Enter"===e.key||"click"===e.type)&&(null===(t=document.getElementById("cardsTitleWrapper"))||void 0===t||t.scrollIntoView())};return"/"!==a.location.pathname?null:Object(W.jsxs)("div",{className:je.a.searchWrapper,children:[Object(W.jsx)(me,{placeholder:U.searchPlaceholder[n],value:o,autoFocus:!0,onChange:function(e){0!==e.currentTarget.value.length&&i.current&&"block"!==i.current.style.display&&(i.current.style.display="block"),0===e.currentTarget.value.length&&i.current&&(i.current.style.display="none"),s(e.currentTarget.value),t(e.currentTarget.value)},onKeyUp:l}),Object(W.jsx)("img",{className:je.a.searchImg,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAMAAACPHmKLAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAVRxxquPGOQWtjrWxuUrsIjLaW8QAAAEhSURBVEjHtVXRksMgCEQRTZv27vz/n70apzN2UayZdh+TXXARkF7gOUh+IAbn6Q04yQ3ELfEr2OJ7yR1EP07wpHAqpORCrhgdjevvaxvyiifTGQIeIQyzeAgGqTteYvmeqIN0lLkfiQ2D6lyHB2qAXqRne3xPnSRSygo8KLLoIFYzqHI57UJXktGa2aWMISPeBSKhEcMGGAWFgc8o/JJC3nEesbqMLPPCGEIg9IV5wwgYPd2J5OwkvZGS2URlVYzZ1Op/Apkh2O/y9smX4YbDQMUDSnCLtvy6RY0sFcGlwk5cBs2W+EoByN89V9yG+x1fqQ0l81dt2y0JeRfiwQ5c+6aV7BvNcF5Ct/OS+1cll/OSnVYlP7QoQYGNoARzSWmcf0BqIgi2gyQpAAAAAElFTkSuQmCC",alt:"search",onClick:l}),Object(W.jsx)("img",{className:je.a.removeImg,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAG1BMVEUAAAD////////////////////////////////rTT7CAAAACHRSTlMAxo5xqhxV4zEH/WEAAACSSURBVCjPbdPBCcNADERRuYmQo0tICTn6nFNKSB3rgLds24Phw18vrA7iCQaE6lN+06OW5uZzq1+fBft6/CbYX2eZDSvUEAq8qCEUCAVCgVCgKBAKhAKhAwwNNA00DTQNdDNZh/E2wjVZvZnJNBlNkxEKDDUMHSAUCAVCgVCgKBAKhAKhFzT9AqHLAUX/dyfz3gFPj0SUb7hjCQAAAABJRU5ErkJggg==",alt:"search",onClick:function(){s(""),t(""),i.current&&(i.current.style.display="none")},ref:i})]})}))),fe=X.b.header(H||(H=Object(Z.a)(["\n  min-height: ",";\n  background: url('","') center no-repeat;\n  background-color: #00695c;\n"])),(function(e){return"/"===e.history.location.pathname?"630px":"470px"}),$),Oe=X.b.header(z||(z=Object(Z.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 100px;\n  background: url(",") center no-repeat;\n"])),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAABkBAMAAACV/jDvAAAAJ1BMVEUAAADt8PDs7/Hr7/Ht7/Ht7fLt7e3s7/Hr7vHs7/Hs7/Hs7/Ds7/HCBFJKAAAADHRSTlMAVbOOcTkc7Kq92dNZb3KMAAAEIElEQVR42uzbrU5cURSG4W1m/AnT3kBVqeqoWlJT2THVHcFFNEW1NbU1bRoUBoPH4kjId1EM+xA2YTjAhvlZa+33uYdXrC9ZSX/ev0oAvBl108OzpCsX//ZeJwA+jLtPu7rSB9z7/mbvSwJg2mzn3YGyEnDx7Wf3OQEwaD75faJsKODe0a/uawJgxmgyPVUxFHBxzrgFWLA4eP8rqwmYcQvYtvHsY3/w1gfMuAVsRTl4S7v1ATNuAVuyP5keK3t+wIxbwOaNuw9/lb0wYMYtYDPKwbt7oGwFATNuARsz2ykH72oCZtwC1qocvCfKVhow4xawZqNy8K48YMYtYH3Gs+t3BAsBM24BNQfv23zwmgqYcQt41Hzyoz94bQbMuAUM/9/3B6/1gBm3gOX/+56XgBm3gJv/+8JVwIxbaNny/738Bcy4hQbt3/9/L6cBM26hGfn/fpDjgBm3EFz5vx/kPWDGLcSU/+8fFyJgxi1E8vT/e8UJmHELAdS+IwQLmHELbvX/97UCBsy4BW8W//dbb9dWwIxb8CH/35thK2DGLViWD15b7AXMuAWD8juCQUYDZtyCHYv/exsHr7OAGbfwPHb/76XWAmbcQg3j//dSkwEzbuFhbRy8rgNm3MIgN//3ajxgxi3c5er/XiJgxi1kHv/vJQJm3EJKTv/vJQJm3ILb/3sRMOMW/P7fi4AZt+D3/14iYMYtRHpHIGDGLXj5v5cImHELbv/vRcCMW/D7fy8CZtxCqwdvowEzbrXH0TsCATNuwcv/vUTAjFtw+38vAmbcgt//exEw4xZaPXgJmHErGv/vCATMuNUmj//3EgGrYNxqlNv/exHwEsatpvj+vxcB34txqwUB/u8lAh7CuBXZPOw7AgHfxrgVT6T/e4mAn4BxK4gW3hEIeADjlmsx/+9FwFUYt1yK+38vEXAtxq3L9u3duKEghgFg5AJcpPt0ASpKc4kCfZ7uMpDc7QEBMUQlf+PmCAK8Q7mVb+gcQYD3KbdCTZ4jCPAh5VaWUfv7mwDnUW7Z3+8T4EzKLQfvFgEOptwyR/hGgMMpt+zvLwhwCcot+/v3BLgO5Zb9/SsBrmV6ueXgfSLABc0st+zv3xHgomaVW/b3HwhwaRPKLfv7KwJcX99yy/7+OwHuoVu5ZX+/SYAbaVJu2d8fEOBmapdb9veHBLiliuWWOUICAc5Rp9yyv48hwGHiyy37+ygCnCi03LK/zyPAqbLKrZ9fc4RIAhwtodwyR0gmwPlOyy37+0EEuIjNcsv+fhgBruSy3LK/n0iAqzkst84PXt8ZlQhwSY9yyxxhOAGua5Vb9vfDCXBxq9yyv59LgDtY5Zb9/UgC3MUqt44OXnOEDgS4lVVu2d9PIsD9rHLL/n4IAW5qlVv29/0JcGer3LK/b+3/Dmve0S/szUCnAAAAAElFTkSuQmCC"),ye=n(23),Ae=n.n(ye),_e=n(33),xe=n.n(_e),Ce=Object(o.b)((function(e){return{isLogin:e.isLogin,language:e.language}}),(function(e){return{onLoginChange:function(t){e(b.changeIsLogin(t))},onSignInChange:function(t){e(b.changeSignIn(t))},onSignOutClick:function(t){e(b.setUserName(t))}}}))((function(e){var t=e.isLogin,n=e.language,a=e.onLoginChange,r=e.onSignInChange,c=e.onSignOutClick;return Object(W.jsx)("div",{className:xe.a.registrationContainer,children:t?Object(W.jsx)(O.b,{onClick:function(){localStorage.removeItem("user"),c(""),a(!1)},className:xe.a.registrationElement,to:"/",children:"ru"===n?"\u0412\u044b\u0439\u0442\u0438":"en"===n?"Sign Out":"D\xe9connecter"}):Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(O.b,{onClick:function(){window.scrollTo(0,document.documentElement.scrollHeight/2),r(!1)},className:xe.a.registrationElement,to:"/auth",children:"ru"===n?"\u0412\u043e\u0439\u0442\u0438":"en"===n?"Sign In":"S'identifier"}),Object(W.jsx)(O.b,{onClick:function(){window.scrollTo(0,document.documentElement.scrollHeight/2),r(!0)},className:xe.a.registrationElement,to:"/auth",children:"ru"===n?"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f":"en"===n?"Sign Up":"S'inscrire"})]})})})),ve=n(57),Ne=n.n(ve),Ee=Object(o.b)((function(e){return{userName:e.userName}}))((function(e){var t=e.userName;return Object(W.jsx)("div",{className:Ne.a.userContainer,children:t||""})})),Se=Object(y.e)(Object(o.b)((function(e){return{language:e.language}}))((function(e){var t=e.language,n=e.history;return Object(W.jsxs)(fe,{className:Ae.a.header,history:n,children:[Object(W.jsx)("div",{className:Ae.a.headerTopMask}),Object(W.jsxs)("div",{className:Ae.a.headerTop,children:[Object(W.jsx)(O.b,{to:"/",tabIndex:0,children:Object(W.jsx)("svg",{className:Ae.a.headerIcon,id:"Capa_1",enableBackground:"new 0 0 512 512",height:"60",viewBox:"0 0 512 512",width:"60",xmlns:"http://www.w3.org/2000/svg",children:Object(W.jsxs)("g",{children:[Object(W.jsx)("path",{d:"m505.953 107.294-63.813-63.813c-8.052-8.05-21.151-8.05-29.203 0-4.463 3.795-8.412 9.893-8.546 17.1 0 5.515 2.148 10.701 6.047 14.6l3.036 3.036-73.123 57.263c-5.523-4.251-11.971-7.045-18.923-8.151-19.144-3.045-38.773-1.396-57.03 4.57-11.161-15.823-23.972-29.72-38.261-41.561 23.085 3.208 45.435 10.712 65.707 22.199 3.627 2.054 8.234.782 10.291-2.847 2.056-3.628.782-8.236-2.847-10.291-29.96-16.978-64.102-25.951-98.737-25.951-110.585.001-200.551 89.967-200.551 200.551 0 110.532 89.882 200.464 200.394 200.549.052.001.103.008.156.008.051 0 .1-.007.15-.008 95.066-.07 176.666-66.607 196.088-159.029 4.917-1.521 9.047-4.847 11.607-9.455 13.096-23.572 17.964-51.293 13.708-78.058-1.106-6.952-3.9-13.4-8.151-18.923l57.263-73.123 3.035 3.036c4.026 4.025 9.313 6.037 14.601 6.037 5.122.229 12.781-3.246 17.099-8.537 3.9-3.899 6.048-9.085 6.048-14.6s-2.145-10.702-6.045-14.602zm-256.006 30.384c-2.221 1.059-4.421 2.163-6.576 3.361-5.583 3.102-9.292 8.505-10.177 14.825-.884 6.306 1.193 12.505 5.695 17.009l48.613 48.613c.429 1.928.834 3.866 1.217 5.817l-39.148 39.149h-41.469v-171.067c15.756 11.61 29.774 25.781 41.845 42.293zm82.521 128.774h-16.073l8.036-8.036zm-89.942 52.512c-7.268 7.269-14.947 14.304-22.824 20.911l-39.171 32.857c-1.085.912-2.662.845-3.667-.161-1.004-1.004-1.074-2.58-.161-3.667l29.657-35.357c.01-.012.02-.023.03-.035 6.931-8.417 15.698-18.238 24.082-26.603l71.226-71.227 12.056 12.056zm-49.526 133.753c-28.235-20.89-51.338-50.526-66.181-85.016 2.686-1.275 5.071-3.177 6.956-5.622 18.919-24.548 40.839-56.511 47.734-80.526h11.491v44.423l-27.868 33.223c-5.981 7.13-5.529 17.469 1.052 24.051 3.488 3.487 8.031 5.254 12.593 5.254 4.046 0 8.107-1.39 11.458-4.202l2.765-2.319zm0-186.265h-9.325c-.807-35.205-29.675-63.6-65.07-63.6-.024 0-.047.002-.07.002 13.76-44.42 39.784-81.953 74.465-107.478zm-74.394-48.499c27.575 0 50.007 22.433 50.007 50.006 0 15.14-17.495 46.879-46.798 84.902-1.06 1.375-2.466 1.581-3.209 1.581s-2.149-.205-3.209-1.581c-29.303-38.025-46.797-69.764-46.797-84.902-.001-27.573 22.432-50.006 50.006-50.006zm89.495 63.6h26.369l-14.677 14.677c-3.976 3.976-7.88 8.074-11.692 12.253zm-33.131-191.231c-14.18 11.756-26.923 25.569-38.05 41.27-15.576 21.981-27.244 46.649-34.734 73.36-27.509 7.174-47.972 31.934-48.65 61.499h-38.27c3.63-90.174 71.947-163.966 159.704-176.129zm-159.703 191.231h40.436c6.895 24.015 28.815 55.978 47.733 80.526 1.91 2.478 4.334 4.397 7.064 5.672 14.199 35.604 36.606 66.774 64.353 89.909-87.699-12.211-155.956-85.975-159.586-176.107zm211.011 176.114c40.912-33.94 69.101-84.121 78.585-141.164.684-4.113-2.096-8.003-6.209-8.687-4.119-.688-8.003 2.097-8.687 6.209-9.536 57.355-39.122 107.211-81.865 138.702v-83.412l21.305-17.871c8.213-6.888 16.22-14.224 23.798-21.803l48.089-48.089h46.274l28.993 28.993c1.512 1.512 3.221 2.738 5.055 3.683-16.789 76.116-79.306 132.872-155.338 143.439zm177.143-259.628-22.14-22.14c-2.948-2.948-7.729-2.949-10.678-.001s-2.949 7.729-.001 10.679l29.03 29.031c4.051 4.051 6.666 9.159 7.557 14.77 3.729 23.444-.531 47.72-11.993 68.352-.707 1.374-4.141 4.106-7.956 1.137l-137.673-137.673c-1.537-1.536-1.548-3.313-1.42-4.236.222-1.585 1.154-2.941 2.557-3.72 20.632-11.463 44.906-15.725 68.352-11.993 5.612.892 10.719 3.506 14.771 7.557l13.059 13.058c2.947 2.947 7.728 2.948 10.678-.001 2.948-2.948 2.948-7.729-.001-10.678l-6.168-6.168 72.835-57.038 36.227 36.228zm91.852-72.221c-2.328 2.879-5.927 5.656-10.343 2.499l-63.813-63.813c-1.047-1.047-1.624-2.44-1.624-3.922.308-3.97 6.611-10.85 11.969-6.422l63.812 63.812c.782 1.221 3.127 3.615-.001 7.846z"}),Object(W.jsx)("path",{d:"m118.606 303.734c19.942 0 36.166-16.224 36.166-36.166s-16.224-36.166-36.166-36.166-36.166 16.224-36.166 36.166c0 19.941 16.224 36.166 36.166 36.166zm0-57.231c11.616 0 21.065 9.45 21.065 21.065 0 11.616-9.45 21.065-21.065 21.065s-21.065-9.45-21.065-21.065c-.001-11.616 9.449-21.065 21.065-21.065z"})]})})}),Object(W.jsx)(be,{}),Object(W.jsxs)("div",{className:Ae.a.headerRightWrapper,children:[Object(W.jsx)(Ee,{}),Object(W.jsx)(Ce,{}),Object(W.jsx)(he,{})]})]}),Object(W.jsxs)("div",{className:Ae.a.headerTextWrapper,children:["-",Object(W.jsx)("span",{className:Ae.a.headerTitle,children:"Travel App"}),Object(W.jsx)("span",{className:Ae.a.headerSlogan,children:U.headerSlogan[t]})]}),Object(W.jsx)(Oe,{})]})}))),we=(n(90),function(){return Object(W.jsxs)("div",{className:"lds-ripple",children:[Object(W.jsx)("div",{}),Object(W.jsx)("div",{})]})}),Te=function(e){var t=e.data,n=e.countries,a=e.language;return 0===t.length||null===a?Object(W.jsx)(we,{}):Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(O.a,{children:[Object(W.jsx)(oe,{}),Object(W.jsx)(Se,{}),Object(W.jsx)(y.a,{exact:!0,path:"/",component:Q}),n.map((function(e,t){return Object(W.jsx)(y.a,{exact:!0,path:"/".concat(t+1),render:function(){return Object(W.jsx)(V,{country:e})}},e.id)})),Object(W.jsx)(y.a,{exact:!0,path:"/auth",component:ue}),Object(W.jsx)(ce,{})]})})},Ie=Object(o.b)((function(e){return{data:e.data,countries:e.countries,language:e.language}}))((function(e){var t=e.data,n=e.countries,a=e.language;return Object(W.jsx)(Te,{data:t,countries:n,language:a})})),Re=Object(c.d)(l,Object(c.c)(Object(c.a)(u.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),Le=localStorage.user?localStorage.user:"";Re.dispatch(b.getData("ru")),Le&&Re.dispatch(b.getLogin(JSON.parse(Le),!0));var ke=localStorage.travelAppLang?JSON.parse(localStorage.travelAppLang):"ru";Re.dispatch(b.getData(ke)),r.a.render(Object(W.jsx)(o.a,{store:Re,children:Object(W.jsx)(Ie,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.e12276a4.chunk.js.map