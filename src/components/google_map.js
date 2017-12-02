import React, { Component } from 'react';


class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center : {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return (
      <div>
        <div className="map" ref='map'/>
        <div>{this.props.name}</div>
      </div>
    )
  }
}

export default GoogleMap;
