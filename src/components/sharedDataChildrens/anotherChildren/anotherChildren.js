import React from 'react';
import PropTypes from 'prop-types';
import { callDispatchOnRender } from '../../../shared/auditRenderHelper';
import ComponentTitlePanel from '../../shared/componentTitlePanel';

class AnotherChildren extends React.Component {
  keyName = 'comp21';
  number = 21;
  description = 'Class with props';

  render() {
    callDispatchOnRender(this.props.renderCountsDispatch, this.keyName);
    return (
      <div>
        <ComponentTitlePanel title={ this.description } number={ this.number }/>
        <div><p>{`Grand Parent - ${ this.props.grandParentProp }`}</p></div>
      </div>
    );
  }
}

AnotherChildren.propTypes = {
  grandParentProp: PropTypes.number.isRequired
}

export default AnotherChildren;
