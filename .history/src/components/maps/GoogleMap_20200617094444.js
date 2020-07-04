import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
            />
        )
    }
}
export default Map
