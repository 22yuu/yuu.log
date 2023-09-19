'use client';

import { useEffect, useState } from 'react';
import MoonIcon from './ui/icons/MoonIcon';
import SunIcon from './ui/icons/SunIcon';

const ToggleDarkModeBtn = () => {
  const [toggle, setToggle] = useState(false); // default false -> light mode
  console.log('??');

  const onHandleToggle = () => {
    console.log(toggle);
    setToggle(!toggle);
  };

  useEffect(() => {
    console.log('Toggle Dark Mode Button');
  }, []);

  return (
    <button onClick={onHandleToggle}>
      {!toggle ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ToggleDarkModeBtn;
