import React from 'react';

const Button = () => {
  const [value, setValue] = React.useState(0);
  return <button onClick={() => setValue(value + 1)}>Itens {value}</button>;
};
export default Button;
