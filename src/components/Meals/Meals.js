import React, { Component } from "react";
import "./Meals.css";
import Meal from "../Meal/Meal";
import MealContext from "../../context/MealContext";
import Spinner from "../Spinner/Spinner";

export default class Meals extends Component {
  handleBackButton = () => {
    this.props.history.push("/");
  };

  renderMeals(context) {
    let { meals, favoriteMeals } = context;
    if (meals.length > 0) {
      return (
        <div className="meals-container">
          {meals.map(meal => (
            <React.Fragment key={meal.idMeal}>
              <Meal
                meal={meal}
                favoriteMeals={favoriteMeals}
                context={context}
              />
            </React.Fragment>
          ))}
        </div>
      );
    } else {
      return <Spinner />;
    }
  }

  renderFavMeals(context) {
    let { favoriteMeals } = context;
    if (favoriteMeals.length > 0) {
      return (
        <div className="fav-meals-container">
          {favoriteMeals.map(favMeal => (
            <React.Fragment key={favMeal.idMeal}>
              <Meal
                meal={favMeal}
                favoriteMeals={favoriteMeals}
                context={context}
              />
            </React.Fragment>
          ))}
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <h3>Please add meals to your favorites one</h3>
          <div style={{ cursor: "pointer" }} onClick={this.handleBackButton}>
            Back
          </div>
        </div>
      );
    }
  }

  renderDetail(context, path) {
    if (path === "/fav") {
      return this.renderFavMeals(context);
    } else {
      return this.renderMeals(context);
    }
  }

  render() {
    let path = this.props.location.pathname;
    return (
      <React.Fragment>
        <MealContext.Consumer>
          {context => this.renderDetail(context, path)}
        </MealContext.Consumer>
      </React.Fragment>
    );
  }
}
