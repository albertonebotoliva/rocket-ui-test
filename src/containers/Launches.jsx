import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ConnectedView from '../views/ConnectedView';
import { fetchLaunches } from "../actions/Launches";
import { fetchRocket } from "../actions/Rockets";
import List from '../components/List';
import Launch from '../components/Launch';
import Rocket from '../components/Rocket';

function LaunchesView({ launchCollection, rocketCollection, dispatch }) {

  useEffect(() => {
    fetchLaunches({ launchCollection, dispatch });
  }, [])

  const onClick = data => {
    fetchRocket({ data, selected: rocketCollection.flight_number, dispatch });
  }

  const getVideo = data => {
    const launch = data.filter(launch => launch.flight_number === rocketCollection.flight_number)
    return launch && launch[0] && launch[0].links.youtube_id || null;
  }
  return (
    <div>
      <h1>Launches:</h1>
      <List onClick={onClick} component={Launch} selected={rocketCollection.flight_number} collection={launchCollection} >
        <Rocket data={rocketCollection.data} video={getVideo(launchCollection.data, rocketCollection.flight_number)} />
      </List>
    </div>
  );
}

LaunchesView.propTypes = {
  launchCollection: PropTypes.object,
  rocketCollection: PropTypes.object,
  dispatch: PropTypes.func
};

LaunchesView.defaultProps = {
  launchCollection: {},
  rocketCollection: {},
  dispatch: () => { }
};

export default ConnectedView(LaunchesView, 'launches');