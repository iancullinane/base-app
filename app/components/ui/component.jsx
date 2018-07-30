import React from 'react';
import PropTypes from 'prop-types';

// Vendor
import { withStyles } from '@material-ui/core/styles';
import { injectGlobal } from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


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
    fontSize: "85px",
    wordWrap: "break-word"
  },
  padded: {
    padding: theme.spacing.unit * 2,
    marginBottom: "14px",
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
    <Paper>
      <div className={classes.padded}>
        <Typography 
          className={classes.title}
          variant="display1" 
          gutterBottom>
            LibertyRocks
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



Basic.propTypes = {
  classes: PropTypes.object.isRequired,
};

TopLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};

PlaylistLink.propTypes = {
  classes: PropTypes.object.isRequired,
};


const BasicComponent = withStyles(styles)(Basic);
const TopLeftComponent = withStyles(styles)(TopLeft);
const PlaylistLinkComponent = withStyles(styles)(PlaylistLink);

export {
  BasicComponent,
  TopLeftComponent,
  PlaylistLinkComponent
};




