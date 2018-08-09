import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import '../../styles/fonts.css';

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
      },
      content: {
        flex: '1 0 auto',
      },
      break: {
        flexDirection: 'row',
      },
      cover: {
        [theme.breakpoints.down('xl')]: {
            width: 175,
            height: 175,
        },
        [theme.breakpoints.down('md')]: {
            width: 150,
            height: 150,
        },
      },
      text: {
        fontFamily: "Roboto Slab",
      },
  });
function Track(props){

    const { classes } = props;
    return(        
        <div>
            <Card className={classes.card}>
                <Grid container className={classes.break}>
                        <CardMedia
                            className={classes.cover}
                            image={`${props.track.image[3]['#text']}`}
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography variant="headline"
                                    className={classes.text}>
                                    {props.track.name}
                                </Typography>
                                <Typography variant="subheading"
                                    className={classes.text}>
                                    {props.track.artist_name}
                                </Typography>
                            </CardContent>
                        </div>
                </Grid>


            </Card>
        </div> 
    )
  }
    
export default withStyles(styles)(Track);
