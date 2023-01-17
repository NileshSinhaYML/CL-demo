import React, { forwardRef, useRef, MouseEvent, ReactElement } from 'react';
import './_button.scss';

interface ButtonProps {
  btnText?: string;
  isLink?: boolean;
  customClassName?: string;
  handleClick?: (event: MouseEvent) => void;
  children?: ReactElement;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      btnText = '',
      isLink = false,
      customClassName = '',
      handleClick,
      children = <></>,
      ...props
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        className={`app-button ${
          isLink ? 'app-button-link' : ''
        } ${customClassName}`}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {btnText}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
