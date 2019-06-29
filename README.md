# React performance demo

## Introduction

Demo application to show different techniques to understand how React works with the render lifecycle (to the Virtual DOM) and how to improve react performance by reducing the calls to this lifecycle method.

[Demo](https://react-performance-demo.netlify.com)

![](reactperformancedemo.gif)

This project was created to understand better how react handles render lifecycle on different scenarios:

#### `Class components`

* React.Component
* React.PureComponent
* React.Component with an shouldComponentUpdate

#### `Functional components`

* Regular functional components
* Functional component with a state (hooks)
* Functional component with React.memo
* Functional component with useMemo (hook)

In all the scenarios the components are tested with and without props from a parent component

Also in this components and in the parent component there is an internal state with:

* `Shared counter:` Only for the parent, it's a counter that the parent shares with some of it children's. Thus causing the children to render on change.
* `Local counter:` A counter that is shown on that component. Thus rendering the component.
* `Hidden counter:` A counter that is incremented but never shown, so it shouldn't be needed to render the component because of it.

## Code snippet for the audited components (components without parent prop)

### `1. Class with State` 

This case will always be rendered it has no performance improvement. Will render on the parent render, and on any state change.

[Source file](src/components/isolatedChildrens/1.ClassComponentWithState.js)
```javascript
class ClassComponentWithState extends React.Component {
  state = {
    count: 0,
    hiddenCount: 0
  };

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    const { count } = this.state;

    return (
      <div className={ 'button-container'}>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ count } name={ 'count' }/>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCount' }/>
      </div>
    );
  }
}

```

### `2.Pure class with state` 

This case won't render on parent props change, unless it consumes the prop and that prop change, but will also render on any state change.
So it has an improvement on the performance given by the [Pure Component](https://reactjs.org/docs/react-api.html#reactpurecomponent), but yet can be improved more.
It's important to mention that relying on Pure component it's easy to code and to maintain.

[Source file](src/components/isolatedChildrens/2.PureClassComponentWithState.js)
```javascript
class PureClassComponentWithState extends React.PureComponent {
  state = {
    count: 0,
    hiddenCount: 0
  };

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    const { count } = this.state;

    return (
      <div className={ 'button-container'}>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ count } name={ 'count' }/>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCount' }/>
      </div>
    );
  }
}

```

### `3. Class with should update` 

This case has a better performance because it explicitly says on which changes should render, with the use of the [shouldComponentUpdate](https://reactjs.org/docs/react-component.html#shouldcomponentupdate). But is the one that requires more code and also requires maintenance since it won't render on new props or state variables, regardless if they change.

[Source file](src/components/isolatedChildrens/3.ClassComponentWithShouldUpdate.js)
```javascript
class ClassComponentWithShouldUpdate extends React.Component {
  state = {
    count: 0,
    hiddenCount: 0
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (nextState.count !== this.state.count);
  }

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    const { count } = this.state;

    return (
      <div className={ 'button-container'}>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ count } name={ 'count' }/>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCount' }/>
      </div>
    );
  }
}
```

### `4. Function without state` 

Simple functional component that has no performance improvement, will render on any parent render.

[Source file](src/components/isolatedChildrens/4.FunctionComponent.js)
```javascript
const FunctionComponent = () => {
  return (
    <div className={ 'children__content' }>Simple Functional Component</div>
  );
};
```

### `5. Memo function without state` 

Simple functional component that is wrapped on [React.memo](https://reactjs.org/docs/react-api.html#reactmemo), will render only received parent props change. This will be the equivalent to the PureComponent improvement. But will be rendering on any state change too (react hooks).

[Source file](src/components/isolatedChildrens/5.MemoFunctionComponent.js)
```javascript
const MemoFunctionComponent = () => {
  return (
    <div className={ 'children__content'}>Simple Memoized Functional Component</div>
  );
};

export default React.memo(MemoFunctionComponent);
```

## Code snippet for the audited components (components with parent prop)

### `11. Class with state and props` 

This case will always be rendered it has no performance improvement. Will render on the parent render, and on any state change.

[Source file](src/components/sharedDataChildrens/11.ClassComponentWithStateAndProps.js)
```javascript
class ClassComponentWithStateAndProps extends React.Component {
  state = {
    count: 0,
    hiddenCount: 0
  };
  keyName = 'comp11';

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    const { count } = this.state;

    return (
      <>
        <div className={ 'button-container'}>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ count } name={ 'count' }/>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCount' }/>
        </div>
        <p>{`Parent counter - ${ this.props.parentProp }`}</p>
      </>
    );
  }
}
```

### `12. Pure class with props and state` 

This case won't render on parent props change, unless it consumes the prop and that prop change, but will also render on any state change.
So it has an improvement on the performance given by the [Pure Component](https://reactjs.org/docs/react-api.html#reactpurecomponent), but yet can be improved more.
It's important to mention that relying on Pure component it's easy to code and to maintain.

[Source file](src/components/sharedDataChildrens/12.PureClassComponentWithProps.js)
```javascript
class PureClassComponentWithProps extends React.PureComponent {
  state = {
    count: 0,
    hiddenCount: 0
  };
  keyName = 'comp12';

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    const { count } = this.state;

    return (
      <>
        <div className={ 'button-container'}>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ count } name={ 'count' }/>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCount' }/>
        </div>
        <p>{`Parent counter - ${ this.props.parentProp }`}</p>
      </>
    );
  }
}
```

### `13. Class with props and shouldUpdate` 

This case has a better performance because it explicitly says on which changes should render, with the use of the [shouldComponentUpdate](https://reactjs.org/docs/react-component.html#shouldcomponentupdate). But is the one that requires more code and also requires maintenance since it won't render on new props or state variables, regardless if they change.

[Source file](src/components/sharedDataChildrens/13.ClassComponentWithPropsAndShouldUpdate.js)
```javascript
class ClassComponentWithPropsAndShouldUpdate extends React.Component {
  state = {
    count: 0,
    hiddenCounter: 0
  };
  keyName = 'comp13';

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextState.count !== this.state.count) return true;
    if (nextProps.parentProp !== this.props.parentProp) return true;
    return false
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <div className={ 'button-container'}>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ count } name={ 'count' }/>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCount' }/>
        </div>
        <p>{`Parent counter - ${ this.props.parentProp }`}</p>
      </>
    );
  }
}
```

### `14. Class with state props and children` 

This component has a children that consumes a property from his grandparent, meaning the parent of this component, but this component does not use that prop. Since it needs to pass down to a children. If we decide to ignore changes on that prop, we will be avoiding the children render to happen. So the options that we have if we want to avoid a render on this component we need to bypass this component with some other technique like reading directly from a context or a redux store. That way this component could ignore this prop.

[Source file](src/components/sharedDataChildrens/14.ClassComponentWithPropsAndShouldUpdateAndChildren.js)
```javascript
class ClassComponentWithPropsAndShouldUpdateAndChildren extends React.Component {
  state = {
    count: 0,
    hiddenCount: 0
  };
  keyName = 'comp14';

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.parentProp !== this.props.parentProp) return true;
    if (nextState.count !== this.state.count) return true;
    return false
  }


  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    const { count } = this.state;

    return (
      <>
        <div className={ 'button-container'}>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ count } name={ 'count' }/>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCount' }/>
        </div>
        <AnotherChildren grandParentProp={ this.props.parentProp } renderCountsDispatch={ this.props.renderCountsDispatch } />
      </>
    );
  }
}
```

### `15. Function with props` 

Simple functional component that has no performance improvement, will render on any parent render.

[Source file](src/components/sharedDataChildrens/15.FunctionComponentWithProps.js)
```javascript
const FunctionComponentWithProps = ({ parentProp }) => {
  return (
    <p>{`Parent counter - ${ parentProp }`}</p>
  );
};
```

### `16. Memo function with state and props` 

Simple functional component that is wrapped on [React.memo](https://reactjs.org/docs/react-api.html#reactmemo), will render only received parent props change. This will be the equivalent to the PureComponent improvement. But will be rendering on any state change too (react hooks).

[Source file](src/components/sharedDataChildrens/16.MemoFunctionComponentsWithProps.js)
```javascript
const MemoFunctionComponentsWithProps = ({ parentProp }) => {
  const [ count, setCounter ] = useState(0);
  const [ hiddenCount, setHiddenCounter ] = useState(0);

  return (
    <>
      <div className={ 'button-container'}>
        <CounterIncrementor onCounterIncrement={ () => setCounter( count + 1) } count={ count } name={ 'count' }/>
        <CounterIncrementor onCounterIncrement={ () => setHiddenCounter( hiddenCount + 1) } name={ 'hiddenCount' }/>
      </div>
      <p>{`Parent counter - ${ parentProp }`}</p>
    </>
  );
};

MemoFunctionComponentsWithProps.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default React.memo(MemoFunctionComponentsWithProps);

```

### `17. Memo function with props, state and hooks` 

Simple functional component that is wrapped on [React.memo](https://reactjs.org/docs/react-api.html#reactmemo), will render only received parent props change. This will be the equivalent to the PureComponent improvement. It's also using the hook useMemo to memoize some variables of the state and props, to avoid unnecessary render. But somehow the first time it doesn't memoize, after that it will use the memoize value.

[Source file](src/components/sharedDataChildrens/17.MemoFunctionComponentsWithPropsAndHooks.js)
```javascript
const MemoFunctionComponentsWithPropsAndHooks = ({ parentProp }) => {
  const [ count, setCounter ] = useState(0);
  const [ hiddenCount, setHiddenCounter ] = useState(0);

  const renderCounters = useMemo( () =>
    <>
      <div className={ 'button-container'}>
        <CounterIncrementor onCounterIncrement={ () => setCounter( count + 1) } count={ count } name={ 'count' }/>
        <CounterIncrementor onCounterIncrement={ () => setHiddenCounter( hiddenCount + 1) } name={ 'hiddenCount' }/>
      </div>
      <p>{`Parent counter - ${ parentProp }`}</p>
    </>,
    [ count, parentProp ]
  );

  return renderCounters;
};

MemoFunctionComponentsWithPropsAndHooks.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default React.memo(MemoFunctionComponentsWithPropsAndHooks);


```


## Help me
If you find some problem, or you want to increment this cases, please feel free to create a PR.
Also english is not my primary language, if you see some error there, please fix it.

Thanks


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
