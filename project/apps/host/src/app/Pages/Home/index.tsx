import * as React from 'react';
const Remote1 = React.lazy(() => import('remote1/Module'));
const Counter = React.lazy(() => import('remote1/Counter'));

const Remote2 = React.lazy(() => import('remote2/Module'));

const Home = () => {
  return (
    <div>
      <Remote1 />
      <Counter />
      <Remote2 />
    </div>
  );
};

export default Home;
