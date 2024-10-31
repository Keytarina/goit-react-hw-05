import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import css from "./SearchForm.module.css";

export default function SearchForm() {
	const [searchParams, setSearchParams] = useSearchParams();
	const search = searchParams.get("searchQuery") ?? "";

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const form = evt.target;

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
		setSearchParams({ searchQuery: form.elements.searchQuery.value });
		form.reset();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" name="searchQuery" />
				<button type="submit">Search</button>
			</form>
		</div>
	);
}
