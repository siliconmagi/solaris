import { Route, Link, withRouter } from 'react-router-dom';
import Routes from '../Routes';
import styled from 'styled-components';

// Sidebar Div
const Sdiv = styled.div`
padding: 10px;
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

const Sidebar = () => (
  <Sdiv>
  {Routes.map((route, index) => (
    <Route
    key={index}
    path={route.path}
    exact={route.exact}
    component={route.sidebar}
    />
  ))}
  <ul style={{ listStyleType: 'none', padding: 0 }}>
  <li><NLink to="/">Home</NLink></li>
  <li><NLink to="/about">About</NLink></li>
  <li><NLink to="/blog">Blog</NLink></li>
  </ul>
  </Sdiv>
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
};

// Login status and logout button
const AuthButton = withRouter(({ push }) => (
  fakeAuth.isAuthenticated ? (
    <p>
    Welcome! <button onClick={() => {
      fakeAuth.signout(() => push('/'))
    }}>Sign out</button>
    </p>
  ) : (
  <p>You are not logged in.</p>
  )
));

export default Sidebar
