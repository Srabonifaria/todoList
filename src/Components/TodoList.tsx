import React from 'react';

interface IProps {
    task: string;
    deadline: string;
    handleRemove: (deadline: string) => void;
}

const TodoList = ({task, deadline ,handleRemove}: IProps) => {
    return (
        <div className="todo">
            <p>
                <strong>Task:</strong> {task}
            </p>
            <p>
                <strong>Deadline:</strong> {deadline}
            </p>
            <button onClick={() => handleRemove(deadline)}>Remove Task</button>
        </div>
    );
};

export default TodoList;