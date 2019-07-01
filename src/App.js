import React, { useReducer, useState } from 'react';
import './App.scss';
import ParentWithState from './components/parentWithState/ParentWithState';
import RenderAudit from './components/renderAudit/RenderAudit';
import SettingsPanel from './components/settingsPanel/SettingsPanel';
import AppHeader from './components/appHeader/AppHeader';

export const renderContext = React.createContext();

export const INCREMENT_RENDER_COUNT = 'INCREMENT_RENDER_COUNT';

export const RESET_COUNT = 'RESET_COUNT';

export const REMOVE_RECENT = 'REMOVE_RECENT';

const initialState = {
  renderCounts: [],
  recentRender: []
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
        renderCounts.push({ keyName: action.keyName, description: action.description, number: action.number, count: 1})
      }
      return { ...state, renderCounts, recentRender: [ ...state.recentRender, action.keyName ] };
    case REMOVE_RECENT:
      const pos = state.recentRender.indexOf(action.keyName);
      return { ...state, recentRender: [ ...state.recentRender.slice(0, pos), ...state.recentRender.slice(pos + 1)] }
    case RESET_COUNT:
      return { ...initialState };
    default:
      throw new Error()
  }
};

const App = () => {
  const [ renderCountsState, renderCountsDispatch ] = useReducer(reducer, initialState);
  const [  displayBarChart, setDisplayVarChart ] = useState(true);

  const handleDisplayBarChartClick = () => setDisplayVarChart(!displayBarChart);

  return (
    <renderContext.Provider value={ { recentRender: renderCountsState.recentRender, renderCountsDispatch } }>
      <div className="App">
        <header>
          <AppHeader />
        </header>
        <div className="app-main-content">
          <div className="app-left-panel">
            <ParentWithState renderCountsDispatch={ renderCountsDispatch } />
            <SettingsPanel displayBarChart={ displayBarChart } onDisplayBarChartClick={ handleDisplayBarChartClick } />
          </div>
          { displayBarChart && <RenderAudit renderCounts={ renderCountsState.renderCounts } renderCountsDispatch={ renderCountsDispatch } /> }
        </div>
      </div>
    </renderContext.Provider>
  );
}

export default App;
