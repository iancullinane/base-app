import React from 'react';
import PropTypes from 'prop-types';

// Vendor
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    marginTop: "75px",
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  column:{
    width: "33%",
    marginBottom: "20px",
  },
  center: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    margin: "auto",
    padding: theme.spacing.unit * 2,
    textAlign: 'flex-start',
    color: theme.palette.text.secondary,
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
  input: {
    fontFamily: "Roboto Slab",
    width: "100%",
    marginBottom: "15px",
    [theme.breakpoints.up('lg')]: {
      fontSize: "1.3vw",
    },
    [theme.breakpoints.down('md')]: {
      fontSize: "5vw",
    },
  },
  submitRow: {
    flexDirection: "row",
  }

});

var poolData = {
  UserPoolId : 'us-east-2_21G4OwuuZ', // Your user pool id here
  ClientId : '14ib28jhn1jst0vr55gpfr6vkh' // Your client id here
};

// 

function Signup(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
        <Typography className={classes.title}>
            Signup
        </Typography>
        <Input
          placeholder="Username"
          className={classes.input}
          type={"text"}
          value={props.username}
          onChange={props.onChange('username')}
          inputProps={{
            'aria-label': 'Description',
          }}
        />        
        <Input
          placeholder="Email"
          className={classes.input}
          type={"text"}
          value={props.email}
          onChange={props.onChange('email')}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
        <Input
          placeholder="Password"
          className={classes.input}
          type={"password"}
          value={props.password}
          onChange={props.onChange('password')}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
        <Input
          placeholder="Repeat Password"
          className={classes.input}
          type={"password"}
          value={props.password_confirm}
          onChange={props.onChange('password_confirm')}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
        
        <Button 
          variant="raised" 
          className={classes.button}
          onClick={props.signUpUser}>
            Register User
        </Button>
        {props.signup_error 
          ? <Typography>
              {props.signup_error.code}
            </Typography>
          : null
        }
        
      </Paper>
  )};


Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);






