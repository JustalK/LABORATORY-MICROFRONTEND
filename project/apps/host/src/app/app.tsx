import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import 'libs/ui/src/lib/styles/global.scss';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
