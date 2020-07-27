import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import $ from 'jquery';
import './index.css';

class Map extends Component {
    state = {
        viewport: {
        width: 500,
        height: 500,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 2
        }
    };

    componentWillMount() {
        let height = $( window ).height();
        let width = $( window ).width();
        if(width)
        width = width/2;
        this.setState({ viewport: {...this.state.viewport, height: height, width: width }})
    }
    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
                mapboxApiAccessToken="pk.eyJ1IjoiY2hhc2hvZmYiLCJhIjoiY2tiamYwNzlxMG41MjJ2bnF2M3B2dDhpYyJ9.by9f3ufcE1XS9FTm7VXKIA"
            />
        )
    }
}
export default Map
