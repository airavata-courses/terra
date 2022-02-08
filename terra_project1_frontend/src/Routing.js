import React, { Component } from "react";
import { Router, Routes, Route } from "react-router-dom";

import Intro from "./components/Intro";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UserHistory from "./components/UserHistory";
import DataRetrieval from "./components/DataRetrieval";
import WeatherForecast from "./components/WeatherForecast";
import LoginMain from "./components/LoginMain";
import Register from "./components/Register";

export default class Routing extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" exact element={<Intro />} />
                <Route path="/login" element={<LoginMain />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/data" element={<DataRetrieval />} />
                <Route path="/dashboard/weather" element={<WeatherForecast />} />
                <Route path="/dashboard/history" element={<UserHistory />} />
            </Routes>
        )
    }
}