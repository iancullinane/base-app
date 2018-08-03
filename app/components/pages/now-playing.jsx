import React from 'react';
import PropTypes from 'prop-types';

// Vendor
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Src
import { 
  BasicComponent, 
  TopLeftComponent, 
  PlaylistLinkComponent,
  TrackComponent } from '../ui/component';
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
      tracks: null,
    }
  }


  async componentDidMount() {
    const tracks = await getTracks()

    this.setState({tracks: tracks.tracks})
  }

  // Controlled component handler for all fields
  handleChange = prop => event => {
    if(prop == "selected_product"){
      console.log("Updating selected products");
    }
    this.setState({ [prop]: event.target.value });
  };

  render(){
    const { classes } = this.props;

    return (
        <div className={classes.body}>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                  <TopLeftComponent />
                  <PlaylistLinkComponent />
              </Grid>
              <Grid item xs={8}>
                  {this.state.tracks 
                    ? <TrackComponent tracks={this.state.tracks} />
                    : null
                  }
              </Grid>
            </Grid>
        </div>
    );
  }
}

NowPlaying.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NowPlaying);










