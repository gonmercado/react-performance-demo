import React, { useReducer } from 'react';
import './App.css';
import ParentWithState from './components/ParentWithState';
import RenderAudit from './components/RenderAudit';

export const INCREMENT_RENDER_COUNT = 'INCREMENT_RENDER_COUNT';

export const RESET_COUNT = 'RESET_COUNT';

const initialState = {
  renderCounts: []
};

const reducer = (state, action) => {
  switch(action.type) {
    case INCREMENT_RENDER_COUNT:
      const renderCounts = state.renderCounts.map(renderCount => ({ ...renderCount }));
      const currentRender = renderCounts.find(renderCount => renderCount.keyName === action.keyName);
      if (currentRender) {
        currentRender.count += 1
      }
      else {
        renderCounts.push({ keyName: action.keyName, description: action.description, count: 1})
      }
      return { ...state, renderCounts };
    case RESET_COUNT:
      return { ...initialState }
    default:
      throw new Error()
  }
};

const App = () => {
    const [ renderCountsState, renderCountsDispatch ] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <ParentWithState renderCountsDispatch={ renderCountsDispatch } />
      <RenderAudit renderCounts={ renderCountsState.renderCounts } renderCountsDispatch={ renderCountsDispatch } />
    </div>
  );
}

export default App;
