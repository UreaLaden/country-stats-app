import styled from "styled-components";

interface StyledImageProps {
  imageSource: string;
}

export const StyledCardContainer = styled.div.attrs((props) => ({
  style: {
    backgroundColor: props.theme.background_secondary,
    color: props.theme.foreground,
  },
}))`
max-height:100%;
transition:background-color .3s ease, color .3s ease;
width:100%;
border-radius:5px;
display:grid;
grid-template-rows:repeat(2,1fr);
box-shadow:0 0 10px rgba(0,0,0,0.4);
padding:0;
z-index:2;
transition:transform 500ms ease-in-out;
:hover{
    cursor:pointer;
    transform:scale(1.05);
    transition:transform 250ms ease-in-out;
  }
`;

export const StyledCountryHeader = styled.div`
  font-weight: 800;
  font-size: 0.9rem;
  padding: 7% 0;
`;

export const StyledCategorySpan = styled.span`
  font-weight: 800;
  font-size: 0.8rem;
`;

export const StyledCardDetailsContainer = styled.div`
  padding: 0 10% 0 10%;
 
`;

export const StyledImage = styled.div<StyledImageProps>`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  min-width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.imageSource})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
`;
