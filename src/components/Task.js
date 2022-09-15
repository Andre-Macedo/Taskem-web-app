import React from "react";
import moment from "moment";
import taskNotCheck from "../assets/icons/taskNotCheck.svg";
import taskCheck from "../assets/icons/taskCheck.svg";

export const Task = props => {
    const { task } = props;

    return (
        <div className="container-tasks">
            <img
                src={taskNotCheck}
                alt="Select task" />
            <div>
                <p>{task?.name}</p>
                <span>Task scheduled to: {moment(task?.scheduledDate).format("MM/DD/yyyy")}</span>
            </div>
        </div>
    )
}