import React, { useContext } from 'react';
import classNames from 'classnames';
import { renderContext } from '../../App';

const HighlightChildren = ({ keyName }) => {
  const RenderContext = useContext(renderContext);

  return <div className={ classNames('highlight-children', { 'highlight-children_active' : RenderContext.recentRender.includes(keyName) })} />
};

export default HighlightChildren;
