import React, { Component } from 'react';
import './Category.css';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

import MealContext from "../../context/MealContext";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    checkbox:{
        flexGrow: 1,
        color: '#5D38DB',
        '&$checked': {
            color: '#5D38DB',
        },
    },
    checked:{}
});

class Category extends Component {

    isChecked(categoryName, selectedCategoryName) {
        if (categoryName === selectedCategoryName)
            return true;
        else
            return false;
    }

    selectedCategoryClassName(categoryName, selectedCategoryName){
        if(categoryName === selectedCategoryName)
            return "selected-category";
        else
            return "";
    }

    renderCategoryList(context) {
        const { classes } = this.props;
        let { categories } = context;
        return (
            <div className="category-container">
                <List dense className={classes.root}>
                    {categories.map(category => (
                        <ListItem className="category-list-container" key={category.idCategory} button onClick={() => context.handleCategoryClick(category.strCategory)}>
                            <ListItemAvatar className={this.selectedCategoryClassName(category.strCategory, context.selectedCategoryName)}>
                                <Avatar alt="" src={category.strCategoryThumb} />
                            </ListItemAvatar>
                            <ListItemText className="category-name" primary={category.strCategory} />
                            <ListItemSecondaryAction className="category-checkbox">
                                <Checkbox classes={{
                                    root:classes.checkbox,
                                    checked:classes.checked
                                }} onChange={() => context.handleCategoryClick(category.strCategory)} checked={this.isChecked(category.strCategory, context.selectedCategoryName)} />
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <MealContext.Consumer>
                    {(context) => (
                        this.renderCategoryList(context)
                    )}
                </MealContext.Consumer>

            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Category);