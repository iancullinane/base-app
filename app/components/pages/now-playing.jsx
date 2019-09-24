import React from 'react';
import PropTypes from 'prop-types';

// Vendor
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// Src
import { 
  TopLeftComponent, 
  PlaylistLinkComponent,
  TrackListComponent } from '../ui/component';
import { CalloutComponent } from '../ui/message';

import { getTracks } from '../data/tracks';

// Assets

const styles = theme => ({
  body: {
    flexGrow: 1,
    justifyContent: "center",
  },
  more_btn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: "white",
    fontFamily: "Roboto Slab",
    marginBottom: 20,
    [theme.breakpoints.down('xl')]: {
      fontSize: "1.2vw",
    },
    [theme.breakpoints.down('md')]: {
      fontSize: "2vw",
    },
    
  }
});

class NowPlaying extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      page: 1,
      tracks: null,
    }
  }


  async componentDidMount() {
    const tracks = await getTracks(this.state.page)

    this.setState({tracks: tracks.tracks})
  }



  async incrementPage(){

    let moreTracks = await getTracks(this.state.page+1)
    let copy = this.state.tracks.concat(moreTracks.tracks)

    this.setState({page: this.state.page++, tracks: copy})
  }

  // Controlled component handler for all fields
  handleChange = prop => event => {
    console.log(`${event.target.value} button clicked`)
    // this.setState({ [prop]: event.target.value });
  };

  render(){
    const { classes } = this.props;

    return (
        <div className={classes.body}>
            <Grid justify={"center"} container spacing={8}>
              <Grid item 
                xs={12} 
                sm={11} 
                md={this.props.isPhone ? 11 : 4} 
                lg={4}>
                  <TopLeftComponent />
                  <CalloutComponent />
                  <PlaylistLinkComponent />
              </Grid>
              <Grid item 
                xs={12} 
                sm={11} 
                md={this.props.isPhone ? 11 : 8}
                lg={8}>
                  {this.state.tracks 
                    ? <TrackListComponent tracks={this.state.tracks} />
                    : null
                  }
              </Grid>
            </Grid>
            <Button 
              fullWidth
              onClick={()=>{this.incrementPage()}}
              className={classes.more_btn}
            >
              More Tracks
            </Button>
        </div>
    );
  }
}

NowPlaying.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NowPlaying);



{/* TODO: this suckssssssssssssssss */}
{/* <Grid container spacing={8}>

  <Grid item sm={12} md={6} lg={6}>
    <TopLeftComponent />
  </Grid>

  <Grid item sm={12} md={6} lg={6}>
    <CalloutComponent />

  </Grid>

  <Grid item sm={12} md={12} lg={12}>
    <PlaylistLinkComponent />                
  </Grid>


</Grid> */}






