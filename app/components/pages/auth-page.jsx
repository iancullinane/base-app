import React from 'react';
import PropTypes from 'prop-types';

// Vendor
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


// Src

import Signup from 'components/auth/signup'
import Login from 'components/auth/login'
import { awsUser } from 'utils/aws-user';
import { TopLeftComponent} from '../ui/component';
import EnterCode from 'components/auth/enter-code';
import style_imports from 'styles';

const styles = {
  page_root : style_imports.page_root,
  content: {
    marginTop: "75px",
    height: "100%",
  },
  column:{
    width: "33%",
    marginBottom: "20px",
  },
};

class LoginPage extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      login_email: '',
      password: '',
      login_password: '',
      password_confirm: '',
      login_error: null,
      signup_error: null,
      waitForConfirmation: false,
      cognitoUser: null,
      
    };
  }

  async authenticateUser(event){
    event.preventDefault();
    const result = await awsUser.AuthenticateUser(this.state.login_email, this.state.login_password)
      .then((result)=>{
        this.props.toggleAuthed();
      }).catch((err)=>{ 
        this.setState({login_error: err});
      }
    );
  }

  async signUpUser(){
    if(this.state.password === this.state.password_confirm){
      
      const result = await awsUser.SignUpUser(
        this.state.username,
        this.state.email, 
        this.state.password
      ).then((result)=>{
        
        this.setState(
          {
            waitForConfirmation: true,
            cognitoUser: result.user
          }
        );
        // console.log(`registered`);
        this.props.toggleAuthed()        
      }).catch((err)=>{ 
        this.setState({signup_error: err});
      });
      
    } else {
      this.setState({signup_error: "Passwords don't match"});
    }
  }


  
  async confirmUser(){
    const result = await awsUser.ConfirmUser(
      this.state.cognitoUser, 
      this.state.validation_code
    ).then((result)=>{
      console.log(`registered`);
    }).catch((err)=>{ 
      console.log(err.code);
    });
  }

  // toggleConfirmation(){
  //   this.setState({waitForConfirmation: true});
  // }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    
  };
  
  render(){
    const { classes } = this.props;

    return (
      <div>
          <Grid container alignContent={"center"} justify={"center"} className={classes.page_root} spacing={16}>
              <Grid item xs={12} md={12}>
                <TopLeftComponent />
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <Login
                  {...this.state}
                  authenticateUser={this.authenticateUser.bind(this)}
                  onChange={this.handleChange.bind(this)}  /> 
              </Grid>
              <Grid item xs={12} me={12} lg={6}>
                <Signup
                  {...this.state}
                  signUpUser={this.signUpUser.bind(this)}
                  onChange={this.handleChange.bind(this)} 
                /> 
              </Grid>
            </Grid>
            
        
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);










