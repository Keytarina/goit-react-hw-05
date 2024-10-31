import { useParams } from "react-router-dom";
import { fetchMovie } from "../../services/apiServices";

// import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
	const { id } = useParams();
	const movieDetails = fetchMovie(id);
	console.log(movieDetails);

	return (
		<main>
			<p></p>
			<p></p>
			<img src="https://via.placeholder.com/960x240" alt="" />
			<div>
				<h2>
					Product - {movieDetails.name} - {id}
				</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
					sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
					a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
					atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
					praesentium ipsum quos unde voluptatum?
				</p>
			</div>
		</main>
	);
}
