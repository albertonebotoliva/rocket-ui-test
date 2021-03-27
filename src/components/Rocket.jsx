import React from 'react';
import PropTypes from 'prop-types';

function Rocket({ data, video }) {
  console.log(video)
  return (
    data
      ? (
        <div className={"flex more"}>
          <div style={{ width: "50%" }}>
            <h2>{data.rocket_id.toUpperCase()} </h2>
            <h4>Cost Per Launch:</h4><label>{data.cost_per_launch}</label>
            <h4>Description:</h4><label> {data.description}</label>
          </div>
          <div style={{ width: "50%" }}>
            <iframe width="420" height="395"
              src={"https://www.youtube.com/embed/" + video}>
            </iframe>
          </div>
        </div>
      )
      : (
        <div />
      )
  );
}

export default Rocket;

Rocket.propTypes = {
  data: PropTypes.object
};

Rocket.defaultProps = {
  data: {}
};