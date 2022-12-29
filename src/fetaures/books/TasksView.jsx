import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "./TasksSlice";

const TasksView = () => {
	const books = useSelector((state) => state.TasksReducer.books);
	const dispatch = useDispatch();
	const handledeleteTask = (id) => {
		dispatch(deleteTask(id));
	};
	return (
		<div>
			<h2>List of Tasks</h2>
			<table>
				<thead>
					<tr>
						{/* <th>ID</th> */}
						<th>Title</th>
						<th>Description</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{books &&
						books.map((book) => {
							const { id, title, author } = book;
							return (
								<tr key={id}>
									{/* <td>{id}</td> */}
									<td>{title}</td>
									<td>{author}</td>
									<td>
										<Link
											to="/edit-book"
											state={{ id, title, author }}>
											<button>Edit</button>
										</Link>
										<button
											onClick={() => {
												handledeleteTask(id);
											}}>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default TasksView;
