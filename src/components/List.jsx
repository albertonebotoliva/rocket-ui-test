import React from 'react';
import PropTypes from 'prop-types';

function List({ component, collection, onClick, selected, children }) {

  if (!collection || collection.fetching) {
    return <div className="section"> LOADING </div>;
  }

  if (!collection.data.length) {
    return <div className="section"> NO DATA </div>;
  }

  let items = [];

  for (let i = 0; i < collection.data.length; i++) {
    const data = collection.data[i];
    items.push(
      <div className={"flex card"}>
        <div style={{ width: "15%" }}>
          <img width={"100%"} src={data.links.mission_patch_small} />
        </div>
        <div style={{ width: "85%", paddingLeft: 20 }}>
          {component({ data, onClick, selected, children })}
        </div>
      </div>
    );
  }
  return <div>{items}</div>
}

export default List;

List.propTypes = {
  component: PropTypes.func,
  collection: PropTypes.object
};

List.defaultProps = {
  component: () => { },
  collection: {}
};