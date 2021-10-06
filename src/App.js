import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "./Layouts/Admin";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={(props) => <AdminLayout {...props} />} />
      </Switch>
    </BrowserRouter>    
  );
}

export default App;
