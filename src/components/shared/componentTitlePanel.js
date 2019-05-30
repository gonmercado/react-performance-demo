import React from 'react';
import PropTypes from 'prop-types';

const ComponentTitlePanel = ({ number, title }) => (
  <div className={ 'title-panel' }>
    <div className={ 'title-panel__number'}>{ number }</div>
    <h3>{ title }</h3>
  </div>
);

ComponentTitlePanel.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default ComponentTitlePanel;
