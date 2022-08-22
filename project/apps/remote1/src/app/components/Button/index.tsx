import useCounter from '../../store/useCounter';

export function Button({ title }: any) {
  const increase = useCounter((state) => state.increase);
  return <button onClick={increase}>{title}</button>;
}

export default Button;
