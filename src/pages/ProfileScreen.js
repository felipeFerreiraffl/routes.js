import React from "react";
import { View, Text, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
    return(
        <View>
            <Text>Profile Screen</Text>
            <Button
                title="GO TO DETAILS"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="GO TO HOME"
                onPress={() => navigation.navigate('Home')}
            />
        </View> 
    )
}