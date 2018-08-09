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
  CalloutComponent,
  TrackListComponent } from '../ui/component';
import { getTracks } from '../data/tracks';

const styles = theme => ({
  body: {
    flexGrow: 1,
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
            <Grid container spacing={8}>
              <Grid item sm={12} md={12} lg={4}>
                  <TopLeftComponent />
                  <CalloutComponent />
                  <PlaylistLinkComponent />
              </Grid>
              <Grid item sm={12} md={12} lg={8}>
                  {this.state.tracks 
                    ? <TrackListComponent tracks={this.state.tracks} />
                    : null
                  }
              </Grid>
            </Grid>
            <Button 
              fullWidth
              variant="outlined"
              onClick={()=>{this.incrementPage()}}
              className={classes.hide}
            >
              More Tracks (coming soon)
            </Button>
        </div>
    );
  }
}

NowPlaying.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NowPlaying);










