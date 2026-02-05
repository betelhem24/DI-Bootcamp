import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
    const selectedDate = useSelector((state) => state.planner.selectedDate);
    const tasks = useSelector((state) => state.planner.tasksByDate[selectedDate] || []);

    return (
        <div className="task-list-container">
            <h3>Tasks for {selectedDate}</h3>
            {tasks.length === 0 ? (
                <p>No tasks for this day.</p>
            ) : (
                <ul className="task-list">
                    {tasks.map((task) => (
                        <TaskItem key={task.id} task={task} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;
