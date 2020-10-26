const apiKey = "c7b766bd"; // api key to use omdbapi

// get request link
const getDataUrl = (searchParams) => {
  const url = `https://www.omdbapi.com/?apiKey=${apiKey}&${searchParams}&type=movie`;
  return url;
};

// search movies by title
export const searchMovieByTitle = async (title, page = 1) => {
  const url = getDataUrl(`s=${title}&page=${page}`);
  return await fetch(url).then((response) => response.json());
};

// get movie by given id
export const searchMovieByID = async (id, page = 1) => {
  const url = getDataUrl(`i=${id}&page=${page}`);
  return await fetch(url).then((response) => response.json());
};

// get movie by given title
export const searchMovieByImdbTitle = async (id, page = 1) => {
  const url = getDataUrl(`t=${id}&page=${page}`);
  return await fetch(url).then((response) => response.json());
};
