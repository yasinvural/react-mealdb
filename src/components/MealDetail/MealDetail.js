import React, { Component } from "react";
import "./MealDetail.css";
import MealService from "../../services/MealService";
import Spinner from "../Spinner/Spinner";

const mealService = new MealService();
export default class MealDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealDetail: []
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.getMealDetailById(id);
  }

  async getMealDetailById(id) {
    try {
      let mealDetail = await mealService.getMealDetailById(id);
      mealDetail = mealDetail.data.meals;

      this.setState({
        mealDetail
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    let { mealDetail } = this.state;
    mealDetail = mealDetail[0];
    if (mealDetail) {
      return (
        <div className="meal-detail-container">
          <div className="meal-header">{mealDetail.strMeal}</div>
          <div className="meal-img-container">
            <img src={mealDetail.strMealThumb} alt="" />
          </div>
          <div className="meal-instruction">{mealDetail.strInstructions}</div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}
