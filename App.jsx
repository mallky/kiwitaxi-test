import './App.scss';
import React from 'react';
import { connect } from 'react-redux';

import { addData } from 'actions';
import Page from 'components/page/Page.jsx';
import PaginationBar from 'components/pagination-bar/PaginationBar.jsx';

import utils from 'utils';

const mapStateToProps = (state) => ({
  data: state.data.data
});

const mapDispatchToProps = (dispatch) => ({
  addData: (content) => dispatch(addData(content))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tag: '' };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    // utils.getData('react', this.props.addData);
  }

  onChange(e) {
    this.setState({
      tag: e.target.value
    });
  }

  onClick() {
    utils.getData(this.state.tag, this.props.addData);
  }

  render() {
    return <div className="main-app">
      <h1>KiwiTaxi test task</h1>
      <div className="text-field">
        <p>Write key word to find questions about it.</p>
        <input
          type="text"
          name="text"
          onChange={this.onChange}
          id="text-input" />
        <button onClick={this.onClick}>Find questions</button>
      </div>
      <Page />
      <PaginationBar />
    </div>;
  }
}
