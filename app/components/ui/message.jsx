import React from 'react';
import PropTypes from 'prop-types';

// Vendor
import _ from 'underscore';
import { withStyles } from '@material-ui/core/styles';
import { injectGlobal } from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import '../../styles/fonts.css';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const styles = theme => ({
  card: {
      display: 'flex',
      marginBottom: "8px",
  },
  details: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '50%'
  },
  content: {
      flex: '1 0 auto',
  },
  break: {
      flexDirection: 'row',
  },
  padded: {
    padding: theme.spacing.unit * 2,
    marginBottom: "14px",
    fontFamily: "Roboto Slab",
  },
  cover: {
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xl')]: {
        width: 175,
        height: 175,
    },
    [theme.breakpoints.down('md')]: {
        width: 220,
        height: 220,
    },
  },
  header: {
    fontFamily: "Roboto Slab",
    [theme.breakpoints.down('xl')]: {
        fontSize: "2vw"
    },
    [theme.breakpoints.down('md')]: {
        fontSize: "3.5vw"
  },
  },
  sub_header: {
      fontFamily: "Roboto Slab",
      [theme.breakpoints.down('xl')]: {
          fontSize: "1.5vw"
      },
      [theme.breakpoints.down('md')]: {
          fontSize: "2.5vw"
      },
  }


});


function Callout(props){
  
    const { classes } = props;
    return (
      <Paper>
        <div className={classes.padded}>
          <Typography 
            variant={"headline"}
          >
            Now Playing @Liberty
          </Typography>
          <Typography 
            variant={"caption"}
            style={{marginBottom: 10}}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan orci vitae ornare varius. Proin placerat felis id eros scelerisque, eget tincidunt augue mattis. 
          </Typography>
          
          {/* <Button 
            fullWidth
            variant="outlined" 
            className={classes.hide}
          >
            Hide Panel
          </Button> */}
        </div>
  
      </Paper>
    )
  }


function Message(props) {

    const { classes } = props;

    return (
      <Card className={classes.card}>
        <Grid container className={classes.break}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="headline"
                        className={classes.header}>
                        Now @ Liberty Somerville
                    </Typography>
                    <Typography variant="subheading"
                      className={classes.sub_header}>
                        Ethanol based tinctures
                    </Typography>
                </CardContent>
            </div>
            <CardMedia
                className={classes.cover}
                image={'https://cdn.shopify.com/s/files/1/2225/9555/products/Serenity_Tincture_Main_Image_1c088b72-461e-47f0-aaf8-a2d1db38062b.png?v=1512919209'}
            />
        </Grid>
      </Card>
    )
    };


Callout.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
Message.propTypes = {
  classes: PropTypes.object.isRequired,
};
  

const CalloutComponent = withStyles(styles)(Callout);
const MessageComponent = withStyles(styles)(Message);

  
export {
  CalloutComponent,
  MessageComponent,
};
  
  
  
  
  