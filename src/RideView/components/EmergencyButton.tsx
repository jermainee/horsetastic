import { Component } from "react";
import { AlertIOS, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../helperComponents/Colors";

export default class EmergencyButton extends Component {

    private readonly styles = StyleSheet.create({
        circle: {
            backgroundColor: Colors.red,
            alignItems: 'center',
            justifyContent: 'center',
            width: 85,
            height: 85,
            borderRadius: 85/2,
        },
        text: {
            alignItems: 'center',
            color: Colors.white,
            fontSize: 16,
            fontWeight: 'bold',
        }
    });

    public render() {
        return (
            <TouchableOpacity
                style={this.styles.circle}
                onPress={this.handleEmergancy}
            >
                <Text style={this.styles.text}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }

    private handleEmergancy = () => {
        AlertIOS.alert(
            'Notfall',
            'Möchtest du wirklich eine Notfall-SMS an [Empfänger] senden?',
            [
                {
                    text: 'Nein',
                    style: 'cancel',
                },
                {
                    text: 'Ja',
                    onPress: () => {}
                },
            ]
        );
    }
}