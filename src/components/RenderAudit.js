import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';
import PropTypes from 'prop-types';
import { RESET_COUNT } from '../App';

const RenderAudit = ({ renderCounts, renderCountsDispatch }) => {
  const mean = renderCounts.reduce((sum, prev) => (prev.count + sum), 0) / renderCounts.length;
  return (
    <div>
      <button onClick={ () => renderCountsDispatch({ type: RESET_COUNT }) }>Reset</button>
      {
        renderCounts.length > 0 &&
        <BarChart width={ 1000 } height={ 400 } layout="vertical" data={ renderCounts }>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="keyName" />
          <Bar dataKey="count" fill="#8884d8">
            {
              renderCounts.map((entry, index) => (
                <Cell fill={entry.count >= mean ? '#f46242' : '#41b2f4' } />
              ))
            }
          </Bar>
        </BarChart>
      }
    </div>
  );
};

RenderAudit.propTypes = {
  renderCounts: PropTypes.array.isRequired,
  renderCountsDispatch: PropTypes.func.isRequired
};

export default RenderAudit;
