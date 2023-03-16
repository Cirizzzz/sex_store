import styled from 'styled-components';

export const MainDivesContainerStyled = styled.div`
display: flex;
justify-content: center;
height: 70px;
background-color: grey;
align-items: center;
`
export const MainTabStyled = styled.div`
font-size: 20px;
width: 130px;
color: brown;
font-weight: bold;
text-align: center;
letter-spacing: 0.2px;
`
export const GenderNavStyled = styled.div`
font-size: 20px;
display: flex;
`
export const GenderFloorStyled = styled.div`
color: ${props => props.men ? "pink" : "lightskyblue"};
width: 120px;
line-height: 70px;
flex: 0 3 auto;
text-align: center;
letter-spacing: 2px;
font-weight: 900;
border-right:${props => props.men ? "1px solid white": "none"};
border-left: 1px solid white;
`
export const ContainerSearchStyled = styled.div`
width: 650px;
text-align: center;
`
export const SearchInputStyled = styled.input`
width: 580px;
height: 40px;
border-radius: 19px;
align-self: center;
padding-left: 16px;
border: 0;
`
export const ImageStyled = styled.img`
width: 50px;
`

