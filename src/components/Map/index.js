import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { container, point } from "./css";

const AnyReactComponent = ({ text, onClick }) => (
  <div onClick={onClick} title={text} className={point}>
    {text}
  </div>
);

// in this implemntation i wont use API-KEY so it will say for development purpose and it will be a little darker
class Map extends Component {
  handleChange = ({ center, zoom }) => {
    const { setFilter, setMapInfo, fetchStashPoints } = this.props;
    const filters = { centre_lat: center.lat, centre_lon: center.lng };
    // i know i repeat my self i could better
    Promise.resolve(setMapInfo({ ...center, zoom }))
      .then(setFilter(filters))
      .then(fetchStashPoints());
  };

  render() {
    const { mapInfo, stashPoints } = this.props;
    return (
      <div className={container}>
        <GoogleMapReact
          defaultCenter={mapInfo}
          defaultZoom={6}
          onChange={this.handleChange}
          center={mapInfo}
        >
          {stashPoints.map(({ name, longitude, latitude }, key) => (
            <AnyReactComponent
              key={key}
              lat={latitude}
              text={name}
              lng={longitude}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
