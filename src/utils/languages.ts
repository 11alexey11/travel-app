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

  errorSpanEmpty: {
    ru: "Пустые поля",
    en: "Empty fields",
    fr: "Champs vides",
  },

  errorSpanFound: {
    ru: "Пользователь не найден",
    en: "User not found",
    fr: "L'utilisateur est introuvable",
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

  rating: {
    ru: "Оцените достопримечательности",
    en: "Rate the sights",
    fr: "Évaluez les curiosités",
  },
};

export default languages;
