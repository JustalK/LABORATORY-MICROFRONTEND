import 'libs/ui/src/lib/styles/global.scss';
import Button from './components/Button';
import Counter from './components/Counter';

export function App() {
  return (
    <div>
      <Button title="Adding one to counter" />
      <Counter />
    </div>
  );
}

export default App;
