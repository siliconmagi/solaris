import Inferno from 'inferno'
import Component from 'inferno-component'
import styled from 'styled-components';
import { connect } from 'inferno-mobx';

interface MyProps {
  store;
  txtEmail;
  txtPassword;
  emailSignUp();
  login();
  logout();
  isLoggedIn;
}
interface MyState {}

//todo
// 1) input email
// 2) input username
// 3) handle submit

@connect(['txtEmail', 'txtPassword', 'emailSignUp', 'login', 'logout', 'isLoggedIn', 'errorMessage'])
export default class Layout extends Component<MyProps, MyState> {

  handleLogin = (e) => {
    this.props.login();
    //Prevents page refresh
    e.preventDefault();
  }
  handleSignUp = (e) => {
    this.props.emailSignUp();
    e.preventDefault();
  }
  handleLogout = (e) => {
    this.props.logout();
    e.preventDefault();
  }
  handleEmailChange = (e) => {
    this.props.txtEmail.value = e.target.value
  }
  handlePasswordChange = (e) => {
    this.props.txtPassword.value = e.target.value
  }
  render({ txtEmail, txtPassword, errorMessage, isLoggedIn }) {
    return (
      <div>
      <input type='text' placeholder= 'Email' value={txtEmail.value} onInput={this.handleEmailChange} />
      <input type='password' placeholder='Password' value={txtPassword.value} onInput={this.handlePasswordChange} />
      <br/>
      <button onClick={this.handleLogin} disabled={errorMessage.disabled}>Login</button>
      <button onClick={this.handleSignUp} disabled={errorMessage.disabled}>Sign up</button>
      { isLoggedIn.value ? <button onClick={this.handleLogout} disabled={errorMessage.disabled}>Logout</button> : null }
      <div>{isLoggedIn.value.toString()}</div>
      <div>{errorMessage.value}</div>
      </div>
    );
  }
};
