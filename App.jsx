import './App.scss';
import React from 'react';
import { connect } from 'react-redux';

import { addContent } from 'actions';
import utils from 'utils';

const mapStateToProps = (state) => ({
  app: state.app
});

const mapDispatchToProps = (dispatch) => ({
  addContent: (content) => dispatch(addContent(content)) 
});

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { invisible: true };
  }

  render() {
    console.log(this.props.app);
    return <div className="main-app">
      Hello
    </div>;
  }
}
