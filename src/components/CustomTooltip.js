import React from 'react';
import PropTypes from 'prop-types';

const CustomTooltip = ({ active, payload, label }) => {
    return (
        active &&
        <div className="custom-tooltip">
            <p className="label">{`${label} : ${payload[0].value}`}</p>
            <p>{ `Renders: ${ payload[0].value }` }</p>
            <p className="intro">{ payload[0].payload.description }</p>
        </div>
    )
};

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    label: PropTypes.string,
    payload: PropTypes.array
};

export default CustomTooltip;
