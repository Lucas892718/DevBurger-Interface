import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babelPluginStyledComponents from 'babel-plugin-styled-components';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [babelPluginStyledComponents]
      }
    })
  ]
});
