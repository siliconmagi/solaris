import Inferno from 'inferno'
import { Route, Link } from 'react-router-dom'
import Home from './Home';
import Layout from '../tags/Layout';
import Blog from './Blog';
import Article from './Article';
import Error404 from './Error404';
import About from './About';
import styled from 'styled-components';

const NLink = styled(Link)`
background: #b30047;
padding: 0 .5em 0 .5em;
margin: 0 .25em 0 0;
font-size: 1.3em;
border-radius: 3px;
color: white;
text-decoration: none;

&:hover {
  background: #cc3399;
}

`;

const routes = [
  { path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
      main: () => < Home />
  },
  { path: '/blog',
    exact: false,
    sidebar: () => <div>blog!</div>,
      main: () => < Blog />
  },
  { path: '/about',
    exact: false,
    sidebar: () => <div>about!</div>,
      main: () => < About />
  }
]

const View = () => (
  <div style={{ display: 'flex' }}>
  <div style={{
    padding: '10px',
    width: '40%',
    background: '#f0f0f0'
  }}>
  {routes.map((route, index) => (
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


  </div>

  <div style={{ flex: 1, padding: '10px' }}>
  {routes.map((route, index) => (
    // Render more <Route>s with the same paths as
    // above, but different components this time.
    <Route
    key={index}
    path={route.path}
    exact={route.exact}
    component={route.main}
    />
  ))}
  </div>
  </div>
);

export default View

