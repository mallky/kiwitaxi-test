import './PaginationBar.scss';
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage } from 'actions';

const mapStateToProps = (state) => ({
  data: state.data.data,
  pageNum: state.data.pageNum
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
    return this.props.data.map((item, i) => {
      return <button key={item}
        disabled={i === this.props.pageNum}
        onClick={this.onClick.bind(this, i)}>
        {i + 1}
      </button>;
    })
  }

  render() {
    const renderElems = this._renderBar();

    return <div className="pagination-bar">
      {renderElems}
    </div>
  }
}
