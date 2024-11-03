import axios from "axios";

const moviesInstance = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	headers: {
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjYxZWE0NWRjOGZhYmM2ZDY4OWYwMGY2ZjY3MGIxOCIsIm5iZiI6MTcyOTU0NDA0MC44MDk4MjYsInN1YiI6IjY3MTAwZjU0Y2Y4ZGU4NzdiNDlmNzA0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BdmEt2p7tB1z3Fb-Kx-ssRzQ3IOzabuayvEJV_RAJto",
	},
	params: { include_adult: false, language: "en-US" },
});

//Функція, що фетчить список популярних фільмів (для сторінки Home)
export const getTrendingMovies = async () => {
	const { data } = await moviesInstance.get("/trending/movie/day");
	return data;
};

//Функція, що фетчить інформацію про конкретный фільм (для сторінки MovieDetails)
export const getMovieDetails = async (movieId) => {
	const { data } = await moviesInstance.get(`/movie/${movieId}`);
	return data;
};

//Функція, що фетчить список фільмів за ключевим словом (для сторінки Movies)
export const fetchMovie = async (query) => {
	const { data } = await moviesInstance.get(`/search/movie`, {
		params: { query },
	});
	return data;
};

export const getMovieCredits = async (movieId) => {
	const { data } = await moviesInstance.get(`/movie/${movieId}/credits`);
	return data;
};

export const getMovieReviews = async (movieId) => {
	const { data } = await moviesInstance.get(`/movie/${movieId}/reviews`);
	return data;
};
