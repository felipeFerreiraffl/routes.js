import React from "react";
import { View, Text, Button } from "react-native";

export default function DetailsScreen({ navigation }) {
    return(
        <View>
            <Text>Details Screen</Text>
            <Button
                title="GO TO HOME"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="GO TO PROFILE"
                onPress={() => navigation.navigate('Profile')}
            />
        </View> 
    )
}