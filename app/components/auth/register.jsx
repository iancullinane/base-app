
import React from 'react';

import Input, { InputLabel } from '@material-ui/core/Input';
import { FormControl } from '@material-ui/core/Form';






class RegistrationForm extends React.Component {
  
    constructor(props){
        super(props);
    }

    signUpUser = () => {
        console.log(this.state);
        SignUpUser(this.state.email);
        // console.log(err);
        // SignUpUser(this.state.email, this.state.password, '781-775-8050')
      }

    render(){

        return (
            <form>
              <FormControl>
                  <InputLabel>Email Address</InputLabel>
                  <Input
                  placeholder={"123 Basil Rd"}
                  />
              </FormControl>
              
              <FormControl>
                  <InputLabel>Password</InputLabel>
                  <Input
                  placeholder={"123 Basil Rd"}
                  />
              </FormControl>
      
              <FormControl>
                  <InputLabel>You company address</InputLabel>
                  <Input
                  placeholder={"123 Basil Rd"}
                  />
              </FormControl>
      
              <FormControl fullWidth >
                  <InputLabel>Vendor Name</InputLabel>
                  <Input
                  placeholder={"Your company name"}
                  />
              </FormControl>
      
              <FormControl fullWidth >
                  <InputLabel>You company address</InputLabel>
                  <Input
                    placeholder={"123 Basil Rd"}
                  />
              </FormControl>
          </form>
        )
    }
  
}



export default RegistrationForm










