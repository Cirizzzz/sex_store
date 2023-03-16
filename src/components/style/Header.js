import React from "react";
import {MainDivesContainerStyled, ContainerSearchStyled, MainTabStyled, GenderNavStyled, GenderFloorStyled, SearchInputStyled, ImageStyled} from "./styles.js"
import heart from './heart.png';
import man from './man.png';
import bag from './bag.png';

function CreateHeader(){
console.log("aaaaa")
return(
    <MainDivesContainerStyled>
        <MainTabStyled>ОТБОРНОЕ КРЕПКОЕ</MainTabStyled>
        <GenderNavStyled>
            <GenderFloorStyled>WOMEN</GenderFloorStyled>
            <GenderFloorStyled men>MEN</GenderFloorStyled>
        </GenderNavStyled>
        <ContainerSearchStyled><SearchInputStyled placeholder="Search for items"></SearchInputStyled></ContainerSearchStyled>
            <ImageStyled src={man}></ImageStyled>
            <ImageStyled src={heart}></ImageStyled>
            <ImageStyled src={bag}></ImageStyled>
    </MainDivesContainerStyled>
)   
}


export default CreateHeader;