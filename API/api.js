export const categories = [
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "general",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
    name: "business",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
    name: "entertainment",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
    name: "health",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
    name: "science",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
    name: "sports",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
    name: "technology",
  },
];

export const country = [
  {
    code: "in",
    name: "India",
  },
  {
    code: "us",
    name: "USA",
  },
  {
    code: "au",
    name: "Australia",
  },
  {
    code: "ru",
    name: "Russia",
  },
  {
    code: "fr",
    name: "France",
  },
  {
    code: "gb",
    name: "United Kingdom",
  },
  {
    code: "ph",
    name: "Philippines",
  },
];

export const sources = [
  {
    id: "bbc-news",
    name: "BBC News",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsT3ZolSLZXPq7YNp9m8vBVqUr0z3u7CujoqJc4jzbbV6fHCGLtwH5N_dI6L-Nblxyc5E&usqp=CAU",
  },
  {
    id: "cnn",
    name: "CNN",
    pic: "https://bankimooncentre.org/wp-content/uploads/2020/06/cnn-logo-square.png",
  },
  {
    id: "fox-news",
    name: "Fox News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
  },
  {
    id: "manila",
    name: "Manila Times",
    pic: "https://www.manilatimes.net/theme_manilatimes/images/no-image.jpg",
  },
];

export const BASE_URL = "https://newsapi.org/v2";

export const getNewsAPI = (category) => {
  return `${BASE_URL}/top-headlines?country=ph&category=${category}&apiKey=fc771590cab8412682f4cc394a27ca87`;
};

export const getSourceAPI = (source) => {
  return `${BASE_URL}/everything?q=${source}&apiKey=fc771590cab8412682f4cc394a27ca87`;
};
// https://newsapi.org/v2/top-headlines?country=ph&category=games&apiKey=fc771590cab8412682f4cc394a27ca87