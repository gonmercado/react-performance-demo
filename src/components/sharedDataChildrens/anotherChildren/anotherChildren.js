import React from 'react';
import PropTypes from 'prop-types';

class AnotherChildren extends React.Component {
  render() {
    console.log('21 - Render - Grand Children component');

    return (
      <div>
        <h3>21 - Grand Children component</h3>
        <div><p>{`Grand Parent Counter - ${ this.props.grandParentProp }`}</p></div>
      </div>
    );
  }
}

AnotherChildren.propTypes = {
  grandParentProp: PropTypes.number.isRequired
}

export default AnotherChildren;
