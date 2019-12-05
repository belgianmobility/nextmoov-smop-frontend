// @flow
import React from 'react';
import s from './style.module.scss';
import AutoComplete from '../AutoComplete';

type Props = {
  onResultClick?: Function,
  position?: Array<number>,
  lang?: string,
}

function Sidebar(props: Props) {
  const {
    onResultClick,
    position,
    lang,
  } = props;

  return (
    <div className={s.sidebar}>
      <AutoComplete
        onResultClick={onResultClick}
        position={position}
        lang={lang}
      />
    </div>
  );
}

Sidebar.defaultProps = {
  onResultClick: () => {},
  position: undefined,
  lang: 'en',
};

export default Sidebar;
