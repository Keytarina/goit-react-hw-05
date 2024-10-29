import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
	import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

import Navigation from "./components/Navigation/Navigation";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";

import imgLoading from "./assets/gif/loading.gif";

function App() {
	return (
		<div>
			<Navigation />
			<Suspense
				fallback={
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							placeItems: "center",
							margin: "0 auto",
							padding: "4rem",
						}}
					>
						<img src={imgLoading} alt="Loading image" width="200px" />
					</div>
				}
			>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/movies/" element={<MoviesPage />} />
					<Route path="/movies/:movieId" element={<MovieDetailsPage />}>
						{/* <Route path="cast" element={<MovieCast />} />
					<Route path="reviews" element={<MovieReviews />} /> */}
					</Route>
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
