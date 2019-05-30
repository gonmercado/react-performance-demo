import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import { RESET_COUNT } from '../App';

const RenderAudit = ({ renderCounts, renderCountsDispatch }) => {
  const mean = renderCounts.reduce((sum, prev) => (prev.count + sum), 0) / renderCounts.length;
  return (
    <div className={ 'render-audit' }>
      <button onClick={ () => renderCountsDispatch({ type: RESET_COUNT }) }>Reset</button>
      {
        renderCounts.length > 0 &&
          <ResponsiveContainer width='100%' height={ 500 }>
            <BarChart width={ 300 } height={ 500 } layout="vertical" data={ renderCounts }>
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <XAxis type="number" />
              <YAxis type="category" dataKey="keyName" />
              <Bar dataKey="count" fill="#8884d8">
                {
                  renderCounts.map((entry, index) => (
                    <Cell key={ entry.keyName } fill={ entry.count >= mean ? '#f46242' : '#41b2f4' } />
                  ))
                }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
      }
    </div>
  );
};

RenderAudit.propTypes = {
  renderCounts: PropTypes.array.isRequired,
  renderCountsDispatch: PropTypes.func.isRequired
};

export default RenderAudit;
