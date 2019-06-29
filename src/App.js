import React, { useReducer, useState } from 'react';
import './App.scss';
import ParentWithState from './components/ParentWithState';
import RenderAudit from './components/RenderAudit';
import SettingsPanel from './components/SettingsPanel';
import gitHubLogo from './assets/GitHub-Mark-64px.png';

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
          <h1>React components performance demo</h1>
          <div className="introduction-container">
            <div className="introduction">
              <h3>Introduction</h3>
              <p>Demo application to demonstrate different techniques to understand how React works with the render lifecycle (to the Virtual DOM) and how to improve react performance by reducing the calls to this lifecycle method.</p>
              <p>This was created to understand the different techniques for a Class component (Component, PureComponent, shouldComponentUpdate) and a Functional component (React.memo and useMemo hook)</p>
              <p>Please refer to the <a href="https://github.com/gonmercado/react-performance-demo/blob/master/README.md" target={ "_blank" }>Readme file</a> for a better explanation and for code snippets on the tested components.</p>
              <h3>How to use:</h3>
              <p>1. Select the components that you want to display</p>
              <p>2. increment the counter to trigger a state change. Could be the parent or the children counter</p>
              <p>3. You can see with a highlight effect the components that are being render and also compare in the graph the number of times that were render</p>
            </div>
            <div className="links">
              <a className="link" href="https://github.com/gonmercado/react-performance-demo" target="_blank">
                <img src={ gitHubLogo } alt={ "React performance demo git hub" } />
              </a>
            </div>
          </div>
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
