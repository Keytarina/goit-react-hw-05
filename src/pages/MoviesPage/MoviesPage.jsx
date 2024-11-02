import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchMovie } from "../../api/movies";

import Loading from "../../components/Loading/Loading";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";

import css from "./MoviesPage.module.css";

export default function MoviesPage() {
	const [movie, setMovie] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { movieId } = useParams();

	//Виконуємо запит fetchMovie() при кожній зміні movieId
	useEffect(() => {
		async function fetchData() {
			try {
				setIsLoading(true);
				const data = await fetchMovie(query);
				console.log(data);
				setMovie(data);
			} catch (error) {
				console.error("Помилка завантаження даних", error.message);
			} finally {
				setIsLoading(false);
			}
		}
		fetchData();
	}, [movieId]);

	// const handleSearch = async (topic) => {
	// 	try {
	// 		setIsLoading(true);
	// 		const response = await fetchSearchMovie(topic);
	// 		setMovies(response.data.results);
	// 		if (!response.results.length) {
	// 			return toast.error("Please enter search term!");
	// 		}
	// 	} catch (error) {
	// 		toast.error("Помилка завантаження даних", error);
	// 	} finally {
	// 		setIsLoading(false);
	// 	}
	// };

	return (
		<div className={css.moviesPage}>
			{isLoading && <Loading />}
			<SearchForm />
		</div>
	);
}
