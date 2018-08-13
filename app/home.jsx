// react
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

// vendor
import Grid from '@material-ui/core/Grid';

// source
import LoginPage from 'components/pages/auth-page';
import NowPlaying from 'components/pages/now-playing';
import NavBar from 'components/navbar';


// import "components/styles/styles.scss"
import { awsUser } from 'utils/aws-user';
import BackGround from "./assets/funky-lines.png";


import style_imports from 'styles';

// const styles = theme => ({
//     body: style_imports.main_root,
//     body: style_imports.body,
//   });

const styles = style_imports.test;

class Application extends Component {

    constructor(props){
        super(props);
        this.state = {
            session: null,
            authorized: false
        }
        console.log("Launch pesto app");
    }


    
    async componentDidMount() {
        const authorized = await awsUser.GetSession()
        this.setState({authorized})
    }

    toggleAuthed(){
        this.setState(prevState => ({
            authorized: !prevState.authorized
          }));
    }

    render(){
        const { classes } = this.props;
    
        // window.localStorage.clear();
        // let loggedIn = awsUser.GetSession();
        return(            
            <div className={classes.root}>
                {this.state.authorized
                    ? <NavBar />
                    : null
                }
                <Grid container justify={"center"}>
                    <Grid container spacing={8} className={classes.body}> 
                        {this.state.authorized
                            ? <NowPlaying />
                            : <LoginPage toggleAuthed={this.toggleAuthed.bind(this)} /> 
                        }
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Application);


  

