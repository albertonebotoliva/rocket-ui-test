import React from 'react';
import PropTypes from 'prop-types';

function Launch({ data, selected, onClick, children }) {
  return (
    <li>
      <h2> {data.mission_name}</h2>
      <h4>Flight Number: {data.flight_number}</h4>
      <h4>Site Name: {data.launch_site.site_name_long}</h4>
      <h4>Launch Date Local: {data.launch_date_local}</h4>
      <button onClick={(e) => data.rocket && data.rocket.rocket_id && onClick(data)} style={{ width: "100%" }}>SEE MORE</button>
      {data.flight_number === selected && children}
    </li>
  );
}

export default Launch;

Launch.propTypes = {
  data: PropTypes.object,
  selected: PropTypes.number,
  onClick: PropTypes.func,
  children: PropTypes.element
};

Launch.defaultProps = {
  data: {},
  selected: null,
  onClick: () => { },
  children: <div />
};