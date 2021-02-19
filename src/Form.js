import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form className="input-group" id="search-form">
      <input
        type="text"
        placeholder="Enter city name"
        className="form-control"
        id="search-bar"
        autoComplete="off"
        autoFocus="on"
      />
      <div className="input-group-btn d-gap gap-2 d-md-block" id="buttons">
        <input
          type="submit"
          className="btn btn-info search-button btn-outline-info "
          value="Search"
        />
        <input
          type="button"
          className="btn btn-light current-button btn-outline-secondary"
          value="Current"
        />
      </div>
    </form>
  );
}
