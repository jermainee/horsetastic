import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';


interface IRideViewProps {
    toggleView: () => void;
}

interface IRideViewState {
    latitude: number;
    longitude: number
    altitude: number | null;
    speed: number | null;
    error: string | null;
}

export default class RideView extends Component<IRideViewProps, IRideViewState> {

    // TODO: Show speed
    // TODO: Show acceleration?
    // TODO: Implement SOS-System
    // TODO: Show Map
    // TODO: Show Distance
    // TODO: Implement route logger

    public componentWillMount() {
        this.setState({
            latitude: 0,
            longitude: 0,
            error: null
        });
    }

    public componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    altitude: position.coords.altitude,
                    speed: position.coords.speed
                });
            },
            (error) => this.setState({error: error.message}),
            {
                enableHighAccuracy: false,
                timeout: 200000,
                maximumAge: 1000
            }
        );
    }

    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Ride</Text>

                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: this.state.latitude,
                        longitude: this.state.latitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude
                        }}
                        image={require('../images/horse-icon.svg')}
                    />
                </MapView>

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
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});
