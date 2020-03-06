import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)
`
  color: white;
  padding: 1em;
  marginLeft: 10%;
  height: 18rem;
  width: 18rem;
  justifyContent: space-evenly;
  boxShadow: 0 14px 26px -12px rgba(156, 39, 176, 0.42),0 4px 23px 0px rgba(0, 0, 0, 0.12),0 8px 10px -5px rgba(156, 39, 176, 0.2);
  borderRadius: 50;
  border: none
`;

export default StyledCard;