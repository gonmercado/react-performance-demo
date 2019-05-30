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
    sharedCount: 0,
    localCount: 0,
    hiddenCount: 0,
  };

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    console.log('Render - Parent with state');
    const { renderCountsDispatch } = this.props;
    renderCountsDispatch({ type: INCREMENT_RENDER_COUNT, keyName: 'Parent', number: 'P'});
    const { sharedCount, localCount } = this.state;

    return (
      <div className={ 'parent' }>
        <div className={ 'parent-title' }>
          <h1>Parent component</h1>
          <div className={ 'button-container'}>
            <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ sharedCount } name={ 'sharedCount' }/>
            <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ localCount } name={ 'localCount' }/>
            <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCount' }/>
          </div>

        </div>
        <div className={ 'parent-container'}>
          <div className={ 'children-group' }>
            <h2>Childrens without props</h2>
            <div className={ 'children-container' }>
              <ClassComponentWithState renderCountsDispatch={ renderCountsDispatch } />
              <PureClassComponentWithState renderCountsDispatch={ renderCountsDispatch } />
              <ClassComponentWithShouldUpdate renderCountsDispatch={ renderCountsDispatch } />
              <FunctionComponent renderCountsDispatch={ renderCountsDispatch } />
              <MemoFunctionComponent renderCountsDispatch={ renderCountsDispatch } />
            </div>
          </div>
          <div className={ 'children-group' }>
            <h2>Childrens with parents props</h2>
            <div className={ 'children-container' }>
              <ClassComponentWithStateAndProps parentProp={ sharedCount } renderCountsDispatch={ renderCountsDispatch } />
              <PureClassComponentWithProps parentProp={ sharedCount } renderCountsDispatch={ renderCountsDispatch } />
              <ClassComponentWithPropsAndShouldUpdate parentProp={ sharedCount } renderCountsDispatch={ renderCountsDispatch } />
              <ClassComponentWithPropsAndShouldUpdateAndChildren parentProp={ sharedCount} renderCountsDispatch={ renderCountsDispatch } />
              <FunctionComponentWithProps parentProp={ sharedCount } renderCountsDispatch={ renderCountsDispatch } />
              <MemoFunctionComponentsWithProps parentProp={ sharedCount } renderCountsDispatch={ renderCountsDispatch } />
              <MemoFunctionComponentsWithPropsAndHooks parentProp={ sharedCount } renderCountsDispatch={ renderCountsDispatch } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ParentWithState.propTypes = {
  renderCountsDispatch: PropTypes.func.isRequired
};

export default ParentWithState;
