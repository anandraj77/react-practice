
import Button from '@mui/material/Button';
import { useState } from 'react';

export const MaterialUI = () => {

  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <Button variant="outlined" color="secondary" onClick={() => setCount(count + 1)}>Click Me!</Button>
    </>


  )
}