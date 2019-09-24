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
import {
  CalloutComponent,
  MessageComponent,
  MessageTwoComponent } from '../ui/message';

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


function TopLeft(props){
  
  const { classes } = props;
  return (
    <Paper className={classes.topLeft}>
      <div className={classes.padded}>
        <Typography 
          className={classes.mainTitle}
          variant="display1" 
          gutterBottom>
            Liberty Radio
        </Typography>
      </div>
    </Paper>
  )
}


// function Basic(props) {

//   const { classes } = props;
  
//   return (
//     <Paper>
//       <div className={classes.padded}>
//         <Typography 
//           className={classes.title}
//           variant="headline" 
//           gutterBottom>
//             Some kind of message!
//         </Typography>
//         <Typography 
//           className={classes.formTitle}
//           variant="caption" 
//           gutterBottom>
//             Bootylicious, Facewreck, Additional Generic Weed Variety
//         </Typography>
//       </div>
//     </Paper>
//   )
// };



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





function TrackList(props){
  
  const { classes } = props;

  let river = _.map(props.tracks, (obj, i) =>
    <div key={i}>
      {determineMsg(i, obj)}
    </div>
  )

  return (
    river
  )
}

function determineMsg(i, obj){
  let returnObj;
  if(i == 4){
    returnObj = 
      <div>
        <MessageComponent />
        <Track track={obj} />
      </div>
  } else if(i == 7) {
    returnObj = 
      <div>
        <MessageTwoComponent />
        <Track track={obj} />
      </div>
  } else {
    returnObj = <Track track={obj} />
  }
  return returnObj
}




TopLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};

PlaylistLink.propTypes = {
  classes: PropTypes.object.isRequired,
};

TrackList.propTypes = {
  classes: PropTypes.object.isRequired,
};


const TopLeftComponent = withStyles(styles)(TopLeft);
const PlaylistLinkComponent = withStyles(styles)(PlaylistLink);
const TrackListComponent = withStyles(styles)(TrackList);
const NowPlayingComponent = withStyles(styles)(NowPlaying);
const ImageTestComponent = withStyles(styles)(ImageTest);

export {
  TopLeftComponent,
  PlaylistLinkComponent,
  TrackListComponent,
  NowPlayingComponent,
  ImageTestComponent
};




