import React from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import AboutPage from "./AboutPage";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/about" element={<AboutPage />} exact />
                    <Route path="/" element={<HomeScreen />} exact />
                    <Route path="/login" element={<LoginScreen />} exact />
                    <Route path="*" element={<Navigate to="/" />} exact />
                </Routes>
            </div>
        </Router >
    );
};
