import React, { Component } from 'react';
import { Route, Switch, RouteComponentProps, Redirect } from "react-router-dom";
import AdminHeader from "../Components/Header/AdminHeader";
import Sidebar from "../Components/Sidebar/Sidebar";
import Dashboard from '../Views/Dashboard';

function AdminLayout(props) {
    return (
        <>
        <div style={{backgroundColor: '#F5F5FB'}}>
            <AdminHeader />
            <Sidebar />
            <section >
                <Dashboard />
            </section>
            </div>
        </>
    )
}

export default AdminLayout;