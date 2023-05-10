import react from '@vitejs/plugin-react';
import { PluginOption } from 'vite';

export function createPlugins(isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    })
  ];
  return vitePlugins;
}
