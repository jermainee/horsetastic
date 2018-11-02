import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import StorageService  from "../Services/StorageService";
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
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingHorizontal: 10
        },
        headline: {
            color: Colors.black,
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10
        },
        text: {
            color: Colors.darkGrey,
            fontSize: 16,
            lineHeight: 22,
            marginBottom: 20,
        },
    });

    public render() {

        return (
            <View style={this.styles.container}>

                <Image
                    style={{width: 150, height: 150}}
                    source={require('../images/horse.png')}
                />

                <View>
                    <Text style={this.styles.headline}>Der Ausritt kann losgehen!</Text>
                    <Text style={this.styles.text}>
                        Klicke einfach auf den Button und wir machen den Rest für dich.
                        Falls du stürzen solltest, wird automatisch eine SMS mit deinem Standort an deinen Notfall-Kontakt gesendet.
                    </Text>

                    <Button onButtonPress={this.props.toggleView}>Ausritt starten</Button>
                </View>
            </View>
        );
    }
}
