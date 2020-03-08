import { CardColumns } from "react-bootstrap";
import styled from "styled-components";

const StyledCardColumns = styled(CardColumns)
`
border: none;
margin-left: 8%;
margin-right: 6%;
padding:1.6em;

@media (min-width: 1680px) {
    -webkit-column-count:5;
    -moz-column-count:5;
    column-count:5;
}

@media (min-width: 720px) {
    -webkit-column-count:3;
    -moz-column-count:3;
    column-count:3;
}

@media (min-width: 480px) {
        -webkit-column-count:2;
        -moz-column-count:2;
        column-count:2;
}

@media (min-width: 100px) {
    -webkit-column-count:1;
    -moz-column-count:1;
    column-count:1;
}

`;

export default StyledCardColumns;