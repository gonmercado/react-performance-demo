# React performance demo

## Introduction

Demo application to show different techniques to understand how React works with the render lifecycle (to the Virtual DOM) and how to improve react performance by reducing the calls to this lifecycle method.

[Demo](https://react-performance-demo.netlify.com)

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

* `Shared counter:` Only for the parent, its a counter that the parent shares with some of it children's. Thus causing the children to render on change.
* `Local counter:` A counter that is shown on that component. Thus rendering the component.
* `Hidden counter:` A counter that is incremented but never shown, so it should't be needed to render the component because of it.

## Code snippet for the audited components

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
Its important to mention that relaying on Pure component it's easy to code and to mantain.

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

This case has a better performance because it explicitly says on which changes should render, with the use of the [shouldComponentUpdate](https://reactjs.org/docs/react-component.html#shouldcomponentupdate). But is the one that requires more code and also requires maintanence since it won't render on new props or state variables, regardless if they change.

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
const FunctionComponent = ({ renderCountsDispatch }) => {
  return (
    <div className={ 'children__content' }>Simple Functional Component</div>
  );
};
```

### `5. Memo function without state` 

Simple functional component that is wrapped on [React.memo](https://reactjs.org/docs/react-api.html#reactmemo), will render only received parent props change. This will be the equivalent to the PureComponent improvement. But will be rendering on any state change too (react hooks).

[Source file](src/components/isolatedChildrens/4.FunctionComponent.js)
```javascript
const MemoFunctionComponent = ({ renderCountsDispatch }) => {
  return (
    <div className={ 'children__content'}>Simple Memoized Functional Component</div>
  );
};

export default React.memo(MemoFunctionComponent);
```

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
