import ImgCircleOutline from "./assets/circle-outline.png";
import ImgCheckMark from "./assets/check-mark.png";
import ImgDelete from './assets/delete.png';

const colors = ["#FFCF7D", "#FFA57F", "#FFA9A3", "#C8C6D7"];

const TaskCard = ({ id, taskName, taskDescription, index, isCompleted, toggleStatus, deleteTask }) => {
    return (
        <div className={isCompleted ? "card card-completed" : "card"} style={{ backgroundColor: colors[index % 4] }}>
            <img
                src={ImgDelete}
                alt="delete-task"
                className="task-status-toggler"
                onClick={deleteTask(id)}
            />
            <img
                src={isCompleted ? ImgCheckMark : ImgCircleOutline}
                className="task-status-toggler"
                alt="toggle-status-button"
                onClick={toggleStatus(id)}
            />
            <p className="taskNameHeader">{taskName}</p>
            <p className="taskDescriptionHeader">{taskDescription}</p>
        </div>
    );
};

export default TaskCard;
