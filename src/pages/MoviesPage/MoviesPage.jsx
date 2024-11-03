import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovie } from "../../api/movies";

import Loading from "../../components/Loading/Loading";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";

import css from "./MoviesPage.module.css";

export default function MoviesPage() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchParams] = useSearchParams();

	const searchValue = searchParams.get("query");

	useEffect(() => {
		if (searchValue === null) return;

		const fetchMoviesBySearchValue = async () => {
			try {
				setIsLoading(true);

				const data = await fetchMovie(searchValue);
				setMovies(data.results);
			} catch (error) {
				console.error("Помилка завантаження даних", error.message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchMoviesBySearchValue();
	}, [searchValue]);

	return (
		<div className={css.moviesPage}>
			{isLoading && <Loading />}
			<SearchForm />
			{movies ? <MovieList movies={movies} /> : " "}
		</div>
	);
}
