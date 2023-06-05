import styled from "styled-components";

export const StyledContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(3,.35fr);
    border:1px solid blue;
    column-gap:2%;
    row-gap:60px;
    height:80%;
    width:100%;
    margin:3%;
`;