import Inferno from 'inferno';
import { Link } from 'inferno-router';
import styled from 'styled-components';
import Icon from '../tags/Icon';

const Header = styled.header`
list-style: none;
display: -webkit-flex;
display: flex;
-webkit-align-items: center;
align-items: center;
-webkit-justify-content: center;
justify-content: center;
-webkit-flex-direction: row;
flex-direction: row;
-webkit-flex-wrap: wrap;
flex-wrap: wrap;
-webkit-flex-flow: row wrap;
flex-flow: row wrap;
-webkit-align-content: flex-end;
align-content: flex-end;
-webkit-padding-start: 0px;
padding: 0;
margin: 0;
background: #660033;
`;

const Nav = styled.nav`
float: right;
border-radius: 10px;
`;

const Title = styled(Link)`
float: left;
padding: 0 1em 0 1em;
margin: 0 .5em 0 0;
font-size: 24px;
line-height: $header-height;
font-weight: 400;
color: white;
text-decoration: none;
background: #b30047;
&:hover {
background: #cc3399;
}

`;

const Nlink = styled(Link)`
background: #b30047;
padding: 0 .5em 0 .5em;
margin: 0 .5em 0 0;
font-size: 1.3em;
border-radius: 3px;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
-ms-border-radius: 3px;
border-radius: 3px;
color: white;
text-decoration: none;

&:hover {
background: #cc3399;
}

`;

export default function () {
  return (
    <Header>
    <Title to="/">Nightshell</Title>
    <Nav>
    <Nlink to="/blog">Blog</Nlink>
    <Nlink to="/about">About</Nlink>
    </Nav>
    </Header>
  )
}
