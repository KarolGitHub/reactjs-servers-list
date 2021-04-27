import React from 'react';
import dropdownIcon from '../../../../assets/dropdown.svg';
import crossIcon from '../../../../assets/cross.svg';
import Dropdown from '../../../Dropdown';

type Props = {
  name: string;
  status: 'ONLINE' | 'OFFLINE' | 'REBOOTING';
  statusChanged: (event: { target: HTMLInputElement }) => void;
};

const ServerItem: React.FC<Props> = ({ name, status, statusChanged }) => {
  let statusText, dropdownElementConfig;
  switch (status) {
    case 'ONLINE':
      statusText = (
        <div className='server-list__item__status'>
          <div className='server-list__item__status__dot' />
          {status}
        </div>
      );
      dropdownElementConfig = [
        { value: status, displayValue: 'Turn off', disabled: false },
        { value: status, displayValue: 'Reboot', disabled: false },
      ];
      break;
    case 'OFFLINE':
      statusText = (
        <div className='server-list__item__status'>
          <img src={crossIcon} alt='offline' width={12} height={12} />
          {status}
        </div>
      );
      dropdownElementConfig = [
        { value: status, displayValue: 'Turn on', disabled: false },
        { value: status, displayValue: 'Reboot', disabled: true },
      ];
      break;
    case 'REBOOTING':
      statusText = `${status}...`;
      dropdownElementConfig = [
        { value: status, displayValue: 'Turn off', disabled: false },
        { value: status, displayValue: 'Reboot', disabled: true },
      ];
      break;
    default:
      statusText = `${status}...`;
      dropdownElementConfig = [
        { value: status, displayValue: 'Turn off', disabled: false },
        { value: status, displayValue: 'Reboot', disabled: true },
      ];
  }

  return (
    <ul className='server-list__item'>
      <li>{name}</li>
      <div>
        <li
          className={`server-list__item__status--${status.toLocaleLowerCase()}`}
        >
          {statusText}
        </li>
        <li>
          <Dropdown
            elementConfig={dropdownElementConfig}
            changed={(event) => statusChanged(event)}
          >
            <img src={dropdownIcon} alt='dropdown' />
          </Dropdown>
        </li>
      </div>
    </ul>
  );
};

export default ServerItem;
