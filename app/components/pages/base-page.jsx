import React from 'react';
import PropTypes from 'prop-types';

// Vendor
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';


// Src
// import { Typography } from 'material-ui/styles/typography';
import Typography from '@material-ui/core/Typography';
import BasicComponent from 'components/ui/component'

const styles = theme => ({
  body: {
    flexGrow: 1,
  }

});

class BasePage extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      products: null,
      orders: null,
      current_order: [],
      selected_product: "",
      test_product: {
        name: ""
      },
      quantity: 0,
    }
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










