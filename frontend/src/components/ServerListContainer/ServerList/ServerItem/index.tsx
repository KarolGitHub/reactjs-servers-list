import React from 'react';
import dropdownIcon from '../../../../assets/dropdown.svg';
import crossIcon from '../../../../assets/cross.svg';

type Props = {
  name: string;
  status: 'ONLINE' | 'OFFLINE' | 'REBOOTING';
};

const ServerItem: React.FC<Props> = ({ name, status }) => {
  let statusText;
  switch (status) {
    case 'ONLINE':
      statusText = (
        <div className='server-list__item__status'>
          <div className='server-list__item__status__dot' />
          {status}
        </div>
      );
      break;
    case 'OFFLINE':
      statusText = (
        <div className='server-list__item__status'>
          <img src={crossIcon} alt='offline' width={12} height={12} />
          {status}
        </div>
      );
      break;
    case 'REBOOTING':
      statusText = `${status}...`;
      break;
    default:
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
          <img src={dropdownIcon} alt='dropdown' />
        </li>
      </div>
    </ul>
  );
};

export default ServerItem;
