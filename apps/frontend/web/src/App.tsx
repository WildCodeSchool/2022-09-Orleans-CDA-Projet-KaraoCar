import { useEffect, useState } from 'react';
import { SomeInterface, User } from '@libs/typings';
import Vehicle from './components/vehicle/Vehicle';

function App() {
  const [someData, setSomeData] = useState<SomeInterface>({
    someProperty: 'someValue',
  });

  const user: Partial<User> = {};

  useEffect(() => {
    const abortController = new AbortController();
    const go = async () => {
      const response = await fetch(`/api/some-route`, {
        signal: abortController.signal,
      });
      const data = await response.json();
      setSomeData(data);
    };

    go();

    return () => {
      abortController.abort();
    };
  }, []);

  return <Vehicle/>;
}

export default App;
