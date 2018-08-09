

import { CognitoUser, CognitoIdentity, CognitoUserPool, CognitoUserAttribute, AuthenticationDetails } from 'amazon-cognito-identity-js';

// import AWS from 'amazon-cognito-identity-js';
// https://github.com/aws/aws-amplify/tree/master/packages/amazon-cognito-identity-js

var poolData = {
    UserPoolId : 'us-east-2_21G4OwuuZ', // Your user pool id here
    ClientId : '14ib28jhn1jst0vr55gpfr6vkh' // Your client id here
};

class AwsUser {
    constructor(){
        this.userPool = new CognitoUserPool(poolData);
        this.state = {
            test: "Test",
        }
    }

    SignOut(){
        console.log("Hello");
        console.log(this.userPool);
    }

    getCurrentUser(){
        return this.userPool.getCurrentUser();
    }

    GetSession(){
        
        var cognitoUser = this.userPool.getCurrentUser();

        return new Promise((resolve, reject)=>{
            if (cognitoUser != null) {
                cognitoUser.getSession(function(err, session) {
                    if (err) {
                        // alert(err.message || JSON.stringify(err));
                    }
                    console.log('session validity: ' + session.isValid());
                    if(session.isValid()){
                        resolve(true)
                    }
                    
                })
            }
        });



        if (cognitoUser != null) {
            cognitoUser.getSession(function(err, session) {
                if (err) {
                    // alert(err.message || JSON.stringify(err));
                }
                console.log('session validity: ' + session.isValid());
                return true;
            })
        } else {
            return true;
        };
    }

    AuthenticateUser(username, password){

        var authenticationData = {
            Username : username,
            Password : password,
        };
        var authenticationDetails = new AuthenticationDetails(authenticationData);

        var userData = {
            Username : username,
            Pool : this.userPool
        };
        var cognitoUser = new CognitoUser(userData);

        return new Promise((resolve, reject)=>{
            cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: function (result) {
                    // console.log('access token + ' + result.getAccessToken().getJwtToken());
                    // location.reload();
                    resolve(result)
                },
        
                onFailure: function(err) {
                    alert(err.message || JSON.stringify(err));
                    reject(err);
                },
        
            })
        });
    }

    ConfirmUser(cognitoUser, validationCode){

        return new Promise((resolve, reject)=>{
            cognitoUser.confirmRegistration(validationCode, true, function(err, result) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('call result: ' + result);
            });  
        });

    }

    SignOut(){
        var cognitoUser = this.userPool.getCurrentUser();
        if (cognitoUser != null) {
            cognitoUser.signOut();
        }
    }

    SignUpUser(username, email, password){
        // var userPool = new CognitoUserPool(poolData);

        var attributeList = [];
        
        var dataUsername = {
            Name: 'username',
            Value: username
        };

        var dataEmail = {
            Name : 'email',
            Value : email
        };


        
        var attributeEmail = new CognitoUserAttribute(dataEmail);
    
        attributeList.push(attributeEmail);
    

        return new Promise((resolve, reject)=>{
            this.userPool.signUp(username, password, attributeList, null, (err, result)=>{
                if(err){
                    console.log(err);
                    reject(err);
                }
                resolve(result);
            });    
        });
    }
}

export let awsUser = new AwsUser();


// userPool.signUp(dataEmail.Value, password, attributeList, null, (err, result)=>{
//     return new Promise((resolve, reject)=>{
//         if (err) {
//             // alert(err.message || JSON.stringify(err));
//             reject(err);
//         }
//         return resolve({result: result.user, err: err});
//     })
    
//     // console.log('user name is ' + cognitoUser.getUsername());
    
// });
    
