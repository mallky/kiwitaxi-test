import './CollapsedBlock.scss';
import React from 'react';
import PropTypes from 'prop-types';

const FACTOR = 1000;

export default class CollapsedBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (<div className="collapsed-block">
      <button onClick={this.onClick}>
        {this.props.item.title}
      </button>
      <div className={`collapsed ${this.state.isOpen ? 'open' : 'close'}`}>
        <div className="owner">
          <img src={this.props.item.owner.profile_image} alt="owner image"/>
          <p className="owner-name">
            Owner: {this.props.item.owner.display_name}
          </p>
        </div>
        <p>Score: {this.props.item.score}</p>
        <p>Is answered: {this.props.item.is_answered ? 'yes' : 'no'}</p>
        <p>View count: {this.props.item.view_count}</p>
        <p>Creation date: { Date(this.props.item.creation_date * FACTOR) }</p>
        <p>Tags: {this.props.item.tags.join('; ')}</p>
        <a href={this.props.item.link} target='_blank'>Question link</a>
      </div>
    </div>);
  }
}

CollapsedBlock.defaultProps = {
  item: {}
}

CollapsedBlock.propTypes = {
  item: PropTypes.object
}
