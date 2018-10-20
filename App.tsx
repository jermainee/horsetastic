import React, { Component } from 'react';
import StartView from "./src/StartView/StartView";
import RideView from "./src/RideView/RideView";
import StorageService from "./src/Services/StorageService";

interface IAppState {
    isStartView: boolean;
}

export default class App extends Component<null, IAppState> {

    private readonly storageService = new StorageService();

    public componentWillMount() {
        this.setState({ isStartView: true });
    }

    public render() {

        if (this.state.isStartView) {
            return (
                <StartView
                    storageService={this.storageService}
                    toggleView={this.toggleView}
                />
            );
        }

        return (
            <RideView
                storageService={this.storageService}
                toggleView={this.toggleView}
            />
        );
    }

    private toggleView = () => {
        this.setState({ isStartView: !this.state.isStartView });
    }
}
