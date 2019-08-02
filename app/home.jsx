// react
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

// vendor
import Grid from '@material-ui/core/Grid';


// source
import LoginPage from 'components/pages/auth-page';
import BasePage from 'components/pages/base-page';
import NavBar from 'components/navbar';


// import "components/styles/styles.scss"
import { awsUser } from 'utils/aws-user';
import BackGround from "./assets/funky-lines.png";


import style_imports from 'styles';

const styles = theme => ({
    main_root: style_imports.main_root,
    body: {
        marginTop: "75px",
        height: "100%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
        [theme.breakpoints.down('md')]: {
            width: "95%",
        },
        [theme.breakpoints.up('lg')]: {
            width: "80%",
        },
        [theme.breakpoints.up('xl')]: {
            width: "50%",
        },
    }
})

// const styles = style_imports.test;

class Application extends Component {

    constructor(props){
        super(props);
        this.state = {
            session: null,
            authorized: false,
            isPhone: props.isPhone,
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
            <div className={classes.main_root}>
                {this.state.authorized
                    ? <NavBar />
                    : null
                }
                <Grid container justify={"center"}>
                    <Grid container spacing={8} className={classes.body}> 
                        {this.state.authorized
                            ? <BasePage  />
                            : <LoginPage toggleAuthed={this.toggleAuthed.bind(this)} /> 
                        }
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default withStyles(styles)(Application);


  

