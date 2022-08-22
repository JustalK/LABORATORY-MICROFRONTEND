import * as React from 'react';
const Remote1 = React.lazy(() => import('remote1/Module'));
const Counter = React.lazy(() => import('remote1/Counter'));
const Button = React.lazy(() => import('remote1/Button'));

const Remote2 = React.lazy(() => import('remote2/Module'));

const Home = () => {
  return (
    <div>
      <Counter />
      <Remote2 />
      <Button title="Adding one to counter" />
    </div>
  );
};

export default Home;
