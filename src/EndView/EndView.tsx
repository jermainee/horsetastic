import { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../helperComponents/Button";
import React from "react";

export default class EndView extends Component {

    private readonly styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
        },
    });

    public render() {
        return (
            <View style={this.styles.container}>
                <Image
                    style={{width: 66, height: 58}}
                    source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
                />

                <Text style={this.styles.welcome}>Super!</Text>
                <Text style={this.styles.instructions}>To get started, edit App.js</Text>
                <Text style={this.styles.instructions}>sdf</Text>

                <Button onButtonPress={this.props.toggleView}>Ausritt starten</Button>
            </View>
        );
    }
}