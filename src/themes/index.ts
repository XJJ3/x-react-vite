import { createTheme, Theme, type ThemeOptions } from '@mui/material';

import componentStyleOverrides from './compStyleOverride';
import darkThemeOption from './darkThemeOption';
import lightThemeOption from './lightThemeOption';
import themePalette from './palette';
import themeTypography from './typography';

// 生成黑白两种主题
export default function generateThemes(customization?: AnyType): { [key: string]: Theme } {
  // 可以传入一些动态的属性
  const commonOption: AnyType = {
    customization
  };

  const dark_themesOptions: ThemeOptions = {
    palette: themePalette({ ...commonOption, ...darkThemeOption.palette }),
    typography: themeTypography({ ...commonOption, ...darkThemeOption }),
    components: componentStyleOverrides({ ...commonOption, ...darkThemeOption })
  };

  const light_themesOptions: ThemeOptions = {
    palette: themePalette({ ...commonOption, ...lightThemeOption.palette }),
    typography: themeTypography({ ...commonOption, ...lightThemeOption }),
    components: componentStyleOverrides({ ...commonOption, ...lightThemeOption })
  };

  const darkTheme = createTheme(dark_themesOptions);
  const lightTheme = createTheme(light_themesOptions);
  return { dark: darkTheme, light: lightTheme };
}
