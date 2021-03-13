import { v4 as uuid } from 'uuid';

const idRussia = uuid();
const idEngland = uuid();
const idItaly = uuid();
const idUSA = uuid();
const idSpain = uuid();
const idFrance = uuid();
const idChina = uuid();
const idIndia = uuid();

const countriesRu = [
    {
        id: idRussia,
        photoUrl: 'https://s1.1zoom.ru/prev/431/430286.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=9RfuxVZdtjY',
        country: 'Россия',
        capital: 'Москва',
        info: 'Россия – крупнейшая страна мира, расположенная в Восточной Европе и Северной Азии и омываемая водами Тихого и Северного Ледовитого океанов. Ландшафт России крайне разнообразен: на ее территории есть и тундра, и леса, и субтропические пляжи. В Большом театре в Москве и Мариинском театре в Санкт-Петербурге выступают балетные труппы, снискавшие всемирную славу. Санкт-Петербург, основанный императором Петром I, известен своим Зимним дворцом в стиле барокко, в котором размещается часть обширной художественной коллекции музея "Эрмитаж".',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/12/hram-vasiliya-blazhennogo.jpg',
                name: 'Храм Василия Блаженного',
                info: 'Вероятно, самый известный российский храм, яркий и необычный, настоящая визитная карточка не только Москвы, но и всей страны. Храм Василия Блаженного примечателен не только своим расположением прямо на Красной площади, но и историей, архитектурой, оригинальной отделкой и коллекцией икон и церковных ценностей.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/12/dolina-gejzerov-na-kamchatke.jpg',
                name: 'Долина гейзеров на Камчатке',
                info: 'Выглядит эта долина так, как будто была перенесена с другой планеты. Это самая обширная территория с гейзерами в мире и единственная во всей Евразии! Если вы хотите увидеть одно из Семи чудес России, отправляйтесь на вертолётную экскурсию, которые проводятся в соответствии со строгими правилами и только под присмотром гида.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/12/kizhi.jpg',
                name: 'Архитектурный ансамбль Кижи',
                info: 'Находится это удивительнейшее творение на острове на Онежском озере и является уникальным в своем роде. Ажурная церковь, построенная, только представьте себе, без единого гвоздя, исключительно топором, колокольня, красивая ограда и неповторимый колорит ансамбля Кижи никого не оставляют равнодушным.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/12/kazanskij-kreml.jpg',
                name: 'Казанский Кремль',
                info: 'Это не просто исторический объект культурного наследия, а музей-заповедник, единственный на планете центр татарской культуры и традиций. Казанский Кремль отлично сохранился, сберег свои уникальные черты и внешний облик. Находится эта татарская крепость в самом центре Казани, так что мимо вы точно не пройдете.',
            },
        ]
    },
    {
        id: idEngland,
        photoUrl: 'https://static9.depositphotos.com/1611230/1080/i/450/depositphotos_10800421-stock-photo-big-ben-with-red-double.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=0FtFHGtBPe8',
        country: 'Великобритания',
        capital: 'Лондон',
        info: 'Великобритания (официальное название – Соединенное Королевство Великобритании и Северной Ирландии) – островное государство на северо-западе Европы, состоящее из Англии, Шотландии, Уэльса и Северной Ирландии. В Англии, на родине Шекспира и группы The Beatles, находится столица государства Лондон – мировой деловой и культурный центр. Также страна известна неолитическим сооружением Стоунхендж, римскими банями в городе Бат и старинными университетами в Оксфорде и Кембридже.',
        attractions: [
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/986/block_20986.jpg',
                name: 'Букингемский дворец',
                info: 'Букингемский дворец — резиденция королевы Великобритании. С XIX века это место считается постоянным для проведения официальных приемов. Кроме того, здесь проживает британская королевская династия.',
            },
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/988/block_20988.jpg',
                name: 'Биг-Бен',
                info: 'Биг-Бен — символ величия британцев. Если спросить местного жителя, какая достопримечательность в Великобритании считается самой популярной, он без промедления назовет это величественное сооружение.',
            },
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/990/block_20990.jpg',
                name: 'Трафальгарская площадь',
                info: 'Трафальгарская площадь — национальное достояние Великобритании. Сюда приезжают те, кто хочет отдохнуть от городской суеты и полюбоваться великолепными фонтанами.',
            },
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/992/block_20992.jpg',
                name: 'Стоунхендж',
                info: 'Стоунхендж — самая большая загадка человечества. Название этой достопримечательности Великобритании означает каменное кольцо. Мегалитическое сооружение из камней внесено в список Всемирного наследия, строилось оно на протяжении 300 лет.',
            },
        ]
    },
    {
        id: idItaly,
        photoUrl: 'https://static3.depositphotos.com/1000135/100/i/450/depositphotos_1007618-stock-photo-empty.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=hMpDo_Th-qA',
        country: 'Италия',
        capital: 'Рим',
        info: 'Италия – средиземноморское государство в Южной Европе с длинной береговой линией, которое оказало огромное влияние на западную культуру и кухню. На территории столицы страны, Рима, находится государство Ватикан, а также всемирно известные музеи и древние руины. Другие крупные города Италии – Флоренция, где можно увидеть шедевры эпохи Возрождения, например статую Давида работы Микеланджело и собор Дуомо, созданный по проекту архитектора Брунеллески, а также город каналов Венеция и столица моды Милан.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/10/ozero-komo.jpg',
                name: 'Озеро Комо',
                info: 'Площадь этого самого красивого итальянского озера — 146 квадратных километров. Но славится оно не только размерами, но и невероятно романтичной атмосферой, изумительно красивыми пейзажами и роскошными виллами. Именно на берегу озера Комо богачи со всего света стремятся приобрести дом, чтобы коротать дни, сидя на открытой террасе с бокалом вина и наслаждаясь чудесным видом.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/10/sobor-svyatogo-marka-1.jpg',
                name: 'Собор Святого Марка (Венеция)',
                info: 'Этот редкий образец пышной византийской архитектуры в Западной Европе находится около Дворца Дожей, на одноименной площади. Славится мозаикой и многочисленными произведениями искусства. Католики стремятся посетить место хранения мощей Святого Марка, остальных туристов привлекает древняя история и великолепная акустика собора, благодаря чему здесь выступают многие музыканты.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/10/vesuvio.jpg',
                name: 'Вулкан Везувий',
                info: 'Самый опасный вулкан континентальной Европы, рядом с которым, несмотря на это, расположился один из крупнейших городов страны — Неаполь. Везувий последний раз извергался более 60 лет назад, так что сейчас туристы могут подняться на его вершину, полюбоваться красивейшими видами и представить себе, какой грозной может быть эта гора.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/10/panteon.jpg',
                name: 'Пантеон в Риме',
                info: 'Настоящее достижение строительных технологий античности, великолепный храм, который стал образцом античной архитектуры и породил множество подражателей. Пантеон, к счастью, отлично сохранился, так что посетить его могут все желающие. Лучше всего это сделать в полдень, когда через отверстие в крыше пробивается настоящий столб света.',
            },
        ]
    },
    {
        id: idUSA,
        photoUrl: 'https://www.timeturk.com/resim/detay/75/756540.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=yWWIq54qFOY',
        country: 'США',
        capital: 'Вашингтон',
        info: 'Соединенные Штаты Америки – государство, состоящее из 50 штатов, занимает значительную часть Северной Америки. Штат Аляска расположен на северо-западе континента, а Гавайи – в Тихом океане. К крупным городам атлантического побережья относятся Нью-Йорк и столица Вашингтон. К западу от них находится ещё один важный город – Чикаго, известный своей впечатляющей архитектурой. А на западном побережье расположен Лос-Анджелес со знаменитыми голливудскими киностудиями.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/statuya-svobody.jpg',
                name: 'Статуя Свободы',
                info: 'Эта строгая леди с горящим факелом и скрижалью — символ не только Нью-Йорка, но и всей Америки. Созданная во Франции, Статуя Свободы отлично «прижилась» на своём острове около Манхэттена. На ее фоне фотографируются все туристы поголовно, традиционно становясь в ставшую известной во всем мире позу с вытянутой рукой.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/manhattan.jpg',
                name: 'Манхэттен',
                info: 'Исторический центр Нью-Йорка, сердце и наиболее известный, дорогой, престижный, шумный район города. Здесь невероятное количество людей, автомобилей, торговых центров и офисных комплексов. Манхэттен неоднократно становился «героем» голливудских фильмов, местом действия триллеров и романтических комедий.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/rushmore.jpg',
                name: 'Гора Рашмор',
                info: 'Да-да, это та самая гора, на которой выбиты портреты четырёх самых известных президентов США: Томаса Джефферсона, Джорджа Вашингтона, Авраама Линкольна и Теодора Рузвельта. Находится эта в остальном ничем не примечательная гора в Южной Дакоте, около города Кистон. Высота этого барельефа — 18,6 метра, так что президенты видны издалека.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/niagarskiy-vodopad.jpg',
                name: 'Ниагарский водопад',
                info: 'О красоте и мощи этого самого знаменитого водопада мира можно говорить долго, но само по себе зрелище не заменишь ничем. Существует несколько способов полюбоваться Ниагарой: с вертолета, из тоннеля под мощными струями воды и, конечно же, с берегов, причем с разных сторон. В любом случае это невероятно красиво, а еще — очень шумно.',
            },
        ]
    },
    {
        id: idSpain,
        photoUrl: 'https://s1.1zoom.ru/prev/514/Spain_Houses_Seville_Spanish_Square_Maria_Luisa_513276_600x400.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=pMrXf02udxk',
        country: 'Испания',
        capital: 'Мадрид',
        info: 'Испания – европейская страна, расположенная на Пиренейском полуострове. Территория Испании разделена на 17 автономных регионов. В столице страны, Мадриде, находятся Королевский дворец и музей Прадо, где хранятся произведения европейских мастеров. В Сеговии можно посетить средневековый замок (Алькасар) и увидеть хорошо сохранившийся римский акведук. Барселона – столица автономного сообщества Каталония. Облик этого города определяют многочисленные причудливо-фантастические творения архитектора Антонио Гауди, среди которых храм Святого Семейства.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/hram-sviatogo-semeistva.jpg',
                name: 'Храм Святого Семейства',
                info: 'Это самое известное сооружение великого Антонио Гауди. Также известен под названием Саграда-Фамилия. Примечательно тем, что строительство храма, начатое в 1882 году, не окончено до сих пор. Грандиозное здание является символом всей Барселоны и Каталонии. Величавое и внушительное здание начинало строиться в готическом стиле, однако Гауди внес в его облик оригинальность модерна, добавив храму легкости и ажурности.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/goticheskiy-kvartal.jpg',
                name: 'Готический квартал (Барселона)',
                info: 'В лабиринте узких улочек квартала сохранилось множество старинных построек времен Средневековья и Римской империи. В хаотичной планировке квартала легко заблудиться или попасть в тупик, однако это не смущает туристов со всего мира, приезжающих сюда оценить красоту памятников исторической архитектуры. В этом невероятно красивом месте готика гармонично сочетается с ренессансом и неоклассикой.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/ploshhad-ispanii.jpg',
                name: 'Площадь Испании (Севилья)',
                info: 'Площадь полукруглой формы находится в Севилье у парка Марии-Луизы и является одной из самых ярких в Европе. Она отделена протокой, через которую перекинуты изящные мостики. Окружает площадь архитектурный ансамбль из сооружений в неомавританском стиле. Украшает центр площади большой фонтан. В павильоне на краю площади часто проходят интересные выставки, а в его оформлении прослеживаются черты стиля арт-деко.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/park-guyelya.jpg',
                name: 'Парк Гуэль (Барселона)',
                info: 'Находится на окраине Барселоны. Его обустройство началось в 1901 году. Проектом парка занимался и Антонио Гауди. Самой известной достопримечательностью парка является огромная извилистая скамейка, сделанная из осколков керамических изделий, битого стекла и другого пестрого строительного мусора. Парк украшают и другие замысловатые композиции – сказочные домики на входе в парк, мозаичная Саламандра и «зал 100 колонн».',
            },
        ]
    },
    {
        id: idFrance,
        photoUrl: 'https://img.rl0.ru/78a583f63053e1878722bcacf5476d2b/e600x400o-x0i/https/news.rambler.ru/img/2017/03/06202728.361626.2439.jpeg',
        videoUrl: 'https://www.youtube.com/watch?v=a9Gu4fExojA',
        country: 'Франция',
        capital: 'Париж',
        info: 'Франция – это страна в Западной Европе, на территории которой находятся средневековые города, альпийские деревни и пляжи Средиземного моря. Париж, столица государства, славится своими домами моды, старейшими художественными музеями, в числе которых Лувр, и достопримечательностями, такими как Эйфелева башня. Франция известна своими винами и изысканной кухней. Наскальная живопись в пещере Ласко, амфитеатр Трех Галлий в Лионе и огромный Версальский дворец свидетельствуют о богатой истории этих мест.',
        attractions: [
            {
                photoUrl: 'http://designapplause.com/wp-content/xG58hlz9/2015/10/eiffle7-640x400.jpg',
                name: 'Эйфелева башня',
                info: 'Самая известная башня в мире, абсолютный и признанный всеми символ Франции.',
            },
            {
                photoUrl: 'https://lh3.googleusercontent.com/oTKPri3ctLS5b3bEwlSTWue4CHsVopBidf0Z_ytCHpR_QI83jYDHXSGPj7x7HgzZ2k0m0Q5CvWU3mwpXDJUd7rLTEbwUUDA7tbTfGh2p4fXp9AnvDKiO-QlANCplmMO30Qu16VoG2YHWSbyVu7Fp1_Lf4V9y2dmwpBbTq10yi3RFBL-c3ei4NLAjDuCQf1Br4SHPesiU7XyJiYT-J1rtfJo5EfHIn1v5PZiO44t0fYa1kY6jRi_fh7ZrI3o9_qLWl1N159__0LYTQXDHmCWhc9EhlvlJTcOXvuE5mBWckNtBMDecaOFZJaq22dtvrBhM3bnl_2SuHzi2-rQe0GesNWp4F0YlO4vnwBM-stZbv5fSJmAE-CcfScFAQM84wdkulwKPGNOaVNMXuhqMXqgyc88b56ZurxAGT-BpJ7Re6lVAYmx7CwTNe8Hql8Ongjkn6kxPczS212_EJme_kUrEzbNWGM7HYJO_tPw-_c1NBHvvofACECUskNRhTUnuitMnIuUqGz5fTrH_t80VvlBp36Bn59JmJedGZLgewpDw3UWnf0MW-evbnfHfWj8rKeVvTGUa=w832-h557-no',
                name: 'Комплекс аббатства Мон Сен-Мишель',
                info: 'Самый впечатляющий архитектурный ансамбль: старинное аббатство в окружении небольшого городка на скалистом острове в Нормандии, дорога к которому то скрывается, то вновь открывается с отливом.',
            },
            {
                photoUrl: 'http://ursispaltenstein.ch/blog/images/uploads_img/hall_of_mirrors.jpg',
                name: 'Версаль',
                info: 'Шедевр дворцового искусства, любимая резиденция Короля-Солнца, ставшая символом абсолютной монархии Франции. Версаль стал образцом для подражания множества последующих дворцов, в том числе Петергофа.',
            },
            {
                photoUrl: 'http://frenchtrip.ru/wp-content/uploads/2020/01/xSenanque-Provence-lavender_1.png.pagespeed.ic.Aa6YwFCInI.webp',
                name: 'Лавандовые поля Прованса',
                info: 'Романтичные сиреневые поля ароматной лаванды стали символом Прованса. Больше всего лавандовыми полями славится плато Валенсоль. Впрочем, и вокруг других городов Прованса можно насладиться фиолетовым морем. ',
            },
        ]
    },
    {
        id: idChina,
        photoUrl: 'https://calendar.baby-club.ru/img/apr/k4.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=3xZk5oK35Uc',
        country: 'Китай',
        capital: 'Пекин',
        info: 'Китай – густонаселенная страна в Восточной Азии с разнообразными ландшафтами и рельефом. Здесь можно найти луга, пустыни, горы, озера, реки и побережья протяженностью более 14 тыс. км. Столица страны, Пекин, славится современной архитектурой и древними памятниками, среди которых дворцовый комплекс Запретный город и площадь Тяньаньмэнь. На востоке расположен мировой финансовый центр Шанхай, силуэт которого формируют бесчисленные небоскребы. По северному Китаю, пересекая его с востока на запад, проходит Великая Китайская стена.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/05/velikaya-kitajskaya-stena.jpg',
                name: 'Великая Китайская стена',
                info: 'Эту крепость начали строить в 220-х годах до н.э. для защиты от кочевых племен по приказу императора Цинь Шихуанди. Тогда Китай достиг невероятной мощи и процветал. Длина стены от края до края – 2450 км, а если учесть все изгибы и ответвления, то цифра увеличится до 8852 км. В создании самой грандиозной крепости приняло участие около миллиона человек. Десятки тысяч погибли и были замурованы в стены.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/05/zapretnyj-gorod.jpg',
                name: 'Запретный город',
                info: 'Запретный город находится в центре Пекина. По мнению астрономов, которые определяли место для постройки, он стоит в центре земного шара. Это самый большой дворцовый комплекс в мире. Площадь города – 720 тыс. м². После его создания в 1406-1420 годах там правило 24 императора династий Мин и Цин. Попасть туда не мог никто, слишком любопытных наказывали смертной казнью. Теперь запретный город открыт для туристов.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/05/potala.jpg',
                name: 'Дворец Потала',
                info: 'Это красивейший царский дворец и известный центр буддизма. Расположен он в Лхасе. Первое сооружение здесь построил царь Тибета Сонгцен Гампо в 637 году на том месте, где медитировал. Потом он решил сделать город своей столицей и жениться, поэтому построил огромный дворец. Он почти не сохранился. Современный комплекс возвел Далай-лама. Он находится на холме высотой 3700 метров, окруженном долиной.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/05/ushhele-prygayushhego-tigra.jpg',
                name: 'Ущелье Прыгающего Тигра',
                info: 'Ущельем Прыгающего Тигра называю каньон в Сино-Тибетских горах на реке Янцзы. Тянется оно 15 км, в месте, где горы достигают высоты 2000 метров. Это притягивает любителей рафтинга. Свое название ущелье получило из-за легенды и тигре, перепрыгнувшем реку. В этом районе живут люди наси, которые выращивают зерновые культуры и предоставляют услуги туристам. Пейзажи в этих места великолепные.',
            },
        ]
    },
    {
        id: idIndia,
        photoUrl: 'https://cdn-nus-1.pinme.ru/tumb/600/photo/bc/60/bc6053f77d1efd80f56744cf7d669d66.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=uXmXm73JYck',
        country: 'Индия',
        capital: 'Нью-Дели',
        info: 'Индия – огромная страна в Южной Азии с разнообразным рельефом: на ее территории расположены как горные вершины Гималаев, так и побережье Индийского океана. История страны насчитывает пять тысячелетий. На севере Индии сохранились архитектурные памятники эпохи Великих Моголов, в том числе Красный форт и мечеть Джами-Масджид (Соборная мечеть) в Дели и мавзолей Тадж-Махал в Агре. Город Варанаси известен как место паломничества индуистов, которые совершают омовение в Ганге, а Ришикеш – как центр йоги и отправная точка для походов в Гималаи.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/07/tadzh-makhal.jpg',
                name: 'Тадж-Махал',
                info: 'Самый известный и величественный мавзолей страны. Белоснежная огромная усыпальница шаха Джахана и его супруги. Постройка выполнена из редкого мрамора, инкрустированного полудрагоценными камнями. Посещаем миллионами туристов, охраняется ЮНЕСКО.',
            },
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/988/block_20988.jpg',
                name: 'Город Варанаси',
                info: 'Старейший город в Индии. Расположен на реке Ганг, служит местом паломничества множества местных жителей и приезжих. На берегах совершаются ритуальные действия. Центр мира для индуистов, наиболее важное и почитаемое ими место. Обладает уникальной историей, архитектурой, бытом.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/07/hram-lotosa.jpg',
                name: 'Храм Лотоса',
                info: 'Относительно молодой храм Нью-Дели, построен в 1986 году. Внешне очень похож на огромный, белоснежный цветок лотоса. Главный в Индии храм религии Бахаи. Исключительное, по архитектурному решению, здание, необыкновенно эффектное в любое время суток. Рядом с храмом разбит сад. Одно из самых популярных мест у туристов в Дели.',
            },
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/992/block_20992.jpg',
                name: 'Хампи',
                info: 'Место древнего города, столицы Виджаянагарской империи. Сейчас там находятся остатки старинных строений и действующие индуистские храмы. В районе Хампи разместились 18 древних архитектурных и исторических памятников. Охраняется ЮНЕСКО.',
            },
        ]
    },
];

const countriesEn = [
    {
        id: idRussia,
        photoUrl: 'https://s1.1zoom.ru/prev/431/430286.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=9RfuxVZdtjY',
        country: 'Russia',
        capital: 'Moscow',
        info: 'Russia is the largest country in the world, located in Eastern Europe and North Asia and washed by the Pacific and Arctic Oceans. The landscape of Russia is extremely diverse: on its territory there are tundra, forests, and subtropical beaches. World-renowned ballet companies perform at the Bolshoi Theater in Moscow and the Mariinsky Theater in St. Petersburg. Founded by Emperor Peter I, St. Petersburg is famous for its Baroque Winter Palace, which houses part of the Hermitage Museum\'s extensive art collection.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/12/hram-vasiliya-blazhennogo.jpg',
                name: 'St Basil\'s Church',
                info: 'Probably the most famous Russian temple, bright and unusual, a real visiting card not only of Moscow, but of the whole country. St. Basil\'s Cathedral is remarkable not only for its location right on Red Square, but also for its history, architecture, original decoration and a collection of icons and church values.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/12/dolina-gejzerov-na-kamchatke.jpg',
                name: 'Valley of Geysers in Kamchatka',
                info: 'This valley looks like it was transferred from another planet. This is the largest territory with geysers in the world and the only one in all of Eurasia! If you want to see one of the Seven Wonders of Russia, go on a helicopter tour, which is conducted in accordance with strict rules and only under the supervision of a guide.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/12/kizhi.jpg',
                name: 'The architectural ensemble of Kizhi',
                info: 'This amazing creation is located on an island on Lake Onega and is unique in its kind. An openwork church built, just imagine, without a single nail, exclusively with an ax, a bell tower, a beautiful fence and the unique flavor of the Kizhi ensemble leave no one indifferent.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/12/kazanskij-kreml.jpg',
                name: 'Kazan Kremlin',
                info: 'This is not just a historical object of cultural heritage, but a museum-reserve, the only center of Tatar culture and traditions on the planet. The Kazan Kremlin has been perfectly preserved, retaining its unique features and appearance. This Tatar fortress is located in the very center of Kazan, so you will definitely not pass by.',
            },
        ]
    },
    {
        id: idEngland,
        photoUrl: 'https://static9.depositphotos.com/1611230/1080/i/450/depositphotos_10800421-stock-photo-big-ben-with-red-double.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=0FtFHGtBPe8',
        country: 'Great Britain',
        capital: 'London',
        info: 'Great Britain (officially the United Kingdom of Great Britain and Northern Ireland) is an island state in northwestern Europe, consisting of England, Scotland, Wales and Northern Ireland. In England, the homeland of Shakespeare and the Beatles, is the capital of the state, London - the world business and cultural center. The country is also known for its Neolithic Stonehenge, Roman baths in Bath and ancient universities in Oxford and Cambridge.',
        attractions: [
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/986/block_20986.jpg',
                name: 'Buckingham Palace',
                info: 'Buckingham Palace is the residence of the Queen of Great Britain. Since the 19th century, this place has been considered a permanent place for holding official receptions. It is also home to the British royal family.',
            },
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/988/block_20988.jpg',
                name: 'Big Ben',
                info: 'Big Ben is a symbol of British greatness. If you ask a local who is the most popular attraction in the UK, he will immediately name this magnificent structure.',
            },
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/990/block_20990.jpg',
                name: 'Trafalgar Square',
                info: 'Trafalgar Square is a national treasure of Great Britain. Those who want to take a break from the bustle of the city and admire the magnificent fountains come here.',
            },
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/992/block_20992.jpg',
                name: 'Stonehenge',
                info: 'Stonehenge is the greatest mystery of humanity. The name of this landmark in Great Britain means the stone ring. The megalithic structure of stones is included in the World Heritage List, it was built over 300 years.',
            },
        ]
    },
    {
        id: idItaly,
        photoUrl: 'https://static3.depositphotos.com/1000135/100/i/450/depositphotos_1007618-stock-photo-empty.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=hMpDo_Th-qA',
        country: 'Italy',
        capital: 'Rome',
        info: 'Italy is a Mediterranean state in southern Europe with a long coastline that has had a huge impact on Western culture and cuisine. The capital of the country, Rome, is home to the Vatican State, as well as world-famous museums and ancient ruins. Other major cities in Italy are Florence, where Renaissance masterpieces can be seen, such as Michelangelo\'s statue of David and the Duomo, designed by architect Brunelleschi, as well as the canal city of Venice and the fashion capital of Milan.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/10/ozero-komo.jpg',
                name: 'Lake Como',
                info: 'The area of ​​this most beautiful Italian lake is 146 square kilometers. But it is famous not only for its size, but also for its incredibly romantic atmosphere, amazingly beautiful landscapes and luxurious villas. It is on the shores of Lake Como that wealthy people from all over the world seek to buy a house in order to while away their days, sitting on an open terrace with a glass of wine and enjoying a wonderful view.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/10/sobor-svyatogo-marka-1.jpg',
                name: 'Cathedral of Saint Mark (Venice)',
                info: 'This rare example of lush Byzantine architecture in Western Europe is located near the Doge\'s Palace, on the square of the same name. Famous for mosaics and numerous works of art. Catholics tend to visit the storage site of the relics of St. Mark, other tourists are attracted by the ancient history and magnificent acoustics of the cathedral, thanks to which many musicians perform here.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/10/vesuvio.jpg',
                name: 'Mount Vesuvius',
                info: 'The most dangerous volcano in continental Europe, next to which, despite this, is located one of the largest cities in the country - Naples. Vesuvius last erupted more than 60 years ago, so now tourists can climb to its top, admire the most beautiful views and imagine how formidable this mountain can be.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/10/panteon.jpg',
                name: 'Pantheon in Rome',
                info: 'A real achievement of the building technologies of antiquity, a magnificent temple, which became an example of ancient architecture and gave rise to many imitators. The Pantheon, fortunately, is perfectly preserved, so everyone can visit it. This is best done at noon, when a real pillar of light shines through the hole in the roof.',
            },
        ]
    },
    {
        id: idUSA,
        photoUrl: 'https://www.timeturk.com/resim/detay/75/756540.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=yWWIq54qFOY',
        country: 'USA',
        capital: 'Washington',
        info: 'The United States of America is a state of 50 states that occupies a significant part of North America. The state of Alaska is located in the northwest of the continent, while Hawaii is in the Pacific Ocean. The major cities of the Atlantic coast include New York and the capital Washington. To the west of them lies another important city - Chicago, known for its impressive architecture. And on the west coast is Los Angeles with famous Hollywood film studios.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/statuya-svobody.jpg',
                name: 'The Statue of Liberty',
                info: 'This strict lady with a burning torch and a tablet is a symbol not only of New York, but of the whole of America. Created in France, the Statue of Liberty has taken root very well on its island near Manhattan. All tourists without exception are photographed against it, traditionally becoming in the pose with an outstretched arm that has become famous throughout the world.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/manhattan.jpg',
                name: 'Manhattan',
                info: 'The historic center of New York, the heart and the most famous, expensive, prestigious, bustling area of ​​the city. There is an incredible number of people, cars, shopping centers and office complexes. Manhattan has repeatedly become the "hero" of Hollywood films, the scene of thrillers and romantic comedies.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/rushmore.jpg',
                name: 'Mount Rushmore',
                info: 'Yes, yes, this is the very mountain on which the portraits of the four most famous presidents of the United States are carved: Thomas Jefferson, George Washington, Abraham Lincoln and Theodore Roosevelt. This otherwise unremarkable mountain is located in South Dakota, near the city of Keyston. The height of this bas-relief is 18.6 meters, so the presidents are visible from afar.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/niagarskiy-vodopad.jpg',
                name: 'Niagara Falls',
                info: 'One can talk for a long time about the beauty and power of this most famous waterfall in the world, but the spectacle itself cannot be replaced by anything. There are several ways to admire Niagara: from a helicopter, from a tunnel under powerful streams of water and, of course, from the banks, and from different sides. In any case, it is incredibly beautiful, and also very noisy.',
            },
        ]
    },
    {
        id: idSpain,
        photoUrl: 'https://s1.1zoom.ru/prev/514/Spain_Houses_Seville_Spanish_Square_Maria_Luisa_513276_600x400.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=pMrXf02udxk',
        country: 'Spain',
        capital: 'Madrid',
        info: 'Spain is a European country located on the Iberian Peninsula. The territory of Spain is divided into 17 autonomous regions. The capital of the country, Madrid, houses the Royal Palace and the Prado Museum, which houses works of European masters. In Segovia, you can visit the medieval castle (Alcazar) and see the well-preserved Roman aqueduct. Barcelona is the capital of the autonomous community of Catalonia. The appearance of this city is determined by the numerous fanciful creations of the architect Antoni Gaudí, including the Sagrada Familia.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/hram-sviatogo-semeistva.jpg',
                name: 'Sagrada Familia',
                info: 'This is the most famous building of the great Antoni Gaudi. Also known as the Sagrada Familia. It is noteworthy that the construction of the temple, which began in 1882, has not yet been completed. The grandiose building is the symbol of the whole of Barcelona and Catalonia. A stately and imposing building began to be built in the Gothic style, but Gaudi introduced the originality of Art Nouveau into its appearance, adding lightness and delicacy to the temple.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/goticheskiy-kvartal.jpg',
                name: 'Gothic Quarter (Barcelona)',
                info: 'In the labyrinth of narrow streets of the quarter, there are many old buildings from the Middle Ages and the Roman Empire. It is easy to get lost or get stuck in the chaotic layout of the quarter, but this does not bother tourists from all over the world who come here to appreciate the beauty of the monuments of historical architecture. In this incredibly beautiful place, Gothic is harmoniously combined with Renaissance and neoclassicism.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/ploshhad-ispanii.jpg',
                name: 'Plaza of Spain (Seville)',
                info: 'The semicircular square is located in Seville near the Maria Luisa Park and is one of the brightest in Europe. It is separated by a channel through which graceful bridges are thrown. The square is surrounded by an architectural ensemble of buildings in the neo-Moorish style. The center of the square is decorated with a large fountain. The pavilion on the edge of the square often hosts interesting exhibitions, and in its design features of the Art Deco style can be traced.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/park-guyelya.jpg',
                name: 'Park Guell (Barcelona)',
                info: 'Located on the outskirts of Barcelona. Its construction began in 1901. Antonio Gaudi was also involved in the project of the park. The most famous attraction in the park is a huge winding bench made from shards of pottery, broken glass and other motley construction debris. The park is also decorated with other intricate compositions - fabulous houses at the entrance to the park, the mosaic Salamander and the “hall of 100 columns”.',
            },
        ]
    },
    {
        id: idFrance,
        photoUrl: 'https://img.rl0.ru/78a583f63053e1878722bcacf5476d2b/e600x400o-x0i/https/news.rambler.ru/img/2017/03/06202728.361626.2439.jpeg',
        videoUrl: 'https://www.youtube.com/watch?v=a9Gu4fExojA',
        country: 'France',
        capital: 'Paris',
        info: 'France is a country in Western Europe, home to medieval towns, alpine villages and Mediterranean beaches. Paris, the capital of the state, is famous for its fashion houses, the oldest art museums, including the Louvre, and landmarks such as the Eiffel Tower. France is known for its wines and fine cuisine. The rock paintings in the Lascaux cave, the Amphitheater of the Three Gauls in Lyon and the huge Palace of Versailles testify to the rich history of the area.',
        attractions: [
            {
                photoUrl: 'http://designapplause.com/wp-content/xG58hlz9/2015/10/eiffle7-640x400.jpg',
                name: 'The Eiffel Tower',
                info: 'The most famous tower in the world, the absolute and recognized symbol of France.',
            },
            {
                photoUrl: 'https://lh3.googleusercontent.com/oTKPri3ctLS5b3bEwlSTWue4CHsVopBidf0Z_ytCHpR_QI83jYDHXSGPj7x7HgzZ2k0m0Q5CvWU3mwpXDJUd7rLTEbwUUDA7tbTfGh2p4fXp9AnvDKiO-QlANCplmMO30Qu16VoG2YHWSbyVu7Fp1_Lf4V9y2dmwpBbTq10yi3RFBL-c3ei4NLAjDuCQf1Br4SHPesiU7XyJiYT-J1rtfJo5EfHIn1v5PZiO44t0fYa1kY6jRi_fh7ZrI3o9_qLWl1N159__0LYTQXDHmCWhc9EhlvlJTcOXvuE5mBWckNtBMDecaOFZJaq22dtvrBhM3bnl_2SuHzi2-rQe0GesNWp4F0YlO4vnwBM-stZbv5fSJmAE-CcfScFAQM84wdkulwKPGNOaVNMXuhqMXqgyc88b56ZurxAGT-BpJ7Re6lVAYmx7CwTNe8Hql8Ongjkn6kxPczS212_EJme_kUrEzbNWGM7HYJO_tPw-_c1NBHvvofACECUskNRhTUnuitMnIuUqGz5fTrH_t80VvlBp36Bn59JmJedGZLgewpDw3UWnf0MW-evbnfHfWj8rKeVvTGUa=w832-h557-no',
                name: 'Abbey complex of Mont Saint-Michel',
                info: 'The most impressive architectural ensemble: an old abbey surrounded by a small town on a rocky island in Normandy, the road to which is hidden and then reopens with low tide.',
            },
            {
                photoUrl: 'http://ursispaltenstein.ch/blog/images/uploads_img/hall_of_mirrors.jpg',
                name: 'Versailles',
                info: 'A masterpiece of palace art, the favorite residence of the Sun King, which has become a symbol of the absolute monarchy of France. Versailles became a role model for many subsequent palaces, including Peterhof.',
            },
            {
                photoUrl: 'http://frenchtrip.ru/wp-content/uploads/2020/01/xSenanque-Provence-lavender_1.png.pagespeed.ic.Aa6YwFCInI.webp',
                name: 'Lavender fields of Provence',
                info: 'Romantic lilac fields of fragrant lavender have become a symbol of Provence. Most of all, the Valensole plateau is famous for its lavender fields. However, around other cities in Provence, you can enjoy the purple sea.',
            },
        ]
    },
    {
        id: idChina,
        photoUrl: 'https://calendar.baby-club.ru/img/apr/k4.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=3xZk5oK35Uc',
        country: 'China',
        capital: 'Beijing',
        info: 'China is a densely populated country in East Asia with varied landscapes and topography. Here you can find meadows, deserts, mountains, lakes, rivers and coasts with a length of more than 14 thousand km. The capital of the country, Beijing, is famous for its modern architecture and ancient monuments, including the Forbidden City palace complex and Tiananmen Square. To the east is the world financial center Shanghai, whose silhouette is shaped by countless skyscrapers. The Great Wall of China crosses northern China, crossing it from east to west.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/05/velikaya-kitajskaya-stena.jpg',
                name: 'The Great Wall of China',
                info: 'This fortress began to be built in the 220s BC. to protect against nomadic tribes by order of Emperor Qin Shi Huang. Then China achieved incredible power and flourished. The length of the wall from edge to edge is 2,450 km, and if we take into account all the bends and branches, the figure will increase to 8,852 km. About a million people took part in the creation of the most grandiose fortress. Tens of thousands died and were walled up in the walls.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/05/zapretnyj-gorod.jpg',
                name: 'Forbidden City',
                info: 'The Forbidden City is located in the center of Beijing. According to the astronomers who determined the site for the building, it stands in the center of the globe. This is the largest palace complex in the world. The area of ​​the city is 720 thousand square meters. After its creation in 1406-1420, 24 emperors of the Ming and Qing dynasties ruled there. Nobody could get there, those who were too curious were punished with the death penalty. The Forbidden City is now open to tourists.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/05/potala.jpg',
                name: 'Potala Palace',
                info: 'This is a beautiful royal palace and a famous center of Buddhism. It is located in Lhasa. The first building here was built by the king of Tibet Songtsen Gampo in 637 on the place where he meditated. Then he decided to make the city his capital and get married, so he built a huge palace. It has hardly survived. The modern complex was built by the Dalai Lama. It is located on a hill 3700 meters high, surrounded by a valley.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/05/ushhele-prygayushhego-tigra.jpg',
                name: 'Tiger Leaping Gorge',
                info: 'I call the Tiger Leaping Gorge a canyon in the Sino-Tibetan Mountains on the Yangtze River. It stretches for 15 km, in a place where the mountains reach a height of 2000 meters. This attracts rafting enthusiasts. The gorge got its name because of the legend and the tiger that jumped over the river. The area is home to the Naxi people who grow crops and provide services to tourists. The landscapes in these places are magnificent.',
            },
        ]
    },
    {
        id: idIndia,
        photoUrl: 'https://cdn-nus-1.pinme.ru/tumb/600/photo/bc/60/bc6053f77d1efd80f56744cf7d669d66.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=uXmXm73JYck',
        country: 'India',
        capital: 'New Delhi',
        info: 'India is a huge country in South Asia with a varied relief: both the mountain peaks of the Himalayas and the coast of the Indian Ocean are located on its territory. The history of the country goes back five millennia. In northern India, architectural monuments of the Mughal era have been preserved, including the Red Fort and the Jami Masjid (Cathedral Mosque) in Delhi and the Taj Mahal in Agra. The city of Varanasi is known as a place of pilgrimage for Hindus who bathe in the Ganges, and Rishikesh is known as a yoga center and starting point for trekking in the Himalayas.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/07/tadzh-makhal.jpg',
                name: 'Taj Mahal',
                info: 'The most famous and majestic mausoleum in the country. Snow-white huge tomb of Shah Jahan and his wife. The building is made of rare marble inlaid with semi-precious stones. Visited by millions of tourists, protected by UNESCO.',
            },
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/988/block_20988.jpg',
                name: 'Varanasi city',
                info: 'The oldest city in India. Located on the Ganges River, it is a place of pilgrimage for many locals and visitors. Ritual actions are performed on the banks. The center of the world for Hindus, the most important and revered place. It has a unique history, architecture and way of life.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/07/hram-lotosa.jpg',
                name: 'Lotus Temple',
                info: 'A relatively young temple in New Delhi, built in 1986. Outwardly, it is very similar to a huge, snow-white lotus flower. The main temple of the Bahá\'í religion in India. An exceptional building in terms of architectural design, unusually spectacular at any time of the day. There is a garden next to the temple. One of the most popular tourist destinations in Delhi.',
            },
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/992/block_20992.jpg',
                name: 'Humpy',
                info: 'The site of an ancient city, the capital of the Vijayanagar Empire. Now there are the remains of ancient buildings and operating Hindu temples. In the Hampi area there are 18 ancient architectural and historical monuments. Protected by UNESCO.',
            },
        ]
    },
];

const countriesFr = [
    {
        id: idRussia,
        photoUrl: 'https://s1.1zoom.ru/prev/431/430286.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=9RfuxVZdtjY',
        country: 'Russie',
        capital: 'Moscou',
        info: 'La Russie est le plus grand pays du monde, situé en Europe de l\'Est et en Asie du Nord et baigné par les océans Pacifique et Arctique. Le paysage de la Russie est extrêmement diversifié: sur son territoire, il y a de la toundra, des forêts et des plages subtropicales. Des compagnies de ballet de renommée mondiale se produisent au théâtre Bolchoï à Moscou et au théâtre Mariinsky à Saint-Pétersbourg. Fondée par l\'empereur Pierre Ier, Saint-Pétersbourg est célèbre pour son palais d\'hiver baroque, qui abrite une partie de la vaste collection d\'art du musée de l\'Ermitage.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/12/hram-vasiliya-blazhennogo.jpg',
                name: 'Église Saint-Basile',
                info: 'Probablement le temple russe le plus célèbre, lumineux et insolite, une véritable carte de visite non seulement de Moscou, mais de tout le pays. La cathédrale Saint-Basile est remarquable non seulement pour son emplacement sur la Place Rouge, mais aussi pour son histoire, son architecture, sa décoration originale et une collection d\'icônes et de valeurs d\'églises.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/12/dolina-gejzerov-na-kamchatke.jpg',
                name: 'Vallée des geysers au Kamtchatka',
                info: 'Cette vallée semble avoir été transférée d\'une autre planète. C\'est le plus grand territoire avec des geysers au monde et le seul de toute l\'Eurasie! Si vous voulez voir l\'une des sept merveilles de la Russie, faites un tour en hélicoptère, qui se déroule selon des règles strictes et uniquement sous la supervision d\'un guide.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/12/kizhi.jpg',
                name: 'L\'ensemble architectural de Kizhi',
                info: 'Cette création étonnante est située sur une île du lac Onega et est unique en son genre. Une église ajourée construite, imaginez-vous, sans un seul clou, exclusivement avec une hache, un clocher, une belle clôture et la saveur unique de l\'ensemble Kizhi ne laissent personne indifférent.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/12/kazanskij-kreml.jpg',
                name: 'Kremlin de Kazan',
                info: 'Ce n\'est pas seulement un objet historique du patrimoine culturel, mais une réserve-musée, le seul centre de la culture et des traditions tatares de la planète. Le Kremlin de Kazan a été parfaitement préservé, conservant ses caractéristiques et son apparence uniques. Cette forteresse tatare est située en plein centre de Kazan, vous ne passerez donc certainement pas par là.',
            },
        ]
    },
    {
        id: idEngland,
        photoUrl: 'https://static9.depositphotos.com/1611230/1080/i/450/depositphotos_10800421-stock-photo-big-ben-with-red-double.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=0FtFHGtBPe8',
        country: 'Grande Bretagne',
        capital: 'Londres',
        info: 'La Grande-Bretagne (officiellement le Royaume-Uni de Grande-Bretagne et d\'Irlande du Nord) est un État insulaire du nord-ouest de l\'Europe, composé de l\'Angleterre, de l\'Écosse, du Pays de Galles et de l\'Irlande du Nord. En Angleterre, la patrie de Shakespeare et des Beatles, est la capitale de l\'État, Londres - le centre mondial des affaires et de la culture. Le pays est également connu pour son Stonehenge néolithique, ses thermes romains à Bath et les anciennes universités d\'Oxford et de Cambridge.',
        attractions: [
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/986/block_20986.jpg',
                name: 'Le palais de Buckingham',
                info: 'Le palais de Buckingham est la résidence de la reine de Grande-Bretagne. Depuis le XIXe siècle, ce lieu est considéré comme un lieu permanent pour la tenue de réceptions officielles. Il abrite également la famille royale britannique.',
            },
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/988/block_20988.jpg',
                name: 'Big Ben',
                info: 'Big Ben est un symbole de la grandeur britannique. Si vous demandez à un local qui est l\'attraction la plus populaire du Royaume-Uni, il nommera immédiatement cette magnifique structure.',
            },
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/990/block_20990.jpg',
                name: 'Trafalgar Square',
                info: 'Trafalgar Square est un trésor national de la Grande-Bretagne. Ceux qui veulent faire une pause dans l\'agitation de la ville et admirer les magnifiques fontaines viennent ici.',
            },
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/992/block_20992.jpg',
                name: 'Stonehenge',
                info: 'Stonehenge est le plus grand mystère de l\'humanité. Le nom de ce monument en Grande-Bretagne signifie l\'anneau de pierre. La structure mégalithique de pierres est inscrite sur la Liste du patrimoine mondial, elle a été construite il y a plus de 300 ans.',
            },
        ]
    },
    {
        id: idItaly,
        photoUrl: 'https://static3.depositphotos.com/1000135/100/i/450/depositphotos_1007618-stock-photo-empty.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=hMpDo_Th-qA',
        country: 'Italie',
        capital: 'Rome',
        info: 'L\'Italie est un État méditerranéen du sud de l\'Europe avec un long littoral qui a eu un impact énorme sur la culture et la cuisine occidentales. La capitale du pays, Rome, abrite l\'État du Vatican, ainsi que des musées de renommée mondiale et des ruines antiques. Les autres grandes villes d\'Italie sont Florence, où l\'on peut voir des chefs-d\'œuvre de la Renaissance, tels que la statue de Michel-Ange de David et le Duomo, conçu par l\'architecte Brunelleschi, ainsi que la ville du canal de Venise et la capitale de la mode de Milan.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/10/ozero-komo.jpg',
                name: 'Lac de Côme',
                info: 'La superficie de ce plus beau lac italien est de 146 kilomètres carrés. Mais il est célèbre non seulement pour sa taille, mais aussi pour son atmosphère incroyablement romantique, ses paysages incroyablement beaux et ses villas luxueuses. C\'est sur les rives du lac de Côme que les riches du monde entier cherchent à acheter une maison pour passer leurs journées, assis sur une terrasse ouverte avec un verre de vin et bénéficiant d\'une vue magnifique.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/10/sobor-svyatogo-marka-1.jpg',
                name: 'Cathédrale Saint-Marc (Venise)',
                info: 'Cet exemple rare d\'architecture byzantine luxuriante en Europe occidentale est situé près du palais des Doges, sur la place du même nom. Célèbre pour ses mosaïques et ses nombreuses œuvres d\'art. Les catholiques ont tendance à visiter le site de stockage des reliques de Saint-Marc, d\'autres touristes sont attirés par l\'histoire ancienne et la magnifique acoustique de la cathédrale, grâce auxquelles de nombreux musiciens se produisent ici.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/10/vesuvio.jpg',
                name: 'Le mont Vésuve',
                info: 'Le volcan le plus dangereux d\'Europe continentale, à côté duquel, malgré cela, se trouve l\'une des plus grandes villes du pays - Naples. Le Vésuve a éclaté pour la dernière fois il y a plus de 60 ans, les touristes peuvent désormais grimper à son sommet, admirer les plus belles vues et imaginer à quel point cette montagne peut être formidable.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/10/panteon.jpg',
                name: 'Panthéon de Rome',
                info: 'Véritable réalisation des technologies de construction de l\'Antiquité, un temple magnifique, qui est devenu un exemple d\'architecture ancienne et a donné lieu à de nombreux imitateurs. Le Panthéon, heureusement, est parfaitement conservé, donc tout le monde peut le visiter. Il est préférable de le faire à midi, lorsqu\'un véritable pilier de lumière brille à travers le trou du toit.',
            },
        ]
    },
    {
        id: idUSA,
        photoUrl: 'https://www.timeturk.com/resim/detay/75/756540.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=yWWIq54qFOY',
        country: 'Etats-Unis',
        capital: 'Washington',
        info: 'Les États-Unis d\'Amérique sont un État de 50 États qui occupe une partie importante de l\'Amérique du Nord. L\'état de l\'Alaska est situé au nord-ouest du continent, tandis qu\'Hawaï se trouve dans l\'océan Pacifique. Les grandes villes de la côte atlantique comprennent New York et la capitale Washington. À l\'ouest d\'eux se trouve une autre ville importante - Chicago, connue pour son architecture impressionnante. Et sur la côte ouest se trouve Los Angeles avec les célèbres studios de cinéma hollywoodiens.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/statuya-svobody.jpg',
                name: 'La statue de la Liberté',
                info: 'Cette dame stricte avec une torche allumée et une tablette est un symbole non seulement de New York, mais de toute l\'Amérique. Créée en France, la Statue de la Liberté s\'est très bien implantée sur son île près de Manhattan. Tous les touristes sans exception sont photographiés sur son arrière-plan, devenant traditionnellement dans la pose avec un bras tendu qui est devenue connue dans le monde entier.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/manhattan.jpg',
                name: 'Manhattan',
                info: 'Le centre historique de New York, le cœur et le quartier le plus célèbre, le plus cher, le plus prestigieux et le plus animé de la ville. Il y a un nombre incroyable de personnes, de voitures, de centres commerciaux et de complexes de bureaux. Manhattan est devenu à plusieurs reprises le "héros" des films hollywoodiens, le théâtre de thrillers et de comédies romantiques.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/rushmore.jpg',
                name: 'Mont Rushmore',
                info: 'Oui, oui, c\'est la montagne même sur laquelle sont gravés les portraits des quatre présidents les plus célèbres des États-Unis: Thomas Jefferson, George Washington, Abraham Lincoln et Theodore Roosevelt. Cette montagne autrement banale est située dans le Dakota du Sud, près de la ville de Keyston. La hauteur de ce bas-relief est de 18,6 mètres, les présidents sont donc visibles de loin.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/niagarskiy-vodopad.jpg',
                name: 'Сhutes du Niagara',
                info: 'On peut parler longtemps de la beauté et de la puissance de cette cascade la plus célèbre au monde, mais le spectacle lui-même ne peut être remplacé par rien. Il y a plusieurs façons d\'admirer Niagara: depuis un hélicoptère, depuis un tunnel sous de puissants courants d\'eau et, bien sûr, depuis les rives, et de différents côtés. En tout cas, c\'est incroyablement beau, et aussi très bruyant.',
            },
        ]
    },
    {
        id: idSpain,
        photoUrl: 'https://s1.1zoom.ru/prev/514/Spain_Houses_Seville_Spanish_Square_Maria_Luisa_513276_600x400.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=pMrXf02udxk',
        country: 'Espagne',
        capital: 'Madrid',
        info: 'L\'Espagne est un pays européen situé sur la péninsule ibérique. Le territoire espagnol est divisé en 17 régions autonomes. La capitale du pays, Madrid, abrite le Palais Royal et le Musée du Prado, qui abrite des œuvres de maîtres européens. À Ségovie, vous pouvez visiter le château médiéval (Alcazar) et voir l\'aqueduc romain bien conservé. Barcelone est la capitale de la communauté autonome de Catalogne. L\'apparence de cette ville est déterminée par les nombreuses créations fantaisistes de l\'architecte Antoni Gaudí, y compris la Sagrada Familia.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/hram-sviatogo-semeistva.jpg',
                name: 'Sagrada Familia',
                info: 'C\'est le bâtiment le plus célèbre du grand Antoni Gaudi. Aussi connue sous le nom de Sagrada Familia. Il est à noter que la construction du temple, qui a commencé en 1882, n\'est pas encore terminée. Le bâtiment grandiose est le symbole de l\'ensemble de Barcelone et de la Catalogne. Un bâtiment majestueux et imposant a commencé à être construit dans le style gothique, mais Gaudi a introduit l\'originalité de l\'Art Nouveau dans son apparence, ajoutant légèreté et délicatesse au temple.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/goticheskiy-kvartal.jpg',
                name: 'Quartier gothique (Barcelone)',
                info: 'Dans le labyrinthe de ruelles étroites du quartier, de nombreux bâtiments anciens du Moyen Âge et de l\'Empire romain ont été conservés. Il est facile de se perdre ou de rester coincé dans le tracé chaotique du quartier, mais cela ne dérange pas les touristes du monde entier qui viennent ici pour apprécier la beauté des monuments de l\'architecture historique. Dans cet endroit incroyablement beau, le gothique est harmonieusement combiné avec la Renaissance et le néoclassicisme.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/ploshhad-ispanii.jpg',
                name: 'Place d\'Espagne (Séville)',
                info: 'La place semi-circulaire est située à Séville près du parc Maria Luisa et est l\'une des plus lumineuses d\'Europe. Il est séparé par un canal à travers lequel de gracieux ponts sont jetés. La place est entourée d\'un ensemble architectural de bâtiments de style néo-mauresque. Le centre de la place est orné d\'une grande fontaine. Le pavillon sur le bord de la place accueille souvent des expositions intéressantes, et dans ses caractéristiques de conception du style Art déco peuvent être retracées.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2014/09/park-guyelya.jpg',
                name: 'Parc Guell (Barcelone)',
                info: 'Situé à la périphérie de Barcelone. Sa construction a commencé en 1901. Antonio Gaudi a également été impliqué dans le projet du parc. L\'attraction la plus célèbre du parc est un immense banc sinueux fait d\'éclats de poterie, de verre brisé et d\'autres débris de construction hétéroclites. Le parc est également décoré d\'autres compositions complexes - des maisons fabuleuses à l\'entrée du parc, la salamandre en mosaïque et la «salle des 100 colonnes».',
            },
        ]
    },
    {
        id: idFrance,
        photoUrl: 'https://img.rl0.ru/78a583f63053e1878722bcacf5476d2b/e600x400o-x0i/https/news.rambler.ru/img/2017/03/06202728.361626.2439.jpeg',
        videoUrl: 'https://www.youtube.com/watch?v=a9Gu4fExojA',
        country: 'France',
        capital: 'Paris',
        info: 'La France est un pays d\'Europe occidentale, qui abrite des villes médiévales, des villages alpins et des plages méditerranéennes. Paris, la capitale de l\'État, est célèbre pour ses maisons de couture, les plus anciens musées d\'art, dont le Louvre, et des monuments tels que la Tour Eiffel. La France est connue pour ses vins et sa cuisine raffinée. Les peintures rupestres de la grotte de Lascaux, l\'amphithéâtre des Trois Gaules à Lyon et l\'immense château de Versailles témoignent de la riche histoire de la région.',
        attractions: [
            {
                photoUrl: 'http://designapplause.com/wp-content/xG58hlz9/2015/10/eiffle7-640x400.jpg',
                name: 'La tour Eiffel',
                info: 'La tour la plus célèbre du monde, le symbole absolu et reconnu de la France.',
            },
            {
                photoUrl: 'https://lh3.googleusercontent.com/oTKPri3ctLS5b3bEwlSTWue4CHsVopBidf0Z_ytCHpR_QI83jYDHXSGPj7x7HgzZ2k0m0Q5CvWU3mwpXDJUd7rLTEbwUUDA7tbTfGh2p4fXp9AnvDKiO-QlANCplmMO30Qu16VoG2YHWSbyVu7Fp1_Lf4V9y2dmwpBbTq10yi3RFBL-c3ei4NLAjDuCQf1Br4SHPesiU7XyJiYT-J1rtfJo5EfHIn1v5PZiO44t0fYa1kY6jRi_fh7ZrI3o9_qLWl1N159__0LYTQXDHmCWhc9EhlvlJTcOXvuE5mBWckNtBMDecaOFZJaq22dtvrBhM3bnl_2SuHzi2-rQe0GesNWp4F0YlO4vnwBM-stZbv5fSJmAE-CcfScFAQM84wdkulwKPGNOaVNMXuhqMXqgyc88b56ZurxAGT-BpJ7Re6lVAYmx7CwTNe8Hql8Ongjkn6kxPczS212_EJme_kUrEzbNWGM7HYJO_tPw-_c1NBHvvofACECUskNRhTUnuitMnIuUqGz5fTrH_t80VvlBp36Bn59JmJedGZLgewpDw3UWnf0MW-evbnfHfWj8rKeVvTGUa=w832-h557-no',
                name: 'Complexe abbatial du Mont Saint-Michel',
                info: 'L\'ensemble architectural le plus impressionnant: une ancienne abbaye entourée d\'une petite ville sur une île rocheuse de Normandie, dont la route est cachée puis rouvre à marée basse.',
            },
            {
                photoUrl: 'http://ursispaltenstein.ch/blog/images/uploads_img/hall_of_mirrors.jpg',
                name: 'Versailles',
                info: 'Un chef-d\'œuvre de l\'art des palais, la résidence préférée du Roi Soleil, devenue un symbole de la monarchie absolue de la France. Versailles est devenu un modèle pour de nombreux palais ultérieurs, y compris Peterhof.',
            },
            {
                photoUrl: 'http://frenchtrip.ru/wp-content/uploads/2020/01/xSenanque-Provence-lavender_1.png.pagespeed.ic.Aa6YwFCInI.webp',
                name: 'Champs de lavande de Provence',
                info: 'Les champs de lilas romantiques de lavande parfumée sont devenus un symbole de la Provence. Surtout, le plateau de Valensole est réputé pour ses champs de lavande. Cependant, autour d\'autres villes de Provence, vous pouvez profiter de la mer violette.',
            },
        ]
    },
    {
        id: idChina,
        photoUrl: 'https://calendar.baby-club.ru/img/apr/k4.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=3xZk5oK35Uc',
        country: 'Chine',
        capital: 'Pékin',
        info: 'La Chine est un pays densément peuplé d\'Asie de l\'Est avec des paysages et une topographie variés. Ici vous pouvez trouver des prairies, des déserts, des montagnes, des lacs, des rivières et des côtes d\'une longueur de plus de 14 mille km. La capitale du pays, Pékin, est célèbre pour son architecture moderne et ses monuments anciens, dont le complexe du palais de la Cité Interdite et la place Tiananmen. À l\'est se trouve le centre financier mondial de Shanghai, dont la silhouette est façonnée par d\'innombrables gratte-ciel. La Grande Muraille de Chine traverse le nord de la Chine, la traversant d\'est en ouest.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/05/velikaya-kitajskaya-stena.jpg',
                name: 'La grande muraille de Chine',
                info: 'Cette forteresse a commencé à être construite dans les années 220 avant JC. pour se protéger contre les tribus nomades par ordre de l\'empereur Qin Shi Huang. Ensuite, la Chine a atteint une puissance incroyable et s\'est épanouie. La longueur du mur d\'un bord à l\'autre est de 2 450 km, et si l\'on prend en compte tous les virages et embranchements, le chiffre passera à 8 852 km. Environ un million de personnes ont participé à la création de la forteresse la plus grandiose. Des dizaines de milliers de personnes sont mortes et ont été murées dans les murs.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/05/zapretnyj-gorod.jpg',
                name: 'Ville oubliée',
                info: 'La Cité Interdite est située dans le centre de Pékin. Selon les astronomes qui ont déterminé le site du bâtiment, il se trouve au centre du globe. C\'est le plus grand complexe de palais au monde. La superficie de la ville est de 720 mille mètres carrés. Après sa création en 1406-1420, 24 empereurs des dynasties Ming et Qing y ont régné. Personne ne pouvait y arriver, ceux qui étaient trop curieux étaient punis de la peine de mort. La Cité Interdite est désormais ouverte aux touristes.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/05/potala.jpg',
                name: 'Palais du Potala',
                info: 'C\'est un magnifique palais royal et un célèbre centre du bouddhisme. Il est situé à Lhassa. Le premier bâtiment ici a été construit par le roi du Tibet Songtsen Gampo en 637 à l\'endroit où il méditait. Puis il a décidé de faire de la ville sa capitale et de se marier, alors il a construit un immense palais. Il a à peine survécu. Le complexe moderne a été construit par le Dalaï Lama. Il est situé sur une colline de 3700 mètres d\'altitude, entouré d\'une vallée.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/05/ushhele-prygayushhego-tigra.jpg',
                name: 'Gorges du saut du tigre',
                info: 'J\'appelle la gorge du saut du tigre un canyon dans les montagnes sino-tibétaines sur le fleuve Yangtze. Il s\'étend sur 15 km, dans un endroit où les montagnes atteignent une hauteur de 2000 mètres. Cela attire les amateurs de rafting. La gorge tire son nom de la légende et du tigre qui a sauté par-dessus la rivière. La région abrite le peuple Naxi qui cultive et fournit des services aux touristes. Les paysages de ces lieux sont magnifiques.',
            },
        ]
    },
    {
        id: idIndia,
        photoUrl: 'https://cdn-nus-1.pinme.ru/tumb/600/photo/bc/60/bc6053f77d1efd80f56744cf7d669d66.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=uXmXm73JYck',
        country: 'Inde',
        capital: 'New Delhi',
        info: 'L\'Inde est un immense pays d\'Asie du Sud au relief varié: à la fois les sommets montagneux de l\'Himalaya et la côte de l\'océan Indien sont situés sur son territoire. L\'histoire du pays remonte à cinq millénaires. Dans le nord de l\'Inde, il existe des monuments architecturaux de l\'époque moghole, notamment le Fort Rouge et le Jami Masjid (mosquée cathédrale) à Delhi et le Taj Mahal à Agra. La ville de Varanasi est connue comme un lieu de pèlerinage pour les hindous qui se baignent dans le Gange, et Rishikesh est connue comme un centre de yoga et un point de départ pour le trekking dans l\'Himalaya.',
        attractions: [
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/07/tadzh-makhal.jpg',
                name: 'Taj Mahal',
                info: 'Le mausolée le plus célèbre et le plus majestueux du pays. Immense tombe blanche comme neige de Shah Jahan et de sa femme. Le bâtiment est fait de marbre rare incrusté de pierres semi-précieuses. Visité par des millions de touristes, protégé par l\'UNESCO.',
            },
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/988/block_20988.jpg',
                name: 'Ville de Varanasi',
                info: 'La plus ancienne ville de l\'Inde. Situé sur le Gange, c\'est un lieu de pèlerinage pour de nombreux habitants et visiteurs. Des actions rituelles sont effectuées sur les berges. Le centre du monde pour les hindous, l\'endroit le plus important et le plus vénéré. Il a une histoire, une architecture et un mode de vie uniques.',
            },
            {
                photoUrl: 'https://top10.travel/wp-content/uploads/2016/07/hram-lotosa.jpg',
                name: 'Temple du Lotus',
                info: 'Un temple relativement jeune à New Delhi, construit en 1986. Extérieurement, il ressemble beaucoup à une énorme fleur de lotus blanche comme neige. Le temple principal de la religion bahá\'íe en Inde. Un bâtiment exceptionnel en termes de conception architecturale, exceptionnellement spectaculaire à tout moment de la journée. Il y a un jardin à côté du temple. L\'une des destinations touristiques les plus populaires de Delhi.',
            },
            {
                photoUrl: 'https://tripmydream.cc/travelhub/travel/blocks/20/992/block_20992.jpg',
                name: 'Bossu',
                info: 'Le site d\'une ville antique, la capitale de l\'empire Vijayanagar. Maintenant, il y a les restes de bâtiments anciens et de temples hindous en activité. Dans la région de Hampi, il y a 18 monuments architecturaux et historiques anciens. Protégé par l\'UNESCO.',
            },
        ]
    },
];

export {countriesRu, countriesEn, countriesFr};