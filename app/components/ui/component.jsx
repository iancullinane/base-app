import React from 'react';
import PropTypes from 'prop-types';

// Vendor
import _ from 'underscore';
import { withStyles } from '@material-ui/core/styles';
import { injectGlobal } from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// Src
import Track from './track';

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
  title: {
    fontFamily: "Emblema One",
    color: "black",
    lineHeight: .9,
    margin: 0,
    padding: 0,
    [theme.breakpoints.up('lg')]: {
      fontSize: "2vw",
    },
    [theme.breakpoints.down('md')]: {
      fontSize: "9vw",
    },
    // wordWrap: "break-line"
  },
  padded: {
    padding: theme.spacing.unit * 2,
    marginBottom: "14px",
    fontFamily: "Roboto Slab",
  },
  hide:{
    padding: theme.spacing.unit * 2,
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

function Basic(props) {

  const { classes } = props;
  
  return (
    <Paper>
      <div className={classes.padded}>
        <Typography 
          className={classes.formTitle}
          variant="headline" 
          gutterBottom>
            Some kind of message!
        </Typography>
        <Typography 
          className={classes.formTitle}
          variant="caption" 
          gutterBottom>
            Bootylicious, Facewreck, Additional Generic Weed Variety
        </Typography>
      </div>
    </Paper>
  )
};

function TopLeft(props){
  
  const { classes } = props;
  return (
    <Paper className={classes.topLeft}>
      <div className={classes.padded}>
        <Typography 
          className={classes.title}
          variant="display1" 
          gutterBottom>
            Liberty Radio
        </Typography>
      </div>
    </Paper>
  )
}

function PlaylistLink(props){
  
  const { classes } = props;
  return (
    <Paper>
      <div className={classes.padded}>
        <Button 
          fullWidth
          variant="outlined" href={"https://open.spotify.com/user/sarahstretch/playlist/3JOVIF6Fd2pX1hLJyjko4b?si=T05oNRP7QLSZO2T1zQy2aQ"} 
          className={classes.button}
        >
          Playlist Link
        </Button>
      </div>
    </Paper>
  )
}

function NowPlaying(props){
  
  const { classes } = props;
  return (
    <Paper>
      <div className={classes.padded}>
        <Typography variant={"title"}>
          Now Playing
        </Typography>
      </div>
    </Paper>
  )
}

function Callout(props){
  
  const { classes } = props;
  return (
    <Paper>
      <div className={classes.padded}>
        <Typography variant={"headline"}>
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



function TrackList(props){
  
  const { classes } = props;

  let river = _.map(props.tracks, (obj, i) =>
    <div key={i}>
      {duh(i, obj)}
    </div>
  )

  return (
    river
  )
}

function duh(i, obj){
  let returnObj;
  if(i % 5){
    returnObj = <Track track={obj} />
  } else {
    returnObj = 
      <div>
        <BasicComponent />
        <Track track={obj} />
      </div>
  }

  return returnObj
}


// function track(track){
//   return(
//       <Typography 
//         variant="display1" 
//         gutterBottom>
//           {track.name}
//       </Typography>
//   )
// }


Basic.propTypes = {
  classes: PropTypes.object.isRequired,
};

TopLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};

PlaylistLink.propTypes = {
  classes: PropTypes.object.isRequired,
};

TrackList.propTypes = {
  classes: PropTypes.object.isRequired,
};


const BasicComponent = withStyles(styles)(Basic);
const TopLeftComponent = withStyles(styles)(TopLeft);
const PlaylistLinkComponent = withStyles(styles)(PlaylistLink);
const TrackListComponent = withStyles(styles)(TrackList);
const CalloutComponent = withStyles(styles)(Callout);
const NowPlayingComponent = withStyles(styles)(NowPlaying);
const ImageTestComponent = withStyles(styles)(ImageTest);

export {
  BasicComponent,
  TopLeftComponent,
  PlaylistLinkComponent,
  TrackListComponent,
  CalloutComponent,
  NowPlayingComponent,
  ImageTestComponent
};




