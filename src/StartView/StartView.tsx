import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import StorageService, { IPersistedRoute } from "../Services/StorageService";
import Button from "../helperComponents/Button";
import { Colors } from "../helperComponents/Colors";

interface IStartViewProps {
    storageService: StorageService;
    toggleView: () => void;
}

export default class StartView extends Component<IStartViewProps> {

    private readonly styles = StyleSheet.create({
        container: {
            backgroundColor: Colors.white,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        headline: {
            color: Colors.black,
            fontSize: 20,
            fontWeight: 'bold',
            margin: 10,
        },
        text: {
            color: Colors.darkGrey,
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

                <Text style={this.styles.headline}>Der Ausritt kann los gehen!</Text>
                <Text style={this.styles.text}>To get started, edit App.js</Text>
                <Text style={this.styles.text}>sdf</Text>

                <Button onButtonPress={this.props.toggleView}>Ausritt starten</Button>
            </View>
        );
    }
}
