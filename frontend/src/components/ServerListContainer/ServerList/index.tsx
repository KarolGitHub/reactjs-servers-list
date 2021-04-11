import React from 'react';
import ServerItem from './ServerItem';

type Props = {
  listData: Array<Server>;
};
const ServerList: React.FC<Props> = ({ listData }) => {
  return (
    <div>
      {listData.map(({ id, name, status }: Server) => (
        <ServerItem name={name} status={status} key={id} />
      ))}
    </div>
  );
};

export default ServerList;
