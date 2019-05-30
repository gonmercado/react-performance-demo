import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import AnotherChildren from './anotherChildren/anotherChildren';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';
import ComponentTitlePanel from '../shared/componentTitlePanel';
import { displayComponentWithPropsMeta } from '../../shared/componentsMetaData';

class ClassComponentWithPropsAndShouldUpdateAndChildren extends React.Component {
  state = {
    count: 0,
    hiddenCount: 0
  };
  keyName = 'comp14';
  number = 14;
  description = displayComponentWithPropsMeta.find(el => el.keyName === this.keyName).description;

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.parentProp !== this.props.parentProp) return true;
    if (nextState.count !== this.state.count) return true;
    return false
  }


  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    callDispatchOnRender(this.props.renderCountsDispatch, this.keyName, this.description, this.number);
    const { count } = this.state;

    return (
      <div className={ 'children' }>
        <ComponentTitlePanel title={ this.description } number={ this.number }/>
        <div className={ 'button-container'}>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ count } name={ 'count' }/>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCount' }/>
        </div>
        <AnotherChildren grandParentProp={ this.props.parentProp } renderCountsDispatch={ this.props.renderCountsDispatch } />
        <HighlightChildren keyName={ this.keyName } />
      </div>
    );
  }
}

ClassComponentWithPropsAndShouldUpdateAndChildren.propTypes = {
  parentProp: PropTypes.number.isRequired
}

export default ClassComponentWithPropsAndShouldUpdateAndChildren;
