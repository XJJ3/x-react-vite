import { Button, useTheme } from '@mui/material';

import { useAppDispatch } from '@/store';
import { setThemeMode } from '@/store/appSlice';
const ThemeSwitch = () => {
  const dispatch = useAppDispatch();

  const { palette } = useTheme();
  const { mode } = palette;

  const onChangeTheme = () => {
    dispatch(setThemeMode(mode === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Button onClick={onChangeTheme}>改变</Button>
      <span>{mode}</span>
    </>
  );
};

export default ThemeSwitch;
