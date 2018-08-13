import React from 'react';
import PropTypes from 'prop-types';

// Vendor
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

// Src
import Paper from '@material-ui/core/Paper';

// Assets
import '../../styles/fonts.css';

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
  UserPoolId : 'us-east-2_SqPWkjFhx', // Your user pool id here
  ClientId : '5e86924ighs70itck1816rajbi' // Your client id here
};

// 

function Login(props) {
  const { classes } = props;
  
  return (
    <Paper className={classes.paper}>
      <form onSubmit={props.authenticateUser}>
        <Typography className={classes.title}>
            Login
        </Typography>
        <Input
          placeholder="username"
          className={classes.input}
          type={"text"}
          value={props.login_email}
          onChange={props.onChange('login_email')}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
        <Input
          placeholder="password"
          className={classes.input}
          type={"password"}
          value={props.login_password}
          onChange={props.onChange('login_password')}
          inputProps={{
            'aria-label': 'Description',
          }}
        />       
        
        <Button 
          fullWidth
          type={"submit"}
          variant="raised" 
          className={classes.button}
          onClick={props.authenticateUser}>
            Login User
        </Button>
        {props.login_error 
          ? <Typography>
              {props.login_error.code}
            </Typography>
          : null
        }
      </form>
    </Paper>
  )};


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);






