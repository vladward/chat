import './Button.css';

import React, { FC } from 'react';

type ButtonPropsType = {
  alt?: string;
  text: string;
  icon?: string;
  doubleIcon?: string;
  onClick?: () => void;
  disabled?: boolean;
  height?: string | number;
  width?: string | number;
  backgroundColor?: string;
  borderRadius?: string;
  fontSize?: string | number;
  lineHeight?: string | number;
  type?: 'button' | 'submit' | 'reset';
  margin?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
  children?: JSX.Element;
};

export const Button: FC<ButtonPropsType> = ({
  text,
  type = 'button',
  height,
  width,
  onClick,
  disabled,
  backgroundColor = 'darkkhaki',
  fontSize,
  lineHeight,
  borderRadius = '4px',
  children,
  margin = '5px',
  maxHeight,
  minHeight,
}) => {
  return (
    <button
      style={{
        height: height || '30.8px',
        width: width || '200.4px',
        backgroundColor: backgroundColor || '#afafaf',
        fontSize: fontSize || '14px',
        lineHeight: lineHeight || '16px',
        margin: margin,
        maxHeight: maxHeight,
        minHeight: minHeight,
        borderRadius: borderRadius,
        cursor: 'pointer',
      }}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <span>{text}</span>
      {children}
    </button>
  );
};
