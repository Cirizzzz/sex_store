import styled from 'styled-components';
import React from 'react';
import heart from './heart.png';
const MainDivesContainer = styled.div`
display: flex;
justify-content: center;
height: 70px;
background-color: grey;
width: 100%;
`
const MainTab = styled.div`
font-size: 20px;
width: 110px;
color: brown;
font-weight: bold;
// border: 1px solid white;
text-align: center;
align-self: center;
padding: 5px;
letter-spacing: 0.2px;
`
const GenderNav = styled.div`
font-size: 20px;
display: flex;
`
const WomenFloor = styled.div`
color: lightskyblue;
width: 110px;
display: block;
height: auto;
margin: 5px;
padding: 20px;
flex: 0 3 auto;
align-self: center;
text-align: center;

letter-spacing: 2px;
font-weight: 900;
border-right: 1px solid white;
border-left: 1px solid white;
`
const MenFloor = styled.div`
color: pink;
width: 110px;
text-align: center;
display: block;
height: auto;
margin: 5px;
padding: 20px;
flex: 0 3 auto;
align-self: center;

letter-spacing: 2px;
font-weight: 900;
border-right: 1px solid white;
`
const SearchInput = styled.input`
width: 580px;
height: 40px;
border-radius: 19px/50%;
align-self: center;
border: 0;
padding-left: 16px;
padding-right: 50px;
`
const MyAccount = styled.div`
width: 50px;
border: 1px solid white;
align-self: center;
height: auto;
text-align: center;
margin: 5px;
padding: 10px;
`
const SavedItems = styled.div`
width: 50px;
border: 1px solid white;
align-self: center;
height: auto;
text-align: center;
margin: 5px;
// padding: 10px;
`
const BagItems = styled.div`
width: 50px;
border: 1px solid white;
align-self: center;
height: auto;
text-align: center;
margin: 5px;
padding: 10px;
`
const Image = styled.img`
width: 50px;
height: auto;
`
function Theme(){
    return(
        <MainDivesContainer>
            <MainTab>ОТБОРНОЕ КРЕПКОЕ</MainTab>
            <GenderNav>
                <WomenFloor>WOMEN</WomenFloor>
                <MenFloor>MEN</MenFloor>

            </GenderNav>
            <SearchInput placeholder="Search for items"></SearchInput>
                <MyAccount>icon</MyAccount>
                <SavedItems><Image src={heart}></Image></SavedItems>
                <BagItems>bag</BagItems>
        </MainDivesContainer>
    )        
}
export default Theme;