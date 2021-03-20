import React from "react";
import "./Service.css";
import ServiceData from "./ServiceData";
class Service extends React.Component {
  constructor() {
    super();
    this.state = {
      Data: ServiceData,
    };
  }
  render() {
    return (
      <div className="team-parent">
        {this.state.Data.map(({ id, name, imageUrl, jobtitle }) => (
          <div className="team-display">
            <p>{jobtitle}</p>
            <div
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
              }}
              className="team-container"
              key={id}
            ></div>
            <div>
              <h1>{name}</h1>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Service;
