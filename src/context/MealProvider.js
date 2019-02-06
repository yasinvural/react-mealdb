import React, { Component } from "react";
import MealContext from "./MealContext";
import MealService from "../services/MealService";

const mealService = new MealService();
export default class MealProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            selectedCategoryName: '',
            meals: [],
            favoriteMeals: [],
            handleCategoryClick: this.handleCategoryClick,
            handleFavMeal: this.handleFavMeal
        };
    }

    componentDidMount() {
        this.getMealCategories();
        this.getLatestMeals();
    }

    async getMealCategories() {
        try {
            let categories = await mealService.getMealCategories();
            categories = categories.data.categories;
            this.setState({
                categories
            })
        } catch (err) {
            console.log(err);
        }
    }

    async getLatestMeals() {
        try {
            let meals = await mealService.getLatestMeals();
            meals = meals.data.meals;
            this.setState({
                meals
            })
        } catch (err) {
            console.log(err);
        }
    }

    async getMealsByCategoryName(categoryName) {
        try {
            let meals = await mealService.getMealsByCategoryName(categoryName);
            meals = meals.data.meals;
            this.setState({
                meals
            });
        } catch (err) {
            console.log(err);
        }
    }

    handleCategoryClick = (categoryName) => {
        let { selectedCategoryName } = this.state;
        if (categoryName !== selectedCategoryName)
            this.setState({
                selectedCategoryName: categoryName
            }, () => {
                this.getMealsByCategoryName(categoryName);
            });
    }

    handleFavMeal = (e, meal) => {
        e.preventDefault();
        let { favoriteMeals } = this.state;
        let result = favoriteMeals.find((favMeal) => {
            return favMeal.idMeal === meal.idMeal
        });
        if (result) {
            //remove
            favoriteMeals.splice(favoriteMeals.findIndex((i) => {
                return i.idMeal === meal.idMeal
            }), 1);
            this.setState({
                favoriteMeals: favoriteMeals
            });
        } else {
            //add
            this.setState({
                favoriteMeals: [...favoriteMeals, meal]
            });
        }
    }

    render() {
        return (
            <MealContext.Provider value={this.state}>
                {this.props.children}
            </MealContext.Provider>
        )
    }
}