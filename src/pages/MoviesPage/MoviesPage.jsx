import { useEffect, useState } from "react";

import { fetchSearchMovie } from "../../services/apiServices";

export default function MoviesPage() {
	const [searchMovie, setSearchMovie] = useState([]);

	useEffect(() => {
		console.log(fetchSearchMovie());
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

	return <div></div>;
}
