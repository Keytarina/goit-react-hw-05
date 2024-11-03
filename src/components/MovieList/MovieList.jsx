import { Link, useLocation } from "react-router-dom";
import defaultImgPoster from "../../assets/img/default-poster.jpg";

import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
	const location = useLocation();

	return (
		<ul className={css.movie_list}>
			{movies.map(({ id, title, poster_path }) => (
				<li key={id} className={css.movie_item}>
					<Link state={{ from: location }} to={`/movies/${id}`}>
						<img
							src={
								poster_path
									? `https://image.tmdb.org/t/p/w500${poster_path}`
									: defaultImgPoster
							}
							alt={title}
							width={200}
						/>
						<p>{title}</p>
					</Link>
				</li>
			))}
		</ul>
	);
}
