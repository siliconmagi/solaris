import Inferno from 'inferno';
import styled from 'styled-components';

const Card = styled.section`
background: #D22C39;
margin: 0 1em 0 1em;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
text-align: center;
border-radius: 3px;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
-ms-border-radius: 3px;


`;


export default function (props) {
  return <Card><div className="card">{ props.children }</div></Card>
}
