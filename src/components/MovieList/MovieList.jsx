import { Link } from "react-router-dom";
import defaultImgPoster from "../../assets/img/default-poster.jpg";

import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
	return (
		<ul className={css.movie_list}>
			{movies.map(({ id, backdrop_path, title, poster_path }) => (
				<li key={id} className={css.movie_item}>
					<Link
						to={`/movies/${id}`}
						href={backdrop_path}
						target="_blank"
						rel="noreferrer noopener"
					>
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
