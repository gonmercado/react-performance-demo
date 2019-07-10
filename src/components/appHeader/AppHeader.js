import React from 'react';
import gitHubLogo from '../../assets/GitHub-Mark-64px.png';
import headerImg from '../../assets/perfheader.png';

const AppHeader = () => (
  <>
    <div className={ 'banner-container'} ><img src={ headerImg } alt={ 'React Performance Demo' } /></div>
    <div className="introduction-container">
      <div className="introduction">
        <h3>Introduction</h3>
        <p>Demo application to demonstrate different techniques to understand how React works with the render lifecycle (to the Virtual DOM) and how to improve react performance by reducing the calls to this lifecycle method.</p>
        <p>This was created to understand the different techniques for a Class component (Component, PureComponent, shouldComponentUpdate) and a Functional component (React.memo and react hooks)</p>
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
  </>
);

export default AppHeader;
