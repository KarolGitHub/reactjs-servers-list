import React, { useState, useEffect, useRef } from 'react';

const defaultValue: any = {};

const ServersContext = React.createContext(defaultValue);

type Props = {
  children: React.ReactNode;
};

const ServersProvider: React.FC<Props> = ({ children }: Props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const isMountedRef = useRef(true);

  useEffect(() => {
    if (isMountedRef.current) {
      (async () => {
        try {
          const res = await fetch('/servers');
          const resJson = await res.json();
          setData(resJson);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <ServersContext.Provider value={{ loading, data, error }}>
      {children}
    </ServersContext.Provider>
  );
};

function useServers() {
  const context = React.useContext(ServersContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { ServersProvider, useServers };
