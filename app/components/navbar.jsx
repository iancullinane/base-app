import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
// import MenuIcon from '@material-ui/icons/Menu';

import { awsUser } from 'utils/aws-user';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  navbar:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    marginBottom: "100px",
    shadows: "none",

  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
      <AppBar className={classes.navbar} position="fixed">
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Icon className={classes.icon} color="action" style={{ fontSize: 30 }}>
                home
            </Icon>
          </IconButton> */}
          <Typography variant="title" color="inherit" className={classes.flex}>
            Liberty Radio
          </Typography>
          <Button 
            onClick={()=>{awsUser.SignOut()}}
            variant={"outlined"}  
          >
            {"Signout"}
          </Button>
        </Toolbar>
      </AppBar>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
