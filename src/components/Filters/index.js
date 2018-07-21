import React, { Component } from "react";
import {
  container,
  filtersRow,
  label,
  input,
  inputCont,
  selectClass
} from "./css";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class Filters extends Component {
  state = {};

  handleCheckBox = name => event => {
    const { setFilter, fetchStashPoints, filters } = this.props;
    const value = filters[name] ? "" : true;
    Promise.resolve(setFilter({ [name]: value })).then(fetchStashPoints());
  };

  handleChange = ({ currentTarget }) => {
    const { setFilter, fetchStashPoints } = this.props;
    const name = currentTarget.name;
    const value = name.match(/by_/)
      ? currentTarget.value
      : +currentTarget.value;
    Promise.resolve(setFilter({ [name]: value })).then(fetchStashPoints());
  };
  render() {
    const checkBoxArr = ["active", "twentyfour_seven", "open_late"];
    const { stashPoints, filters } = this.props;

    return (
      <div className={container}>
        <label className={label}>total: {stashPoints.length}</label>
        <div className={filtersRow}>
          {checkBoxArr.map((label, key) => (
            <FormControlLabel
              label={label}
              key={key}
              control={
                <Checkbox
                  checked={filters[label]}
                  onChange={this.handleCheckBox(label)}
                  color="secondary"
                />
              }
            />
          ))}
          <div className={inputCont}>
            <span>min capacity: {filters.min_capacity}</span>
            <input
              name="min_capacity"
              className={input}
              step={10}
              onChange={this.handleChange}
              defaultValue={filters.min_capacity}
              type="range"
              min={0}
              max={50}
              placeholder="min_capacity"
            />
          </div>

          <div className={inputCont}>
            <span>nearby radius: {filters.nearby_radius}km</span>
            <input
              name="nearby_radius"
              className={input}
              step={100}
              onChange={this.handleChange}
              defaultValue={filters.nearby_radius}
              type="range"
              min={0}
              max={2000}
              placeholder="min_capacity"
            />
          </div>
          <div className={inputCont}>
            <label htmlFor="">Sort By Distance</label>
            <select
              name="by_distance"
              onChange={this.handleChange}
              className={selectClass}
            >
              <option value=""></option>
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
