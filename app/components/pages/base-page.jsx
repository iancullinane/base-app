import React from 'react';
import PropTypes from 'prop-types';

// Vendor
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Src
import { BasicComponent, TopLeftComponent } from '../ui/component';

const styles = theme => ({
  body: {
    flexGrow: 1,
  }

});

class BasePage extends React.Component {
  
  constructor(props){
    super(props);
  }


  // Controlled component handler for all fields
  handleChange = prop => event => {
    if(prop == "selected_product"){
      console.log("Updating selected products");
    }
    this.setState({ [prop]: event.target.value });
  };

  render(){
    const { classes } = this.props;

    return (
        <div className={classes.body}>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                  <TopLeftComponent />
                  <BasicComponent />
              </Grid>
              <Grid item xs={8}>
                  <BasicComponent />
              </Grid>
            </Grid>
        </div>
    );
  }
}

BasePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasePage);










