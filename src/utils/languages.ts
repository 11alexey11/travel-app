type languagesType = { [key: string]: string };

interface Lang {
  [key: string]: languagesType;
}

const languages: Lang = {
  authors: {
    ru: "Авторы",
    en: "Authors",
    fr: "Auteurs",
  },

  cardsDescription: {
    ru: "Наиболее популярные страны в",
    en: "The most popular countries in",
    fr: "Pays les plus populaires en",
  },

  cardsTitle: {
    ru: "Лучшие направления",
    en: "Top Destinations",
    fr: "Destinations principales",
  },

  capital: {
    ru: "Столица",
    en: "Capital",
    fr: "Capitale",
  },

  headerSlogan: {
    ru: "Открой. Исследуй. Восхищайся.",
    en: "Discover. Explore. Admire.",
    fr: "Ouvrez-le. Explorez. Admirez.",
  },

  searchPlaceholder: {
    ru: "Кликните здесь, чтобы искать",
    en: "Type here to search",
    fr: "Tapez ici pour rechercher",
  },

  attractions: {
    ru: "Достопримечательности",
    en: "Attractions",
    fr: "Attractions",
  },

  learnMore: {
    ru: "Узнай о стране немного больше",
    en: "Learn a little more about the country",
    fr: "En savoir un peu plus sur le pays",
  },

  timeTittle: {
    ru: "Местное время",
    en: "Local time",
    fr: "Heure locale",
  },
};

export default languages;
