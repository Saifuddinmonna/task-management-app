import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";


const AddTask = () => {
	const [title, setTitle] = useState("");
	const [Descriiption, setAuthor] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const task = { id: uuidv4(), title, Descriiption };
		dispatch(AddTask(task));
		navigate("/show-books", { replace: true });
	};
	return (
		<div>
			<h2>Add Task</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-field">
					<label htmlFor="title">Title: </label>
					<input
						type="text"
						id="title"
						name="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>
				<div className="form-field">
					<label htmlFor="Descriiption">Description: </label>
					<input
						type="text"
						id="Descriiption"
						name="Descriiption"
						value={Descriiption}
						onChange={(e) => setAuthor(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Add Task</button>
			</form>
		</div>
	);
};

export default AddTask;

// CRUD - > CREATE, READ,
