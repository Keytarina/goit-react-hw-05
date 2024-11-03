import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../api/movies";

import Loading from "../../components/Loading/Loading";

import css from "./MovieCast.module.css";

export default function MovieCast() {
	const [cast, setCast] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { movieId } = useParams();

	const defaultImg =
		"https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol-thumbnail.png";

	//Виконуємо запит getMovieCredits()
	useEffect(() => {
		const fetchMovieCredits = async () => {
			try {
				setIsLoading(true);
				const data = await getMovieCredits(movieId);
				setCast(data.cast);
			} catch (error) {
				console.error("Помилка завантаження даних", error.message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchMovieCredits();
	}, [movieId]);

	return (
		<div>
			{isLoading && <Loading />}

			{cast ? (
				<ul className={css.castList}>
					{cast.map(({ cast_id, name, profile_path }) => (
						<li key={cast_id} className={css.castItem}>
							<img
								src={
									profile_path
										? `https://image.tmdb.org/t/p/w500${profile_path}`
										: defaultImg
								}
								alt={name}
								width={200}
							/>
							<p>{name}</p>
						</li>
					))}
				</ul>
			) : (
				"We don`t have information about cast."
			)}
		</div>
	);
}
