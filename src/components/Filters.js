import React, { useState } from "react";
import filter from "../assets/icons/filter.svg"

export const Filters = props => {

    const { periodStart, periodEnd, status, setPeriodStart, setPeriodEnd, setStatus } = props;

    const [showFilters, setShowFilters] = useState(false)

    return (
        <div className="container-filters">
            <div className="title">
                <span>Task 1</span>
                <div className="form">
                    <div>
                        <label>Scheduled from:</label>
                        <input type="date" value={periodStart} onChange={event => setPeriodStart(event.target.value)} />
                    </div>
                    <div>
                        <label>to:</label>
                        <input type="date" value={periodEnd} onChange={event => setPeriodEnd(event.target.value)} />
                    </div>
                    <div className="line" />
                    <div>
                        <label>Status</label>
                        <select value={status} onChange={event => setStatus(event.target.value)}>
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