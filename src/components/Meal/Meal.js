import React, { Component } from 'react';
import './Meal.css';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
        minWidth: 345
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    headerText:{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
};

class Meal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFavoriteMeal: false
        }
    }

    componentDidMount() {
        this.setFavoriteMeal(this.props);
    }

    setFavoriteMeal(props) {
        let { meal, favoriteMeals } = props;
        let result = favoriteMeals.filter((favMeal) => {
            return favMeal.idMeal === meal.idMeal
        });

        if (result.length === 1) {
            this.setState({
                isFavoriteMeal: true
            })
        } else {
            this.setState({
                isFavoriteMeal: false
            })
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props.favoriteMeals.length === nextProps.favoriteMeals.length) {
            this.setFavoriteMeal(nextProps);
        } else if (this.props.favoriteMeals.length !== nextProps.favoriteMeals.length) {
            this.setFavoriteMeal(nextProps);
        }
    }

    favClassName() {
        let { isFavoriteMeal } = this.state;
        if (isFavoriteMeal) {
            return "fa fa-heart favMeal"
        }
        else {
            return "fa fa-heart";
        }
    }

    render() {
        const { classes, meal, context } = this.props;
        return (
            <Link to={`/detail/${meal.idMeal}`}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={meal.strMealThumb ? meal.strMealThumb : 'https://via.placeholder.com/200'}
                            title={meal.strMeal}
                        />
                        <CardContent>
                            <Typography className={classes.headerText} gutterBottom variant="h5" component="h2">
                                {meal.strMeal}
                            </Typography>
                            <Typography component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites" onClick={(e) => context.handleFavMeal(e, meal)}>
                            <i className={this.favClassName()}></i>
                        </IconButton>
                    </CardActions>
                </Card>
            </Link>
        )
    }
}


export default withStyles(styles)(Meal);