import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import MealContext from "../../context/MealContext";

const styles = theme => ({
  root: {
    width: '100%',
    cursor: 'pointer'
  },
  grow: {
    flexGrow: 1,
  }
});

class ApplicationBar extends Component {

  handleLogo = () => {
    this.props.history.push('/react-mealdb');
  }
  render() {
    const { classes } = this.props;

    return (
      <MealContext.Consumer>
        {(context) => (
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <Typography onClick={this.handleLogo} className={classes.title} variant="h6" color="inherit" noWrap>Meal App</Typography>
                <div className={classes.grow} />
                <React.Fragment>
                  <Link to="/fav">
                    <IconButton color="inherit">
                      <Badge badgeContent={context.favoriteMeals.length} showZero color="secondary">
                        <i className="fa fa-heart"></i>
                      </Badge>
                    </IconButton>
                  </Link>
                </React.Fragment>
              </Toolbar>
            </AppBar>
          </div>
        )}
      </MealContext.Consumer>
    )
  }
}

export default withStyles(styles)(ApplicationBar);