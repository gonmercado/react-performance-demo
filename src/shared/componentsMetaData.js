import ClassComponentWithState from '../components/isolatedChildrens/1.ClassComponentWithState';
import PureClassComponentWithState from '../components/isolatedChildrens/2.PureClassComponentWithState';
import ClassComponentWithShouldUpdate from '../components/isolatedChildrens/3.ClassComponentWithShouldUpdate';
import FunctionComponent from '../components/isolatedChildrens/4.FunctionComponent';
import MemoFunctionComponent from '../components/isolatedChildrens/5.MemoFunctionComponent';
import ClassComponentWithStateAndProps from '../components/sharedDataChildrens/11.ClassComponentWithStateAndProps';
import PureClassComponentWithProps from '../components/sharedDataChildrens/12.PureClassComponentWithProps';
import ClassComponentWithPropsAndShouldUpdate
  from '../components/sharedDataChildrens/13.ClassComponentWithPropsAndShouldUpdate';
import ClassComponentWithPropsAndShouldUpdateAndChildren
  from '../components/sharedDataChildrens/14.ClassComponentWithPropsAndShouldUpdateAndChildren';
import FunctionComponentWithProps from '../components/sharedDataChildrens/15.FunctionComponentWithProps';
import MemoFunctionComponentsWithProps from '../components/sharedDataChildrens/16.MemoFunctionComponentsWithProps';
import MemoFunctionComponentsWithPropsAndHooks
  from '../components/sharedDataChildrens/17.MemoFunctionComponentsWithPropsAndHooks';

export const childrenComponentsMeta = [
  { component: ClassComponentWithState, description: 'Class with state', keyName: 'comp1', show: true, number: 1 },
  { component: PureClassComponentWithState, description: 'Pure class with state', keyName: 'comp2', show: false, number: 2 },
  { component: ClassComponentWithShouldUpdate, description: 'Class with should update', keyName: 'comp3', show: false, number: 3 },
  { component: FunctionComponent, description: 'Function without state', keyName: 'comp4', show: false, number: 4 },
  { component: MemoFunctionComponent, description: 'Memo function without state', keyName: 'comp5', show: false, number: 5 },
  { component: ClassComponentWithStateAndProps, description: 'Class with state and props', keyName: 'comp11', receiveProps: true, show: true, number: 11 },
  { component: PureClassComponentWithProps, description: 'Pure class with props', keyName: 'comp12', receiveProps: true, show: false, number: 12 },
  { component: ClassComponentWithPropsAndShouldUpdate, description: 'Class with props and shouldUpdate', keyName: 'comp13', receiveProps: true, show: false, number: 13 },
  { component: ClassComponentWithPropsAndShouldUpdateAndChildren, description: 'Class with state props and children', keyName: 'comp14', receiveProps: true, show: false, number: 14 },
  { component: FunctionComponentWithProps, description: 'Function with props', keyName: 'comp15', receiveProps: true, show: false, number: 15 },
  { component: MemoFunctionComponentsWithProps, description: 'Memo function with props and state', keyName: 'comp16', receiveProps: true, show: false, number: 16 },
  { component: MemoFunctionComponentsWithPropsAndHooks, description: 'Memo function with props, state and hooks', keyName: 'comp17', receiveProps: true, show: false, number: 17 }
];
