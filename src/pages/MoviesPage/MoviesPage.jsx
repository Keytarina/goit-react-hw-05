import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { fetchSearchMovie } from "../../services/apiServices";

import Loading from "../../components/Loading/Loading";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";

import css from "./MoviesPage.module.css";

export default function MoviesPage() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// async function fetchData() {
		// 	try {
		// 		const response = await fetchMovieDetails();
		// 		console.log(response);
		// 		setMovieDetails(response.data.results);
		// 	} catch (error) {
		// 		console.error("Помилка завантаження даних", error);
		// 	}
		// }
		// async function fetchData() {
		// 	try {
		// 		const response = await fetchTrendingMovies();
		// 		setTrendingMovies(response.data.results);
		// 	} catch (error) {
		// 		console.error("Помилка завантаження даних", error);
		// 	}
		// }
		// fetchData();
	}, []);

	const handleSearch = async (topic) => {
		try {
			setIsLoading(true);
			const response = await fetchSearchMovie(topic);
			setMovies(response.data.results);
			if (!response.results.length) {
				return toast.error("Please enter search term!");
			}
		} catch (error) {
			toast.error("Помилка завантаження даних", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className={css.moviesPage}>
			{isLoading && <Loading />}
			<SearchForm />
			<MovieList movies={movies} />
		</div>
	);
}
