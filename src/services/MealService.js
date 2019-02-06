import {get} from './BaseService';
const BASEURL = "https://www.themealdb.com/api/json/v1/1/";

export default class MealService {

    getMealCategories(){
        const url = `${BASEURL}categories.php`;
        return get(url);
    }

    getMealsByCategoryName(categoryName){
        const url = `${BASEURL}filter.php?c=${categoryName}`;
        return get(url);
    }

    getMealDetailById(mealId){
        const url = `${BASEURL}lookup.php?i=${mealId}`;
        return get(url);
    }

    getMealsByName(mealName){
        const url = `${BASEURL}search.php?s=${mealName}`;
        return get(url);
    }

    getRandomMeal(){
        const url = `${BASEURL}random.php`;
        return get(url);
    }

    getLatestMeals(){
        const url = `${BASEURL}latest.php`;
        return get(url);
    }
}