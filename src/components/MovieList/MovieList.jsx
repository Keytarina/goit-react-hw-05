export default function MovieList({ trendingMovies }) {
	return (
		<ul>
			<h1>Trending today</h1>
			{trendingMovies.map(({ id, backdrop_path, title }) => (
				<li key={id}>
					<a href={backdrop_path} target="_blank" rel="noreferrer noopener">
						{title}
					</a>
				</li>
			))}
		</ul>
	);
}
