import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState(["Make the bed", "Wash my hands", "Eat", "Walk the dog"]);

	const addTask = () => {
		if (task.trim() !== "") {
			setTasks([...tasks, task]);
			setTask("");
		}
	};
	const deleteTask = (indexToDelete) => {
		const newTasks = tasks.filter((task, index) => {
			return index !== indexToDelete;
		});
		setTasks(newTasks);
	};

	return (
		<div className="todo-container">
			<h1>todos</h1>
			<div className="todo-box">

				<div className="input-box">
					<input type="text" placeholder="What needs to be done?" value={task} onChange={(event) => setTask(event.target.value)}>
					</input>
					<button onClick={addTask}>+</button>
				</div>
				<ul>
					{tasks.length === 0 ? (
						<li className="empty-message">No hay tareas, agregar tareas</li>
					) : (
						tasks.map((task, index) => {
							return (
								<li key={index} className="todo-item"><span>{task}</span>
									<button className="delete-btn" onClick={() => deleteTask(index)}>
										x
									</button>
								</li>
							);
						})
					)}
				</ul>
				<div className="todo-footer">{tasks.length} item left
				</div>
			</div>
		</div>
	);
};

export default Home;