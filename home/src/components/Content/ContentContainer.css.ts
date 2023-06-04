import styled from "styled-components";

export const StyledContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(3,auto);
    grid-template-rows: repeat(2,50%);
    border:1px solid blue;
    background-color:#17BEBB;
    height:80%;
    width:100%;
`;