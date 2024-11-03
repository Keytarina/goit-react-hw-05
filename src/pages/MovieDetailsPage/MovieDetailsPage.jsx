import { useRef, useState, useEffect } from "react";
import {
	useParams,
	Link,
	Outlet,
	useLocation,
	useNavigate,
} from "react-router-dom";
import { getMovieDetails } from "../../api/movies";

import Loading from "../../components/Loading/Loading";

import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
	const [movie, setMovie] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { movieId } = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	//Виконуємо запит getMovieDetails() при кожній зміні movieId
	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				setIsLoading(true);

				const data = await getMovieDetails(movieId);
				setMovie(data);
			} catch (error) {
				console.error("Помилка завантаження даних", error.message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchMovieDetails();
	}, [movieId]);

	const goBack = () => navigate(location.state.from);

	return (
		<div className={css.movieDetailsPage}>
			{isLoading && <Loading />}

			<button onClick={goBack}>Go back</button>

			{movie && (
				<>
					<div className={css.movieDetails}>
						<img
							src={
								movie.poster_path
									? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
									: "https://via.placeholder.com/960x240"
							}
							alt={movie.title}
						/>
						<div>
							<h1>{movie.title}</h1>
							<p>{movie.tagline}</p>
							<br />
							<p>User score: {movie.vote_average} </p>
							<p>
								Year of release: {new Date(movie.release_date).getFullYear()}
							</p>
							<p>
								Runtime: {Math.trunc(movie.runtime / 60)} hours{" "}
								{movie.runtime % 60} minutes
							</p>
							<h2>Overview</h2>
							<p>{movie.overview}</p>
							<h2>Genres</h2>
							{movie.genres ? (
								movie.genres.map((genre) => genre.name).join(", ")
							) : (
								<p>No genres available</p>
							)}
						</div>
					</div>

					<hr className={css.custom_line} />

					<h3>Additional information</h3>
					<ul className={css.additionalInfoList}>
						<li>
							<Link
								state={{ from: location.state.from }}
								to="cast"
								className={css.additionalInfoLink}
							>
								Cast
							</Link>
						</li>
						<li>
							<Link
								state={{ from: location.state.from }}
								to="reviews"
								className={css.additionalInfoLink}
							>
								Reviews
							</Link>
						</li>
					</ul>

					<hr className={css.custom_line} />
					<Outlet />
				</>
			)}
		</div>
	);
}
