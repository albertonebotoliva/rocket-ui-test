import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <ul>
    <li className={"logo"}><img width={"100%"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/SpaceX_Logo_Black.png/1200px-SpaceX_Logo_Black.png" /></li>
    <li><Link to="/launches">Launches</Link></li>
  </ul>
);

export default Navigation;
