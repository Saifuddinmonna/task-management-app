import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditTask from "../fetaures/books/EditTask";
import Navbar from "../layouts/Navbar";
import Error from "../pages/Error";
import Home from "../pages/Home";
import TasksView from "../fetaures/books/TasksView";
import AddTask from "../fetaures/books/AddTask";


const Index = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/show-books" element={<TasksView />} />
					<Route path="/add-book" element={<AddTask />} />
					<Route path="/edit-book" element={<EditTask />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default Index;
