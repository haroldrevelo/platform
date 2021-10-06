import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "./Layouts/Admin";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Redirect from="/" to="/admin" />
      </Switch>
    </BrowserRouter>    
  );
}

export default App;
