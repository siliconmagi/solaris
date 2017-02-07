import { Route, Link, withRouter } from 'react-router-dom';
import Routes from '../Routes';
import styled from 'styled-components';
import AuthButton from './AuthButton';

// Sidebar Div
const Sdiv = styled.div`
padding: 0px;
width: 5em;
`;

// Navbar Links
const NLink = styled(Link)`
background: #b30047;
padding: 0 .5em 0 .5em;
margin: 0 .25em 0 0;
font-size: 1.3em;
border-radius: 3px;
color: white;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
text-decoration: none;
&:hover {
  background: #cc3399;
}
`;

const Sul = styled.ul`
listStyleType: none;
padding: 0;
text-align: right;

`;

const Sidebar = () => (
  <Sdiv>
  <Sul>
  <li><NLink to="/">Home</NLink></li>
  <li><NLink to="/blog">Blog</NLink></li>
  <li><NLink to="/about">About</NLink></li>
  </Sul>
  <AuthButton />
  </Sdiv>
);

export default Sidebar
