import './Input.css';

import { useField } from 'formik';
import React, { ChangeEvent } from 'react';

type AppInputPropsType = {
  name: string;
  placeholder?: string;
  label?: string;
  type?: string;
  disabled?: boolean;
  width?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<AppInputPropsType> = ({
  name,
  type = 'text',
  label,
  placeholder,
  disabled = false,
}) => {
  const [field, meta] = useField(name);
  const hasError = Boolean(meta.error && meta.touched);
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div
      className={'appInput__wrapper ' + (hasError && '--error')}
      style={type === 'checkbox' ? { borderBottom: 'none' } : {}}
    >
      {label && (
        <p onClick={() => inputRef?.current?.focus()} className='appInput__label'>
          {label}
        </p>
      )}
      <input
        ref={inputRef}
        value={field.value}
        type={type}
        onChange={field.onChange}
        className='appInput__field'
        placeholder={placeholder}
        name={name}
        disabled={disabled}
      />
      {hasError && <p className='appInput__text--error'>{meta.error}</p>}
    </div>
  );
};
