import React from 'react';
import './password.css'
class Password extends React.Component
{
    constructor(props)
    {
        super();
        this.state = {
            isDisabled: true
          }
    }    

    validateEmail(email) {
        const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
        const result = pattern.test(email);
        if (result === true) {
          this.setState({
            emailError: false,
            email: email
          })
        } else {
          this.setState({
            emailError: true
          })
        }
      }
      handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    
        if (e.target.name === 'firstname') {
          if (e.target.value === '' || e.target.value === null) {
            this.setState({
              firstnameError: true
            })
          } else {
            this.setState({
              firstnameError: false,
              firstName: e.target.value
            })
          }
        }
        if (e.target.name === 'lastname') {
          if (e.target.value === '' || e.target.value === null) {
            this.setState({
              lastnameError: true
            })
          } else {
            this.setState({
              lastnameError: false,
              lastName: e.target.value
            })
          }
        }
        if (e.target.name === 'email') {
          this.validateEmail(e.target.value);
        }
        if (e.target.name === 'phonenumber') {
          if (e.target.value === '' || e.target.value === null) {
            this.setState({
              phonenumberError: true
            })
          } else {
            this.setState({
              phonenumber: false,
              phonenumberError: e.target.value
            })
          }
        }
        if (this.state.firstnameError === false && this.state.lastnameError === false &&
          this.state.emailError === false && this.state.phonenumberError === false){
          this.setState({ 
            isDisabled: false
          })
        }
      }
      submitForm(e) {
        e.preventDefault();
      }


    render()
    {
        return(
                <form id="signup-form">
                  <div className="form-group">
                    <div className="form-label-group">
                      <label htmlFor="Email id">Email id</label><br />
                      <div className="Email id">
                        <input type="text" id="Email id" name="Email id" placeholder=" Enter your mail id" onChange={(e) => { this.handleChange(e) }} className="form-control" />
    
                        <div className="msg-first">
                          {this.state.firstnameError ? <span style={{ color: "red" }}>Please Enter First Name</span> : ''}
                        </div>
                        
                      </div>
                    </div>
                      <div>
                      <label for="button">button</label>

                      </div>
                  </div>
                </form>
        );
    }
}
export default Password;