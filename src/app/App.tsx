import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import classNames from "../shared/lib/classNames/classNames";

import { MainPage } from "pages/Main";
import { AboutPage } from "pages/About";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";




function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true }, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>

        </div>
    );
}

export default App;