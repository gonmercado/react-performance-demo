import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from './shared/CounterIncrementor';
import { INCREMENT_RENDER_COUNT, RESET_COUNT } from '../App';
import { childrenComponentsMeta } from '../shared/componentsMetaData';
import ComponentTitlePanel from './shared/componentTitlePanel';
import HighlightChildren from './shared/highlightChildren';

class ParentWithState extends React.PureComponent {
  state = {
    sharedCount: 0,
    localCount: 0,
    hiddenCount: 0,
    childrenComponents: childrenComponentsMeta,
    displayAllComponents: false,
    displayAllComponentsWithProps: false
  };

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  handleDisplayCompClick = keyName => {
    this.props.renderCountsDispatch({ type: RESET_COUNT });
    this.setState(oldState => {
      const childrenComponents = oldState.childrenComponents.map(el => ({ ...el }));
      const selectedChildren = childrenComponents.find(el => el.keyName === keyName);
      selectedChildren.show = !selectedChildren.show;
      return ({ childrenComponents });
    })
  };

  handleDisplayAllComponents = () => {
    this.setState(oldState => {
      const childrenComponents = oldState.childrenComponents.map(el => ({ ...el }));
      childrenComponents.forEach(el => {
        if (!el.receiveProps) {
          el.show = !oldState.displayAllComponents;
        }
      });
      return ({
        displayAllComponents: !oldState.displayAllComponents,
        childrenComponents
      })
    });
  };

  handleDisplayAllComponentsWithProps = () => {
    this.setState(oldState => {
      const childrenComponents = oldState.childrenComponents.map(el => ({ ...el }));
      childrenComponents.forEach(el => {
        if (el.receiveProps) {
          el.show = !oldState.displayAllComponentsWithProps;
        }
      });
      return ({
        displayAllComponentsWithProps: !oldState.displayAllComponentsWithProps,
        childrenComponents
      })
    });
  };

  render() {
    console.log('Render - Parent with state');
    const { renderCountsDispatch } = this.props;
    renderCountsDispatch({ type: INCREMENT_RENDER_COUNT, keyName: 'Parent', number: 0});
    const { sharedCount, localCount } = this.state;

    return (
      <div className={ 'parent' }>
        <header>
          <h1>Parent component</h1>
          <div className={ 'button-container'}>
            <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ sharedCount } name={ 'sharedCount' }/>
            <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ localCount } name={ 'localCount' }/>
            <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCount' }/>
          </div>
        </header>
        <div className={ 'parent-container'}>
          <div className={ 'children-group' }>
            <div className={ 'children-title' }>
              <input type="checkbox" checked={ this.state.displayAllComponents } onChange={ this.handleDisplayAllComponents } />
              <h2>Childrens without props</h2>
            </div>
            {
              this.state.childrenComponents.filter(el => !el.receiveProps).map(element => (
                <div className={ 'children-container'} key={ element.keyName }>
                  <input type="checkbox" checked={ element.show } onChange={ () => this.handleDisplayCompClick(element.keyName) }/> { !element.show && <label>{ element.description }</label> }
                  {
                    element.show &&
                    <div className={ 'children' }>
                      <ComponentTitlePanel title={ element.description } number={ element.number } source={ element.source }/>
                      <element.component renderCountsDispatch={ renderCountsDispatch } />
                      <HighlightChildren keyName={ element.keyName } />
                    </div>
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
              this.state.childrenComponents.filter(el => el.receiveProps).map(element => (
                <div className={ 'children-container'} key={ element.keyName }>
                  <input type="checkbox" checked={element.show} onChange={() => this.handleDisplayCompClick(element.keyName)} />{ !element.show && <label>{ element.description }</label> }
                  { element.show &&
                    <div className={ 'children' }>
                      <ComponentTitlePanel title={ element.description } number={ element.number } source={ element.source }/>
                      <element.component parentProp={ sharedCount } renderCountsDispatch={ renderCountsDispatch } />
                      <HighlightChildren keyName={ element.keyName } />
                    </div>
                  }
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
