import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import StorageService, { IPersistedRoute } from "../Services/StorageService";
import Button from "../helperComponents/Button";

interface IStartViewProps {
    storageService: StorageService;
    toggleView: () => void;
}

export default class StartView extends Component<IStartViewProps> {

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

                <Text style={this.styles.welcome}>Welcome to React Native!</Text>
                <Text style={this.styles.instructions}>To get started, edit App.js</Text>
                <Text style={this.styles.instructions}>sdf</Text>

                <Button onButtonPress={this.props.toggleView}>Ausritt starten</Button>
            </View>
        );
    }
}
