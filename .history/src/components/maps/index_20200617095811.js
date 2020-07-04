import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {
    state = {
        viewport: {
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
        }
    };
    render() {
        return (
            <ReactMapGL
                style={{ height: '100vh', width: '50%'}}
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
                mapboxApiAccessToken="pk.eyJ1IjoiY2hhc2hvZmYiLCJhIjoiY2tiamYzcGF2MG0waTJybmNkbGtuMzhiYSJ9.p7J9ZHtChkhqNtL0gwEnLQ"
            />
        )
    }
}
export default Map
