import { useEffect, useState } from "react";
import axios from "axios";

import MovieList from "../../components/MovieList/MovieList";

import css from "./HomePage.module.css";

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const options = {
	headers: {
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjYxZWE0NWRjOGZhYmM2ZDY4OWYwMGY2ZjY3MGIxOCIsIm5iZiI6MTcyOTU0NDA0MC44MDk4MjYsInN1YiI6IjY3MTAwZjU0Y2Y4ZGU4NzdiNDlmNzA0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BdmEt2p7tB1z3Fb-Kx-ssRzQ3IOzabuayvEJV_RAJto",
	},
};

export default function HomePage() {
	const [trendingMovies, setTrendingMovies] = useState([]);

	useEffect(() => {
		async function fetchTrendingMovies() {
			try {
				const response = await axios.get(url, options);
				setTrendingMovies(response.data.results);
			} catch (error) {
				console.error("Помилка завантаження даних", error);
			}
		}

		// setTrendingMovies(response.data.results);

		fetchTrendingMovies();
	}, []);

	return (
		<div className={css.home_page}>
			{trendingMovies.length > 0 && (
				<MovieList trendingMovies={trendingMovies} />
			)}
		</div>
	);
}
