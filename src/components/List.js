import React from "react";
import noTaskImg from "../assets/icons/noTaskImage.svg"
import { Task } from "./Task";

export const List = props => {
    const { tasks } = props;

    return (
        <div className={"container-list " + (tasks && tasks.length > 0 ? "" : "empty")}>
            {tasks && tasks.length > 0 ?

                tasks?.map(task => <Task task={task} key={task.id} />)
                :
                <>
                    <img src={noTaskImg} alt="No tasks found" />
                    <p>You don't have any tasks yet</p>
                </>
            }

        </div>
    )
}