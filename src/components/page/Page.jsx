import './Page.scss';
import React from 'react';
import { connect } from 'react-redux';

import CollapsedBlock from 'common/collapsed-block/CollapsedBlock.jsx';

const mapStateToProps = (state) => ({
  data: state.data.data,
  pageNum: state.data.pageNum
});

@connect(mapStateToProps)
export default class Page extends React.Component {
  _renderList() {
    return this.props.data
      .map((item, i) => {
        return <li key={i}>
          <CollapsedBlock item={item} />
        </li>
      });
  }

  render() {
    const renderElems = this._renderList();
console.log(this.props.pageNum);
    return <div className="page-block">
      <ol>
        {renderElems}
      </ol>
    </div>
  }
}
