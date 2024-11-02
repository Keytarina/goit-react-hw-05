import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/movies";
import MovieList from "../../components/MovieList/MovieList";
import Loading from "../../components/Loading/Loading";
import css from "./HomePage.module.css";

export default function HomePage() {
	const [trendingMovies, setTrendingMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getTrendingMovies();
				setTrendingMovies(data.results);
			} catch (error) {
				console.error("Помилка завантаження даних", error.message);
			}
		}

		fetchData();
	}, []);

	return (
		<div className={css.home_page}>
			<h1>Trending today</h1>
			{trendingMovies.length > 0 ? (
				<MovieList movies={trendingMovies} />
			) : (
				<Loading />
			)}
		</div>
	);
}
