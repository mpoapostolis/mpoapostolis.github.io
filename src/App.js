import React, { Component } from "react";
import Map from "./components/Map";
import Filters from "./components/Filters";
import { container, map, filters, cards } from "./css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./redux/actions";
import Card from "./components/Card";
// no reason to use redux for this App
class App extends Component {
  componentDidMount() {
    // use geolocation api
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition);
    } else {
    }
  }

  // get coords
  getPosition = position => {
    const { setFilter, setMapInfo, fetchStashPoints } = this.props;
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    const center = { lat, lng };
    const filters = { centre_lat: lat, centre_lon: lng };
    //  with sagas would be a lot better
    Promise.resolve(setMapInfo(center))
      .then(setFilter(filters))
      .then(fetchStashPoints());
  };

  render() {
    const { stashPoints, setFilter, fetchStashPoints, setMapInfo } = this.props;
    return (
      <main className={container}>
        <div className={map}>
          <Map {...this.props} />
        </div>
        <div className={filters}>
          <Filters {...this.props} />
        </div>
        <div className={cards}>
          {stashPoints.map((obj, key) => (
            <Card
              setMapInfo={setMapInfo}
              fetchStashPoints={fetchStashPoints}
              setFilter={setFilter}
              {...obj}
            />
          ))}
        </div>
      </main>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
