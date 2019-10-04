import React from 'react';
import PropTypes from 'prop-types';

// Vendor
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Src
import { BasicComponent, TitlePanelComponent } from '../ui/component';

const styles = theme => ({
  body: {
    flexGrow: 1,
  }

});

class BasePage extends React.Component {
  
  constructor(props){
    super(props);
  }


  render(){
    const { classes } = this.props;

    return (
        <div className={classes.body}>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                  <TitlePanelComponent
                    title={this.props.config.title}
                  />
              </Grid>
            </Grid>
        </div>
    );
  }
}

BasePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasePage);










