import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';
import { childrenComponentsMeta } from '../../shared/componentsMetaData';

class ClassComponentWithStateAndProps extends React.Component {
  state = {
    count: 0,
    hiddenCount: 0
  };
  keyName = 'comp11';
  childrenMeta = childrenComponentsMeta.find(el => el.keyName === this.keyName);

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    const { number, description } = this.childrenMeta;
    callDispatchOnRender(this.props.renderCountsDispatch, this.keyName, description, number);
    const { count } = this.state;

    return (
      <>
        <div className={ 'button-container'}>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ count } name={ 'count' }/>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCount' }/>
        </div>
        <div><p>{`Parent - ${ this.props.parentProp }`}</p></div>
      </>
    );
  }
}

ClassComponentWithStateAndProps.propTypes = {
  parentProp: PropTypes.number.isRequired
}

export default ClassComponentWithStateAndProps;
