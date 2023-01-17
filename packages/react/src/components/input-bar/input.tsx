import React, {
  ChangeEvent,
  forwardRef,
  KeyboardEvent,
  useEffect,
  useState,
} from 'react';
import './_input.scss';

interface InputBarProps {
  inputLabel?: string;
  handleInput?: (value: string) => void;
  flush?: boolean;
}

const InputBar = forwardRef<HTMLInputElement, InputBarProps>(
  ({ inputLabel, handleInput, flush = false }: InputBarProps, ref) => {
    const [inputValue, updateInputValue] = useState<string>('');

    useEffect(() => {
      if (inputValue?.trim()) {
        handleInput?.(inputValue);
      }
    }, [inputValue, handleInput]);

    useEffect(() => {
      if (flush) {
        updateInputValue('');
      }
    }, [flush]);
    return (
      <div className="app-input-bar">
        <label htmlFor="inputBar">{inputLabel}</label>
        <input
          id="inputBar"
          onChange={(event: ChangeEvent) => {
            const target = event.target as HTMLInputElement;
            updateInputValue(target?.value);
          }}
          value={inputValue}
          ref={ref}
        />
      </div>
    );
  }
);

InputBar.displayName = 'InputBar';

export default InputBar;
