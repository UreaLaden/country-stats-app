import { mergeStyleSets } from "@fluentui/merge-styles";

export const styles = mergeStyleSets({
    buttonLight:{
        backgroundColor:'#FFFFFF',
        minWidth:"17%",
        maxHeight:'25%',
        borderRadius:'2px',
        border:'none',
        boxShadow:"0 0 2px 2px rgba(0,0,0,0.1)",
        transition:'background 0.3s ease,color 0.3s ease',
        ":hover":{
            cursor:'pointer',
            boxShadow:"0 0 2px 2px rgba(0,0,0,0.3)",
        }
    },
    buttonDark:{
        backgroundColor:'#2B3844',
        color:'#FFFFFF',
        minWidth:"17%",
        maxHeight:'25%',
        borderRadius:'2px',
        border:'none',
        boxShadow:"0 0 2px 2px rgba(0,0,0,0.1)",
        transition:'background 0.3s ease,color 0.3s ease',
        ":hover":{
            cursor:'pointer',
            boxShadow:"0 0 2px 2px rgba(255,255,255,0.3)",
        }
    }
})