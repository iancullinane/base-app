import React from 'react';
import PropTypes from 'prop-types';

// Vendor
import _ from 'underscore';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



import BackGround from "../../assets/funky-lines.png"
import '../../styles/fonts.css';



function ImageTest(props){
  const { classes } = props;

  return(
    <Card>
      <CardContent>
        <img src={`${BackGround}`}></img>
      </CardContent>
    </Card>
  )
}

const styles = theme => ({
  topLeft: {
    flex: 0,
  },
  mainTitle: {
    fontFamily: "Pacifico",
    color: 'black',
    backgroundClip: 'text',
    // color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    lineHeight: .9,
    margin: 0,
    marginBottom: 15,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: "5vw",
    },
    [theme.breakpoints.down('md')]: {
      textAlign: "center",
      fontSize: "9vw",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "4.5vw",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "5vw",
    },
    // wordWrap: "break-line"
  },
  title: {
    [theme.breakpoints.up('lg')]: {
      fontSize: "3vw",
    },
    [theme.breakpoints.down('md')]: {
      fontSize: "9vw",
    },
    fontFamily: "Roboto Slab"
  },
  padded: {
    padding: theme.spacing(2),
    marginBottom: "14px",
    fontFamily: "Roboto Slab",
  },
  hide:{
    padding: theme.spacing(2),
    marginBottom: 10,
  },
  button: {
    fontFamily: "Roboto Slab"
  },
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


function TitlePanel(props){
  
  const { classes } = props;
  return (
    <Paper className={classes.topLeft}>
      <div className={classes.padded}>
        <Typography 
          className={classes.mainTitle}
          variant="h1" 
          gutterBottom>
            {props.title}
        </Typography>
      </div>
    </Paper>
  )
}







TitlePanel.propTypes = {
  classes: PropTypes.object.isRequired,
};



const TitlePanelComponent = withStyles(styles)(TitlePanel);

export {
  TitlePanelComponent
};




