import { useContext } from 'react';
import { TaskContext } from './TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
    const { state } = useContext(TaskContext);
    const { tasks, filter } = state;

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'active') return !task.completed;
        return true; // 'all'
    });

    if (tasks.length === 0) {
        return <p className="no-tasks">No tasks yet. Add one!</p>;
    }

    return (
        <div className="task-list-container">
            <ul className="task-list">
                {filteredTasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
            {filteredTasks.length === 0 && tasks.length > 0 && (
                <p className="no-tasks">No tasks found for filter: {filter}</p>
            )}
        </div>
    );
};

export default TaskList;
