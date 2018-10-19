import React, { Component } from 'react';
import StartView from "./src/StartView/StartView";
import RideView from "./src/RideView/RideView";

interface IAppState {
    isStartView: boolean;
}

export default class App extends Component<null, IAppState> {

    public componentWillMount() {
        this.setState({ isStartView: true });
    }

    public render() {
        return this.state.isStartView ? <StartView toggleView={this.toggleView} /> : <RideView toggleView={this.toggleView} />;
    }

    private toggleView = () => {
        this.setState({ isStartView: !this.state.isStartView });
    }
}
