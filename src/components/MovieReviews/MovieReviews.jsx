import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/movies";

import Loading from "../../components/Loading/Loading";

import css from "./MovieReviews.module.css";

export default function MovieReviews() {
	const [reviews, setReviews] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { movieId } = useParams();

	const defaultImg =
		"https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol-thumbnail.png";

	//Виконуємо запит getMovieReviews()
	useEffect(() => {
		const fetchMMovieReviews = async () => {
			try {
				setIsLoading(true);
				const data = await getMovieReviews(movieId);
				setReviews(data.results);
			} catch (error) {
				console.error("Помилка завантаження даних", error.message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchMMovieReviews();
	}, [movieId]);

	return (
		<div>
			{isLoading && <Loading />}

			{reviews ? (
				<ul className={css.reviewsList}>
					{reviews.map(
						({ id, author, author_details, content, created_at }) => (
							<li key={id} className={css.reviewItem}>
								<img
									src={
										author_details.avatar_path
											? `https://image.tmdb.org/t/p/w500${author_details.avatar_path}`
											: defaultImg
									}
									alt={author}
									className={css.reviewAvatar}
								/>
								<div className={css.reviewContent}>
									<p className={css.reviewAuthor}>Author: {author}</p>
									<p className={css.reviewDate}>
										Date: {new Date(created_at).toLocaleDateString()}
									</p>
									<p className={css.reviewText}>{content}</p>
								</div>
							</li>
						)
					)}
				</ul>
			) : (
				"We don`t have reviews for this film."
			)}
		</div>
	);
}
