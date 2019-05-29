import React from 'react';
import PropTypes from 'prop-types';
import ClassComponentWithState from './isolatedChildrens/1.ClassComponentWithState';
import PureClassComponentWithState from './isolatedChildrens/2.PureClassComponentWithState';
import ClassComponentWithShouldUpdate from './isolatedChildrens/3.ClassComponentWithShouldUpdate';
import FunctionComponent from './isolatedChildrens/4.FunctionComponent';
import MemoFunctionComponent from './isolatedChildrens/5.MemoFunctionComponent';
import ClassComponentWithStateAndProps from './sharedDataChildrens/11.ClassComponentWithStateAndProps';
import PureClassComponentWithProps from './sharedDataChildrens/12.PureClassComponentWithProps';
import ClassComponentWithPropsAndShouldUpdate from './sharedDataChildrens/13.ClassComponentWithPropsAndShouldUpdate';
import FunctionComponentWithProps from './sharedDataChildrens/15.FunctionComponentWithProps';
import MemoFunctionComponentsWithProps from './sharedDataChildrens/16.MemoFunctionComponentsWithProps';
import CounterIncrementor from './shared/CounterIncrementor';
import MemoFunctionComponentsWithPropsAndHooks from './sharedDataChildrens/17.MemoFunctionComponentsWithPropsAndHooks';
import ClassComponentWithPropsAndShouldUpdateAndChildren
  from './sharedDataChildrens/14.ClassComponentWithPropsAndShouldUpdateAndChildren';
import { INCREMENT_RENDER_COUNT } from '../App';

class ParentWithState extends React.PureComponent {
  state = {
    sharedCounter: 0,
    localCounter: 0,
    hiddenCounter: 0,
  };

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    console.log('Render - Parent with state');
    const { renderCountsDispatch } = this.props;
    renderCountsDispatch({ type: INCREMENT_RENDER_COUNT, keyName: 'Parent'});
    const { sharedCounter, localCounter } = this.state;

    return (
      <>
        <div className={ 'parent-title' }>
          <h1>Parent component</h1>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } counter={ sharedCounter } name={ 'sharedCounter' }/>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } counter={ localCounter } name={ 'localCounter' }/>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCounter' }/>

        </div>
        <div className={ 'parent-container'}>
          <div className={ 'children-group' }>
            <h2>Childrens without props</h2>
            <div className={ 'children-container' }>
              <ClassComponentWithState renderCountsDispatch={ renderCountsDispatch } />
              <hr/>
              <PureClassComponentWithState renderCountsDispatch={ renderCountsDispatch } />
              <hr />
              <ClassComponentWithShouldUpdate renderCountsDispatch={ renderCountsDispatch } />
              <hr />
              <FunctionComponent renderCountsDispatch={ renderCountsDispatch } />
              <hr />
              <MemoFunctionComponent renderCountsDispatch={ renderCountsDispatch } />
            </div>
          </div>
          <div className={ 'children-group' }>
            <h2>Childrens with parents props</h2>
            <div className={ 'children-container' }>
              <ClassComponentWithStateAndProps parentProp={ sharedCounter } renderCountsDispatch={ renderCountsDispatch } />
              <hr/>
              <PureClassComponentWithProps parentProp={ sharedCounter } renderCountsDispatch={ renderCountsDispatch } />
              <hr />
              <ClassComponentWithPropsAndShouldUpdate parentProp={ sharedCounter } renderCountsDispatch={ renderCountsDispatch } />
              <hr />
              <ClassComponentWithPropsAndShouldUpdateAndChildren parentProp={ sharedCounter} renderCountsDispatch={ renderCountsDispatch } />
              <hr />
              <FunctionComponentWithProps parentProp={ sharedCounter } renderCountsDispatch={ renderCountsDispatch } />
              <hr />
              <MemoFunctionComponentsWithProps parentProp={ sharedCounter } renderCountsDispatch={ renderCountsDispatch } />
              <hr />
              <MemoFunctionComponentsWithPropsAndHooks parentProp={ sharedCounter } renderCountsDispatch={ renderCountsDispatch } />
            </div>
          </div>
        </div>
      </>
    )
  }
}

ParentWithState.propTypes = {
  renderCountsDispatch: PropTypes.func.isRequired
};

export default ParentWithState;
