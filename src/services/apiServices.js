import axios from "axios";

const options = {
	headers: {
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjYxZWE0NWRjOGZhYmM2ZDY4OWYwMGY2ZjY3MGIxOCIsIm5iZiI6MTcyOTU0NDA0MC44MDk4MjYsInN1YiI6IjY3MTAwZjU0Y2Y4ZGU4NzdiNDlmNzA0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BdmEt2p7tB1z3Fb-Kx-ssRzQ3IOzabuayvEJV_RAJto",
	},
};

//Унікальний ключ доступу до Themoviedb.org API
const KEY = "bf61ea45dc8fabc6d689f00f6f670b18";

//Функція, що фетчить список популярних фільмів (для сторінки Home)
export const fetchTrendingMovies = async () => {
	const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
	const response = await axios.get(url, options);
	return response;
};

//Функція, що фетчить інформацію про конкретный фільм (для сторінки MovieDetails)
// export const fetchMovie = async (movieId) => {
// 	const url = `https://api.themoviedb.org/3//movie/${movieId}`;

// 	const response = await axios.get(url, options);
// 	return response;
// };

//Функція, що фетчить інформацію про конкретный фільм (для сторінки MovieDetails)
export const fetchMovie = async (movieId) => {
	axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";
	const { data } = await axios(`${movieId}`, {
		params: {
			api_key: KEY,
		},
	});
	return data;
};

export const fetchSearchMovie = async () => {
	// const url =
	// 	"https://api.themoviedb.org/3/search/movie?{}include_adult=false&language=en-US&page=1";
	// try {
	// 	const response = await axios.get(url, options);
	// 	return response;
	// } catch (error) {
	// 	console.error("Помилка завантаження даних", error);
	// }
};

export const fetchMovieCredits = async () => {
	// const url =
	// 	"https://api.themoviedb.org/3/search/movie?{}include_adult=false&language=en-US&page=1";
	// try {
	// 	const response = await axios.get(url, options);
	// 	return response;
	// } catch (error) {
	// 	console.error("Помилка завантаження даних", error);
	// }
};

export const fetchMovieReviews = async () => {
	// const url =
	// 	"https://api.themoviedb.org/3/search/movie?{}include_adult=false&language=en-US&page=1";
	// try {
	// 	const response = await axios.get(url, options);
	// 	return response;
	// } catch (error) {
	// 	console.error("Помилка завантаження даних", error);
	// }
};
