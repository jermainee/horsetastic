import { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../helperComponents/Colors";

export interface IRideControlProps {
    onPauseButtonPress: () => void;
    onStopButtonPress: () => void;
}

export default class RideControls extends Component<IRideControlProps> {

    private readonly styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
        },
        leftButton: {
            backgroundColor: Colors.white,
            color: Colors.black,
            marginRight: 10,
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius: 6,
            overflow: 'hidden',
            fontWeight: 'bold'
        },
        rightButton: {
            backgroundColor: Colors.white,
            color: Colors.black,
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius: 6,
            overflow: 'hidden',
            fontWeight: 'bold'
        }
    });

    public render() {
        return (
            <View style={this.styles.container}>
                <TouchableOpacity onPress={this.props.onPauseButtonPress}>
                    <Text style={this.styles.leftButton}>Pause</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.onStopButtonPress}>
                    <Text style={this.styles.rightButton}>Beenden</Text>
                </TouchableOpacity>
            </View>
        );
    }
}