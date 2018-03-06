import React, {Children} from 'react';
import ReactDOM from 'react-dom';
import {PropTypes} from 'prop-types';



export class Map extends React.Component {
    renderChildren() {
        const {children} = this.props;

        if (!children) return;
        return Children.map(children, c => {
            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
                //mapCenter: this.state.currentLocation
            });
        })
    }
    componentDidMount(){
        this.loadMap();
        this.forceUpdate();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.google !== this.props.google){
            console.log('updating props');
            this.loadMap();
        }
    }

    loadMap(){
        if(this.props && this.props.google){
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            let {initialCenter, zoom} = this.props;
            const {lat, lng} = initialCenter;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = {
                center: center,
                zoom: zoom,
                gestureHandling: 'cooperative'

            };

            this.map = new maps.Map(node, mapConfig);

            this.forceUpdate();
            console.log(this.map);

    }
    }

    render(){
        const style = {
            width: '98vw',
            height: '85vh',
            margin: 'auto'
        };
        return (
            <div style={style} ref="map" >
                Loading...
                {this.renderChildren()}
            </div>
        );
    }


}
Map.propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object,
    onMove: PropTypes.func
};
Map.defaultProps = {
    zoom: 12,
    gestureHandling: 'cooperative',
    initialCenter: {
        lat: 59.436962,
        lng: 24.753574
    }
};


export default Map

