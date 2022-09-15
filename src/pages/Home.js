import React, { useState } from "react";
import { Filters } from "../components/Filters";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { List } from "../components/List";

export const Home = props => {

    const [tasks, setTasks] = useState([

    ]);

    const logOut = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userName");
        props.setAccessToken();
    }

    return (
        <>
            <Header logOut={logOut} />
            <Filters />
            <List tasks={tasks} />
            <Footer />
        </>
    );
}