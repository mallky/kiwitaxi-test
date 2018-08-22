import './Page.scss';
import React from 'react';
import { connect } from 'react-redux';
import utils from 'utils';

import CollapsedBlock from 'common/collapsed-block/CollapsedBlock.jsx';

const mapStateToProps = (state) => ({
  data: state.data.data,
  pageNum: state.data.pageNum
});

@connect(mapStateToProps)
export default class Page extends React.Component {
  _renderList() {
    return this.props.data.length
      ? this.props.data[this.props.pageNum]
        .map((item, i) => {
          const num = i + 1 + this.props.pageNum * utils.MAX_ITEMS;

          return <li key={i}>
            <CollapsedBlock item={item} num={num} />
          </li>
        })
      : null;
  }

  render() {
    const renderElems = this._renderList();

    return <div className="page-block">
      <ol>
        {renderElems}
      </ol>
    </div>
  }
}
