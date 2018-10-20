import { Component } from "react";
import { Text, TextStyle, TouchableOpacity } from "react-native";
import React from "react";

export interface IButtonProps {
    onButtonPress: () => void;
}

export default class Button extends Component<IButtonProps> {

    private readonly style: TextStyle = {
        alignItems: 'center',
        backgroundColor: '#ddd',
        color: '#333',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        overflow: 'hidden',
        fontWeight: 'normal',
    };

    public render() {
        return (
            <TouchableOpacity onPress={this.props.onButtonPress}>
                <Text style={this.style}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}