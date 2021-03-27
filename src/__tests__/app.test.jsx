import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Routes from '../routes';
import { Provider } from "react-redux";
import store from "../stores/Root.js";

configure({ adapter: new Adapter() });

describe('app', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  });
});
