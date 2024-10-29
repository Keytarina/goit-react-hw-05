import imgNotFound from "../../assets/gif/HTML-404-Page.gif";

export default function NotFoundPage() {
	return (
		<div>
			<img src={imgNotFound} alt="Page not found image" width="100%" />
		</div>
	);
}
