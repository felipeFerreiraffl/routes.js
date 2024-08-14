import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
    return(
        <View>
            <Text>Home Screen</Text>
            <Button
                title="GO TO DETAILS"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="GO TO PROFILE"
                onPress={() => navigation.navigate('Profile')}
            />
        </View> 
    )
}