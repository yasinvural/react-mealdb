import React, { Component } from 'react';
import './App.css';

import { Route } from "react-router-dom";
import ApplicationBar from "../ApplicationBar/ApplicationBar";
import Category from "../Category/Category";
import Meals from '../Meals/Meals';
import MealDetail from "../MealDetail/MealDetail";
import MealProvider from "../../context/MealProvider";

class App extends Component {
  
  render() {
    return (
      <MealProvider>
        <div className="application-container">
          <Route path="/" component={ApplicationBar} />
          <div className="category-and-card-container">
            <Route exact path='/react-mealdb' component={Category} />
            <Route exact path="/react-mealdb" component={Meals} />
            <Route path="/detail/:id" component={MealDetail} />
            <Route path="/fav" component={Meals} />
          </div>
        </div>
      </MealProvider>

    );
  }
}

export default App;
