import imgLoading from "../../assets/gif/loading.gif";
import css from "./Loading.module.css";

export default function Loading() {
	return (
		<div className={css.loading}>
			<img src={imgLoading} alt="Loading image" width="200px" />
		</div>
	);
}
