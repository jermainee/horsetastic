import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

interface IRideViewProps {
    toggleView: () => void;
}

export default class RideView extends Component<IRideViewProps> {

    // TODO: Show speed
    // TODO: Show acceleration?
    // TODO: Implement SOS-System
    // TODO: Show Map
    // TODO: Show Distance

    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Ride</Text>

                <Button
                    onPress={this.props.toggleView}
                    title="Ausritt beenden"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
