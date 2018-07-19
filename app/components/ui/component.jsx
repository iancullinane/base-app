import React from 'react';
import PropTypes from 'prop-types';

// Vendor
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


// Src

import Paper from '@material-ui/core/Paper';



const styles = theme => ({
  paper: {
    width: "100%",
    // padding: theme.spacing.unit * 2,
  },
  padded: {
    padding: theme.spacing.unit * 2,
  }
});


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
    },
};



function BasicComponent(props) {

  const { classes } = props;
  
  return (
    <Paper className={classes.paper}>
      <div className={classes.padded}>
        <Typography 
          className={classes.formTitle}
          variant="display1" 
          gutterBottom>
            Test
        </Typography>
      </div>
    </Paper>
  )
};


BasicComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicComponent);






