// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Palette } from '@mui/material/styles';
declare module '@mui/material/styles' {
  export interface Palette {
    cardBg: Palette['primary'];
  }

  export interface PaletteOptions {
    cardBg: PaletteOptions['primary'];
  }
}
