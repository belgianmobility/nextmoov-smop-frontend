// @flow
import React, { useState, useEffect } from 'react';
import s from './style.module.scss';

type Props = {
  onChange?: Function,
  labelContent: string,
  id: string,
  placeholder?: string,
  inputValue?: string,
}

function TextInput(props: Props) {
  const {
    onChange,
    labelContent,
    placeholder,
    inputValue,
    id,
  } = props;

  const [value, setValue] = useState('');


  useEffect(() => {
    if (inputValue !== '') {
      setValue(inputValue);
    }
  }, [inputValue]);


  function handleChange(e) {
    setValue(e.target.value);
    onChange(e);
  }

  return (
    <label htmlFor={id} className={s.textinput__label}>
      {labelContent}
      <input
        id={id}
        value={value}
        onChange={handleChange}
        className={s.textinput__input}
        placeholder={placeholder}
        type="text"
        autoComplete="off"
      />
    </label>
  );
}

TextInput.defaultProps = {
  onChange: () => {},
  placeholder: '',
  inputValue: '',
};

export default TextInput;
