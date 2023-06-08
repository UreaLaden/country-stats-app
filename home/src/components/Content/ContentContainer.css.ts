import styled from "styled-components";

export const StyledContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows:336px;
    gap:50px;
    min-height:100vh;
    height:auto;
    width:100%;
    padding:0 5%;

    @media (max-width:900px){
        grid-template-columns: repeat(3,1fr)
    }
    
    @media (max-width:750px){
        grid-template-columns: repeat(2,1fr)
    }

    @media (max-width:600px){
        grid-template-columns: repeat(1,1fr)
    }
`;