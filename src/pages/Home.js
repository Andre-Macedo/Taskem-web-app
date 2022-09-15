import React, { useEffect, useState } from "react";
import { Filters } from "../components/Filters";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { executeRequest } from "../services/api";

export const Home = props => {

    const [tasks, setTasks] = useState([]);
    const [periodStart, setPeriodStart] = useState("");
    const [periodEnd, setPeriodEnd] = useState("");
    const [status, setStatus] = useState(0);

    const getTaskWithFilter = async () => {
        try {

            let filters = "?status=" + status;

            if (periodStart) {
                filters += "&periodStart=" + periodStart;
            }

            if (periodEnd) {
                filters += "&periodEnd=" + periodEnd;
            }

            const result = await executeRequest("task" + filters, "get")
            if (result && result.data) {
                setTasks(result.data)
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getTaskWithFilter()
    }, [status, periodStart, periodEnd])

    const logOut = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userName");
        props.setAccessToken();
    }

    return (
        <>
            <Header logOut={logOut} />
            <Filters
                periodStart={periodStart}
                periodEnd={periodEnd}
                status={status}
                setPeriodStart={setPeriodStart}
                setPeriodEnd={setPeriodEnd}
                setStatus={setStatus}
            />
            <List tasks={tasks} />
            <Footer />
        </>
    );
}