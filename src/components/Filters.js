import React, { useState } from "react";
import filter from "../assets/icons/filter.svg"

export const Filters = () => {

    const [showFilters, setShowFilters] = useState(false)

    return (
        <div className="container-filters">
            <div className="title">
                <span>Task 1</span>
                <div className="form">
                    <div>
                        <label>Scheduled from:</label>
                        <input type="date" />
                    </div>
                    <div>
                        <label>to:</label>
                        <input type="date" />
                    </div>
                    <div className="line" />
                    <div>
                        <label>Status</label>
                        <select>
                            <option value={0}>All</option>
                            <option value={1}>Open</option>
                            <option value={2}>Finished</option>
                        </select>
                    </div>
                </div>
                <img
                    src={filter}
                    alt="Tasks filter"
                    onClick={() => setShowFilters(!showFilters)} />
            </div>
            {showFilters === true && (
                <div className="filters-mobile">
                    <div>
                        <label>Period from:</label>
                        <input type="date" />
                    </div>
                    <div>
                        <label>Period to:</label>
                        <input type="date" />
                    </div>
                    <div>
                        <label>Status:</label>
                        <select>
                            <option value={0}>All</option>
                            <option value={1}>Open</option>
                            <option value={2}>Finished</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    )
}