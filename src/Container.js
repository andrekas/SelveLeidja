import React from 'react';
import {Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react'
import Map from './Map';
class Container extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        };


        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    onMapClicked(props) {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };


        render(){

        return (
            <div>
                <Map google={this.props.google}
                     onClick={this.onMapClicked}>
                    <Marker
                        name={'Mündipesula Tondi'}
                        onClick={this.onMarkerClick}
                        icon={myndipesulaLogo}
                        position={{lat: 59.401440, lng: 24.709393}}
                    />
                    <Marker
                        name={'Mündipesula Rocca'}
                        onClick={this.onMarkerClick}
                        icon={myndipesulaLogo}
                        position={{lat: 59.427837, lng: 24.665210}}
                    />
                    <Marker
                        name={'Mündipesula'}
                        onClick={this.onMarkerClick}
                        icon={myndipesulaLogo}
                        position={{lat: 59.448951, lng: 24.886685}}
                    />
                    <Marker
                        name={'Mündipesula'}
                        onClick={this.onMarkerClick}
                        icon={myndipesulaLogo}
                        position={{lat: 59.445089, lng: 24.882158}}
                    />
                    <Marker
                        name={'Mündipesula'}
                        onClick={this.onMarkerClick}
                        icon={myndipesulaLogo}
                        position={{lat: 59.447506, lng: 24.692534}}
                    />
                    <Marker
                        name={'Mündipesula'}
                        onClick={this.onMarkerClick}
                        icon={myndipesulaLogo}
                        position={{lat: 59.462224, lng: 24.905059}}
                    />
                    <Marker
                        name={'Smartwash'}
                        onClick={this.onMarkerClick}
                        icon={smartwashLogo}
                        position={{lat: 59.421322, lng: 24.694940}}
                    />
                    <Marker
                        name={'Smartwash'}
                        onClick={this.onMarkerClick}
                        icon={smartwashLogo}
                        size= 'small'
                        position={{lat: 59.451079, lng: 24.873603}}
                    />

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }

}
let smartwashLogo = require('./logo1.png');
let myndipesulaLogo = require('./logo2.png');



export default (GoogleApiWrapper({
    apiKey: 'AIzaSyANVS2jhTyDoI770WEeor2zVLP5Odr_3Xs',
    version: '3'
})(Container));