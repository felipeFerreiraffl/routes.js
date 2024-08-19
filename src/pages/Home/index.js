import React from "react";
import * as S from "./styles";

export default function Home() {
    return(
        <S.HomeView>
            <S.HomeHeader>
                <S.HomeTitle>Home</S.HomeTitle>
            </S.HomeHeader>
            <S.HomeBodyView>
                <S.HomeBodyText>Bem Vindo!</S.HomeBodyText>
                <S.HomeBodyIconView>
                    <S.HomeBodyIconImg source={require("../../assets/smile.png")} />
                </S.HomeBodyIconView>
            </S.HomeBodyView>
        </S.HomeView>
    );
}