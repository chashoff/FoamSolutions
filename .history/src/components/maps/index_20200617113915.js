import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import $ from 'jquery';

class Map extends Component {
    state = {
        viewport: {
        width: 500,
        height: 500,    
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
        }
    };

    componentWillMount() {
        let height = $( window ).height();
        let width = $( window ).width();
        this.setState({ viewport[height]})
    }
    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
                mapboxApiAccessToken="pk.eyJ1IjoiY2hhc2hvZmYiLCJhIjoiY2tiamYzcGF2MG0waTJybmNkbGtuMzhiYSJ9.p7J9ZHtChkhqNtL0gwEnLQ"
            />
        )
    }
}
export default Map
