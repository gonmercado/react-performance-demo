import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import AnotherChildren from './anotherChildren/anotherChildren';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';
import ComponentTitlePanel from '../shared/componentTitlePanel';
import { childrenComponentsMeta } from '../../shared/componentsMetaData';

class ClassComponentWithPropsAndShouldUpdateAndChildren extends React.Component {
  state = {
    count: 0,
    hiddenCount: 0
  };
  keyName = 'comp14';
  childrenMeta = childrenComponentsMeta.find(el => el.keyName === this.keyName);

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.parentProp !== this.props.parentProp) return true;
    if (nextState.count !== this.state.count) return true;
    return false
  }


  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    const { number, description } = this.childrenMeta;
    callDispatchOnRender(this.props.renderCountsDispatch, this.keyName, description, number);
    const { count } = this.state;

    return (
      <div className={ 'children' }>
        <ComponentTitlePanel title={ description } number={ number }/>
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
