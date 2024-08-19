import styled from "styled-components/native";

export const HomeView = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HomeHeader = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export const HomeTitle = styled.Text`
    text-align: center;
    font-size: 25px;
    padding: 8px;
    width: 150px;
    border-radius: 10px;
    font-weight: bold;
    background-color: blue;
    color: white;
`;

export const HomeBodyView = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 50px;
    gap: 15px;
    padding: 60px;
    border: solid 2px black;
    border-radius: 20px;
`;

export const HomeBodyIconView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 30px;
`;

export const HomeBodyIconImg = styled.Image`
    width: 150px;
    height: 150px;
    text-align: center;
`;

export const HomeBodyText = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: black;
`;
