import { useEffect, useState } from "react";

import { fetchTrendingMovies } from "../../services/apiServices";

import MovieList from "../../components/MovieList/MovieList";
import Loading from "../../components/Loading/Loading";

import css from "./HomePage.module.css";

export default function HomePage() {
	const [trendingMovies, setTrendingMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetchTrendingMovies();
				setTrendingMovies(response.data.results);
			} catch (error) {
				console.error("Помилка завантаження даних", error);
			}
		}

		fetchData();
	}, []);

	return (
		<div className={css.home_page}>
			{trendingMovies.length > 0 ? (
				<MovieList trendingMovies={trendingMovies} />
			) : (
				<Loading />
			)}
		</div>
	);
}
