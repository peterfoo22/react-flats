import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';


const AnyReactComponent = ({ text }) => <div className =".marker">{text}</div>;

class SimpleMap extends Component {
  constructor(props){
    super(props)
  }

  render() {

    let defaultProps = {
    center: {
    lat: 48.885707,
    lng: 2.343543
    },
    zoom: 11
  };

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCTg17or4rYK-ymfXFgWAw6pzrUZ7GS_Kg" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
            <Marker
            lat={this.props.lat}
            lng={this.props.long}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
