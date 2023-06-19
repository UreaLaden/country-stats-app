import {mergeStyleSets} from "@fluentui/react";
import styled from "styled-components";

export const styles = mergeStyleSets({
    backButtonContainer:{
        backgroundColor:'yellow',
        gridArea:'2 / 1 / 3 / -1',
        display:'flex',
        'align-items':'center',
        'justify-content':'start'
    },
    detailsContainerWrapper:{
        border:'1px solid blue',
        gridArea:'3 / 1 / -1 / -1',
        display:'grid',
        'grid-template-rows':'repeat(10,1fr)',
        'grid-template-columns':'repeat(10,1fr)'
    },
    detailsImageContainer:{
        // height:'100%',
        border:'1px solid blue',
        gridArea:'1 / 1 / 7 / 6',
        display:'grid',
        'grid-template-columns':'repeat(10,1fr)',
        'grid-template-rows':'repeat(10,1fr)'
    },
    detailsImage:{
        height:'100%',
        gridArea:'2 / 2 / -1 / -2',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        borderRadius:'10px'
        // backgroundColor:'crimson'
    },
    innerDetailsContainer:{
        backgroundColor:'green',
        gridArea:'1 / 6 / 7 / -1',
        display:'grid',
        'grid-template-rows': 'repeat(7,1fr)',
        'grid-template-columns': 'repeat(7,1fr)'
    },
    detailsHeader:{
        backgroundColor:'red',
        gridArea:'2 / 1 / span 1 / -1'
    },
    contentPrimary:{
        backgroundColor:'magenta',
        gridArea:'3 / 1 / 7 / 5'
    },
    contentSecondary:{
        backgroundColor:'orange',
        gridArea:'3 / 5 / 7 / -1'
    },
    contentBorder:{
        backgroundColor:'salmon',
        gridArea:'7 / 1 / span 1 / -1'
    },
    backButton:{
        paddingLeft:'4%',
        color:'inherit',
        'text-decoration':'none'
    }
})

export const DetailsContainer = styled.div`
display:grid;
grid-template-rows:repeat(10,auto);
grid-template-columns:repeat(14,auto);
height:100vh;
`;