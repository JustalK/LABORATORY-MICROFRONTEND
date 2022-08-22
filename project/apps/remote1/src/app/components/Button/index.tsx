import useCounter from '../../store/useCounter';

export function Button() {
  const increase = useCounter((state) => state.increase);
  return <button onClick={increase}>Add One</button>;
}

export default Button;
