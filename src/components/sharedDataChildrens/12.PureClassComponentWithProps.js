import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';
import ComponentTitlePanel from '../shared/componentTitlePanel';
import { childrenComponentsMeta } from '../../shared/componentsMetaData';

class PureClassComponentWithProps extends React.PureComponent {
  state = {
    count: 0,
    hiddenCount: 0
  };
  keyName = 'comp12';
  childrenMeta = childrenComponentsMeta.find(el => el.keyName === this.keyName);

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
        <div><p>{`Parent - ${ this.props.parentProp }`}</p></div>
        <HighlightChildren keyName={ this.keyName } />
      </div>
    );
  }
}

PureClassComponentWithProps.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default PureClassComponentWithProps;
