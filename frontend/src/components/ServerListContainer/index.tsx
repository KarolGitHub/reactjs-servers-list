import React, { useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import ServerList from './ServerList';

const ServerListContainer: React.FC = () => {
  const isMountedRef = useRef(true);

  const { data: servers, loading, error } = useFetch(
    '/servers',
    isMountedRef,
    []
  );

  return (
    <div className='server-list__container'>
      {loading ? (
        <h1>loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className='server-list'>
          <h3>Servers</h3>
          <p>Number of elements: {servers.length}</p>
          <div className='server-list__header'>
            <div>NAME</div>
            <div>STATUS</div>
          </div>
          <ServerList listData={servers} />
        </div>
      )}
    </div>
  );
};

export default ServerListContainer;
