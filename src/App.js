
import React, { Component, } from 'react';

import './App.css';
import {Map, Marker, GoogleApiWrapper,} from 'google-maps-react';



export class MapContainer extends Component {
    render() {
        const style = {
            width: '100%',
            height: '80%',
        };

        return (
            <Map google={window.google} zoom={12} style={style} initialCenter={{lat: 59.436962, lng: 24.753574}}  onClick={this.onMapClicked}>
                <Marker
                    //cursor={"logo.png"}
                    icon={{url: "../src/logo.png"}}
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{lat: 59.436962, lng: 24.753574}} />
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />


            </Map>
        );
    }
}

export default GoogleApiWrapper({
    //apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(MapContainer)

