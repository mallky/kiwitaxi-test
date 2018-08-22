import './SortingBar.scss';
import React from 'react';
import { connect } from 'react-redux';
import { addData } from 'actions';
import utils from 'utils';

const mapStateToProps = (state) => ({
  data: state.data.data
});

const mapDispatchToProps = (dispatch) => ({
  addData:(data) => dispatch(addData(data))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class SortingBar extends React.Component {
  byScore(prev, next) {
    return next.score - prev.score;
  }

  byDate(prev, next) {
    return next.creation_date - prev.creation_date;
  }

  sorting(type) {
    const sortFunc = type === 'date' ? this.byDate : this.byScore;
    const allItems = utils.joinArray(this.props.data);
    const tempData = allItems.sort(sortFunc);

    this.props.addData(utils.splitArray(tempData, utils.MAX_ITEMS));
  }

  render() {
    return <div className="sorting-bar">
      <button onClick={this.sorting.bind(this, 'score')}
        disabled={!this.props.data.length}>
        Sorting by score
      </button>
      <button onClick={this.sorting.bind(this, 'date')}
        disabled={!this.props.data.length}>
        Sorting by date
      </button>
    </div>
  }
}
