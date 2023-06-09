import {mergeStyleSets} from "@fluentui/react";
import styled from "styled-components";

export const styles = mergeStyleSets({
})

export const DetailsContainer = styled.div`
display:grid;
grid-template-rows:1fr 3fr;
height:93vh;
border:2px solid red;
`;