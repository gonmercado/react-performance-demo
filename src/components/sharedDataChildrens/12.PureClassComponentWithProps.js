import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';
import ComponentTitlePanel from '../shared/componentTitlePanel';

class PureClassComponentWithProps extends React.PureComponent {
  state = {
    count: 0,
    hiddenCount: 0
  };
  keyName = 'comp12';
  number = 12;
  description = 'Pure class with props';

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
          <div><p>{`Parent - ${ this.props.parentProp }`}</p></div>
        </div>
        <HighlightChildren keyName={ this.keyName } />
      </div>
    );
  }
}

PureClassComponentWithProps.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default PureClassComponentWithProps;
