import React from 'react';

type SelectorOptionProps = {
  label: string;
  value: string;
} & React.OptionHTMLAttributes<HTMLOptionElement>;

const SelectorOption = ({ label, value, ...rest }: SelectorOptionProps) => {
  return (
    <option value={value} {...rest}>
      {label}
    </option>
  );
};

export default SelectorOption;
