import { colorSelected } from "../actions";

const updateColor = (todoId, color) => {
	return async dispatch => {
		const response = fetch(`http://localhost:9000/todos/${todoId}`, {
			method: "PATCH",
			body: JSON.stringify({
				color: color,
			}),
			headers: {
				"content-type": "application/json",
			},
		});
		const todo = await response.json();

		dispatch(colorSelected(todo.id, todo.color));
	};
};

export default updateColor;
