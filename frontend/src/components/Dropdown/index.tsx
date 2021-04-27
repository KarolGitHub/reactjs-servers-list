import React from 'react';

type Props = {
  changed: (event: { target: any }) => void;
  elementConfig: any;
};

/* {
  value: 'ONLINE' | 'OFFLINE' | 'REBOOTING';
  displayValue: string;
  disabled: boolean;
}; */
const Dropdown: React.FC<Props> = ({ changed, elementConfig }) => {
  /* let dropdownElementClasses = 'server-list__item__dropdown__element';
  if (disabled) {
    dropdownElementClasses = `${dropdownElementClasses} 
    ${dropdownElementClasses}--disabled`;
  } */
  let dropdownElement = (
    <select
      className='server-list__item__dropdown__element'
      onChange={(event) => changed(event)}
    >
      {elementConfig.keys((config: any) => (
        <option
          key={config.value}
          value={config.value}
          disabled={elementConfig.disabled}
        >
          {config.displayValue}
        </option>
      ))}
    </select>
  );

  return <div className='server-list__item__dropdown'>{dropdownElement}</div>;
};

export default Dropdown;
