import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.demo.app',
  appName: 'capgoTestVueApp',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    cleartext: true,
    allowNavigation: [
      'https://sign-sandbox.farashenasa.ir/*',
      'https://capgo.app/*',
      'https://aasa-tester.capgo.app/*',
      'https://web.capgo.app/*',
      'https://google.com/*',
      'http://localhost:*',
      'http://127.0.0.1:*'
    ]
  },
  plugins: {
    extConfig: {},
    EdgeToEdge: {
      backgroundColor: '#ffffff'
    },
    // Add InAppBrowser configuration
    InAppBrowser: {
      // Configure allowed domains
      allowedDomains: [
        'sign-sandbox.farashenasa.ir',
        'capgo.app',
        'aasa-tester.capgo.app',
        'web.capgo.app',
        'google.com'
      ]
    }
  }
};

export default config;
