import './PaginationBar.scss';
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage } from 'actions';

const MAX_ITEMS = 20;

const mapStateToProps = (state) => ({
  data: state.data.data
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentPage:(pageNum) => dispatch(setCurrentPage(pageNum))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class PaginationBar extends React.Component {
  onClick(pageNum) {
    this.props.setCurrentPage(pageNum);
  }

  _renderBar() {
    const pages = Math.ceil(this.props.data.length / MAX_ITEMS);
    const newData = [];

    for (let i = 0; i < pages; i++) {
      newData.push(this.props.data.slice(i * MAX_ITEMS, (i + 1) * MAX_ITEMS ))
    }

    return newData.map((item, i) => {
      return <button key={item} onClick={this.onClick.bind(this, i)}>{i + 1}</button>;  
    })
  }

  render() {
    const renderElems = this._renderBar();

    return <div className="pagination-bar">
      {renderElems}
    </div>
  }
}
