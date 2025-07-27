import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.demo.app',
  appName: 'capgoTestVueApp',
  webDir: 'dist',
  plugins: {
    extConfig: {},
    EdgeToEdge: {
      backgroundColor: '#ffffff'
    },
    // Add this configuration for better WebView handling
    InAppBrowser: {
      // Add any specific InAppBrowser configuration if needed
    }
  },
  // Add server configuration for development
  server: {
    androidScheme: 'https'
  }
};

export default config;
