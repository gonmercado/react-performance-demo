import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from './shared/CounterIncrementor';
import { INCREMENT_RENDER_COUNT, RESET_COUNT } from '../App';
import { displayComponentMeta, displayComponentWithPropsMeta } from '../shared/componentsMetaData';

class ParentWithState extends React.PureComponent {
  state = {
    sharedCount: 0,
    localCount: 0,
    hiddenCount: 0,
    displayComponent: displayComponentMeta.map(el => ({ ...el, show: false })),
    displayComponentWithProps: displayComponentWithPropsMeta.map(el => ({ ...el, show: false })),
    displayAllComponents: false,
    displayAllComponentsWithState: false
  };

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  handleDisplayCompClick = pos => {
    this.props.renderCountsDispatch({ type: RESET_COUNT });
    this.setState(oldState => {
      const displayComponent = oldState.displayComponent.map(el => ({ ...el }));
      displayComponent[pos].show = !displayComponent[pos].show;
      return ({ displayComponent });
    })
  };

  handleDisplayCompWithPropsClick = pos => {
    this.setState(oldState => {
      const displayComponentWithProps = oldState.displayComponentWithProps.map(el => ({ ...el }));
      displayComponentWithProps[pos].show = !displayComponentWithProps[pos].show;
      return ({ displayComponentWithProps });
    })
  };

  handleDisplayAllComponents = () => {
    this.setState(oldState => ({
      displayAllComponents: !oldState.displayAllComponents,
      displayComponent: oldState.displayComponent.map(el => ({ ...el, show: !oldState.displayAllComponents }))
    }));
  };

  handleDisplayAllComponentsWithProps = () => {
    this.setState(oldState => ({
      displayAllComponentsWithState: !oldState.displayAllComponentsWithState,
      displayComponentWithProps: oldState.displayComponentWithProps.map(el => ({ ...el, show: !oldState.displayAllComponentsWithState }))
    }));
  };

  render() {
    console.log('Render - Parent with state');
    const { renderCountsDispatch } = this.props;
    renderCountsDispatch({ type: INCREMENT_RENDER_COUNT, keyName: 'Parent', number: 0});
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
            <div className={ 'children-title' }>
              <input type="checkbox" checked={ this.state.displayAllComponents } onChange={ this.handleDisplayAllComponents } />
              <h2>Childrens without props</h2>
            </div>
            {
              this.state.displayComponent.map((element, index) => (
                <div className={ 'children-container'} key={ index }>
                  <input type="checkbox" checked={ element.show } onChange={ () => this.handleDisplayCompClick(index) }/> { !element.show && <label>{ element.description }</label> }
                  {
                    element.show && <element.component renderCountsDispatch={renderCountsDispatch} />
                  }
                </div>
              ))
            }
          </div>
          <div className={ 'children-group' }>
            <div className={ 'children-title' }>
              <input type="checkbox" checked={ this.state.displayAllComponentsWithState } onChange={ this.handleDisplayAllComponentsWithProps } />
              <h2>Childrens with parents props</h2>
            </div>
            {
              this.state.displayComponentWithProps.map((element, index) => (
                <div className={ 'children-container'} key={ index }>
                  <input type="checkbox" checked={element.show} onChange={() => this.handleDisplayCompWithPropsClick(index)} />{ !element.show && <label>{ element.description }</label> }
                  {element.show && <element.component parentProp={ sharedCount } renderCountsDispatch={ renderCountsDispatch } />}
                </div>
              ))
            }
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
