import {mergeStyleSets} from "@fluentui/react";
import styled from "styled-components";

export const styles = mergeStyleSets({
    backButtonContainer:{
        // border:'2px solid yellow',        
        gridArea:'2 / 1 / 3 / -1',
        display:'flex',
        'align-items':'center',
        'justify-content':'start'
    },
    detailsContainerWrapper:{
        gridArea:'3 / 1 / -1 / -1',
        display:'grid',
        'grid-template-rows':'repeat(10,1fr)',
        'grid-template-columns':'repeat(10,1fr)'
    },
    detailsImageContainer:{
        gridArea:'1 / 1 / 7 / 6',
        display:'grid',
        'grid-template-columns':'repeat(10,1fr)',
        'grid-template-rows':'repeat(10,1fr)'
    },
    detailsImage:{
        height:'100%',
        gridArea:'3 / 2 / 9 / -2',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        borderRadius:'10px',
        boxShadow:'0 0 2px 2px rgba(0,0,0,0.1)'
    },
    innerDetailsContainer:{
        gridArea:'1 / 6 / 7 / -1',
        display:'grid',
        'grid-template-rows': 'repeat(7,1fr)',
        'grid-template-columns': 'repeat(7,1fr)'
    },
    detailsHeader:{
        display:'flex',
        alignItems:'end',
        fontWeight:'700',
        fontSize:'2rem',
        gridArea:'2 / 1 / span 1 / -1'
    },
    contentPrimary:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        padding:"5% 0 20% 0",
        gridArea:'3 / 1 / 6 / 5'
    },
    contentSecondary:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        padding:"10% 0 70% 0",
        gridArea:'3 / 5 / 6 / -1'
    },
    contentBorderContainer:{
        flex:1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    contentBorder:{
        display:'flex',
        flexDirection:'row',
        gridArea:'6 / 1 / span 1 / -1',
        fontWeight:'bold'
    },
    backButton:{
        paddingLeft:'4%',
        color:'inherit',
        'text-decoration':'none'
    },
    subHeader:{
        fontWeight:'700'
    },
    subContent:{
        fontWeight:'100',
        color: 'rgba(inherit,inherit,inherit,0.8)'
    },
    backgroundLight:{
        background:"#FFF",
        transition:'background 0.3s ease',
        gridArea:'2 / 1 / -1 / -1'
    },
    backgroundDark:{
        background:"#202C36",
        transition:'background 0.3s ease',
        gridArea:'2 / 1 / -1 / -1'
    },
})

export const DetailsContainer = styled.div`
display:grid;
grid-template-rows:6.23% repeat(9,auto);
grid-template-columns:repeat(14,auto);
height:100vh;
`;