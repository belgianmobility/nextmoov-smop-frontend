// @flow
import React from 'react';
import s from './style.module.scss';

type Props = {
  onChange?: Function,
  labelContent: string,
  value: string,
  id: string,
  placeholder?: string,
}

function TextInput(props: Props) {
  const {
    onChange,
    labelContent,
    value,
    id,
    placeholder,
  } = props;
  return (
    <label htmlFor={id} className={s.textinput__label}>
      {labelContent}
      <input
        id={id}
        value={value}
        onChange={onChange}
        className={s.textinput__input}
        placeholder={placeholder}
      />
    </label>
  );
}

TextInput.defaultProps = {
  onChange: () => {},
  placeholder: '',
};

export default TextInput;
