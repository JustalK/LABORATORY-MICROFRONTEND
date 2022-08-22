import useCounter from '../../store/useCounter';

export function Counter() {
  const count = useCounter((state) => state.count);

  return (
    <div>
      <span>Value counter: {count}</span>
    </div>
  );
}

export default Counter;
