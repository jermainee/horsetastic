import { Component } from "react";
import { Text, TextStyle, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "./Colors";

export interface IButtonProps {
    onButtonPress: () => void;
}

export default class Button extends Component<IButtonProps> {

    private readonly style: TextStyle = {
        alignItems: 'center',
        backgroundColor: Colors.green,
        color: Colors.white,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        overflow: 'hidden',
        fontWeight: 'bold',
    };

    public render() {
        return (
            <TouchableOpacity onPress={this.props.onButtonPress}>
                <Text style={this.style}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}