import React from "react";
import addTask from "../assets/icons/addTask.svg"

export const Footer = () => {
    return (
        <div className="container-footer">
            <button>
                <img src={addTask} alt="Add task" />
                Add Task
            </button>
            <span>@Copyright {new Date().getFullYear()} Andre M. All rights reserved.</span>
        </div>
    )
}