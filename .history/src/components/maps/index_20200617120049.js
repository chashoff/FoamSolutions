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
        this.setState({ viewport: {...this.state.viewport, height: height, width: width/2 }})
    }
    render() {
        console.log(this.state)
        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
                mapboxApiAccessToken="chashoff.ckbjjeibd07o123nxk2p34kt6-2arov"
            />
        )
    }
}
export default Map
