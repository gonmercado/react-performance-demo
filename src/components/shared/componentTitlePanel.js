import React from 'react';
import PropTypes from 'prop-types';
import gitHubLogo from '../../assets/GitHub-Mark-32px.png';

const ComponentTitlePanel = ({ number, title, source }) => (
  <div className={ 'title-panel' }>
    <div className={ 'title-panel__number'}>{ number }</div>
    <h3>{ title }</h3>
    <a href={ source } target={ "_blank"}><img src={ gitHubLogo } height={ 20 } width={ 20 }/></a>
  </div>
);

ComponentTitlePanel.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
}

export default ComponentTitlePanel;
