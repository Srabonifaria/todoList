import React, { useState } from 'react';
import TodoList from './TodoList';

interface ITask {
    task: string;
    deadline: string;
}
const TodoLists = () => {
    const [task, setTask] = useState<ITask>({
        task: "",
        deadline:""
       });
    const [todoList, setTodoList] = useState<ITask[]>([])

    const onClick = () => {
        setTodoList([...todoList, task])
        setTask({
            task: "",
            deadline:""
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    const handleRemove = (deadline: string) => {
        const newTodoList = todoList.filter(task => task.deadline !== deadline)
        setTodoList(newTodoList)
    }

    return (
        <div>
            <h1> Todo list</h1>
            <div className="form">
                <input
                    value={task.task}
                    onChange={onChange}
                    name="task"
                    placeholder="task"
                    type="text"
                />
                <br />
                <input
                    value={task.deadline}
                    onChange={onChange}
                    name="deadline"
                    placeholder=""
                    type="date"
                />
                <br />
                <button onClick={onClick}>Added Task</button>
            </div>
            {
                todoList.map((task) => <TodoList key={task.task} task={task.task} deadline={task.deadline} handleRemove={handleRemove} />)
            }


        </div>
    );
};

export default TodoLists;