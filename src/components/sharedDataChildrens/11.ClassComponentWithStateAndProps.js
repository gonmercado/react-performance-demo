import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';
import ComponentTitlePanel from '../shared/componentTitlePanel';
import { childrenComponentsMeta } from '../../shared/componentsMetaData';

class ClassComponentWithStateAndProps extends React.Component {
  state = {
    count: 0,
    hiddenCount: 0
  };
  keyName = 'comp11';
  number = 11;
  description = childrenComponentsMeta.find(el => el.keyName === this.keyName).description;

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
        <div><p>{`Parent - ${ this.props.parentProp }`}</p></div>
        <HighlightChildren keyName={ this.keyName } />
      </div>
    );
  }
}

ClassComponentWithStateAndProps.propTypes = {
  parentProp: PropTypes.number.isRequired
}

export default ClassComponentWithStateAndProps;
