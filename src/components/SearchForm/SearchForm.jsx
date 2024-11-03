import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import css from "./SearchForm.module.css";

export default function SearchForm() {
	const [searchParams, setSearchParams] = useSearchParams();
	const defaultSearch = searchParams.get("q") ?? "";

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const form = evt.target;
		const searchQuery = form.elements.searchQuery.value;

		// Якщо текстове поле порожнє, виводимо повідомлення і припиняємо виконання функції
		if (searchQuery.trim() === "") {
			toast.warn("Please enter search term!", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return;
		}
		setSearchParams({ query: searchQuery });
		form.reset();
	};

	return (
		<div className={css.container}>
			<form onSubmit={handleSubmit} className={css.form}>
				<input
					type="text"
					name="searchQuery"
					defaultValue={defaultSearch}
					className={css.input}
				/>
				<button type="submit" className={css.button}>
					Search
				</button>
			</form>
		</div>
	);
}
