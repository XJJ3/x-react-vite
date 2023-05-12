import { CssBaseline, StyledEngineProvider, ThemeProvider, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { useUpdateEffect } from 'usehooks-ts';

import { routes } from './router';
import { RootState, useAppDispatch } from './store';
import { setThemeMode } from './store/appSlice';
import generateThemes from './themes';

import './App.css';

function App() {
  const app = useSelector((state: RootState) => state.app);
  const dispatch = useAppDispatch();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)'); // 系统偏好
  useUpdateEffect(() => {
    dispatch(setThemeMode(prefersDarkMode ? 'dark' : 'light'));
  }, [prefersDarkMode]);

  const themes = generateThemes(); // 生成主题
  console.log(themes[app.themeMode].palette);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes[app.themeMode]}>
        <CssBaseline />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
