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
});

class Category extends Component {

    isChecked(categoryName, selectedCategoryName) {
        if (categoryName === selectedCategoryName)
            return true;
        else
            return false;
    }

    renderCategoryList(context) {
        const { classes } = this.props;
        let { categories } = context;
        return (
            <div className="category-container">
                <List dense className={classes.root}>
                    {categories.map(category => (
                        <ListItem key={category.idCategory} button onClick={() => context.handleCategoryClick(category.strCategory)}>
                            <ListItemAvatar>
                                <Avatar alt="" src={category.strCategoryThumb} />
                            </ListItemAvatar>
                            <ListItemText primary={category.strCategory} />
                            <ListItemSecondaryAction>
                                <Checkbox onChange={() => context.handleCategoryClick(category.strCategory)} checked={this.isChecked(category.strCategory, context.selectedCategoryName)} />
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