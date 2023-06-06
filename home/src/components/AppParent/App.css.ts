import styled from 'styled-components';

export const AppContainer = styled.div`
    width:100%;
    height:100%;
    background-color:${(props) => props.theme.background};
    color:${(props) => props.theme.foreground};
    transition:background-color .3s ease, color .3s ease;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;