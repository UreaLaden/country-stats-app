import { mergeStyleSets } from '@fluentui/react';
import styled from 'styled-components';

export const StyledHeader = styled.div`
    height:20%;
    border-radius:4px;
    border: 1px solid red;
    background-color:#875C74;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const styles = mergeStyleSets({
    toggleContainer:{

    },
    headerText:{},
    icon:{},
    label:{}
})