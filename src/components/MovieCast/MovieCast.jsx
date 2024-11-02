import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../api/movies";

import Loading from "../../components/Loading/Loading";

export default function MovieCast() {
	const [cast, setCast] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { movieId } = useParams();

	//Виконуємо запит getMovieCredits()
	useEffect(() => {
		async function fetchData() {
			try {
				setIsLoading(true);
				const data = await getMovieCredits(movieId);
				console.log(data);
				setCast(data);
			} catch (error) {
				console.error("Помилка завантаження даних", error.message);
			} finally {
				setIsLoading(false);
			}
		}
		fetchData();
	}, []);

	return (
		<div>
			{isLoading && <Loading />}

			{cast && <div>sdhglh</div>}
		</div>
	);
}
