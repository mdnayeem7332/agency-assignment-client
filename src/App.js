import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OrderForm from './components/ManageOrder/OrderForm/OrderForm';
import PostReview from './components/PostReview/PostReview';
import ServiceList from './components/ManageOrder/ServiceList/ServiceList';
import Admin from './components/Admin/Admin/Admin';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

const App = () => {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div className="app">

      <Router>
        <Switch>
            <Route path="/home" >
              <Home/>
            </Route>
            <Route exact path="/" >
              <Home/>
            </Route>
            <Route path="/login" >
              <Login/>
            </Route>
            <Route path="/serviceList" >
              <ServiceList/>
            </Route>
            <Route path="/postReview" >
              <PostReview/>
            </Route>
            <Route path="/admin" >
              <Admin/>
            </Route>
            <Route path="/orderForm" >
              <OrderForm/>
            </Route>
            <Route path="/makeAdmin" >
              <MakeAdmin/>
            </Route>
            <Route path="/addService" >
              <AddService/>
            </Route>
            <PrivateRoute path="/dashboard" >
              <Dashboard/>
            </PrivateRoute>
            <Route path="*">
            <NotFound/>
            </Route>
      </Switch>
    </Router>

    </div>
    </UserContext.Provider>
  );
};

export default App;