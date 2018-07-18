// react
import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

// vendor
import Grid from 'material-ui/Grid';

// source
import NavBar from 'components/navbar';
import LoginPage from 'components/pages/auth-page';
import BasePage from 'components/pages/base-page';


// import "components/styles/styles.scss"
import { awsUser } from 'utils/aws-user';

const styles = theme => ({
    root: {
        height: "100%",
        width: "100%",

        // padding: theme.spacing.unit,
      },
    river: {
        marginTop: "75px",
        height: "100%",
    },
    body: {
        marginTop: "75px",
        [theme.breakpoints.down('sm')]: {
          width: "100%",
        },
        [theme.breakpoints.up('md')]: {
            width: "80%",
        },
        [theme.breakpoints.up('lg')]: {
            width: "70%",
        },
        [theme.breakpoints.up('xl')]: {
            width: "50%",
        },
      },
  });

class Application extends Component {

    constructor(props){
        super(props);
        this.state = {
            session: null,
        }
        console.log("Launch pesto app");
    }

    async componentDidMount() {
        const authorized = await awsUser.GetSession()
        this.setState({authorized})
    }

    render(){
        const { classes } = this.props;
        // window.localStorage.clear();
        // let loggedIn = awsUser.GetSession();
        return(            
            <div className={classes.root}>
                <NavBar />
                <Grid container justify={"center"}>
                    <Grid container spacing={8} className={classes.body}> 
                        {this.state.authorized
                            ? <BasePage />
                            : <LoginPage /> 
                        }
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Application);


  

