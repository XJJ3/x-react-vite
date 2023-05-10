import merge from 'deepmerge';
import { ConfigEnv, UserConfig } from 'vite';

import { createPlugins } from './plugins';
import { Configure } from './types';
import { pathResolve } from './utils';

export const createConfig = (params: ConfigEnv, configure?: Configure): UserConfig => {
  const isBuild = params.command === 'build';

  return merge<UserConfig>(
    {
      plugins: createPlugins(isBuild),
      resolve: {
        alias: {
          '@': pathResolve('src')
        }
      },
      css: {
        modules: {
          localsConvention: 'camelCaseOnly'
        }
      }
    },
    typeof configure === 'function' ? configure(params, isBuild) : {},
    {
      arrayMerge: (_d, s) => Array.from(new Set([..._d, ...s]))
    }
  );
};
