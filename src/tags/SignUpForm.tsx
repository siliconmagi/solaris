import Inferno from 'inferno'
import Component from 'inferno-component'
import styled from 'styled-components';
import { connect } from 'inferno-mobx';

interface MyProps {
  store;
  txtEmail;
  txtPassword;
  registerEmailPass();
}
interface MyState {}

//todo
// 1) input email
// 2) input username
// 3) handle submit

@connect(['txtEmail', 'txtPassword', 'registerEmailPass', 'errorMessage'])
export default class Layout extends Component<MyProps, MyState> {

  handleSubmit = (e) => {
    this.props.registerEmailPass();
    //Prevents page refresh
    e.preventDefault();
  }
  handleEmailChange = (e) => {
    this.props.txtEmail.value = e.target.value
  }
  handlePasswordChange = (e) => {
    this.props.txtPassword.value = e.target.value
  }
  render({ txtEmail, txtPassword, errorMessage }) {
    return (
      <div>
      <form onSubmit={this.handleSubmit} >
      <input type='text' placeholder= 'Enter Email' value={txtEmail.value} onInput={this.handleEmailChange} />
      <input type='password' placeholder='Password' value={txtPassword.value} onInput={this.handlePasswordChange} />
      <input type="submit" disabled={errorMessage.disabled} />
      </form>
      <div>{errorMessage.value}</div>
      </div>
    );
  }
};
