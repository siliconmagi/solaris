import Inferno from 'inferno'
import Component from 'inferno-component'
import styled from 'styled-components';
import { connect } from 'inferno-mobx';

interface MyProps {
  store;
  UserEmail;
  UserPassword;
}
interface MyState {}

//todo
// 1) input email
// 2) input username
// 3) handle submit

@connect(['UserEmail', 'UserPassword'])
export default class Layout extends Component<MyProps, MyState> {
  state = {
    password: 'pass onInput',
    email: 'email onInput',
    message: 'hi',

  }

  handleSubmit = () => {
    // console.log(this.props.UserEmail.Name)
  }
  handleEmailChange = (e) => {
    // console.log(this.props.UserEmail.Name)
    this.props.UserEmail.Value = e.target.value
  }
  handlePasswordChange = (e) => {
    this.props.UserPassword.Value = e.target.value
  }
  render({ UserEmail, UserPassword }) {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <div>{UserEmail.Value}{UserPassword.Value}</div>
      <input type='text' placeholder= 'Enter Email' value={UserEmail.Value} onInput={this.handleEmailChange} />
      <input type='password' placeholder='Password' value={UserPassword.Value} onInput={this.handlePasswordChange} />
      <input type="submit"/>
      </form>
      </div>
    );
  }
};
