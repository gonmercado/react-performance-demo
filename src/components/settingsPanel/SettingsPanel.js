import React from 'react';
import PropTypes from 'prop-types';

const SettingsPanel = ({ displayBarChart, onDisplayBarChartClick }) => {
  return (
    <div className={ 'settings-panel' }>
      <div><label form={ 'displayGraph' } >Display Graph: </label><input onChange={ onDisplayBarChartClick } checked={ displayBarChart } name={ 'displayGraph'} type="checkbox" /></div>
    </div>
  )
};

SettingsPanel.propTypes = {
  displayBarChart: PropTypes.bool.isRequired,
  onDisplayBarChartClick: PropTypes.func.isRequired
};

export default SettingsPanel;
