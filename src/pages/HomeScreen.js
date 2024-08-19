import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Home from "./Home";

export default function HomeScreen({ navigation }) {
    return(
        <View style={style.container}>
            <View style={style.buttonContainer}>
                <Text style={style.title}>HOME SCREEN</Text>
                <Button
                    title="GO TO DETAILS"
                    onPress={() => navigation.navigate('Details')}
                    color={"green"}
                />
                <Button
                    title="GO TO PROFILE"
                    onPress={() => navigation.navigate('Profile')}
                    color={"purple"}
                />
            </View>
            <View>
                <Home />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },

    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
        marginTop: 40,
    },

    title: {
        fontSize: 15,
        fontWeight: "bold",
        backgroundColor: "blue",
        color: "white",
        padding: 7,
        borderRadius: 10,
    },
})