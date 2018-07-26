import React from 'react';
import PropTypes from 'prop-types';

// Vendor
import { withStyles } from '@material-ui/core/styles';
import { injectGlobal } from 'styled-components';
import Typography from '@material-ui/core/Typography';


// Src

import Paper from '@material-ui/core/Paper';

import ArchiveTilt from '../../assets/archive-tilt.otf';
injectGlobal`
  @font-face {
    font-family: 'archive';
    src: url(${ArchiveTilt}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
`;

const styles = theme => ({
  title: {
    fontFamily: "archive",
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

function Basic(props) {

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

function TopLeft(props){
  
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <div className={classes.padded}>
        <Typography 
          className={classes.title}
          variant="display1" 
          gutterBottom>
            Liberty Rocks
        </Typography>
      </div>
    </Paper>
  )

}


Basic.propTypes = {
  classes: PropTypes.object.isRequired,
};

TopLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};


const BasicComponent = withStyles(styles)(Basic);
const TopLeftComponent = withStyles(styles)(TopLeft);

export {
  BasicComponent,
  TopLeftComponent
};




