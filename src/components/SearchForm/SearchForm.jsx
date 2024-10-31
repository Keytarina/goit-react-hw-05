import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import css from "./SearchForm.module.css";

export default function SearchForm({ onSearch }) {
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const form = evt.target;
		const topic = form.elements.topic.value;

		// Якщо текстове поле порожнє, виводимо повідомлення і припиняємо виконання функції
		if (form.elements.topic.value.trim() === "") {
			toast.warn("Please enter search term!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return;
		}

		// У протилежному випадку викликаємо пропс і передаємо йому значення поля
		onSearch(topic);
		form.reset();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" name="topic" />
				<button type="submit">Search</button>
			</form>
		</div>
	);
}
