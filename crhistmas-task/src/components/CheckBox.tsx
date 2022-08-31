import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

type CheckBoxProps = {
  value?: boolean;
  checked?: boolean;
  onChange?: () => void;
  name?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
};

const Input = styled.input.attrs({ type: 'checkbox' })`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label`
  position: relative;
  display: flex;
  /* display: inline-block; */

  /* margin: 0.6em 1em; */
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                              supported by Chrome, Edge, Opera and Firefox */
`;

const rotate = keyframes`
  from {
      opacity: 0;
      transform: rotate(0deg);
    }
    to {
      opacity: 1;
      transform: rotate(45deg);
    }
`;

const Indicator = styled.div`
  width: 1.2em;
  height: 1.2em;
  background: #e6e6e6;
  position: relative;
  /* top: 0em; */
  /* left: -1.6em; */
  border: 1px solid #757575;
  border-radius: 0.2em;

  ${Input}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  ${Label}:hover & {
    background: #ccc;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;
    width: 35%;
    height: 70%;
    border: solid #263238;
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &::disabled {
    cursor: not-allowed;
  }
`;

export const Checkbox: FC<CheckBoxProps> = ({
  value,
  checked,
  onChange,
  name,
  id,
  label,
  disabled,
}) => {
  return (
    <Label htmlFor={id}>
      {label}

      <Input
        id={id}
        name={name}
        value={String(value)}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Indicator />
    </Label>
  );
};
