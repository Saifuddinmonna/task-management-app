const { createSlice } = require("@reduxjs/toolkit");
const { v4: uuidv4 } = require("uuid");

const initialBooks = {
	books: [
		{ id: uuidv4(), title: "Love Bangladesh", author: "Anisul Islam" },
		{ id: uuidv4(), title: "Bangladeshi", author: "Anisul Islam" },
	],
};

export const TasksSlice = createSlice({
	name: "books",
	initialState: initialBooks,
	reducers: {
		showTasks: (state) => state,
		addTask: (state, action) => {
			state.books.push(action.payload);
		},
		updateTask: (state, action) => {
			const { id, title, author } = action.payload;
			const isBookExist = state.books.filter((book) => book.id === id);
			if (isBookExist) {
				isBookExist[0].title = title;
				isBookExist[0].author = author;
			}
		},
		deleteTask: (state, action) => {
			const id = action.payload;
			state.books = state.books.filter((book) => book.id !== id);
		},
	},
});

export const { showTasks, addTask, deleteTask, updateTask } =
	TasksSlice.actions;
export default TasksSlice.reducer;
