import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { LatLng, Polyline } from 'react-native-maps';
import StorageService, { IPersistedRoute } from "../Services/StorageService";
import { Colors } from "../helperComponents/Colors";
import RideControls from "./components/RideControls";
import EmergencyButton from "./components/EmergencyButton";

interface IRideViewProps {
    storageService: StorageService;
    toggleView: () => void;
}

interface IRideViewState {
    route: Array<LatLng>;
    currentLocation: LatLng;
    altitude: number | null;
    distance: number;
    speed: number;
    topSpeed: number;
    duration: number;
}

export default class RideView extends Component<IRideViewProps, IRideViewState> {

    private readonly styles = StyleSheet.create({
        container: {
            paddingTop: 40,
            paddingBottom: 10,
            paddingHorizontal: 10,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        controlsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        tile: {
            backgroundColor: Colors.transparentWhite,
            borderRadius: 12,
            marginBottom: 10,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            overflow: 'hidden'
        },
        outerTile: {
            backgroundColor: Colors.moreTransparentWhite,
            borderRadius: 12,
            paddingBottom: 10
        },
        tileChild: {
            flexDirection: 'column',
            padding: 10
        },
        tileTitle: {
            textAlign: 'center',
        },
        tileData: {
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold'
        },
        time: {
            textAlign: 'center',
            fontSize: 26,
        },
        map: {
            ...StyleSheet.absoluteFillObject,
        }
    });
    private readonly startTime = new Date().getTime();

    public componentWillMount() {
        this.setState({
            route: [],
            currentLocation: { latitude: 0, longitude: 0 },
            altitude: 0,
            distance: 0,
            speed: 0,
            topSpeed: 0
        });
    }

    public componentDidMount() {
        this.handleRegionChange();
    }

    public render() {
        return (
            <View style={this.styles.container}>
                <MapView
                    style={this.styles.map}
                    showsCompass={true}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    userLocationAnnotationTitle='Hier bist du'
                    onRegionChange={this.handleRegionChange}
                >
                    <Polyline
                        coordinates={this.state.route}
                        strokeWidth={6}
                        strokeColor={Colors.green}
                    />
                </MapView>

                <View style={this.styles.outerTile}>
                    <View style={this.styles.tile}>
                        <View style={this.styles.tileChild}>
                            <Text style={this.styles.tileTitle}>Distanz</Text>
                            <Text style={this.styles.tileData}>{this.state.distance} km</Text>
                        </View>

                        <View style={this.styles.tileChild}>
                            <Text style={this.styles.tileTitle}>Geschwindigkeit</Text>
                            <Text style={this.styles.tileData}>{this.state.speed} km/h</Text>
                        </View>

                        <View style={this.styles.tileChild}>
                            <Text style={this.styles.tileTitle}>Max</Text>
                            <Text style={this.styles.tileData}>{this.state.topSpeed} km/h</Text>
                        </View>
                    </View>

                    <Text style={this.styles.time}>
                        12:00
                    </Text>
                </View>

                <View style={this.styles.controlsContainer}>
                    <EmergencyButton>Notfall</EmergencyButton>
                    <RideControls onPauseButtonPress={this.handleButtonPress} onStopButtonPress={this.handleButtonPress} />
                </View>
            </View>
        );
    }

    private handleButtonPress = () => {

        const route: IPersistedRoute = {
            routeCoordinates: this.state.route,
            distanceTravelled: this.state.distance
        };

        this.props.storageService.persistData('lastRoute', JSON.stringify(route));

        this.props.toggleView();
    };

    private handleRegionChange = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                const altitude = position.coords.altitude;
                const speed = position.coords.speed ? Math.round(position.coords.speed * 3.6) : 0;

                const currentLocation: LatLng = { latitude, longitude };

                this.setState({
                    route: this.state.route.concat([currentLocation]),
                    currentLocation,
                    altitude: altitude ? altitude : 0,
                    speed,
                    topSpeed: speed > this.state.topSpeed ? speed : this.state.topSpeed
                });
            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 3000, maximumAge: 20000 }
        );
    };
}