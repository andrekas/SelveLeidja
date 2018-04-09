import React from 'react';
import {Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react'
import Map from './Map';

class Container extends React.Component {

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


    render() {

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
                        size='small'
                        position={{lat: 59.451079, lng: 24.873603}}
                    />
                    <Marker
                        name={'Jazz selvepesula'}
                        onClick={this.onMarkerClick}
                        icon={jazzLogo}
                        size='small'
                        position={{lat: 59.427349, lng: 24.659478}}
                    />
                    <Marker
                        name={'Jazz selvepesula'}
                        onClick={this.onMarkerClick}
                        icon={jazzLogo}
                        size='small'
                        position={{lat: 59.450586, lng: 24.861331}}
                    />
                    <Marker
                        name={'NB autopesula'}
                        onClick={this.onMarkerClick}
                        icon={nbLogo}
                        size='small'
                        position={{lat: 59.437315, lng: 24.708722}}
                    />
                    <Marker
                        name={'NB autopesula'}
                        onClick={this.onMarkerClick}
                        icon={nbLogo}
                        size='small'
                        position={{lat: 59.424892, lng: 24.748162}}
                    />
                    <Marker
                        name={'Wash24'}
                        onClick={this.onMarkerClick}
                        icon={wash24Logo}
                        size='small'
                        position={{lat: 59.370610, lng: 24.717651}}
                    />
                    <Marker
                        name={'Wash24'}
                        onClick={this.onMarkerClick}
                        icon={wash24Logo}
                        size='small'
                        position={{lat: 59.431113, lng: 24.810077}}
                    />
                    <Marker
                        name={'Nutipesu'}
                        onClick={this.onMarkerClick}
                        icon={nutipesuLogo}
                        size='small'
                        position={{lat: 59.430076, lng: 24.837253}}
                    />
                    <Marker
                        name={'Nutipesu'}
                        onClick={this.onMarkerClick}
                        icon={nutipesuLogo}
                        size='small'
                        position={{lat: 59.4449732, lng: 24.854986}}
                    />
                    <Marker
                        name={'Isepesula24'}
                        onClick={this.onMarkerClick}
                        icon={isepsula24Logo}
                        size='small'
                        position={{lat: 59.415620, lng: 24.683268}}
                    />
                    <Marker
                        name={'Isepesula24'}
                        onClick={this.onMarkerClick}
                        icon={isepsula24Logo}
                        size='small'
                        position={{lat: 59.429653, lng: 24.781960}}
                    />
                    <Marker
                        name={'Aqua pesula'}
                        onClick={this.onMarkerClick}
                        icon={aquaLogo}
                        size='small'
                        position={{lat: 59.406185, lng: 24.643152}}
                    />
                    <Marker
                        name={'Aqua pesula'}
                        onClick={this.onMarkerClick}
                        icon={aquaLogo}
                        size='small'
                        position={{lat: 59.394072, lng: 24.819629}}
                    />
                    <Marker
                        name={'Linnapesulad'}
                        onClick={this.onMarkerClick}
                        icon={linnapesuladLogo}
                        size='small'
                        position={{lat: 59.414255, lng: 24.756928}}
                    />
                    <Marker
                        name={'Linnapesulad'}
                        onClick={this.onMarkerClick}
                        icon={linnapesuladLogo}
                        size='small'
                        position={{lat: 59.439662, lng: 24.884763}}
                    />
                    <Marker
                        name={'Pese Ise autopesula'}
                        onClick={this.onMarkerClick}
                        icon={peseiseLogo}
                        size='small'
                        position={{lat: 59.340218, lng: 24.612700}}
                    />
                    <Marker
                        name={'Pese Ise autopesula'}
                        onClick={this.onMarkerClick}
                        icon={peseiseLogo}
                        size='small'
                        position={{lat: 59.507509, lng: 24.825335}}
                    />
                    <Marker
                        name={'EHRLE autopesula'}
                        onClick={this.onMarkerClick}
                        icon={ehrleLogo}
                        size='small'
                        position={{lat: 59.425497, lng: 24.642510}}
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
let jazzLogo = require('./logo3.png');
let nbLogo = require('./logo4.png');
let wash24Logo = require('./logo5.png');
let nutipesuLogo = require('./logo6.png');
let isepsula24Logo = require('./logo7.png');
let aquaLogo = require('./logo8.png');
let linnapesuladLogo = require('./logo9.png');
let peseiseLogo = require('./logo10.png');
let ehrleLogo = require('./logo11.png');

export default (GoogleApiWrapper({
    apiKey: 'AIzaSyANVS2jhTyDoI770WEeor2zVLP5Odr_3Xs',
    version: '3'
})(Container));