import React from 'react';
import Select, { Props, StylesConfig } from 'react-select';
import chroma from 'chroma-js';

const customSelectStyles: StylesConfig<SelectOptionInterface> = {
  control: (styles) => ({
    ...styles,
    borderRadius: '30px',
    background:
      'radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%)',
    cursor: 'pointer',
  }),
  container: (styles) => ({
    ...styles,
    fontFamily: 'Nunito',
    // fontSize: '13px',
    // letterSpacing: '0.3px',
  }),
  option: (styles, { isSelected, isFocused }) => ({
    ...styles,
    cursor: 'pointer',
    transition: 'background 0.3s ease-in-out',
    backgroundColor: isSelected
      ? chroma('#111b1b').brighten(0.2).css()
      : undefined,
    ':hover': {
      ...styles[':hover'],
      backgroundColor: isSelected
        ? chroma('#111b1b').darken(0.1).css()
        : '#234141',
    },
  }),
  menu: (styles) => ({
    ...styles,
    background:
      'radial-gradient(118.88% 606.86% at 0% 0%, #2a5e51 0%, #164d36 100%)',
  }),
  singleValue: (styles) => ({
    ...styles,
    color: 'inherit',
  }),
  placeholder: (styles) => ({
    ...styles,
    color: chroma(styles.color as string)
      .brighten(1)
      .css(),
  }),
};

export const CustomSelect = (props: Props<SelectOptionInterface>) => (
  <Select {...props} isSearchable={false} styles={customSelectStyles} />
);
