import { useEffect, useState } from 'react';
import { SomeInterface, User } from '@libs/typings';

function App() {
  const [someData, setSomeData] = useState<SomeInterface>({
    someProperty: 'someValue',
  });

  const user: Partial<User> = {};

  useEffect(() => {
    const abortController = new AbortController();
    const go = async () => {
      try {
        const response = await fetch(`/api/some-route`, {
          signal: abortController.signal,
        });
        const data = await response.json();
        setSomeData(data);
      } catch (error) {
      } 
    };

    go();

    return () => {
      abortController.abort();
    };
  }, []);

  return <div className="App">{`${someData.someProperty}`}</div>;
}

export default App;